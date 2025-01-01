(()=>{var e={};e.id=718,e.ids=[718],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},42449:e=>{"use strict";e.exports=require("pg")},55511:e=>{"use strict";e.exports=require("crypto")},29021:e=>{"use strict";e.exports=require("fs")},33873:e=>{"use strict";e.exports=require("path")},27910:e=>{"use strict";e.exports=require("stream")},74075:e=>{"use strict";e.exports=require("zlib")},4573:e=>{"use strict";e.exports=require("node:buffer")},77598:e=>{"use strict";e.exports=require("node:crypto")},57975:e=>{"use strict";e.exports=require("node:util")},34671:(e,r,s)=>{"use strict";s.r(r),s.d(r,{GlobalError:()=>n.a,__next_app__:()=>u,pages:()=>c,routeModule:()=>p,tree:()=>i});var t=s(70260),a=s(28203),l=s(25155),n=s.n(l),o=s(67292),d={};for(let e in o)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>o[e]);s.d(r,d);let i=["",{children:["add-user",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,52815)),"/Users/jerry/projects/WebDev/forese/hrdb/src/app/add-user/page.jsx"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,98180)),"/Users/jerry/projects/WebDev/forese/hrdb/src/app/layout.jsx"],"not-found":[()=>Promise.resolve().then(s.bind(s,76868)),"/Users/jerry/projects/WebDev/forese/hrdb/src/app/not-found.jsx"],forbidden:[()=>Promise.resolve().then(s.t.bind(s,69116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(s.t.bind(s,41485,23)),"next/dist/client/components/unauthorized-error"]}],c=["/Users/jerry/projects/WebDev/forese/hrdb/src/app/add-user/page.jsx"],u={require:s,loadChunk:()=>Promise.resolve()},p=new t.AppPageRouteModule({definition:{kind:a.RouteKind.APP_PAGE,page:"/add-user/page",pathname:"/add-user",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:i}})},80832:(e,r,s)=>{Promise.resolve().then(s.bind(s,83496)),Promise.resolve().then(s.bind(s,75061))},67680:(e,r,s)=>{Promise.resolve().then(s.bind(s,22022)),Promise.resolve().then(s.bind(s,72505))},22022:(e,r,s)=>{"use strict";s.d(r,{default:()=>p});var t=s(45512),a=s(61038),l=s(69576),n=s(36684),o=s(53266),d=s(27746),i=s(26248);let c=(0,i.createServerReference)("60c80fe8f9a89b6400737f21a1907e5c22ffa77827",i.callServer,void 0,i.findSourceMapURL,"addUser");var u=s(58009);function p(){let[e,r,s]=(0,u.useActionState)(c,{}),[i,p]=(0,u.useState)(""),m=async e=>{let s={name:e.get("name"),email:e.get("email"),password:e.get("password"),role:e.get("role"),inchargeEmail:e.get("inchargeEmail")};console.log("data",s),await r(s)};return(0,t.jsx)("div",{className:"min-h-screen flex items-center justify-center bg-blue-50",children:(0,t.jsxs)(l.Zp,{className:"w-full max-w-md",children:[(0,t.jsxs)(l.aR,{className:"space-y-1",children:[(0,t.jsx)(l.ZB,{className:"text-2xl font-bold text-center",children:"Add User"}),(0,t.jsx)(l.BT,{className:"text-center",children:"Enter the details to add a new user"})]}),(0,t.jsxs)("form",{action:m,children:[(0,t.jsxs)(l.Wu,{className:"space-y-4",children:[(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)(o.J,{htmlFor:"name",children:"Name"}),(0,t.jsx)(n.p,{id:"name",name:"name",type:"text",placeholder:"Enter name",required:!0,disabled:s})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)(o.J,{htmlFor:"email",children:"Email"}),(0,t.jsx)(n.p,{id:"email",name:"email",type:"email",placeholder:"user@example.com",required:!0,disabled:s})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)(o.J,{htmlFor:"password",children:"Password"}),(0,t.jsx)(n.p,{id:"password",name:"password",type:"password",placeholder:"Enter a strong password",required:!0,disabled:s})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)(o.J,{htmlFor:"role",children:"Role"}),(0,t.jsxs)(d.l6,{name:"role",required:!0,disabled:s,onValueChange:e=>p(e),children:[(0,t.jsx)(d.bq,{children:(0,t.jsx)(d.yv,{placeholder:"Select a role"})}),(0,t.jsxs)(d.gC,{children:[(0,t.jsx)(d.eb,{value:"volunteer",children:"Member"}),(0,t.jsx)(d.eb,{value:"incharge",children:"In Charge"}),(0,t.jsx)(d.eb,{value:"admin",children:"Admin"})]})]})]}),"volunteer"===i&&(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)(o.J,{htmlFor:"inchargeEmail",children:"Incharge Email"}),(0,t.jsx)(n.p,{id:"inchargeEmail",name:"inchargeEmail",type:"email",placeholder:"incharge@example.com",required:!0,disabled:s})]})]}),(0,t.jsxs)(l.wL,{className:"flex flex-col space-y-4",children:[e.errors&&(0,t.jsx)("div",{className:"text-red-500 text-sm text-center",children:"object"==typeof e.errors?Object.values(e.errors).join(", "):e.errors}),e.success&&(0,t.jsx)("div",{className:"text-green-500 text-sm text-center",children:"User added successfully"}),(0,t.jsx)(a.$,{type:"submit",className:"w-full bg-blue-800 hover:bg-blue-900 text-white",disabled:s,children:s?"Adding user...":"Add User"})]})]})]})})}},72505:(e,r,s)=>{"use strict";s.d(r,{default:()=>i});var t=s(45512),a=s(30722),l=s(11169),n=s(61038),o=s(58009),d=s(91542);let i=function(){let e=(0,l.rd)(),[r,s]=(0,o.useState)(null),[i,c]=(0,o.useState)(!1),[u,p]=(0,o.useState)(""),m=()=>{document.cookie="session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",localStorage.clear(),d.oR.error("Logged out :("),e.push("/login")},h=e=>`text-blue-800 cursor-pointer font-bold relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-blue-600 ${u===e?"after:w-full":"after:w-0 hover:after:w-full after:transition-all after:duration-300 after:ease-in-out hover:text-blue-600"}`;return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("nav",{className:"fixed top-0 left-0 right-0 bg-white border-b border-gray-200 shadow-sm z-40",children:(0,t.jsxs)("div",{className:"max-w-screen px-4 mx-auto flex justify-between items-center h-16 relative",children:[(0,t.jsxs)("div",{className:"absolute left-4 flex items-center gap-2 cursor-pointer",onClick:()=>e.push("/"),children:[(0,t.jsx)("img",{src:"https://cdn.forese.co.in/forese-logo.png",alt:"Forese Logo",className:"h-[6rem] w-auto"}),(0,t.jsx)("h1",{className:"text-blue-800 text-2xl font-bold",children:"HR Database"})]}),(0,t.jsx)("button",{onClick:()=>c(!i),className:"md:hidden ml-auto p-2",children:(0,t.jsx)("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:i?(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"}):(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})}),("admin"===r||"incharge"===r||"volunteer"===r)&&(0,t.jsxs)("div",{className:"hidden md:flex gap-6 mx-auto items-center mt-1",children:[(0,t.jsx)("span",{onClick:()=>e.push("/"),className:h("/"),children:"Home"}),"admin"===r&&(0,t.jsx)("span",{onClick:()=>e.push("/add-user"),className:h("/add-user"),children:"Add User"}),("admin"===r||"incharge"===r)&&(0,t.jsx)("span",{onClick:()=>e.push("/stats"),className:h("/stats"),children:"Stats"}),(0,t.jsx)("span",{onClick:()=>e.push("/add-hr"),className:h("/add-hr"),children:"Add HR"}),(0,t.jsx)("span",{onClick:()=>e.push("/hr-pitch"),className:h("/hr-pitch"),children:"HR Pitch"}),(0,t.jsx)("span",{onClick:()=>e.push("/csv-upload"),className:h("/csv-upload"),children:"CSV Upload"})]}),(0,t.jsx)("div",{className:"hidden md:flex gap-2 absolute right-4",children:(0,t.jsxs)(n.$,{onClick:m,className:"bg-white hover:bg-blue-100 text-blue-800 border border-blue-200",children:[(0,t.jsx)(a.A,{className:"mr-2 h-4 w-4"}),"Logout"]})}),(0,t.jsxs)("div",{className:`${i?"flex":"hidden"} md:hidden absolute top-16 left-0 right-0 flex-col bg-white border-b border-gray-200 shadow-sm`,children:[("admin"===r||"incharge"===r||"volunteer"===r)&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{onClick:()=>{e.push("/"),c(!1)},className:`p-4 cursor-pointer font-bold ${"/"===u?"bg-blue-50":"hover:bg-blue-50"} text-blue-800`,children:"Home"}),"admin"===r&&(0,t.jsx)("span",{onClick:()=>{e.push("/add-user"),c(!1)},className:`p-4 cursor-pointer font-bold ${"/add-user"===u?"bg-blue-50":"hover:bg-blue-50"} text-blue-800`,children:"Add User"}),("admin"===r||"incharge"===r)&&(0,t.jsx)("span",{onClick:()=>{e.push("/stats"),c(!1)},className:`p-4 cursor-pointer font-bold ${"/stats"===u?"bg-blue-50":"hover:bg-blue-50"} text-blue-800`,children:"Stats"}),(0,t.jsx)("span",{onClick:()=>{e.push("/add-hr"),c(!1)},className:`p-4 cursor-pointer font-bold ${"/add-hr"===u?"bg-blue-50":"hover:bg-blue-50"} text-blue-800`,children:"Add HR"}),(0,t.jsx)("span",{onClick:()=>{e.push("/hr-pitch"),c(!1)},className:`p-4 cursor-pointer font-bold ${"/hr-pitch"===u?"bg-blue-50":"hover:bg-blue-50"} text-blue-800`,children:"HR Pitch"}),(0,t.jsx)("span",{onClick:()=>{e.push("/csv-upload"),c(!1)},className:`p-4 cursor-pointer font-bold ${"/csv-upload"===u?"bg-blue-50":"hover:bg-blue-50"} text-blue-800`,children:"CSV Upload"})]}),(0,t.jsxs)(n.$,{onClick:m,className:"m-4 bg-white hover:bg-blue-100 text-blue-800 border border-blue-200",children:[(0,t.jsx)(a.A,{className:"mr-2 h-4 w-4"}),"Logout"]})]})]})})})}},36684:(e,r,s)=>{"use strict";s.d(r,{p:()=>n});var t=s(45512),a=s(58009),l=s(86645);let n=a.forwardRef(({className:e,type:r,...s},a)=>(0,t.jsx)("input",{type:r,className:(0,l.cn)("flex h-9 w-full rounded-md border border-neutral-200 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-neutral-950 placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:file:text-neutral-50 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300",e),ref:a,...s}));n.displayName="Input"},53266:(e,r,s)=>{"use strict";s.d(r,{J:()=>i});var t=s(45512),a=s(58009),l=s(90069),n=s(32101),o=s(86645);let d=(0,n.F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),i=a.forwardRef(({className:e,...r},s)=>(0,t.jsx)(l.b,{ref:s,className:(0,o.cn)(d(),e),...r}));i.displayName=l.b.displayName},27746:(e,r,s)=>{"use strict";s.d(r,{bq:()=>c,eb:()=>h,gC:()=>m,l6:()=>d,yv:()=>i});var t=s(45512),a=s(58009),l=s(42933),n=s(69132),o=s(86645);let d=n.bL;n.YJ;let i=n.WT,c=a.forwardRef(({className:e,children:r,...s},a)=>(0,t.jsxs)(n.l9,{ref:a,className:(0,o.cn)("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-neutral-200 bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-white placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 dark:border-neutral-800 dark:ring-offset-neutral-950 dark:placeholder:text-neutral-400 dark:focus:ring-neutral-300",e),...s,children:[r,(0,t.jsx)(n.In,{asChild:!0,children:(0,t.jsx)(l.TBE,{className:"h-4 w-4 opacity-50"})})]}));c.displayName=n.l9.displayName;let u=a.forwardRef(({className:e,...r},s)=>(0,t.jsx)(n.PP,{ref:s,className:(0,o.cn)("flex cursor-default items-center justify-center py-1",e),...r,children:(0,t.jsx)(l.Mtm,{})}));u.displayName=n.PP.displayName;let p=a.forwardRef(({className:e,...r},s)=>(0,t.jsx)(n.wn,{ref:s,className:(0,o.cn)("flex cursor-default items-center justify-center py-1",e),...r,children:(0,t.jsx)(l.D3D,{})}));p.displayName=n.wn.displayName;let m=a.forwardRef(({className:e,children:r,position:s="popper",...a},l)=>(0,t.jsx)(n.ZL,{children:(0,t.jsxs)(n.UC,{ref:l,className:(0,o.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border border-neutral-200 bg-white text-neutral-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50","popper"===s&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",e),position:s,...a,children:[(0,t.jsx)(u,{}),(0,t.jsx)(n.LM,{className:(0,o.cn)("p-1","popper"===s&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:r}),(0,t.jsx)(p,{})]})}));m.displayName=n.UC.displayName,a.forwardRef(({className:e,...r},s)=>(0,t.jsx)(n.JU,{ref:s,className:(0,o.cn)("px-2 py-1.5 text-sm font-semibold",e),...r})).displayName=n.JU.displayName;let h=a.forwardRef(({className:e,children:r,...s},a)=>(0,t.jsxs)(n.q7,{ref:a,className:(0,o.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-neutral-100 focus:text-neutral-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-neutral-800 dark:focus:text-neutral-50",e),...s,children:[(0,t.jsx)("span",{className:"absolute right-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,t.jsx)(n.VF,{children:(0,t.jsx)(l.Srz,{className:"h-4 w-4"})})}),(0,t.jsx)(n.p4,{children:r})]}));h.displayName=n.q7.displayName,a.forwardRef(({className:e,...r},s)=>(0,t.jsx)(n.wv,{ref:s,className:(0,o.cn)("-mx-1 my-1 h-px bg-neutral-100 dark:bg-neutral-800",e),...r})).displayName=n.wv.displayName},52815:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>n});var t=s(62740),a=s(83496),l=s(75061);let n=function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.default,{}),(0,t.jsx)(a.default,{})]})}},83496:(e,r,s)=>{"use strict";s.d(r,{default:()=>t});let t=(0,s(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/jerry/projects/WebDev/forese/hrdb/src/components/add-user.jsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/jerry/projects/WebDev/forese/hrdb/src/components/add-user.jsx","default")},75061:(e,r,s)=>{"use strict";s.d(r,{default:()=>t});let t=(0,s(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/jerry/projects/WebDev/forese/hrdb/src/components/navbar.jsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/jerry/projects/WebDev/forese/hrdb/src/components/navbar.jsx","default")},90069:(e,r,s)=>{"use strict";s.d(r,{b:()=>d});var t=s(58009);s(55740);var a=s(76660),l=s(45512),n=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,r)=>{let s=t.forwardRef((e,s)=>{let{asChild:t,...n}=e,o=t?a.DX:r;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,l.jsx)(o,{...n,ref:s})});return s.displayName=`Primitive.${r}`,{...e,[r]:s}},{}),o=t.forwardRef((e,r)=>(0,l.jsx)(n.label,{...e,ref:r,onMouseDown:r=>{r.target.closest("button, input, select, textarea")||(e.onMouseDown?.(r),!r.defaultPrevented&&r.detail>1&&r.preventDefault())}}));o.displayName="Label";var d=o}};var r=require("../../webpack-runtime.js");r.C(e);var s=e=>r(r.s=e),t=r.X(0,[740,264,179,70,132,468],()=>s(34671));module.exports=t})();