"use strict";(self.webpackChunkwebsite_new=self.webpackChunkwebsite_new||[]).push([[7146],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),c=p(t),m=l,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return t?a.createElement(h,o(o({ref:n},d),{},{components:t})):a.createElement(h,o({ref:n},d))}));function h(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,o=new Array(i);o[0]=m;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r[c]="string"==typeof e?e:l,o[1]=r;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},108:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var a=t(7462),l=(t(7294),t(3905));const i={layout:"docs",title:"Bundles and Vecs",section:"chisel3"},o="Bundles and Vecs",r={unversionedId:"explanations/bundles-and-vecs",id:"explanations/bundles-and-vecs",title:"Bundles and Vecs",description:"Bundle and Vec are classes that allow the user to expand the set of Chisel datatypes with aggregates of other types.",source:"@site/docs/explanations/bundles-and-vecs.md",sourceDirName:"explanations",slug:"/explanations/bundles-and-vecs",permalink:"/chisel/docs/explanations/bundles-and-vecs",draft:!1,editUrl:"https://github.com/chipsalliance/chisel/tree/main/docs/src/explanations/bundles-and-vecs.md",tags:[],version:"current",frontMatter:{layout:"docs",title:"Bundles and Vecs",section:"chisel3"},sidebar:"tutorialSidebar",previous:{title:"Blackboxes",permalink:"/chisel/docs/explanations/blackboxes"},next:{title:"Enumerations",permalink:"/chisel/docs/explanations/chisel-enum"}},s={},p=[{value:"Flipping Bundles",id:"flipping-bundles",level:3},{value:"MixedVec",id:"mixedvec",level:3},{value:"A note on <code>cloneType</code> (For Chisel &lt; 3.5)",id:"a-note-on-clonetype-for-chisel--35",level:3}],d={toc:p},c="wrapper";function u(e){let{components:n,...t}=e;return(0,l.kt)(c,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"bundles-and-vecs"},"Bundles and Vecs"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Bundle")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"Vec")," are classes that allow the user to expand the set of Chisel datatypes with aggregates of other types."),(0,l.kt)("p",null,"Bundles group together several named fields of potentially different types into a coherent unit, much like a ",(0,l.kt)("inlineCode",{parentName:"p"},"struct")," in\nC. Users define their own bundles by defining a class as a subclass of ",(0,l.kt)("inlineCode",{parentName:"p"},"Bundle"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"import chisel3._\nclass MyFloat extends Bundle {\n  val sign        = Bool()\n  val exponent    = UInt(8.W)\n  val significand = UInt(23.W)\n}\n\nclass ModuleWithFloatWire extends RawModule {\n  val x  = Wire(new MyFloat)\n  val xs = x.sign\n}\n")),(0,l.kt)("p",null,"You can create literal Bundles using the experimental ",(0,l.kt)("a",{parentName:"p",href:"../appendix/experimental-features#bundle-literals"},"Bundle Literals")," feature."),(0,l.kt)("p",null,"Scala convention is to name classes using UpperCamelCase, and we suggest you follow that convention in your Chisel code."),(0,l.kt)("p",null,"Vecs create an indexable vector of elements, and are constructed as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"class ModuleWithVec extends RawModule {\n  // Vector of 5 23-bit signed integers.\n  val myVec = Wire(Vec(5, SInt(23.W)))\n\n  // Connect to one element of vector.\n  val reg3 = myVec(3)\n}\n")),(0,l.kt)("p",null,"(Note that we specify the number followed by the type of the ",(0,l.kt)("inlineCode",{parentName:"p"},"Vec")," elements. We also specifiy the width of the ",(0,l.kt)("inlineCode",{parentName:"p"},"SInt"),")"),(0,l.kt)("p",null,"The set of primitive classes\n(",(0,l.kt)("inlineCode",{parentName:"p"},"SInt"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"UInt"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"Bool"),") plus the aggregate\nclasses (",(0,l.kt)("inlineCode",{parentName:"p"},"Bundles")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"Vec"),"s) all inherit from a common\nsuperclass, ",(0,l.kt)("inlineCode",{parentName:"p"},"Data"),".  Every object that ultimately inherits from\n",(0,l.kt)("inlineCode",{parentName:"p"},"Data")," can be represented as a bit vector in a hardware design."),(0,l.kt)("p",null,"Bundles and Vecs can be arbitrarily nested to build complex data\nstructures:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"class BigBundle extends Bundle {\n // Vector of 5 23-bit signed integers.\n val myVec = Vec(5, SInt(23.W))\n val flag  = Bool()\n // Previously defined bundle.\n val f     = new MyFloat\n}\n")),(0,l.kt)("p",null,"Note that the builtin Chisel primitive and aggregate classes do not\nrequire the ",(0,l.kt)("inlineCode",{parentName:"p"},"new")," when creating an instance, whereas new user\ndatatypes will.  A Scala ",(0,l.kt)("inlineCode",{parentName:"p"},"apply")," constructor can be defined so\nthat a user datatype also does not require ",(0,l.kt)("inlineCode",{parentName:"p"},"new"),", as described in\n",(0,l.kt)("a",{parentName:"p",href:"../explanations/functional-module-creation"},"Function Constructor"),"."),(0,l.kt)("h3",{id:"flipping-bundles"},"Flipping Bundles"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Flipped()")," function recursively flips all elements in a Bundle/Record. This is very useful for building bidirectional interfaces that connect to each other (e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"Decoupled"),"). See below for an example."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"class ABBundle extends Bundle {\n  val a = Input(Bool())\n  val b = Output(Bool())\n}\nclass MyFlippedModule extends RawModule {\n  // Normal instantiation of the bundle\n  // 'a' is an Input and 'b' is an Output\n  val normalBundle = IO(new ABBundle)\n  normalBundle.b := normalBundle.a\n\n  // Flipped recursively flips the direction of all Bundle fields\n  // Now 'a' is an Output and 'b' is an Input\n  val flippedBundle = IO(Flipped(new ABBundle))\n  flippedBundle.a := flippedBundle.b\n}\n")),(0,l.kt)("p",null,"This generates the following Verilog:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-verilog"},"// Generated by CIRCT firtool-1.56.0\nmodule MyFlippedModule( // <stdin>:3:3\n  input  normalBundle_a,    // bundles-and-vecs.md:60:24\n         flippedBundle_b,   // bundles-and-vecs.md:65:25\n  output normalBundle_b,    // bundles-and-vecs.md:60:24\n         flippedBundle_a    // bundles-and-vecs.md:65:25\n);\n\n  assign normalBundle_b = normalBundle_a;   // <stdin>:3:3\n  assign flippedBundle_a = flippedBundle_b; // <stdin>:3:3\nendmodule\n\n")),(0,l.kt)("h3",{id:"mixedvec"},"MixedVec"),(0,l.kt)("p",null,"(Chisel 3.2+)"),(0,l.kt)("p",null,"All elements of a ",(0,l.kt)("inlineCode",{parentName:"p"},"Vec")," must have the same parameterization. If we want to create a Vec where the elements have the same type but different parameterizations, we can use a MixedVec:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"import chisel3.util.MixedVec\nclass ModuleMixedVec extends Module {\n  val io = IO(new Bundle {\n    val x = Input(UInt(3.W))\n    val y = Input(UInt(10.W))\n    val vec = Output(MixedVec(UInt(3.W), UInt(10.W)))\n  })\n  io.vec(0) := io.x\n  io.vec(1) := io.y\n}\n")),(0,l.kt)("p",null,"We can also programmatically create the types in a MixedVec:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"class ModuleProgrammaticMixedVec(x: Int, y: Int) extends Module {\n  val io = IO(new Bundle {\n    val vec = Input(MixedVec((x to y) map { i => UInt(i.W) }))\n    // ...\n  })\n  // ...rest of the module goes here...\n}\n")),(0,l.kt)("h3",{id:"a-note-on-clonetype-for-chisel--35"},"A note on ",(0,l.kt)("inlineCode",{parentName:"h3"},"cloneType")," (For Chisel < 3.5)"),(0,l.kt)("p",null,"NOTE: This section ",(0,l.kt)("strong",{parentName:"p"},"only applies to Chisel before Chisel 3.5"),".\nAs of Chisel 3.5, ",(0,l.kt)("inlineCode",{parentName:"p"},"Bundle"),"s should ",(0,l.kt)("strong",{parentName:"p"},"not")," ",(0,l.kt)("inlineCode",{parentName:"p"},"override def cloneType"),",\nas this is a compiler error when using the chisel3 compiler plugin for inferring ",(0,l.kt)("inlineCode",{parentName:"p"},"cloneType"),"."),(0,l.kt)("p",null,"Since Chisel is built on top of Scala and the JVM,\nit needs to know how to construct copies of ",(0,l.kt)("inlineCode",{parentName:"p"},"Bundle"),"s for various\npurposes (creating wires, IOs, etc).\nIf you have a parametrized ",(0,l.kt)("inlineCode",{parentName:"p"},"Bundle")," and Chisel can't automatically figure out how to\nclone it, you will need to create a custom ",(0,l.kt)("inlineCode",{parentName:"p"},"cloneType")," method in your bundle.\nIn the vast majority of cases, ",(0,l.kt)("strong",{parentName:"p"},"this is not required"),"\nas Chisel can figure out how to clone most ",(0,l.kt)("inlineCode",{parentName:"p"},"Bundle"),"s automatically:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"class MyCloneTypeBundle(val bitwidth: Int) extends Bundle {\n   val field = UInt(bitwidth.W)\n   // ...\n}\n")),(0,l.kt)("p",null,"The only caveat is if you are passing something of type ",(0,l.kt)("inlineCode",{parentName:"p"},"Data"),' as a "generator" parameter,\nin which case you should make it a ',(0,l.kt)("inlineCode",{parentName:"p"},"private val"),", and define a ",(0,l.kt)("inlineCode",{parentName:"p"},"cloneType")," method with\n",(0,l.kt)("inlineCode",{parentName:"p"},"override def cloneType = (new YourBundleHere(...)).asInstanceOf[this.type]"),"."),(0,l.kt)("p",null,"For example, consider the following ",(0,l.kt)("inlineCode",{parentName:"p"},"Bundle"),". Because its ",(0,l.kt)("inlineCode",{parentName:"p"},"gen")," variable is not a ",(0,l.kt)("inlineCode",{parentName:"p"},"private val"),", the user has to\nexplicitly define the ",(0,l.kt)("inlineCode",{parentName:"p"},"cloneType")," method:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"import chisel3.util.{Decoupled, Irrevocable}\nclass RegisterWriteIOExplicitCloneType[T <: Data](gen: T) extends Bundle {\n  val request  = Flipped(Decoupled(gen))\n  val response = Irrevocable(Bool())\n  override def cloneType = new RegisterWriteIOExplicitCloneType(gen).asInstanceOf[this.type]\n}\n")),(0,l.kt)("p",null,"We can make this this infer cloneType by making ",(0,l.kt)("inlineCode",{parentName:"p"},"gen"),' private since it is a "type parameter":'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"import chisel3.util.{Decoupled, Irrevocable}\nclass RegisterWriteIO[T <: Data](private val gen: T) extends Bundle {\n  val request  = Flipped(Decoupled(gen))\n  val response = Irrevocable(Bool())\n}\n")))}u.isMDXComponent=!0}}]);