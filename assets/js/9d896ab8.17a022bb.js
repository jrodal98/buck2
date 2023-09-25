"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9685],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>u,MDXProvider:()=>m,mdx:()=>g,useMDXComponents:()=>c,withMDXComponents:()=>p});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){return function(t){var n=c(t.components);return a.createElement(e,o({},t,{components:n}))}},c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,d=p["".concat(i,".").concat(m)]||p[m]||h[m]||o;return n?a.createElement(d,s(s({ref:t},u),{},{components:n})):a.createElement(d,s({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},18860:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const o={id:"anon_targets",title:"Anonymous Targets"},i=void 0,s={unversionedId:"rule_authors/anon_targets",id:"rule_authors/anon_targets",title:"Anonymous Targets",description:"An anonymous target is defined by the hash of its attributes, rather than its name. During analysis, rules can define and access the providers of anonymous targets before producing their own providers. Two distinct rules might ask for the same anonymous target, sharing the work it performs.",source:"@site/../docs/rule_authors/anon_targets.md",sourceDirName:"rule_authors",slug:"/rule_authors/anon_targets",permalink:"/docs/rule_authors/anon_targets",draft:!1,tags:[],version:"current",frontMatter:{id:"anon_targets",title:"Anonymous Targets"},sidebar:"manualSidebar",previous:{title:"Dynamic Dependencies",permalink:"/docs/rule_authors/dynamic_dependencies"},next:{title:"Test Execution",permalink:"/docs/rule_authors/test_execution"}},l={},u=[{value:"Simple Example",id:"simple-example",level:2},{value:"Longer example",id:"longer-example",level:2},{value:"Convert promise to artifact",id:"convert-promise-to-artifact",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,r.mdx)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,"An anonymous target is defined by the hash of its attributes, rather than its name. During analysis, rules can define and access the providers of anonymous targets before producing their own providers. Two distinct rules might ask for the same anonymous target, sharing the work it performs."),(0,r.mdx)("p",null,"This solves two distinct problems:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"The sharing problem")," - if you have two processes that want to share some work, you can create an anon target that does that work once, which is then reused by the two processes. Without such a mechanism, all sharing must be present in the target graph: you can't create any new sharing."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"The overlay problem")," - this is the idea that you want to have a shadow-graph, similar in structure to the normal graph, but with additional information attached. Bazel accomplishes this with ",(0,r.mdx)("a",{parentName:"li",href:"https://bazel.build/extending/aspects"},"Aspects"),". With Anonymous (anon) targets, you can create a shadow-graph by convention, just by using the target name you wish to shadow as the attribute.")),(0,r.mdx)("p",null,"Dynamic dependencies, in their full generality, enable users to do a thing, look at the result, then ask for fresh things. However, this full generality is not provided as it breaks processes, like query, that power the Target Determinator."),(0,r.mdx)("p",null,"In Buck2, dynamic dependencies are implemented using ",(0,r.mdx)("inlineCode",{parentName:"p"},"dynamic_output"),", which provides users with the ability to create new actions, after running actions, then look at the result. ",(0,r.mdx)("inlineCode",{parentName:"p"},"dynamic_output")," is restricted in its power when compared to fully generic dynamic dependencies, as detailed in the ",(0,r.mdx)("a",{parentName:"p",href:"/docs/rule_authors/dynamic_dependencies"},"Dynamic Dependencies")," page."),(0,r.mdx)("p",null,"Anon targets enable users to create a new analysis (that is, call an anon target that may not have existed before) after looking at the result of a previous analysis (which is passed in, or after looking at an anon target). In many ways, anon target is the version of ",(0,r.mdx)("inlineCode",{parentName:"p"},"dynamic_output")," at analysis time, rather than action time."),(0,r.mdx)("h2",{id:"simple-example"},"Simple Example"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'# Define an anonymous rule\nUpperInfo = provider(fields = ["message"])\n\ndef _impl_upper(ctx):\n    return [UpperInfo(message = ctx.attrs.message.upper()]\n\nupper = rule(\n    attrs = {"message", attrs.string()},\n    impl = _impl_upper\n)\n\n# Use an anonymous target\ndef impl(ctx):\n    def k(providers):\n        print(providers[UpperInfo].message)\n        # These are the providers this target returns\n        return [DefaultInfo()]\n    return ctx.actions.anon_target(upper, {\n        name: "my//:greeting",\n        message: "Hello World",\n    }).map(k)\n')),(0,r.mdx)("p",null,"Notes:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"An anonymous rule is defined using ",(0,r.mdx)("inlineCode",{parentName:"li"},"rule"),". These are normal rules, with the difference that they are not in a configuration, so ",(0,r.mdx)("inlineCode",{parentName:"li"},"ctx.actions.label")," won't show configuration information, but just ",(0,r.mdx)("inlineCode",{parentName:"li"},"unspecified"),"."),(0,r.mdx)("li",{parentName:"ul"},"An anonymous rule is used via ",(0,r.mdx)("inlineCode",{parentName:"li"},"ctx.actions.anon_target"),", passing in the rule and the attributes for the rule."),(0,r.mdx)("li",{parentName:"ul"},"The return value is a ",(0,r.mdx)("inlineCode",{parentName:"li"},"promise")," type, which when evaluated returns the providers of the anonymous target. The ",(0,r.mdx)("inlineCode",{parentName:"li"},"promise")," type has a few special behaviors.",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"It has a ",(0,r.mdx)("inlineCode",{parentName:"li"},"map")," function, which takes a function and applies it to the future, returning a new future."),(0,r.mdx)("li",{parentName:"ul"},"If analysis returns a ",(0,r.mdx)("inlineCode",{parentName:"li"},"promise")," type, the outer Rust layer invokes the future to get at the analysis result. If that future then returns another future, Rust keeps going until it has a final result. It must eventually get to a list of providers."))),(0,r.mdx)("li",{parentName:"ul"},"Attribute resolution is handled differently from normal code:",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"String/Int/Bool happen as normal."),(0,r.mdx)("li",{parentName:"ul"},"The name attribute is optional, but, if present, must be a syntactically valid target, but can refer to a cell/package that does not exist."),(0,r.mdx)("li",{parentName:"ul"},"Deps attributes do not take strings, but dependencies, already in a configuration."),(0,r.mdx)("li",{parentName:"ul"},"Exec_deps are not available."),(0,r.mdx)("li",{parentName:"ul"},"Transitions and more complex forms of attributes are banned."),(0,r.mdx)("li",{parentName:"ul"},"Default ",(0,r.mdx)("inlineCode",{parentName:"li"},"attr.deps")," (as used for toolchains) are not permitted, as the default can't express a dependency. They must be passed forward from the caller."))),(0,r.mdx)("li",{parentName:"ul"},"The execution platform for an anon target is that of the inherited from the calling target, which is part of the hash. If that is too restrictive, you could use execution groups, where an anon target gets told which execution group to use.")),(0,r.mdx)("h2",{id:"longer-example"},"Longer example"),(0,r.mdx)("p",null,"The following code represents a scenario for a compile-and-link language where, if two targets end up compiling the same file (for example, they are in the same package and both list it, or it gets export_file'd), then that file is compiled just once:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'## BUCK ##############\n@load(":silly.bzl", "silly_binary")\n\nsilly_binary(\n    name = "hello",\n    srcs = ["hello.sil", "world.sil"],\n)\n\n## silly.bzl ############\n\n_SillyCompilation = provider(fields = ["compiled"])\n\ndef _silly_compilation_impl(ctx):\n    out = ctx.actions.declare_output("output.o")\n    ctx.actions.run(cmd_args(\n        ctx.attrs.toolchain.compiler,\n        ctx.attrs.src,\n        "-o",\n        out.as_output(),\n    ))\n    return [DefaultInfo(), _SillyCompilation(compiled = out)]\n\n_silly_compilation = rule(\n    impl = _silly_compilation_impl,\n    attrs = {\n        "src": attrs.src(),\n        "toolchain": attrs.dep(),\n    },\n)\n\ndef _silly_binary_impl(ctx):\n    def k(providers):\n        # Step 2: now link them all together\n        out = ctx.actions.declare_output("out.exe")\n        objs = [p[_SillyCompilation].compiled for p in providers]\n        ctx.actions.run(cmd_args(\n            ctx.attrs._silly_toolchain.linker,\n            objs,\n            "-o",\n            out.as_output(),\n        ))\n        return [\n            DefaultInfo(default_output = out),\n            RunInfo(args = out),\n        ]\n\n    # Step 1: compile all my individual files\n    return ctx.actions.anon_targets(\n        [(_silly_compilation, {\n            "src": src,\n            "toolchain": ctx.attrs._silly_toolchain\n        }) for src in ctx.attrs.srcs]\n    ).map(k)\n\nsilly_binary = rule(\n    impl = _silly_binary_impl,\n    attrs = {\n        "srcs": attr.list(attr.src()),\n        "link_flags": attr.args(),\n        "_silly_toolchain": attr.dep(default = "toolchains//:silly"),\n    },\n)\n')),(0,r.mdx)("h2",{id:"convert-promise-to-artifact"},"Convert promise to artifact"),(0,r.mdx)("p",null,"It can be challenging to pass around the promises from anon_target and structure functions to support that. If you only need an artifact (or multiple artifacts) from an anon_target, you can use ",(0,r.mdx)("inlineCode",{parentName:"p"},"ctx.actions.artifact_promise()")," to convert a promise to an artifact. This artifact can be passed to most things that expect artifacts, but until it is resolved (at the end of the current analysis) it can't be inspected with artifact functions like ",(0,r.mdx)("inlineCode",{parentName:"p"},".extension"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},".short_path"),", etc. The promise must resolve to a build (not source) artifact with no associated artifacts."),(0,r.mdx)("p",null,"Example:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'HelloInfo = provider(fields = ["hello", "world"])\n\ndef _anon_impl(ctx: AnalysisContext) -> ["provider"]:\n    hello = ctx.actions.write("hello.out", "hello")\n    world = ctx.actions.write("world.out", "world")\n    return [DefaultInfo(), HelloInfo(hello = hello, world = world)]\n\n_anon = rule(impl = _anon_impl, attrs = {})\n\ndef _use_impl(ctx: AnalysisContext) -> ["provider"]:\n    promise = ctx.actions.anon_target(_anon, {})\n    hello_promise = promise.map(lambda x: x[HelloInfo].hello)\n    world_promise = promise.map(lambda x: x[HelloInfo].world)\n    hello_artifact = ctx.actions.artifact_promise(hello_promise)\n    world_artifact = ctx.actions.artifact_promise(world_promise)\n\n    out = ctx.actions.declare_output("output")\n    ctx.actions.run([\n            ctx.attrs.some_tool,\n            hello_artifact,\n            world_artifact,\n            out.as_output()\n        ], category = "process")\n    return [DefaultInfo(default_output = out)]\n\nuse_promise_artifact = rule(impl = _use_impl, attrs = {\n    "some_tool": attr.exec_dep(),\n})\n\n')))}c.isMDXComponent=!0}}]);