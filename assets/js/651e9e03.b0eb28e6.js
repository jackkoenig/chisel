"use strict";(self.webpackChunkwebsite_new=self.webpackChunkwebsite_new||[]).push([[5734],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=c(t),h=i,m=p["".concat(s,".").concat(h)]||p[h]||u[h]||l;return t?a.createElement(m,o(o({ref:n},d),{},{components:t})):a.createElement(m,o({ref:n},d))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,o=new Array(l);o[0]=h;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r[p]="string"==typeof e?e:i,o[1]=r;for(var c=2;c<l;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},8793:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var a=t(7462),i=(t(7294),t(3905));const l={layout:"docs",title:"Blackboxes",section:"chisel3"},o="BlackBoxes",r={unversionedId:"explanations/blackboxes",id:"explanations/blackboxes",title:"Blackboxes",description:"Chisel BlackBoxes are used to instantiate externally defined modules. This construct is useful",source:"@site/docs/explanations/blackboxes.md",sourceDirName:"explanations",slug:"/explanations/blackboxes",permalink:"/chisel/docs/explanations/blackboxes",draft:!1,editUrl:"https://github.com/chipsalliance/chisel/tree/main/docs/src/explanations/blackboxes.md",tags:[],version:"current",frontMatter:{layout:"docs",title:"Blackboxes",section:"chisel3"},sidebar:"tutorialSidebar",previous:{title:"Annotations",permalink:"/chisel/docs/explanations/annotations"},next:{title:"Bundles and Vecs",permalink:"/chisel/docs/explanations/bundles-and-vecs"}},s={},c=[{value:"Parameterization",id:"parameterization",level:3},{value:"Providing Implementations for Blackboxes",id:"providing-implementations-for-blackboxes",level:3},{value:"Blackboxes with Verilog in a Resource File",id:"blackboxes-with-verilog-in-a-resource-file",level:3},{value:"Blackboxes with In-line Verilog",id:"blackboxes-with-in-line-verilog",level:3},{value:"Under the Hood",id:"under-the-hood",level:3}],d={toc:c},p="wrapper";function u(e){let{components:n,...t}=e;return(0,i.kt)(p,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"blackboxes"},"BlackBoxes"),(0,i.kt)("p",null,"Chisel ",(0,i.kt)("em",{parentName:"p"},"BlackBoxes")," are used to instantiate externally defined modules. This construct is useful\nfor hardware constructs that cannot be described in Chisel and for connecting to FPGA or other IP not defined in Chisel."),(0,i.kt)("p",null,"Modules defined as a ",(0,i.kt)("inlineCode",{parentName:"p"},"BlackBox")," will be instantiated in the generated Verilog, but no code\nwill be generated to define the behavior of module."),(0,i.kt)("p",null,"Unlike Module, ",(0,i.kt)("inlineCode",{parentName:"p"},"BlackBox")," has no implicit clock and reset.\n",(0,i.kt)("inlineCode",{parentName:"p"},"BlackBox"),"'s clock and reset ports must be explicitly declared and connected to input signals.\nPorts declared in the IO Bundle will be generated with the requested name (ie. no preceding ",(0,i.kt)("inlineCode",{parentName:"p"},"io_"),")."),(0,i.kt)("h3",{id:"parameterization"},"Parameterization"),(0,i.kt)("p",null,"Verilog parameters can be passed as an argument to the BlackBox constructor."),(0,i.kt)("p",null,"For example, consider instantiating a Xilinx differential clock buffer (IBUFDS) in a Chisel design:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import chisel3._\nimport chisel3.util._\nimport chisel3.experimental._ // To enable experimental features\n\nclass IBUFDS extends BlackBox(Map("DIFF_TERM" -> "TRUE",\n                                  "IOSTANDARD" -> "DEFAULT")) {\n  val io = IO(new Bundle {\n    val O = Output(Clock())\n    val I = Input(Clock())\n    val IB = Input(Clock())\n  })\n}\n\nclass Top extends Module {\n  val io = IO(new Bundle {})\n  val ibufds = Module(new IBUFDS)\n  // connecting one of IBUFDS\'s input clock ports to Top\'s clock signal\n  ibufds.io.I := clock\n}\n')),(0,i.kt)("p",null,"In the Chisel-generated Verilog code, ",(0,i.kt)("inlineCode",{parentName:"p"},"IBUFDS")," will be instantiated as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-verilog"},'IBUFDS #(.DIFF_TERM("TRUE"), .IOSTANDARD("DEFAULT")) ibufds (\n  .IB(ibufds_IB),\n  .I(ibufds_I),\n  .O(ibufds_O)\n);\n')),(0,i.kt)("h3",{id:"providing-implementations-for-blackboxes"},"Providing Implementations for Blackboxes"),(0,i.kt)("p",null,"Chisel provides the following ways of delivering the code underlying the blackbox.  Consider the following blackbox that\nadds two real numbers together.  The numbers are represented in chisel3 as 64-bit unsigned integers."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"import chisel3._\nclass BlackBoxRealAdd extends BlackBox {\n  val io = IO(new Bundle {\n    val in1 = Input(UInt(64.W))\n    val in2 = Input(UInt(64.W))\n    val out = Output(UInt(64.W))\n  })\n}\n")),(0,i.kt)("p",null,"The implementation is described by the following verilog"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-verilog"},"module BlackBoxRealAdd(\n    input  [63:0] in1,\n    input  [63:0] in2,\n    output reg [63:0] out\n);\n  always @* begin\n    out <= $realtobits($bitstoreal(in1) + $bitstoreal(in2));\n  end\nendmodule\n")),(0,i.kt)("h3",{id:"blackboxes-with-verilog-in-a-resource-file"},"Blackboxes with Verilog in a Resource File"),(0,i.kt)("p",null,"In order to deliver the verilog snippet above to the backend simulator, chisel3 provides the following tools based on the chisel/firrtl ",(0,i.kt)("a",{parentName:"p",href:"../explanations/annotations"},"annotation system"),".  Add the trait ",(0,i.kt)("inlineCode",{parentName:"p"},"HasBlackBoxResource")," to the declaration, and then call a function in the body to say where the system can find the verilog.  The Module now looks like"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import chisel3._\nimport chisel3.util.HasBlackBoxResource\n\nclass BlackBoxRealAdd extends BlackBox with HasBlackBoxResource {\n  val io = IO(new Bundle {\n    val in1 = Input(UInt(64.W))\n    val in2 = Input(UInt(64.W))\n    val out = Output(UInt(64.W))\n  })\n  addResource("/real_math.v")\n}\n')),(0,i.kt)("p",null,"The verilog snippet above gets put into a resource file names ",(0,i.kt)("inlineCode",{parentName:"p"},"real_math.v"),".  What is a resource file? It comes from\na java convention of keeping files in a project that are automatically included in library distributions. In a typical\nchisel3 project, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ucb-bar/chisel-template"},"chisel-template"),", this would be a directory in the\nsource hierarchy: ",(0,i.kt)("inlineCode",{parentName:"p"},"src/main/resources/real_math.v"),"."),(0,i.kt)("h3",{id:"blackboxes-with-in-line-verilog"},"Blackboxes with In-line Verilog"),(0,i.kt)("p",null,"It is also possible to place this verilog directly in the scala source.  Instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"HasBlackBoxResource")," use\n",(0,i.kt)("inlineCode",{parentName:"p"},"HasBlackBoxInline")," and instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"setResource")," use ",(0,i.kt)("inlineCode",{parentName:"p"},"setInline"),".  The code will look like this."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import chisel3._\nimport chisel3.util.HasBlackBoxInline\nclass BlackBoxRealAdd extends BlackBox with HasBlackBoxInline {\n  val io = IO(new Bundle {\n    val in1 = Input(UInt(64.W))\n    val in2 = Input(UInt(64.W))\n    val out = Output(UInt(64.W))\n  })\n  setInline("BlackBoxRealAdd.v",\n    """module BlackBoxRealAdd(\n      |    input  [15:0] in1,\n      |    input  [15:0] in2,\n      |    output [15:0] out\n      |);\n      |always @* begin\n      |  out <= $realtobits($bitstoreal(in1) + $bitstoreal(in2));\n      |end\n      |endmodule\n    """.stripMargin)\n}\n')),(0,i.kt)("p",null,"This technique will copy the inline verilog into the target directory under the name ",(0,i.kt)("inlineCode",{parentName:"p"},"BlackBoxRealAdd.v")),(0,i.kt)("h3",{id:"under-the-hood"},"Under the Hood"),(0,i.kt)("p",null,"This mechanism of delivering verilog content to the testing backends is implemented via chisel/firrtl annotations. The\ntwo methods, inline and resource, are two kinds of annotations that are created via the ",(0,i.kt)("inlineCode",{parentName:"p"},"setInline")," and\n",(0,i.kt)("inlineCode",{parentName:"p"},"setResource")," methods calls.  Those annotations are passed through to the chisel-testers which in turn passes them\non to firrtl.  The default firrtl verilog compilers have a pass that detects the annotations and moves the files or\ninline test into the build directory.  For each unique file added, the transform adds a line to a file\n",(0,i.kt)("inlineCode",{parentName:"p"},"black_box_verilog_files.f"),", this file is added to the command line constructed for verilator or vcs to inform them where\nto look.\nThe ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ucb-bar/dsptools"},"dsptools project")," is a good example of using this feature to build a real\nnumber simulation tester based on black boxes."))}u.isMDXComponent=!0}}]);