"use strict";(self.webpackChunkwebsite_new=self.webpackChunkwebsite_new||[]).push([[3819],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,g=d["".concat(p,".").concat(u)]||d[u]||m[u]||i;return n?a.createElement(g,l(l({ref:t},c),{},{components:n})):a.createElement(g,l({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7102:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={layout:"docs",title:"Printing",section:"chisel3"},l="Printing in Chisel",o={unversionedId:"explanations/printing",id:"explanations/printing",title:"Printing",description:"Chisel provides the printf function for debugging purposes. It comes in two flavors:",source:"@site/docs/explanations/printing.md",sourceDirName:"explanations",slug:"/explanations/printing",permalink:"/chisel/docs/explanations/printing",draft:!1,editUrl:"https://github.com/chipsalliance/chisel/tree/main/docs/src/explanations/printing.md",tags:[],version:"current",frontMatter:{layout:"docs",title:"Printing",section:"chisel3"},sidebar:"tutorialSidebar",previous:{title:"Ports",permalink:"/chisel/docs/explanations/ports"},next:{title:"Properties",permalink:"/chisel/docs/explanations/properties"}},p={},s=[{value:"Scala-style",id:"scala-style",level:3},{value:"Simple formatting",id:"simple-formatting",level:4},{value:"Aggregate data-types",id:"aggregate-data-types",level:4},{value:"Custom Printing",id:"custom-printing",level:4},{value:"C-Style",id:"c-style",level:3}],c={toc:s},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"printing-in-chisel"},"Printing in Chisel"),(0,r.kt)("p",null,"Chisel provides the ",(0,r.kt)("inlineCode",{parentName:"p"},"printf")," function for debugging purposes. It comes in two flavors:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#scala-style"},"Scala-style")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#c-style"},"C-style"))),(0,r.kt)("h3",{id:"scala-style"},"Scala-style"),(0,r.kt)("p",null,"Chisel also supports printf in a style similar to ",(0,r.kt)("a",{parentName:"p",href:"http://docs.scala-lang.org/overviews/core/string-interpolation.html"},"Scala's String Interpolation"),". Chisel provides a custom string interpolator ",(0,r.kt)("inlineCode",{parentName:"p"},"cf")," which follows C-style format specifiers (see section ",(0,r.kt)("a",{parentName:"p",href:"#c-style"},"C-style")," below)."),(0,r.kt)("p",null,"Note that the Scala s-interpolator is not supported in Chisel constructs and will throw an error:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'class MyModule extends Module {\n  val in = IO(Input(UInt(8.W)))\n  printf(s"in = $in\\n")\n}\n// error: The s-interpolator prints the Scala .toString of Data objects rather than the value of the hardware wire during simulation. Use the cf-interpolator instead. If you want an elaboration time print, use println.\n//   printf(s"in = $in\\n")\n//   ^^^^^^^^^^^^^^^^^^^^^\n')),(0,r.kt)("p",null,"Instead, use Chisel's ",(0,r.kt)("inlineCode",{parentName:"p"},"cf")," interpolator as in the following examples:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'val myUInt = 33.U\nprintf(cf"myUInt = $myUInt") // myUInt = 33\n')),(0,r.kt)("p",null,"Note that when concatenating ",(0,r.kt)("inlineCode",{parentName:"p"},'cf"..."')," strings, you need to start with a ",(0,r.kt)("inlineCode",{parentName:"p"},'cf"..."')," string:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'// Does not interpolate the second string\nval myUInt = 33.U\nprintf("my normal string" + cf"myUInt = $myUInt")\n')),(0,r.kt)("h4",{id:"simple-formatting"},"Simple formatting"),(0,r.kt)("p",null,"Other formats are available as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'val myUInt = 33.U\n// Hexadecimal\nprintf(cf"myUInt = 0x$myUInt%x") // myUInt = 0x21 // myUInt = 0x21\n// Binary\nprintf(cf"myUInt = $myUInt%b") // myUInt = 100001 // myUInt = 100001\n// Character\nprintf(cf"myUInt = $myUInt%c") // myUInt = !\n')),(0,r.kt)("h4",{id:"aggregate-data-types"},"Aggregate data-types"),(0,r.kt)("p",null,'Chisel provides default custom "pretty-printing" for Vecs and Bundles. The default printing of a Vec is similar to printing a Seq or List in Scala while printing a Bundle is similar to printing a Scala Map.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'val myVec = VecInit(5.U, 10.U, 13.U)\nprintf(cf"myVec = $myVec") // myVec = Vec(5, 10, 13) // myVec = Vec(5, 10, 13)\n\nval myBundle = Wire(new Bundle {\n  val foo = UInt()\n  val bar = UInt()\n})\nmyBundle.foo := 3.U\nmyBundle.bar := 11.U\nprintf(cf"myBundle = $myBundle") // myBundle = Bundle(a -> 3, b -> 11)\n')),(0,r.kt)("h4",{id:"custom-printing"},"Custom Printing"),(0,r.kt)("p",null,"Chisel also provides the ability to specify ",(0,r.kt)("em",{parentName:"p"},"custom")," printing for user-defined Bundles."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'class Message extends Bundle {\n  val valid = Bool()\n  val addr = UInt(32.W)\n  val length = UInt(4.W)\n  val data = UInt(64.W)\n  override def toPrintable: Printable = {\n    val char = Mux(valid, \'v\'.U, \'-\'.U)\n    cf"Message:\\n" +\n    cf"  valid  : $char%c\\n" +\n    cf"  addr   : $addr%x\\n" +\n    cf"  length : $length\\n" +\n    cf"  data   : $data%x\\n"\n  }\n}\n\nval myMessage = Wire(new Message)\nmyMessage.valid := true.B\nmyMessage.addr := "h1234".U\nmyMessage.length := 10.U\nmyMessage.data := "hdeadbeef".U\n\nprintf(cf"$myMessage")\n')),(0,r.kt)("p",null,"Which prints the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Message:\n  valid  : v\n  addr   : 0x00001234\n  length : 10\n  data   : 0x00000000deadbeef\n")),(0,r.kt)("p",null,"Notice the use of ",(0,r.kt)("inlineCode",{parentName:"p"},"+")," between ",(0,r.kt)("inlineCode",{parentName:"p"},"cf"),' interpolated "strings". The results of ',(0,r.kt)("inlineCode",{parentName:"p"},"cf")," interpolation can be concatenated by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"+")," operator."),(0,r.kt)("h3",{id:"c-style"},"C-Style"),(0,r.kt)("p",null,"Chisel provides ",(0,r.kt)("inlineCode",{parentName:"p"},"printf")," in a similar style to its C namesake. It accepts a double-quoted format string and a variable number of arguments which will then be printed on rising clock edges. Chisel supports the following format specifiers:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Format Specifier"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Meaning"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"%d")),(0,r.kt)("td",{parentName:"tr",align:"center"},"decimal number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"%x")),(0,r.kt)("td",{parentName:"tr",align:"center"},"hexadecimal number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"%b")),(0,r.kt)("td",{parentName:"tr",align:"center"},"binary number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"%c")),(0,r.kt)("td",{parentName:"tr",align:"center"},"8-bit ASCII character")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"%%")),(0,r.kt)("td",{parentName:"tr",align:"center"},"literal percent")))),(0,r.kt)("p",null,"It also supports a small set of escape characters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Escape Character"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Meaning"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"\\n")),(0,r.kt)("td",{parentName:"tr",align:"center"},"newline")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"\\t")),(0,r.kt)("td",{parentName:"tr",align:"center"},"tab")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},'\\"')),(0,r.kt)("td",{parentName:"tr",align:"center"},"literal double quote")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"\\'")),(0,r.kt)("td",{parentName:"tr",align:"center"},"literal single quote")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"\\\\")),(0,r.kt)("td",{parentName:"tr",align:"center"},"literal backslash")))),(0,r.kt)("p",null,"Note that single quotes do not require escaping, but are legal to escape."),(0,r.kt)("p",null,"Thus printf can be used in a way very similar to how it is used in C:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'val myUInt = 32.U\nprintf("myUInt = %d", myUInt) // myUInt = 32\n')))}m.isMDXComponent=!0}}]);