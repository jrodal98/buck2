"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5587],{3905:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>d,MDXProvider:()=>o,mdx:()=>y,useMDXComponents:()=>s,withMDXComponents:()=>p});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var d=n.createContext({}),p=function(e){return function(t){var r=s(t.components);return n.createElement(e,a({},t,{components:r}))}},s=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},o=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},x="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(r),o=l,x=p["".concat(u,".").concat(o)]||p[o]||m[o]||a;return r?n.createElement(x,c(c({ref:t},d),{},{components:r})):n.createElement(x,c({ref:t},d))}));function y(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,u=new Array(a);u[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[x]="string"==typeof e?e:l,u[1]=c;for(var d=2;d<a;d++)u[d]=r[d];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3859:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>s,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var n=r(87462),l=(r(67294),r(3905));const a={id:"cqueryctx"},u="cqueryctx type",c={unversionedId:"api/bxl/cqueryctx",id:"api/bxl/cqueryctx",title:"cqueryctx type",description:"The context for performing cquery operations in bxl. The functions offered on this ctx are the same behaviour as the query functions available within cquery command.",source:"@site/../docs/api/bxl/cqueryctx.generated.md",sourceDirName:"api/bxl",slug:"/api/bxl/cqueryctx",permalink:"/docs/api/bxl/cqueryctx",draft:!1,tags:[],version:"current",frontMatter:{id:"cqueryctx"},sidebar:"manualSidebar",previous:{title:"configured_attr type",permalink:"/docs/api/bxl/configured_attr"},next:{title:"ensured_artifact type",permalink:"/docs/api/bxl/ensured_artifact"}},i={},d=[{value:"cqueryctx.allpaths",id:"cqueryctxallpaths",level:2},{value:"cqueryctx.attrfilter",id:"cqueryctxattrfilter",level:2},{value:"cqueryctx.attrregexfilter",id:"cqueryctxattrregexfilter",level:2},{value:"cqueryctx.buildfile",id:"cqueryctxbuildfile",level:2},{value:"cqueryctx.deps",id:"cqueryctxdeps",level:2},{value:"cqueryctx.eval",id:"cqueryctxeval",level:2},{value:"cqueryctx.filter",id:"cqueryctxfilter",level:2},{value:"cqueryctx.inputs",id:"cqueryctxinputs",level:2},{value:"cqueryctx.kind",id:"cqueryctxkind",level:2},{value:"cqueryctx.owner",id:"cqueryctxowner",level:2},{value:"cqueryctx.rdeps",id:"cqueryctxrdeps",level:2},{value:"cqueryctx.somepath",id:"cqueryctxsomepath",level:2},{value:"cqueryctx.testsof",id:"cqueryctxtestsof",level:2},{value:"cqueryctx.testsof_with_default_target_platform",id:"cqueryctxtestsof_with_default_target_platform",level:2}],p={toc:d};function s(e){let{components:t,...r}=e;return(0,l.mdx)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"cqueryctx-type"},(0,l.mdx)("inlineCode",{parentName:"h1"},"cqueryctx")," type"),(0,l.mdx)("p",null,"The context for performing ",(0,l.mdx)("inlineCode",{parentName:"p"},"cquery")," operations in bxl. The functions offered on this ctx are the same behaviour as the query functions available within cquery command."),(0,l.mdx)("p",null,"Query results are ",(0,l.mdx)("inlineCode",{parentName:"p"},"[StarlarkTargetSet]"),"s of ",(0,l.mdx)("inlineCode",{parentName:"p"},"[ConfiguredTargetNod]"),"s, which supports iteration,\nindexing, ",(0,l.mdx)("inlineCode",{parentName:"p"},"len()"),", set addition/subtraction, and ",(0,l.mdx)("inlineCode",{parentName:"p"},"equals()"),"."),(0,l.mdx)("h2",{id:"cqueryctxallpaths"},"cqueryctx.allpaths"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},"def cqueryctx.allpaths(from, to) -> target_set\n")),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"allpaths")," query for computing all dependency paths."),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"cqueryctxattrfilter"},"cqueryctx.attrfilter"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},"def cqueryctx.attrfilter(attr: str, value: str, targets) -> target_set\n")),(0,l.mdx)("p",null,"The attrfilter query for rule attribute filtering."),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"cqueryctxattrregexfilter"},"cqueryctx.attrregexfilter"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},"def cqueryctx.attrregexfilter(attribute: str, value: str, targets) -> target_set\n")),(0,l.mdx)("p",null,"The attrregexfilter query for rule attribute filtering with regex."),(0,l.mdx)("p",null,"Sample usage:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-text"},'def _impl_attrregexfilter(ctx):\n    filtered = ctx.cquery().attrregexfilter("foo", "he.lo", "bin/kind/...")\n    ctx.output.print(filtered)\n')),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"cqueryctxbuildfile"},"cqueryctx.buildfile"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},"def cqueryctx.buildfile(targets) -> file_set\n")),(0,l.mdx)("p",null,"Find the build file(s) that defines a target or a target set."),(0,l.mdx)("p",null,"Sample usage:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-text"},'def _buildfile_impl(ctx):\n    owner = ctx.cquery().owner(["bin/TARGET", "bin/kind"])\n    result = ctx.cquery().buildfile(owner)\n    ctx.output.print(result)\n')),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"cqueryctxdeps"},"cqueryctx.deps"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},"def cqueryctx.deps(\n    universe,\n    depth: None | int = None,\n    filter: None | str = None\n) -> target_set\n")),(0,l.mdx)("p",null,"The deps query for finding the transitive closure of dependencies."),(0,l.mdx)("p",null,"Sample usage:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-text"},'def _impl_deps(ctx):\n    result = ctx.cquery().deps("root//bin:the_binary", 1)\n    ctx.output.print(result)\n')),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"cqueryctxeval"},"cqueryctx.eval"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},"def cqueryctx.eval(\n    query: str,\n    query_args = None,\n    target_universe: None | list[str] = None\n)\n")),(0,l.mdx)("p",null,"Evaluates some general query string. ",(0,l.mdx)("inlineCode",{parentName:"p"},"query_args")," can be a target_set of unconfigured nodes, or a list of strings."),(0,l.mdx)("p",null,"Sample usage:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-text"},'def _impl_eval(ctx):\n    result1 = ctx.cquery().eval("inputs(root//bin:the_binary)")\n    ctx.output.print(result1)\n\n    result2 = ctx.cquery().eval("inputs(%s)", query_args = ["cell//path/to/file:target"])\n    ctx.output.print(result2)\n')),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"cqueryctxfilter"},"cqueryctx.filter"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},"def cqueryctx.filter(regex: str, targets) -> target_set\n")),(0,l.mdx)("p",null,"The filter query for filtering targets by name."),(0,l.mdx)("p",null,"Sample usage:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-text"},'def _impl_filter(ctx):\n    result = ctx.cquery().filter(".*the_binary", "root//...")\n    ctx.output.print(result)\n')),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"cqueryctxinputs"},"cqueryctx.inputs"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},"def cqueryctx.inputs(targets) -> file_set\n")),(0,l.mdx)("p",null,"The inputs query for finding input files."),(0,l.mdx)("p",null,"Sample usage:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-text"},'def _impl_inputs(ctx):\n    result = ctx.cquery().inputs("root//bin:the_binary")\n    ctx.output.print(result)\n')),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"cqueryctxkind"},"cqueryctx.kind"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},"def cqueryctx.kind(regex: str, targets) -> target_set\n")),(0,l.mdx)("p",null,"The kind query for filtering targets by rule type."),(0,l.mdx)("p",null,"Sample usage:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-text"},'def _impl_kind(ctx):\n    kind = ctx.cquery().kind(".*1", "bin/kind/...")\n    ctx.output.print(kind)\n')),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"cqueryctxowner"},"cqueryctx.owner"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},"def cqueryctx.owner(files: file_set | str, universe = None) -> target_set\n")),(0,l.mdx)("p",null,"The owner query for finding targets that own specified files. Note that if you do not pass in a cell path (where the format is ",(0,l.mdx)("inlineCode",{parentName:"p"},"<cell>//path/to/file"),"), the path is resolved against the cell that the BXL script lives in. If you need to evaluate a file path that lives in a different cell, you must pass in the fully qualified cell path."),(0,l.mdx)("p",null,"Sample usage:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-text"},'def _owner_impl(ctx):\n    owner = ctx.cquery().owner("bin/TARGETS.fixture", "foo//target/universe/...")\n    ctx.output.print(owner)\n')),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"cqueryctxrdeps"},"cqueryctx.rdeps"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},"def cqueryctx.rdeps(universe, from, depth: int = _) -> target_set\n")),(0,l.mdx)("p",null,"The rdeps query for finding the transitive closure of reverse dependencies."),(0,l.mdx)("p",null,"Sample usage:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-text"},'def _impl_rdeps(ctx):\n    result = ctx.cquery().rdeps("root//bin:the_binary", "//lib:file1", 100)\n    ctx.output.print(result)\n')),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"cqueryctxsomepath"},"cqueryctx.somepath"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},"def cqueryctx.somepath(from, to) -> target_set\n")),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"cqueryctxtestsof"},"cqueryctx.testsof"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},"def cqueryctx.testsof(targets) -> target_set\n")),(0,l.mdx)("p",null,"The testsof query for listing the tests of the specified targets."),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"cqueryctxtestsof_with_default_target_platform"},"cqueryctx.testsof","_","with","_","default","_","target","_","platform"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},"def cqueryctx.testsof_with_default_target_platform(targets) -> target_set\n")),(0,l.mdx)("p",null,"The testsof query for listing the tests of the specified targets. Performs default target platform resolution under the hood for the tests found."))}s.isMDXComponent=!0}}]);