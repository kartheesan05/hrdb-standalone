exports.id=773,exports.ids=[773],exports.modules={4902:(e,s,t)=>{Promise.resolve().then(t.t.bind(t,59607,23))},39406:(e,s,t)=>{Promise.resolve().then(t.t.bind(t,28531,23))},27818:(e,s,t)=>{Promise.resolve().then(t.t.bind(t,13219,23)),Promise.resolve().then(t.t.bind(t,34863,23)),Promise.resolve().then(t.t.bind(t,25155,23)),Promise.resolve().then(t.t.bind(t,40802,23)),Promise.resolve().then(t.t.bind(t,9350,23)),Promise.resolve().then(t.t.bind(t,48530,23)),Promise.resolve().then(t.t.bind(t,88921,23))},90866:(e,s,t)=>{Promise.resolve().then(t.t.bind(t,66959,23)),Promise.resolve().then(t.t.bind(t,33875,23)),Promise.resolve().then(t.t.bind(t,88903,23)),Promise.resolve().then(t.t.bind(t,57174,23)),Promise.resolve().then(t.t.bind(t,84178,23)),Promise.resolve().then(t.t.bind(t,87190,23)),Promise.resolve().then(t.t.bind(t,61365,23))},76360:(e,s,t)=>{Promise.resolve().then(t.bind(t,34104)),Promise.resolve().then(t.bind(t,48713))},39912:(e,s,t)=>{Promise.resolve().then(t.bind(t,25612)),Promise.resolve().then(t.bind(t,6341))},25612:(e,s,t)=>{"use strict";t.d(s,{default:()=>n});var r=t(45512),a=t(11169);function n({children:e}){return(0,r.jsxs)(r.Fragment,{children:[e,(0,r.jsx)(a.i4,{height:"4px",color:"#1e40af",options:{showSpinner:!1},shallowRouting:!0})]})}},72505:(e,s,t)=>{"use strict";t.d(s,{default:()=>d});var r=t(45512),a=t(30722),n=t(11169),o=t(61038),l=t(58009),i=t(91542);let d=function(){let e=(0,n.rd)(),[s,t]=(0,l.useState)(null),[d,c]=(0,l.useState)(!1),[u,h]=(0,l.useState)(""),m=()=>{document.cookie="session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",localStorage.clear(),i.oR.error("Logged out :("),e.push("/login")},x=e=>`text-blue-800 cursor-pointer font-bold relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-blue-600 ${u===e?"after:w-full":"after:w-0 hover:after:w-full after:transition-all after:duration-300 after:ease-in-out hover:text-blue-600"}`;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("nav",{className:"fixed top-0 left-0 right-0 bg-white border-b border-gray-200 shadow-sm z-40",children:(0,r.jsxs)("div",{className:"max-w-screen px-4 mx-auto flex justify-between items-center h-16 relative",children:[(0,r.jsxs)("div",{className:"absolute left-4 flex items-center gap-2 cursor-pointer",onClick:()=>e.push("/"),children:[(0,r.jsx)("img",{src:"https://cdn.forese.co.in/forese-logo.png",alt:"Forese Logo",className:"h-[6rem] w-auto"}),(0,r.jsx)("h1",{className:"text-blue-800 text-2xl font-bold",children:"HR Database"})]}),(0,r.jsx)("button",{onClick:()=>c(!d),className:"md:hidden ml-auto p-2",children:(0,r.jsx)("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:d?(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"}):(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})}),("admin"===s||"incharge"===s||"volunteer"===s)&&(0,r.jsxs)("div",{className:"hidden md:flex gap-6 mx-auto items-center mt-1",children:[(0,r.jsx)("span",{onClick:()=>e.push("/"),className:x("/"),children:"Home"}),"admin"===s&&(0,r.jsx)("span",{onClick:()=>e.push("/add-user"),className:x("/add-user"),children:"Add User"}),("admin"===s||"incharge"===s)&&(0,r.jsx)("span",{onClick:()=>e.push("/stats"),className:x("/stats"),children:"Stats"}),(0,r.jsx)("span",{onClick:()=>e.push("/add-hr"),className:x("/add-hr"),children:"Add HR"}),(0,r.jsx)("span",{onClick:()=>e.push("/hr-pitch"),className:x("/hr-pitch"),children:"HR Pitch"}),(0,r.jsx)("span",{onClick:()=>e.push("/csv-upload"),className:x("/csv-upload"),children:"CSV Upload"})]}),(0,r.jsx)("div",{className:"hidden md:flex gap-2 absolute right-4",children:(0,r.jsxs)(o.$,{onClick:m,className:"bg-white hover:bg-blue-100 text-blue-800 border border-blue-200",children:[(0,r.jsx)(a.A,{className:"mr-2 h-4 w-4"}),"Logout"]})}),(0,r.jsxs)("div",{className:`${d?"flex":"hidden"} md:hidden absolute top-16 left-0 right-0 flex-col bg-white border-b border-gray-200 shadow-sm`,children:[("admin"===s||"incharge"===s||"volunteer"===s)&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{onClick:()=>{e.push("/"),c(!1)},className:`p-4 cursor-pointer font-bold ${"/"===u?"bg-blue-50":"hover:bg-blue-50"} text-blue-800`,children:"Home"}),"admin"===s&&(0,r.jsx)("span",{onClick:()=>{e.push("/add-user"),c(!1)},className:`p-4 cursor-pointer font-bold ${"/add-user"===u?"bg-blue-50":"hover:bg-blue-50"} text-blue-800`,children:"Add User"}),("admin"===s||"incharge"===s)&&(0,r.jsx)("span",{onClick:()=>{e.push("/stats"),c(!1)},className:`p-4 cursor-pointer font-bold ${"/stats"===u?"bg-blue-50":"hover:bg-blue-50"} text-blue-800`,children:"Stats"}),(0,r.jsx)("span",{onClick:()=>{e.push("/add-hr"),c(!1)},className:`p-4 cursor-pointer font-bold ${"/add-hr"===u?"bg-blue-50":"hover:bg-blue-50"} text-blue-800`,children:"Add HR"}),(0,r.jsx)("span",{onClick:()=>{e.push("/hr-pitch"),c(!1)},className:`p-4 cursor-pointer font-bold ${"/hr-pitch"===u?"bg-blue-50":"hover:bg-blue-50"} text-blue-800`,children:"HR Pitch"}),(0,r.jsx)("span",{onClick:()=>{e.push("/csv-upload"),c(!1)},className:`p-4 cursor-pointer font-bold ${"/csv-upload"===u?"bg-blue-50":"hover:bg-blue-50"} text-blue-800`,children:"CSV Upload"})]}),(0,r.jsxs)(o.$,{onClick:m,className:"m-4 bg-white hover:bg-blue-100 text-blue-800 border border-blue-200",children:[(0,r.jsx)(a.A,{className:"mr-2 h-4 w-4"}),"Logout"]})]})]})})})}},61038:(e,s,t)=>{"use strict";t.d(s,{$:()=>d,r:()=>i});var r=t(45512),a=t(58009),n=t(76660),o=t(32101),l=t(86645);let i=(0,o.F)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-neutral-300",{variants:{variant:{default:"bg-neutral-900 text-neutral-50 shadow hover:bg-neutral-900/90 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90",destructive:"bg-red-500 text-neutral-50 shadow-sm hover:bg-red-500/90 dark:bg-red-900 dark:text-neutral-50 dark:hover:bg-red-900/90",outline:"border border-neutral-200 bg-white shadow-sm hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",secondary:"bg-neutral-100 text-neutral-900 shadow-sm hover:bg-neutral-100/80 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80",ghost:"hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",link:"text-neutral-900 underline-offset-4 hover:underline dark:text-neutral-50"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),d=a.forwardRef(({className:e,variant:s,size:t,asChild:a=!1,...o},d)=>{let c=a?n.DX:"button";return(0,r.jsx)(c,{className:(0,l.cn)(i({variant:s,size:t,className:e})),ref:d,...o})});d.displayName="Button"},6341:(e,s,t)=>{"use strict";t.d(s,{Toaster:()=>o});var r=t(45512),a=t(3371),n=t(91542);let o=({...e})=>{let{theme:s="system"}=(0,a.D)();return(0,r.jsx)(n.l$,{theme:s,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-white group-[.toaster]:text-neutral-950 group-[.toaster]:border-neutral-200 group-[.toaster]:shadow-lg dark:group-[.toaster]:bg-neutral-950 dark:group-[.toaster]:text-neutral-50 dark:group-[.toaster]:border-neutral-800",description:"group-[.toast]:text-neutral-500 dark:group-[.toast]:text-neutral-400",actionButton:"group-[.toast]:bg-neutral-900 group-[.toast]:text-neutral-50 dark:group-[.toast]:bg-neutral-50 dark:group-[.toast]:text-neutral-900",cancelButton:"group-[.toast]:bg-neutral-100 group-[.toast]:text-neutral-500 dark:group-[.toast]:bg-neutral-800 dark:group-[.toast]:text-neutral-400"}},...e})}},86645:(e,s,t)=>{"use strict";t.d(s,{cn:()=>n});var r=t(82281),a=t(94805);function n(...e){return(0,a.QP)((0,r.$)(e))}},98180:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>l,metadata:()=>o});var r=t(62740);t(61135);var a=t(48713),n=t(34104);let o={title:"Forese HR Database",description:"Forese HR Database used for keeping track of HR contacts"};function l({children:e}){return(0,r.jsxs)("html",{lang:"en",children:[(0,r.jsx)("head",{children:(0,r.jsx)("link",{rel:"icon",href:"https://cdn.forese.co.in/icon.png",type:"image/png",sizes:"32x32"})}),(0,r.jsx)("body",{className:"bg-blue-50",children:(0,r.jsxs)(n.default,{children:[e,(0,r.jsx)(a.Toaster,{richColors:!0,theme:"light"})]})})]})}},76868:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>o});var r=t(62740),a=t(59607),n=t.n(a);let o=function(){return(0,r.jsxs)("div",{className:"min-h-screen w-full flex flex-col items-center justify-center",children:[(0,r.jsx)("div",{className:"main_wrapper",children:(0,r.jsxs)("div",{className:"main",children:[(0,r.jsxs)("div",{className:"antenna",children:[(0,r.jsx)("div",{className:"antenna_shadow"}),(0,r.jsx)("div",{className:"a1"}),(0,r.jsx)("div",{className:"a1d"}),(0,r.jsx)("div",{className:"a2"}),(0,r.jsx)("div",{className:"a2d"}),(0,r.jsx)("div",{className:"a_base"})]}),(0,r.jsxs)("div",{className:"tv",children:[(0,r.jsx)("div",{className:"cruve",children:(0,r.jsx)("svg",{xmlSpace:"preserve",viewBox:"0 0 189.929 189.929",xlinkHref:"http://www.w3.org/1999/xlink",xmlns:"http://www.w3.org/2000/svg",version:"1.1",className:"curve_svg",children:(0,r.jsx)("path",{d:"M70.343,70.343c-30.554,30.553-44.806,72.7-39.102,115.635l-29.738,3.951C-5.442,137.659,11.917,86.34,49.129,49.13 C86.34,11.918,137.664-5.445,189.928,1.502l-3.95,29.738C143.041,25.54,100.895,39.789,70.343,70.343z"})})}),(0,r.jsx)("div",{className:"display_div",children:(0,r.jsx)("div",{className:"screen_out",children:(0,r.jsx)("div",{className:"screen_out1",children:(0,r.jsx)("div",{className:"screen",children:(0,r.jsx)("span",{className:"notfound_text",children:" NOT FOUND"})})})})}),(0,r.jsxs)("div",{className:"lines",children:[(0,r.jsx)("div",{className:"line1"}),(0,r.jsx)("div",{className:"line2"}),(0,r.jsx)("div",{className:"line3"})]}),(0,r.jsxs)("div",{className:"buttons_div",children:[(0,r.jsx)("div",{className:"b1",children:(0,r.jsx)("div",{})}),(0,r.jsx)("div",{className:"b2"}),(0,r.jsxs)("div",{className:"speakers",children:[(0,r.jsxs)("div",{className:"g1",children:[(0,r.jsx)("div",{className:"g11"}),(0,r.jsx)("div",{className:"g12"}),(0,r.jsx)("div",{className:"g13"})]}),(0,r.jsx)("div",{className:"g"}),(0,r.jsx)("div",{className:"g"})]})]})]}),(0,r.jsxs)("div",{className:"bottom",children:[(0,r.jsx)("div",{className:"base1"}),(0,r.jsx)("div",{className:"base2"}),(0,r.jsx)("div",{className:"base3"})]})]})}),(0,r.jsxs)("div",{className:"text_404",children:[(0,r.jsx)("div",{className:"text_4041",children:"4"}),(0,r.jsx)("div",{className:"text_4042",children:"0"}),(0,r.jsx)("div",{className:"text_4043",children:"4"})]}),(0,r.jsxs)("p",{className:"text-xl mt-8 text-gray-700 text-center",children:["Oops! Looks like this channel isn't broadcasting.",(0,r.jsx)("br",{}),(0,r.jsx)("span",{className:"text-sm",children:"Please adjust your antenna or try a different frequency."})]}),(0,r.jsx)(n(),{href:"/",className:"mt-6 px-6 py-3 bg-[#d36604] text-white rounded-lg hover:bg-[#e69635] transition-colors duration-200 shadow-lg hover:shadow-xl",children:"Return to Home Channel"})]})}},34104:(e,s,t)=>{"use strict";t.d(s,{default:()=>r});let r=(0,t(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/jerry/projects/WebDev/forese/hrdb/src/components/ProgressBarProvider.jsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/jerry/projects/WebDev/forese/hrdb/src/components/ProgressBarProvider.jsx","default")},48713:(e,s,t)=>{"use strict";t.d(s,{Toaster:()=>r});let r=(0,t(46760).registerClientReference)(function(){throw Error("Attempted to call Toaster() from the server but Toaster is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/jerry/projects/WebDev/forese/hrdb/src/components/ui/sonner.jsx","Toaster")},61135:()=>{}};