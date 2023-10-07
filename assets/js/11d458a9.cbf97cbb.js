"use strict";(self.webpackChunkwebsite_new=self.webpackChunkwebsite_new||[]).push([[7792],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var i=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,s=function(e,t){if(null==e)return{};var n,i,s={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var r=i.createContext({}),p=function(e){var t=i.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(r.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,r=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=s,h=u["".concat(r,".").concat(m)]||u[m]||d[m]||a;return n?i.createElement(h,l(l({ref:t},c),{},{components:n})):i.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,l=new Array(a);l[0]=m;var o={};for(var r in t)hasOwnProperty.call(t,r)&&(o[r]=t[r]);o.originalType=e,o[u]="string"==typeof e?e:s,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},223:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var i=n(7462),s=(n(7294),n(3905));const a={layout:"docs",title:"Reset",section:"chisel3"},l="Reset",o={unversionedId:"explanations/reset",id:"explanations/reset",title:"Reset",description:"As of Chisel 3.2.0, Chisel 3 supports both synchronous and asynchronous reset,",source:"@site/docs/explanations/reset.md",sourceDirName:"explanations",slug:"/explanations/reset",permalink:"/chisel/docs/explanations/reset",draft:!1,editUrl:"https://github.com/chipsalliance/chisel/tree/main/docs/src/explanations/reset.md",tags:[],version:"current",frontMatter:{layout:"docs",title:"Reset",section:"chisel3"},sidebar:"tutorialSidebar",previous:{title:"Properties",permalink:"/chisel/docs/explanations/properties"},next:{title:"Sequential Circuits",permalink:"/chisel/docs/explanations/sequential-circuits"}},r={},p=[{value:"Reset Inference",id:"reset-inference",level:3},{value:"Implicit Reset",id:"implicit-reset",level:3},{value:"Setting Implicit Reset Type",id:"setting-implicit-reset-type",level:4},{value:"Reset-Agnostic Code",id:"reset-agnostic-code",level:3},{value:"Forcing Reset Type",id:"forcing-reset-type",level:3},{value:"Last-Connect Semantics",id:"last-connect-semantics",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,s.kt)(u,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"reset"},"Reset"),(0,s.kt)("p",null,"As of Chisel 3.2.0, Chisel 3 supports both synchronous and asynchronous reset,\nmeaning that it can natively emit both synchronous and asynchronously reset registers."),(0,s.kt)("p",null,"The type of register that is emitted is based on the type of the reset signal associated\nwith the register."),(0,s.kt)("p",null,"There are three types of reset that implement a common trait ",(0,s.kt)("inlineCode",{parentName:"p"},"Reset"),":"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"Bool")," - constructed with ",(0,s.kt)("inlineCode",{parentName:"li"},"Bool()"),'. Also known as "synchronous reset".'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"AsyncReset")," - constructed with ",(0,s.kt)("inlineCode",{parentName:"li"},"AsyncReset()"),'. Also known as "asynchronous reset".'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"Reset")," - constructed with ",(0,s.kt)("inlineCode",{parentName:"li"},"Reset()"),'. Also known as "abstract reset".')),(0,s.kt)("p",null,"For implementation reasons, the concrete Scala type is ",(0,s.kt)("inlineCode",{parentName:"p"},"ResetType"),". Stylistically we avoid ",(0,s.kt)("inlineCode",{parentName:"p"},"ResetType"),", instead using the common trait ",(0,s.kt)("inlineCode",{parentName:"p"},"Reset"),"."),(0,s.kt)("p",null,"Registers with reset signals of type ",(0,s.kt)("inlineCode",{parentName:"p"},"Bool")," are emitted as synchronous reset flops.\nRegisters with reset signals of type ",(0,s.kt)("inlineCode",{parentName:"p"},"AsyncReset")," are emitted as asynchronouly reset flops.\nRegisters with reset signals of type ",(0,s.kt)("inlineCode",{parentName:"p"},"Reset")," will have their reset type ",(0,s.kt)("em",{parentName:"p"},"inferred")," during FIRRTL compilation."),(0,s.kt)("h3",{id:"reset-inference"},"Reset Inference"),(0,s.kt)("p",null,"FIRRTL will infer a concrete type for any signals of type abstract ",(0,s.kt)("inlineCode",{parentName:"p"},"Reset"),".\nThe rules are as follows:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"An abstract ",(0,s.kt)("inlineCode",{parentName:"li"},"Reset")," with only signals of type ",(0,s.kt)("inlineCode",{parentName:"li"},"AsyncReset"),", abstract ",(0,s.kt)("inlineCode",{parentName:"li"},"Reset"),", and ",(0,s.kt)("inlineCode",{parentName:"li"},"DontCare"),"\nin both its fan-in and fan-out will infer to be of type ",(0,s.kt)("inlineCode",{parentName:"li"},"AsyncReset")),(0,s.kt)("li",{parentName:"ol"},"An abstract ",(0,s.kt)("inlineCode",{parentName:"li"},"Reset")," with signals of both types ",(0,s.kt)("inlineCode",{parentName:"li"},"Bool")," and ",(0,s.kt)("inlineCode",{parentName:"li"},"AsyncReset")," in its fan-in and fan-out\nis an error."),(0,s.kt)("li",{parentName:"ol"},"Otherwise, an abstract ",(0,s.kt)("inlineCode",{parentName:"li"},"Reset")," will infer to type ",(0,s.kt)("inlineCode",{parentName:"li"},"Bool"),".")),(0,s.kt)("p",null,"You can think about (3) as the mirror of (1) replacing ",(0,s.kt)("inlineCode",{parentName:"p"},"AsyncReset")," with ",(0,s.kt)("inlineCode",{parentName:"p"},"Bool")," with the additional\nrule that abstract ",(0,s.kt)("inlineCode",{parentName:"p"},"Reset"),"s with neither ",(0,s.kt)("inlineCode",{parentName:"p"},"AsyncReset")," nor ",(0,s.kt)("inlineCode",{parentName:"p"},"Bool")," in their fan-in and fan-out will\ndefault to type ",(0,s.kt)("inlineCode",{parentName:"p"},"Bool"),'.\nThis "default" case is uncommon and implies that reset signal is ultimately driven by a ',(0,s.kt)("inlineCode",{parentName:"p"},"DontCare"),"."),(0,s.kt)("h3",{id:"implicit-reset"},"Implicit Reset"),(0,s.kt)("p",null,"A ",(0,s.kt)("inlineCode",{parentName:"p"},"Module"),"'s ",(0,s.kt)("inlineCode",{parentName:"p"},"reset")," is of type abstract ",(0,s.kt)("inlineCode",{parentName:"p"},"Reset"),".\nPrior to Chisel 3.2.0, the type of this field was ",(0,s.kt)("inlineCode",{parentName:"p"},"Bool"),".\nFor backwards compatability, if the top-level module has an implicit reset, its type will default to ",(0,s.kt)("inlineCode",{parentName:"p"},"Bool"),"."),(0,s.kt)("h4",{id:"setting-implicit-reset-type"},"Setting Implicit Reset Type"),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"New in Chisel 3.3.0")),(0,s.kt)("p",null,"If you would like to set the reset type from within a Module (including the top-level ",(0,s.kt)("inlineCode",{parentName:"p"},"Module"),"),\nrather than relying on ",(0,s.kt)("em",{parentName:"p"},"Reset Inference"),", you can mixin one of the following traits:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"RequireSyncReset")," - sets the type of ",(0,s.kt)("inlineCode",{parentName:"li"},"reset")," to ",(0,s.kt)("inlineCode",{parentName:"li"},"Bool")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"RequireAsyncReset")," - sets the type of ",(0,s.kt)("inlineCode",{parentName:"li"},"reset")," to ",(0,s.kt)("inlineCode",{parentName:"li"},"AsyncReset"))),(0,s.kt)("p",null,"For example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala"},"class MyAlwaysSyncResetModule extends Module with RequireSyncReset {\n  val mySyncResetReg = RegInit(false.B) // reset is of type Bool\n}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala"},"class MyAlwaysAsyncResetModule extends Module with RequireAsyncReset {\n  val myAsyncResetReg = RegInit(false.B) // reset is of type AsyncReset\n}\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Note:")," This sets the concrete type, but the Scala type will remain ",(0,s.kt)("inlineCode",{parentName:"p"},"Reset"),", so casting may still be necessary.\nThis comes up most often when using a reset of type ",(0,s.kt)("inlineCode",{parentName:"p"},"Bool")," in logic."),(0,s.kt)("h3",{id:"reset-agnostic-code"},"Reset-Agnostic Code"),(0,s.kt)("p",null,"The purpose of abstract ",(0,s.kt)("inlineCode",{parentName:"p"},"Reset")," is to make it possible to design hardware that is agnostic to the\nreset discipline used.\nThis enables code reuse for utilities and designs where the reset discipline does not matter to\nthe functionality of the block."),(0,s.kt)("p",null,"Consider the two example modules below which are agnostic to the type of reset used within them:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala"},"class ResetAgnosticModule extends Module {\n  val io = IO(new Bundle {\n    val out = UInt(4.W)\n  })\n  val resetAgnosticReg = RegInit(0.U(4.W))\n  resetAgnosticReg := resetAgnosticReg + 1.U\n  io.out := resetAgnosticReg\n}\n\nclass ResetAgnosticRawModule extends RawModule {\n  val clk = IO(Input(Clock()))\n  val rst = IO(Input(Reset()))\n  val out = IO(Output(UInt(8.W)))\n\n  val resetAgnosticReg = withClockAndReset(clk, rst)(RegInit(0.U(8.W)))\n  resetAgnosticReg := resetAgnosticReg + 1.U\n  out := resetAgnosticReg\n}\n")),(0,s.kt)("p",null,"These modules can be used in both synchronous and asynchronous reset domains.\nTheir reset types will be inferred based on the context within which they are used."),(0,s.kt)("h3",{id:"forcing-reset-type"},"Forcing Reset Type"),(0,s.kt)("p",null,"You can set the type of a Module's implicit reset as described ",(0,s.kt)("a",{parentName:"p",href:"#setting-implicit-reset-type"},"above"),"."),(0,s.kt)("p",null,"You can also cast to force the concrete type of reset."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},".asBool")," will reinterpret a ",(0,s.kt)("inlineCode",{parentName:"li"},"Reset")," as ",(0,s.kt)("inlineCode",{parentName:"li"},"Bool")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},".asAsyncReset")," will reinterpret a ",(0,s.kt)("inlineCode",{parentName:"li"},"Reset")," as ",(0,s.kt)("inlineCode",{parentName:"li"},"AsyncReset"),".")),(0,s.kt)("p",null,"You can then use ",(0,s.kt)("inlineCode",{parentName:"p"},"withReset")," to use a cast reset as the implicit reset.\nSee ",(0,s.kt)("a",{parentName:"p",href:"../explanations/multi-clock"},'"Multiple Clock Domains"')," for more information about ",(0,s.kt)("inlineCode",{parentName:"p"},"withReset"),"."),(0,s.kt)("p",null,"The following will make ",(0,s.kt)("inlineCode",{parentName:"p"},"myReg")," as well as both ",(0,s.kt)("inlineCode",{parentName:"p"},"resetAgnosticReg"),"s synchronously reset:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala"},"class ForcedSyncReset extends Module {\n  // withReset's argument becomes the implicit reset in its scope\n  withReset (reset.asBool) {\n    val myReg = RegInit(0.U)\n    val myModule = Module(new ResetAgnosticModule)\n\n    // RawModules do not have implicit resets so withReset has no effect\n    val myRawModule = Module(new ResetAgnosticRawModule)\n    // We must drive the reset port manually\n    myRawModule.rst := Module.reset // Module.reset grabs the current implicit reset\n  }\n}\n")),(0,s.kt)("p",null,"The following will make ",(0,s.kt)("inlineCode",{parentName:"p"},"myReg")," as well as both ",(0,s.kt)("inlineCode",{parentName:"p"},"resetAgnosticReg"),"s asynchronously reset:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala"},"class ForcedAysncReset extends Module {\n  // withReset's argument becomes the implicit reset in its scope\n  withReset (reset.asAsyncReset){\n    val myReg = RegInit(0.U)\n    val myModule = Module(new ResetAgnosticModule) // myModule.reset is connected implicitly\n\n    // RawModules do not have implicit resets so withReset has no effect\n    val myRawModule = Module(new ResetAgnosticRawModule)\n    // We must drive the reset port manually\n    myRawModule.rst := Module.reset // Module.reset grabs the current implicit reset\n  }\n}\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Note:")," such casts (",(0,s.kt)("inlineCode",{parentName:"p"},"asBool")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"asAsyncReset"),") are not checked by FIRRTL.\nIn doing such a cast, you as the designer are effectively telling the compiler\nthat you know what you are doing and to force the type as cast."),(0,s.kt)("h3",{id:"last-connect-semantics"},"Last-Connect Semantics"),(0,s.kt)("p",null,"It is ",(0,s.kt)("strong",{parentName:"p"},"not")," legal to override the reset type using last-connect semantics\nunless you are overriding a ",(0,s.kt)("inlineCode",{parentName:"p"},"DontCare"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala"},"class MyModule extends Module {\n  val resetBool = Wire(Reset())\n  resetBool := DontCare\n  resetBool := false.B // this is fine\n  withReset(resetBool) {\n    val mySubmodule = Module(new Submodule())\n  }\n  resetBool := true.B // this is fine\n  resetBool := false.B.asAsyncReset // this will error in FIRRTL\n}\n")))}d.isMDXComponent=!0}}]);