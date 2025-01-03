(()=>{var e={};e.id=520,e.ids=[520],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},42449:e=>{"use strict";e.exports=require("pg")},55511:e=>{"use strict";e.exports=require("crypto")},29021:e=>{"use strict";e.exports=require("fs")},33873:e=>{"use strict";e.exports=require("path")},27910:e=>{"use strict";e.exports=require("stream")},74075:e=>{"use strict";e.exports=require("zlib")},4573:e=>{"use strict";e.exports=require("node:buffer")},77598:e=>{"use strict";e.exports=require("node:crypto")},57975:e=>{"use strict";e.exports=require("node:util")},22453:(e,r,s)=>{"use strict";s.r(r),s.d(r,{GlobalError:()=>i.a,__next_app__:()=>u,pages:()=>c,routeModule:()=>p,tree:()=>d});var t=s(70260),a=s(28203),o=s(25155),i=s.n(o),n=s(67292),l={};for(let e in n)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);s.d(r,l);let d=["",{children:["login",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,97697)),"/Users/jerry/projects/WebDev/forese/hrdb/src/app/login/page.jsx"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,98180)),"/Users/jerry/projects/WebDev/forese/hrdb/src/app/layout.jsx"],"not-found":[()=>Promise.resolve().then(s.bind(s,76868)),"/Users/jerry/projects/WebDev/forese/hrdb/src/app/not-found.jsx"],forbidden:[()=>Promise.resolve().then(s.t.bind(s,69116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(s.t.bind(s,41485,23)),"next/dist/client/components/unauthorized-error"]}],c=["/Users/jerry/projects/WebDev/forese/hrdb/src/app/login/page.jsx"],u={require:s,loadChunk:()=>Promise.resolve()},p=new t.AppPageRouteModule({definition:{kind:a.RouteKind.APP_PAGE,page:"/login/page",pathname:"/login",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},2503:(e,r,s)=>{Promise.resolve().then(s.bind(s,91794))},32767:(e,r,s)=>{Promise.resolve().then(s.bind(s,13656))},13656:(e,r,s)=>{"use strict";s.d(r,{default:()=>h});var t=s(45512),a=s(58009),o=s(41680);let i=(0,o.A)("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]),n=(0,o.A)("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);var l=s(61038),d=s(69576),c=s(36684),u=s(53266),p=s(26248);let m=(0,p.createServerReference)("40a32e889f787033d34e43c010758396575bca3ded",p.callServer,void 0,p.findSourceMapURL,"login");var x=s(11169),f=s(91542);function h(){let[e,r]=(0,a.useState)(!1),[s,o]=(0,a.useTransition)(),[p,h]=(0,a.useState)(null),b=(0,x.rd)(),v=async e=>{e.preventDefault();let r=new FormData(e.target);o(async()=>{let e=await m(r);if(e.errors){h(e.errors);return}e.role&&localStorage.setItem("role",e.role),e.name&&localStorage.setItem("name",e.name),e.incharge&&localStorage.setItem("incharge",e.incharge),"Arunima"===e.name?f.oR.success("Login successful cutie :3!"):f.oR.success(`Login successful, ${e.name}!`),b.push("/")})};return(0,t.jsxs)("div",{className:"min-h-screen flex flex-col items-center bg-blue-50 p-4",children:[(0,t.jsx)("div",{className:"w-60 mt-16 mb-8 mr-10 min-h-36",children:(0,t.jsx)("img",{src:"/login-logo-small.png",alt:"Forese Logo"})}),(0,t.jsxs)(d.Zp,{className:"w-full max-w-md mx-auto",children:[(0,t.jsxs)(d.aR,{className:"space-y-1",children:[(0,t.jsx)(d.ZB,{className:"text-2xl font-bold text-center",children:"HR Database Login"}),(0,t.jsx)(d.BT,{className:"text-center",children:"Enter your email and password to login to your account"})]}),(0,t.jsxs)("form",{onSubmit:v,children:[(0,t.jsxs)(d.Wu,{className:"space-y-4",children:[(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)(u.J,{htmlFor:"email",children:"Email"}),(0,t.jsx)(c.p,{id:"email",name:"email",type:"email",placeholder:"user@example.com",required:!0})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)(u.J,{htmlFor:"password",children:"Password"}),(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsx)(c.p,{id:"password",name:"password",type:e?"text":"password",placeholder:"password",required:!0}),(0,t.jsx)(l.$,{type:"button",variant:"ghost",size:"icon",className:"absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent",onClick:()=>r(!e),"aria-label":e?"Hide password":"Show password",children:e?(0,t.jsx)(i,{className:"h-4 w-4 text-blue-800","aria-hidden":"true"}):(0,t.jsx)(n,{className:"h-4 w-4 text-blue-800","aria-hidden":"true"})})]})]})]}),(0,t.jsxs)(d.wL,{className:"flex flex-col space-y-4",children:[p&&(0,t.jsx)("div",{className:"text-red-500 text-sm text-center",children:"string"==typeof p?"invaliduser"===p?"Invalid email or password":p:Object.values(p).map((e,r)=>(0,t.jsx)("div",{children:e},r))}),(0,t.jsx)(l.$,{type:"submit",className:"w-full bg-blue-800 hover:bg-blue-900 text-white",disabled:s,children:s?"Logging in...":"Login"})]})]})]})]})}},36684:(e,r,s)=>{"use strict";s.d(r,{p:()=>i});var t=s(45512),a=s(58009),o=s(86645);let i=a.forwardRef(({className:e,type:r,...s},a)=>(0,t.jsx)("input",{type:r,className:(0,o.cn)("flex h-9 w-full rounded-md border border-neutral-200 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-neutral-950 placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:file:text-neutral-50 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300",e),ref:a,...s}));i.displayName="Input"},53266:(e,r,s)=>{"use strict";s.d(r,{J:()=>d});var t=s(45512),a=s(58009),o=s(90069),i=s(32101),n=s(86645);let l=(0,i.F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),d=a.forwardRef(({className:e,...r},s)=>(0,t.jsx)(o.b,{ref:s,className:(0,n.cn)(l(),e),...r}));d.displayName=o.b.displayName},97697:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>o});var t=s(62740),a=s(91794);let o=function(){return(0,t.jsx)(a.default,{})}},91794:(e,r,s)=>{"use strict";s.d(r,{default:()=>t});let t=(0,s(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/jerry/projects/WebDev/forese/hrdb/src/components/login-page.jsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/jerry/projects/WebDev/forese/hrdb/src/components/login-page.jsx","default")},90069:(e,r,s)=>{"use strict";s.d(r,{b:()=>l});var t=s(58009);s(55740);var a=s(76660),o=s(45512),i=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,r)=>{let s=t.forwardRef((e,s)=>{let{asChild:t,...i}=e,n=t?a.DX:r;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,o.jsx)(n,{...i,ref:s})});return s.displayName=`Primitive.${r}`,{...e,[r]:s}},{}),n=t.forwardRef((e,r)=>(0,o.jsx)(i.label,{...e,ref:r,onMouseDown:r=>{r.target.closest("button, input, select, textarea")||(e.onMouseDown?.(r),!r.defaultPrevented&&r.detail>1&&r.preventDefault())}}));n.displayName="Label";var l=n}};var r=require("../../webpack-runtime.js");r.C(e);var s=e=>r(r.s=e),t=r.X(0,[740,264,179,229],()=>s(22453));module.exports=t})();