/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under both the MIT license found in the
 * LICENSE-MIT file in the root directory of this source tree and the Apache
 * License, Version 2.0 found in the LICENSE-APACHE file in the root directory
 * of this source tree.
 */

use std::cell::RefCell;
use std::sync::Arc;

use buck2_interpreter::paths::package::PackageFilePath;
use buck2_node::cfg_constructor::CfgConstructorImpl;
use buck2_node::super_package::SuperPackage;
use buck2_node::visibility::VisibilitySpecification;
use buck2_node::visibility::WithinViewSpecification;
use dupe::Dupe;
use starlark::values::OwnedFrozenValue;
use starlark::values::OwnedFrozenValueTyped;
use starlark_map::small_map::SmallMap;

use crate::interpreter::package_file_extra::FrozenPackageFileExtra;
use crate::interpreter::package_file_extra::MAKE_CFG_CONSTRUCTOR;
use crate::super_package::package_value::OwnedFrozenStarlarkPackageValue;
use crate::super_package::package_value::SuperPackageValuesImpl;

#[derive(Debug, Default)]
pub(crate) struct PackageFileVisibilityFields {
    pub(crate) visibility: VisibilitySpecification,
    pub(crate) within_view: WithinViewSpecification,
    pub(crate) inherit: bool,
}

#[derive(Debug)]
pub struct PackageFileEvalCtx {
    pub path: PackageFilePath,
    /// Parent file context.
    /// When evaluating root `PACKAGE` file, parent is still defined.
    pub(crate) parent: SuperPackage,
    pub(crate) visibility: RefCell<Option<PackageFileVisibilityFields>>,
}

impl PackageFileEvalCtx {
    fn cfg_constructor(
        extra: Option<&OwnedFrozenValueTyped<FrozenPackageFileExtra>>,
    ) -> anyhow::Result<Option<Arc<dyn CfgConstructorImpl>>> {
        let Some(extra) = extra else {
            return Ok(None);
        };
        let Some(cfg_constructor) = extra.as_ref().cfg_constructor else {
            return Ok(None);
        };
        let cfg_constructor = unsafe {
            // SAFETY: field belongs to the same heap.
            OwnedFrozenValue::new(extra.owner().dupe(), cfg_constructor)
        };
        let make_cfg_constructor = MAKE_CFG_CONSTRUCTOR.get()?;
        Ok(Some(make_cfg_constructor(cfg_constructor)?))
    }

    pub(crate) fn build_super_package(
        self,
        extra: Option<OwnedFrozenValueTyped<FrozenPackageFileExtra>>,
    ) -> anyhow::Result<SuperPackage> {
        let cfg_constructor = Self::cfg_constructor(extra.as_ref())?;

        let package_values = match &extra {
            None => SmallMap::new(),
            Some(package_values) => {
                let mut values = SmallMap::with_capacity(package_values.package_values.len());
                for (name, value) in &package_values.package_values {
                    let value = unsafe {
                        // SAFETY: using the same heap.
                        OwnedFrozenStarlarkPackageValue::new(package_values.owner().dupe(), *value)
                    };
                    values.insert(name.clone(), value);
                }
                values
            }
        };

        let merged_package_values =
            SuperPackageValuesImpl::merge(self.parent.package_values(), package_values)?;

        let PackageFileVisibilityFields {
            visibility,
            within_view,
            inherit,
        } = self.visibility.into_inner().unwrap_or_default();

        let (visibility, within_view) = if inherit {
            (
                self.parent.visibility().extend_with(&visibility),
                self.parent.within_view().extend_with(&within_view),
            )
        } else {
            (visibility, within_view)
        };

        Ok(SuperPackage::new(
            merged_package_values,
            visibility,
            within_view,
            cfg_constructor,
        ))
    }
}
