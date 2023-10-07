"use strict";(self.webpackChunkwebsite_new=self.webpackChunkwebsite_new||[]).push([[4003],{3905:(e,a,n)=>{n.d(a,{Zo:()=>i,kt:()=>y});var l=n(7294);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function p(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?p(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,l,t=function(e,a){if(null==e)return{};var n,l,t={},p=Object.keys(e);for(l=0;l<p.length;l++)n=p[l],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(l=0;l<p.length;l++)n=p[l],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var r=l.createContext({}),c=function(e){var a=l.useContext(r),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},i=function(e){var a=c(e.components);return l.createElement(r.Provider,{value:a},e.children)},$="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return l.createElement(l.Fragment,{},a)}},u=l.forwardRef((function(e,a){var n=e.components,t=e.mdxType,p=e.originalType,r=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),$=c(n),u=t,y=$["".concat(r,".").concat(u)]||$[u]||d[u]||p;return n?l.createElement(y,o(o({ref:a},i),{},{components:n})):l.createElement(y,o({ref:a},i))}));function y(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var p=n.length,o=new Array(p);o[0]=u;var s={};for(var r in a)hasOwnProperty.call(a,r)&&(s[r]=a[r]);s.originalType=e,s[$]="string"==typeof e?e:t,o[1]=s;for(var c=2;c<p;c++)o[c]=n[c];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5860:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>r,contentTitle:()=>o,default:()=>d,frontMatter:()=>p,metadata:()=>s,toc:()=>c});var l=n(7462),t=(n(7294),n(3905));const p={layout:"docs",title:"Chisel Type vs Scala Type",section:"chisel3"},o="Chisel Type vs Scala Type",s={unversionedId:"explanations/chisel-type-vs-scala-type",id:"explanations/chisel-type-vs-scala-type",title:"Chisel Type vs Scala Type",description:"The Scala compiler cannot distinguish between Chisel's representation of hardware such as false.B, Reg(Bool())",source:"@site/docs/explanations/chisel-type-vs-scala-type.md",sourceDirName:"explanations",slug:"/explanations/chisel-type-vs-scala-type",permalink:"/chisel/docs/explanations/chisel-type-vs-scala-type",draft:!1,editUrl:"https://github.com/chipsalliance/chisel/tree/main/docs/src/explanations/chisel-type-vs-scala-type.md",tags:[],version:"current",frontMatter:{layout:"docs",title:"Chisel Type vs Scala Type",section:"chisel3"},sidebar:"tutorialSidebar",previous:{title:"Enumerations",permalink:"/chisel/docs/explanations/chisel-enum"},next:{title:"Combinational Circuits",permalink:"/chisel/docs/explanations/combinational-circuits"}},r={},c=[{value:"Scala Type vs Chisel Type vs Hardware",id:"scala-type-vs-chisel-type-vs-hardware",level:2},{value:"Chisel Type vs Hardware vs Literals",id:"chisel-type-vs-hardware-vs-literals",level:2},{value:"Chisel Type vs Hardware -- Specific Functions and Errors",id:"chisel-type-vs-hardware----specific-functions-and-errors",level:2},{value:"<code>.asInstanceOf</code> vs <code>.asTypeOf</code> vs <code>chiselTypeOf</code>",id:"asinstanceof-vs-astypeof-vs-chiseltypeof",level:2}],i={toc:c},$="wrapper";function d(e){let{components:a,...n}=e;return(0,t.kt)($,(0,l.Z)({},i,n,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"chisel-type-vs-scala-type"},"Chisel Type vs Scala Type"),(0,t.kt)("p",null,"The Scala compiler cannot distinguish between Chisel's representation of hardware such as ",(0,t.kt)("inlineCode",{parentName:"p"},"false.B"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"Reg(Bool())"),"\nand pure Chisel types (e.g. ",(0,t.kt)("inlineCode",{parentName:"p"},"Bool()"),"). You can get runtime errors passing a Chisel type when hardware is expected, and vice versa."),(0,t.kt)("h2",{id:"scala-type-vs-chisel-type-vs-hardware"},"Scala Type vs Chisel Type vs Hardware"),(0,t.kt)("p",null,"The ",(0,t.kt)("em",{parentName:"p"},"Scala")," type of the Data is recognized by the Scala compiler, such as ",(0,t.kt)("inlineCode",{parentName:"p"},"Bool"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"Decoupled[UInt]")," or ",(0,t.kt)("inlineCode",{parentName:"p"},"MyBundle")," in"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-scala"},"class MyBundle(w: Int) extends Bundle {\n  val foo = UInt(w.W)\n  val bar = UInt(w.W)\n}\n")),(0,t.kt)("p",null,"The ",(0,t.kt)("em",{parentName:"p"},"Chisel")," type of a ",(0,t.kt)("inlineCode",{parentName:"p"},"Data")," is a Scala object. It captures all the fields actually present,\nby names, and their types including widths.\nFor example, ",(0,t.kt)("inlineCode",{parentName:"p"},"MyBundle(3)")," creates a Chisel Type with fields ",(0,t.kt)("inlineCode",{parentName:"p"},"foo: UInt(3.W),  bar: UInt(3.W))"),"."),(0,t.kt)("p",null,"Hardware is ",(0,t.kt)("inlineCode",{parentName:"p"},"Data"),' that is "bound" to synthesizable hardware. For example ',(0,t.kt)("inlineCode",{parentName:"p"},"false.B")," or ",(0,t.kt)("inlineCode",{parentName:"p"},"Reg(Bool())"),".\nThe binding is what determines the actual directionality of each field, it is not a property of the Chisel type."),(0,t.kt)("p",null,"A literal is a ",(0,t.kt)("inlineCode",{parentName:"p"},"Data")," that is respresentable as a literal value without being wrapped in Wire, Reg, or IO."),(0,t.kt)("h2",{id:"chisel-type-vs-hardware-vs-literals"},"Chisel Type vs Hardware vs Literals"),(0,t.kt)("p",null,"The below code demonstrates how objects with the same Scala type (",(0,t.kt)("inlineCode",{parentName:"p"},"MyBundle"),") can have different properties."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-scala"},"import chisel3.experimental.BundleLiterals._\n\nclass MyModule(gen: () => MyBundle) extends Module {\n                                                            //   Hardware   Literal\n    val xType:    MyBundle     = new MyBundle(3)            //      -          -\n    val dirXType: MyBundle     = Input(new MyBundle(3))     //      -          -\n    val xReg:     MyBundle     = Reg(new MyBundle(3))       //      x          -\n    val xIO:      MyBundle     = IO(Input(new MyBundle(3))) //      x          -\n    val xRegInit: MyBundle     = RegInit(xIO)               //      x          -\n    val xLit:     MyBundle     = xType.Lit(                 //      x          x\n      _.foo -> 0.U(3.W),\n      _.bar -> 0.U(3.W)\n    )\n    val y:        MyBundle = gen()                          //      ?          ?\n\n    // Need to initialize all hardware values\n    xReg := DontCare\n}\n")),(0,t.kt)("h2",{id:"chisel-type-vs-hardware----specific-functions-and-errors"},"Chisel Type vs Hardware -- Specific Functions and Errors"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},".asTypeOf")," works for both hardware and Chisel type:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-scala"},"elaborate(new Module {\n  val chiselType = new MyBundle(3)\n  val hardware = Wire(new MyBundle(3))\n  hardware := DontCare\n  val a = 0.U.asTypeOf(chiselType)\n  val b = 0.U.asTypeOf(hardware)\n})\n")),(0,t.kt)("p",null,"Can only ",(0,t.kt)("inlineCode",{parentName:"p"},":=")," to hardware:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-scala"},"// Do this...\nelaborate(new Module {\n  val hardware = Wire(new MyBundle(3))\n  hardware := DontCare\n})\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-scala"},"// Not this...\nelaborate(new Module {\n  val chiselType = new MyBundle(3)\n  chiselType := DontCare\n})\n// chisel3.package$ExpectedHardwareException: data to be connected 'MyBundle' must be hardware, not a bare Chisel type. Perhaps you forgot to wrap it in Wire(_) or IO(_)?\n//  at ... ()\n//  at repl.MdocSession$MdocApp$$anonfun$21$$anonfun$apply$21$$anon$3.<init>(chisel-type-vs-scala-type.md:90)\n//  at repl.MdocSession$MdocApp$$anonfun$21$$anonfun$apply$21.apply(chisel-type-vs-scala-type.md:88)\n//  at repl.MdocSession$MdocApp$$anonfun$21$$anonfun$apply$21.apply(chisel-type-vs-scala-type.md:88)\n//  at ... ()\n//  at ... (Stack trace trimmed to user code only. Rerun with --full-stacktrace to see the full stack trace)\n")),(0,t.kt)("p",null,"Can only ",(0,t.kt)("inlineCode",{parentName:"p"},":=")," from hardware:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-scala"},"// Do this...\nelaborate(new Module {\n  val hardware = IO(new MyBundle(3))\n  val moarHardware = Wire(new MyBundle(3))\n  moarHardware := DontCare\n  hardware := moarHardware\n})\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-scala"},"// Not this...\nelaborate(new Module {\n  val hardware = IO(new MyBundle(3))\n  val chiselType = new MyBundle(3)\n  hardware := chiselType\n})\n// chisel3.package$ExpectedHardwareException: data to be connected 'MyBundle' must be hardware, not a bare Chisel type. Perhaps you forgot to wrap it in Wire(_) or IO(_)?\n//  at ... ()\n//  at repl.MdocSession$MdocApp$$anonfun$29$$anonfun$apply$27$$anon$5.<init>(chisel-type-vs-scala-type.md:115)\n//  at repl.MdocSession$MdocApp$$anonfun$29$$anonfun$apply$27.apply(chisel-type-vs-scala-type.md:112)\n//  at repl.MdocSession$MdocApp$$anonfun$29$$anonfun$apply$27.apply(chisel-type-vs-scala-type.md:112)\n//  at ... ()\n//  at ... (Stack trace trimmed to user code only. Rerun with --full-stacktrace to see the full stack trace)\n")),(0,t.kt)("p",null,"Have to pass hardware to ",(0,t.kt)("inlineCode",{parentName:"p"},"chiselTypeOf"),":"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-scala"},"// Do this...\nelaborate(new Module {\n  val hardware = Wire(new MyBundle(3))\n  hardware := DontCare\n  val chiselType = chiselTypeOf(hardware)\n})\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-scala"},"// Not this...\nelaborate(new Module {\n  val chiselType = new MyBundle(3)\n  val crash = chiselTypeOf(chiselType)\n})\n// chisel3.package$ExpectedHardwareException: 'MyBundle' must be hardware, not a bare Chisel type. Perhaps you forgot to wrap it in Wire(_) or IO(_)?\n//  at ... ()\n//  at repl.MdocSession$MdocApp$$anonfun$37$$anonfun$apply$34$$anon$7$$anonfun$39$$anonfun$apply$36.apply(chisel-type-vs-scala-type.md:138)\n//  at repl.MdocSession$MdocApp$$anonfun$37$$anonfun$apply$34$$anon$7$$anonfun$39$$anonfun$apply$36.apply(chisel-type-vs-scala-type.md:138)\n//  at chisel3.experimental.prefix$.apply(prefix.scala:50)\n//  at repl.MdocSession$MdocApp$$anonfun$37$$anonfun$apply$34$$anon$7$$anonfun$39.apply(chisel-type-vs-scala-type.md:138)\n//  at repl.MdocSession$MdocApp$$anonfun$37$$anonfun$apply$34$$anon$7$$anonfun$39.apply(chisel-type-vs-scala-type.md)\n//  at chisel3.internal.plugin.package$.autoNameRecursively(package.scala:33)\n//  at repl.MdocSession$MdocApp$$anonfun$37$$anonfun$apply$34$$anon$7.<init>(chisel-type-vs-scala-type.md:138)\n//  at repl.MdocSession$MdocApp$$anonfun$37$$anonfun$apply$34.apply(chisel-type-vs-scala-type.md:136)\n//  at repl.MdocSession$MdocApp$$anonfun$37$$anonfun$apply$34.apply(chisel-type-vs-scala-type.md:136)\n//  at ... ()\n//  at ... (Stack trace trimmed to user code only. Rerun with --full-stacktrace to see the full stack trace)\n")),(0,t.kt)("p",null,"Have to pass hardware to ",(0,t.kt)("inlineCode",{parentName:"p"},"*Init"),":"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-scala"},"// Do this...\nelaborate(new Module {\n  val hardware = Wire(new MyBundle(3))\n  hardware := DontCare\n  val moarHardware = WireInit(hardware)\n})\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-scala"},"// Not this...\nelaborate(new Module {\n  val crash = WireInit(new MyBundle(3))\n})\n// chisel3.package$ExpectedHardwareException: wire initializer 'MyBundle' must be hardware, not a bare Chisel type. Perhaps you forgot to wrap it in Wire(_) or IO(_)?\n//  at ... ()\n//  at repl.MdocSession$MdocApp$$anonfun$44$$anonfun$apply$40$$anon$9$$anonfun$45$$anonfun$apply$41.apply(chisel-type-vs-scala-type.md:160)\n//  at repl.MdocSession$MdocApp$$anonfun$44$$anonfun$apply$40$$anon$9$$anonfun$45$$anonfun$apply$41.apply(chisel-type-vs-scala-type.md:160)\n//  at chisel3.experimental.prefix$.apply(prefix.scala:50)\n//  at repl.MdocSession$MdocApp$$anonfun$44$$anonfun$apply$40$$anon$9$$anonfun$45.apply(chisel-type-vs-scala-type.md:160)\n//  at repl.MdocSession$MdocApp$$anonfun$44$$anonfun$apply$40$$anon$9$$anonfun$45.apply(chisel-type-vs-scala-type.md)\n//  at chisel3.internal.plugin.package$.autoNameRecursively(package.scala:33)\n//  at repl.MdocSession$MdocApp$$anonfun$44$$anonfun$apply$40$$anon$9.<init>(chisel-type-vs-scala-type.md:160)\n//  at repl.MdocSession$MdocApp$$anonfun$44$$anonfun$apply$40.apply(chisel-type-vs-scala-type.md:159)\n//  at repl.MdocSession$MdocApp$$anonfun$44$$anonfun$apply$40.apply(chisel-type-vs-scala-type.md:159)\n//  at ... ()\n//  at ... (Stack trace trimmed to user code only. Rerun with --full-stacktrace to see the full stack trace)\n")),(0,t.kt)("p",null,"Can't pass hardware to a ",(0,t.kt)("inlineCode",{parentName:"p"},"Wire"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"Reg"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"IO"),":"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-scala"},"// Do this...\nelaborate(new Module {\n  val hardware = Wire(new MyBundle(3))\n  hardware := DontCare\n})\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-scala"},"// Not this...\nelaborate(new Module {\n  val hardware = Wire(new MyBundle(3))\n  val crash = Wire(hardware)\n})\n// chisel3.package$ExpectedChiselTypeException: wire type '_44_Anon.hardware: Wire[MyBundle]' must be a Chisel type, not hardware\n//  at ... ()\n//  at repl.MdocSession$MdocApp$$anonfun$49$$anonfun$apply$44$$anon$11$$anonfun$51$$anonfun$apply$47.apply(chisel-type-vs-scala-type.md:182)\n//  at repl.MdocSession$MdocApp$$anonfun$49$$anonfun$apply$44$$anon$11$$anonfun$51$$anonfun$apply$47.apply(chisel-type-vs-scala-type.md:182)\n//  at chisel3.experimental.prefix$.apply(prefix.scala:50)\n//  at repl.MdocSession$MdocApp$$anonfun$49$$anonfun$apply$44$$anon$11$$anonfun$51.apply(chisel-type-vs-scala-type.md:182)\n//  at repl.MdocSession$MdocApp$$anonfun$49$$anonfun$apply$44$$anon$11$$anonfun$51.apply(chisel-type-vs-scala-type.md)\n//  at chisel3.internal.plugin.package$.autoNameRecursively(package.scala:33)\n//  at repl.MdocSession$MdocApp$$anonfun$49$$anonfun$apply$44$$anon$11.<init>(chisel-type-vs-scala-type.md:182)\n//  at repl.MdocSession$MdocApp$$anonfun$49$$anonfun$apply$44.apply(chisel-type-vs-scala-type.md:180)\n//  at repl.MdocSession$MdocApp$$anonfun$49$$anonfun$apply$44.apply(chisel-type-vs-scala-type.md:180)\n//  at ... ()\n//  at ... (Stack trace trimmed to user code only. Rerun with --full-stacktrace to see the full stack trace)\n")),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},".Lit")," can only be called on Chisel type:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-scala"},"// Do this...\nelaborate(new Module {\n  val hardwareLit = (new MyBundle(3)).Lit(\n    _.foo -> 0.U,\n    _.bar -> 0.U\n  )\n})\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-scala"},"//Not this...\nelaborate(new Module {\n  val hardware = Wire(new MyBundle(3))\n  val crash = hardware.Lit(\n    _.foo -> 0.U,\n    _.bar -> 0.U\n  )\n})\n// chisel3.package$ExpectedChiselTypeException: bundle literal constructor model '_52_Anon.hardware: Wire[MyBundle]' must be a Chisel type, not hardware\n//  at ... ()\n//  at repl.MdocSession$MdocApp$$anonfun$54$$anonfun$apply$52$$anon$13$$anonfun$56$$anonfun$apply$55.apply(chisel-type-vs-scala-type.md:206)\n//  at repl.MdocSession$MdocApp$$anonfun$54$$anonfun$apply$52$$anon$13$$anonfun$56$$anonfun$apply$55.apply(chisel-type-vs-scala-type.md:206)\n//  at chisel3.experimental.prefix$.apply(prefix.scala:50)\n//  at repl.MdocSession$MdocApp$$anonfun$54$$anonfun$apply$52$$anon$13$$anonfun$56.apply(chisel-type-vs-scala-type.md:206)\n//  at repl.MdocSession$MdocApp$$anonfun$54$$anonfun$apply$52$$anon$13$$anonfun$56.apply(chisel-type-vs-scala-type.md)\n//  at chisel3.internal.plugin.package$.autoNameRecursively(package.scala:33)\n//  at repl.MdocSession$MdocApp$$anonfun$54$$anonfun$apply$52$$anon$13.<init>(chisel-type-vs-scala-type.md:206)\n//  at repl.MdocSession$MdocApp$$anonfun$54$$anonfun$apply$52.apply(chisel-type-vs-scala-type.md:204)\n//  at repl.MdocSession$MdocApp$$anonfun$54$$anonfun$apply$52.apply(chisel-type-vs-scala-type.md:204)\n//  at ... ()\n//  at ... (Stack trace trimmed to user code only. Rerun with --full-stacktrace to see the full stack trace)\n")),(0,t.kt)("p",null,"Can only use a Chisel type within a ",(0,t.kt)("inlineCode",{parentName:"p"},"Bundle")," definition:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-scala"},"// Do this...\nelaborate(new Module {\n  val hardware = Wire(new Bundle {\n    val nested = new MyBundle(3)\n  })\n  hardware := DontCare\n})\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-scala"},"// Not this...\nelaborate(new Module {\n  val crash = Wire(new Bundle {\n    val nested = Wire(new MyBundle(3))\n  })\n})\n// chisel3.package$ExpectedChiselTypeException: Bundle: AnonymousBundle contains hardware fields: nested: _60_Anon.crash_nested: Wire[MyBundle]\n//  at ... ()\n//  at repl.MdocSession$MdocApp$$anonfun$61$$anonfun$apply$60$$anon$16$$anonfun$62$$anonfun$apply$61.apply(chisel-type-vs-scala-type.md:232)\n//  at repl.MdocSession$MdocApp$$anonfun$61$$anonfun$apply$60$$anon$16$$anonfun$62$$anonfun$apply$61.apply(chisel-type-vs-scala-type.md:232)\n//  at chisel3.experimental.prefix$.apply(prefix.scala:50)\n//  at repl.MdocSession$MdocApp$$anonfun$61$$anonfun$apply$60$$anon$16$$anonfun$62.apply(chisel-type-vs-scala-type.md:232)\n//  at repl.MdocSession$MdocApp$$anonfun$61$$anonfun$apply$60$$anon$16$$anonfun$62.apply(chisel-type-vs-scala-type.md)\n//  at chisel3.internal.plugin.package$.autoNameRecursively(package.scala:33)\n//  at repl.MdocSession$MdocApp$$anonfun$61$$anonfun$apply$60$$anon$16.<init>(chisel-type-vs-scala-type.md:232)\n//  at repl.MdocSession$MdocApp$$anonfun$61$$anonfun$apply$60.apply(chisel-type-vs-scala-type.md:231)\n//  at repl.MdocSession$MdocApp$$anonfun$61$$anonfun$apply$60.apply(chisel-type-vs-scala-type.md:231)\n//  at ... ()\n//  at ... (Stack trace trimmed to user code only. Rerun with --full-stacktrace to see the full stack trace)\n")),(0,t.kt)("p",null,"Can only call ",(0,t.kt)("inlineCode",{parentName:"p"},"directionOf")," on Hardware:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-scala"},"import chisel3.reflect.DataMirror\n\nclass Child extends Module{\n  val hardware = IO(new MyBundle(3))\n  hardware := DontCare\n  val chiselType = new MyBundle(3)\n}\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-scala"},"// Do this...\nelaborate(new Module {\n  val child = Module(new Child())\n  child.hardware := DontCare\n  val direction = DataMirror.directionOf(child.hardware)\n})\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-scala"},"// Not this...\nelaborate(new Module {\nval child = Module(new Child())\n  child.hardware := DontCare\n  val direction = DataMirror.directionOf(child.chiselType)\n})\n// chisel3.package$ExpectedHardwareException: node requested directionality on 'MyBundle' must be hardware, not a bare Chisel type. Perhaps you forgot to wrap it in Wire(_) or IO(_)?\n//  at ... ()\n//  at repl.MdocSession$MdocApp$$anonfun$70$$anonfun$apply$68$$anon$19.<init>(chisel-type-vs-scala-type.md:271)\n//  at repl.MdocSession$MdocApp$$anonfun$70$$anonfun$apply$68.apply(chisel-type-vs-scala-type.md:268)\n//  at repl.MdocSession$MdocApp$$anonfun$70$$anonfun$apply$68.apply(chisel-type-vs-scala-type.md:268)\n//  at ... ()\n//  at ... (Stack trace trimmed to user code only. Rerun with --full-stacktrace to see the full stack trace)\n")),(0,t.kt)("p",null,"Can call ",(0,t.kt)("inlineCode",{parentName:"p"},"specifiedDirectionOf")," on hardware or Chisel type:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-scala"},"elaborate(new Module {\n  val child = Module(new Child())\n  child.hardware := DontCare\n  val direction0 = DataMirror.specifiedDirectionOf(child.hardware)\n  val direction1 = DataMirror.specifiedDirectionOf(child.chiselType)\n})\n")),(0,t.kt)("h2",{id:"asinstanceof-vs-astypeof-vs-chiseltypeof"},(0,t.kt)("inlineCode",{parentName:"h2"},".asInstanceOf")," vs ",(0,t.kt)("inlineCode",{parentName:"h2"},".asTypeOf")," vs ",(0,t.kt)("inlineCode",{parentName:"h2"},"chiselTypeOf")),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},".asInstanceOf")," is a Scala runtime cast, usually used for telling the compiler\nthat you have more information than it can infer to convert Scala types:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-scala"},"class ScalaCastingModule(gen: () => Bundle) extends Module {\n  val io = IO(Output(gen().asInstanceOf[MyBundle]))\n  io.foo := 0.U\n}\n")),(0,t.kt)("p",null,"This works if we do indeed have more information than the compiler:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-scala"},"elaborate(new ScalaCastingModule( () => new MyBundle(3)))\n")),(0,t.kt)("p",null,"But if we are wrong, we can get a Scala runtime exception:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-scala"},"class NotMyBundle extends Bundle {val baz = Bool()}\nelaborate(new ScalaCastingModule(() => new NotMyBundle()))\n// java.lang.ClassCastException: class repl.MdocSession$MdocApp$$anonfun$79$NotMyBundle$1 cannot be cast to class repl.MdocSession$MdocApp$MyBundle (repl.MdocSession$MdocApp$$anonfun$79$NotMyBundle$1 and repl.MdocSession$MdocApp$MyBundle are in unnamed module of loader scala.reflect.internal.util.AbstractFileClassLoader @27bb866f)\n//  at ... ()\n//  at repl.MdocSession$MdocApp$ScalaCastingModule$$anonfun$76$$anonfun$apply$71$$anonfun$apply$72$$anonfun$apply$73.apply(chisel-type-vs-scala-type.md:293)\n//  at repl.MdocSession$MdocApp$ScalaCastingModule$$anonfun$76$$anonfun$apply$71$$anonfun$apply$72$$anonfun$apply$73.apply(chisel-type-vs-scala-type.md:293)\n//  at chisel3.SpecifiedDirection$.specifiedDirection(Data.scala:65)\n//  at chisel3.Output$.apply(Data.scala:268)\n//  at repl.MdocSession$MdocApp$ScalaCastingModule$$anonfun$76$$anonfun$apply$71$$anonfun$apply$72.apply(chisel-type-vs-scala-type.md:293)\n//  at repl.MdocSession$MdocApp$ScalaCastingModule$$anonfun$76$$anonfun$apply$71$$anonfun$apply$72.apply(chisel-type-vs-scala-type.md:293)\n//  at chisel3.IO$.apply(IO.scala:29)\n//  at chisel3.experimental.BaseModule.IO(Module.scala:682)\n//  at repl.MdocSession$MdocApp$ScalaCastingModule$$anonfun$76$$anonfun$apply$71.apply(chisel-type-vs-scala-type.md:293)\n//  at repl.MdocSession$MdocApp$ScalaCastingModule$$anonfun$76$$anonfun$apply$71.apply(chisel-type-vs-scala-type.md:293)\n//  at chisel3.experimental.prefix$.apply(prefix.scala:50)\n//  at repl.MdocSession$MdocApp$ScalaCastingModule$$anonfun$76.apply(chisel-type-vs-scala-type.md:293)\n//  at repl.MdocSession$MdocApp$ScalaCastingModule$$anonfun$76.apply(chisel-type-vs-scala-type.md)\n//  at chisel3.internal.plugin.package$.autoNameRecursively(package.scala:33)\n//  at repl.MdocSession$MdocApp$ScalaCastingModule.<init>(chisel-type-vs-scala-type.md:293)\n//  at repl.MdocSession$MdocApp$$anonfun$79$$anonfun$apply$75.apply(chisel-type-vs-scala-type.md:309)\n//  at repl.MdocSession$MdocApp$$anonfun$79$$anonfun$apply$75.apply(chisel-type-vs-scala-type.md:309)\n//  at ... ()\n//  at ... (Stack trace trimmed to user code only. Rerun with --full-stacktrace to see the full stack trace)\n")),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},".asTypeOf")," is a conversion from one ",(0,t.kt)("inlineCode",{parentName:"p"},"Data")," subclass to another.\nIt is commonly used to assign data to all-zeros, as described in ",(0,t.kt)("a",{parentName:"p",href:"https://www.chisel-lang.org/chisel3/docs/cookbooks/cookbook.html#how-can-i-tieoff-a-bundlevec-to-0"},"this cookbook recipe"),", but it can\nalso be used (though not really recommended, as there is no checking on\nwidth matches) to convert one Chisel type to another:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-scala"},'class SimilarToMyBundle(w: Int) extends Bundle{\n  val foobar = UInt((2*w).W)\n}\n\nChiselStage.emitSystemVerilog(new Module {\n  val in = IO(Input(new MyBundle(3)))\n  val out = IO(Output(new SimilarToMyBundle(3)))\n\n  out := in.asTypeOf(out)\n})\n// res12: String = """// Generated by CIRCT firtool-1.56.0\n// module _82_Anon( // <stdin>:3:3\n//   input        clock,    // <stdin>:4:11\n//                reset,    // <stdin>:5:11\n//   input  [2:0] in_foo,   // chisel-type-vs-scala-type.md:324:14\n//                in_bar,   // chisel-type-vs-scala-type.md:324:14\n//   output [5:0] out_foobar    // chisel-type-vs-scala-type.md:325:15\n// );\n// \n//   assign out_foobar = {in_foo, in_bar};  // <stdin>:3:3, chisel-type-vs-scala-type.md:327:21\n// endmodule\n// \n// """\n')),(0,t.kt)("p",null,"In contrast to ",(0,t.kt)("inlineCode",{parentName:"p"},"asInstanceOf")," and ",(0,t.kt)("inlineCode",{parentName:"p"},"asTypeOf"),",\n",(0,t.kt)("inlineCode",{parentName:"p"},"chiselTypeOf")," is not a casting operation. It returns a Scala object which\ncan be used as shown in the examples above to create more Chisel types and\nhardware with the same Chisel type as existing hardware."))}d.isMDXComponent=!0}}]);