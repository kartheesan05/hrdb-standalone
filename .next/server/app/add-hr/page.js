(()=>{var e={};e.id=183,e.ids=[183],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},42449:e=>{"use strict";e.exports=require("pg")},55511:e=>{"use strict";e.exports=require("crypto")},29021:e=>{"use strict";e.exports=require("fs")},33873:e=>{"use strict";e.exports=require("path")},27910:e=>{"use strict";e.exports=require("stream")},74075:e=>{"use strict";e.exports=require("zlib")},4573:e=>{"use strict";e.exports=require("node:buffer")},77598:e=>{"use strict";e.exports=require("node:crypto")},57975:e=>{"use strict";e.exports=require("node:util")},6121:(e,r,s)=>{"use strict";s.r(r),s.d(r,{GlobalError:()=>l.a,__next_app__:()=>u,pages:()=>c,routeModule:()=>m,tree:()=>d});var a=s(70260),t=s(28203),n=s(25155),l=s.n(n),i=s(67292),o={};for(let e in i)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>i[e]);s.d(r,o);let d=["",{children:["add-hr",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,2762)),"/Users/jerry/projects/WebDev/forese/hrdb/src/app/add-hr/page.jsx"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,98180)),"/Users/jerry/projects/WebDev/forese/hrdb/src/app/layout.jsx"],"not-found":[()=>Promise.resolve().then(s.bind(s,76868)),"/Users/jerry/projects/WebDev/forese/hrdb/src/app/not-found.jsx"],forbidden:[()=>Promise.resolve().then(s.t.bind(s,69116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(s.t.bind(s,41485,23)),"next/dist/client/components/unauthorized-error"]}],c=["/Users/jerry/projects/WebDev/forese/hrdb/src/app/add-hr/page.jsx"],u={require:s,loadChunk:()=>Promise.resolve()},m=new a.AppPageRouteModule({definition:{kind:t.RouteKind.APP_PAGE,page:"/add-hr/page",pathname:"/add-hr",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},19831:(e,r,s)=>{Promise.resolve().then(s.bind(s,95159)),Promise.resolve().then(s.bind(s,75061))},24559:(e,r,s)=>{Promise.resolve().then(s.bind(s,89928)),Promise.resolve().then(s.bind(s,72505))},89928:(e,r,s)=>{"use strict";s.d(r,{default:()=>f});var a=s(45512),t=s(58009),n=s(11169),l=s(61038),i=s(69576),o=s(36684),d=s(53266),c=s(22348),u=s(21030),m=s(27746),h=s(26248);let p=(0,h.createServerReference)("40ba612a8c87c4365687ae1c17a603b4a40805b48e",h.callServer,void 0,h.findSourceMapURL,"addHrRecord");var x=s(94754);let b=["arunima@forese.co.in","jhalak@forese.co.in","karthik@forese.co.in","sandhya@forese.co.in","sanjana@forese.co.in"];function f(){let[e,r]=(0,t.useState)({hr_name:"",volunteer:"",volunteer_email:"",incharge:"",incharge_email:"",company:"",email:"",phone_number:"",status:"Not_Called",interview_mode:"Not Confirmed",hr_count:1,transport:"",address:"",internship:"No",comments:""}),[s,h]=(0,t.useState)(!1),[f,g]=(0,t.useState)(!1),v=(0,n.rd)(),[j,N]=(0,t.useState)(null),[y,w]=(0,t.useTransition)(),_=e=>{let{name:s,value:a}=e.target;r(e=>({...e,[s]:a}))},C=(e,s)=>{r(r=>({...r,[e]:s}))},k=async s=>{s.preventDefault(),h(!0),g(!1),N(null);let a=x.CR.safeParse({hr_name:e.hr_name,phone_number:e.phone_number,email:e.email,interview_mode:e.interview_mode,company:e.company,volunteer:e.volunteer,incharge:e.incharge,status:e.status,hr_count:e.hr_count,transport:e.transport,address:e.address,internship:e.internship,comments:e.comments});if(!a.success){N(a.error.flatten().fieldErrors),h(!1);return}try{console.log(a.data),w(async()=>{let r=await p({...a.data,volunteer_email:e.volunteer_email,incharge_email:e.incharge_email});if(r.errors){N(r.errors),h(!1);return}g(!0)}),r({hr_name:"",volunteer:"",incharge:"",company:"",email:"",phone_number:"",status:"Not_Called",interview_mode:"Not Confirmed",hr_count:1,transport:"",address:"",internship:"No",comments:"",volunteer_email:"",incharge_email:""})}catch(e){N("An error occurred while adding the HR record. Please try again.")}finally{h(!1)}},[R,q]=(0,t.useState)(null);return(0,a.jsxs)("div",{className:"min-h-screen w-screen p-[75px] bg-blue-50 relative",children:[(0,a.jsxs)(i.Zp,{className:"mb-6 border-blue-200 shadow-blue-100 rounded-lg",children:[(0,a.jsx)(i.aR,{className:"bg-blue-100 rounded-t-lg mb-4",children:(0,a.jsx)(i.ZB,{className:"text-blue-800 text-center text-3xl font-bold",children:"Add New HR Record"})}),(0,a.jsx)(i.Wu,{className:"bg-white rounded-lg",children:(0,a.jsxs)("form",{onSubmit:k,className:"space-y-4",children:[(0,a.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)(d.J,{htmlFor:"hr_name",children:"HR Name*"}),(0,a.jsx)(o.p,{id:"hr_name",name:"hr_name",value:e.hr_name,onChange:_,className:"focus:ring-blue-500",required:!0})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(d.J,{htmlFor:"phone_number",children:"Phone Number*"}),(0,a.jsx)(o.p,{id:"phone_number",name:"phone_number",value:e.phone_number,onChange:_,className:"focus:ring-blue-500",required:!0})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(d.J,{htmlFor:"email",children:"Email"}),(0,a.jsx)(o.p,{id:"email",name:"email",type:"email",value:e.email,onChange:_,className:"focus:ring-blue-500"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(d.J,{children:"Interview Mode"}),(0,a.jsxs)(m.l6,{value:e.interview_mode,onValueChange:e=>C("interview_mode",e),children:[(0,a.jsx)(m.bq,{className:"focus:ring-blue-500",children:(0,a.jsx)(m.yv,{placeholder:"Interview Mode"})}),(0,a.jsxs)(m.gC,{children:[(0,a.jsx)(m.eb,{value:"Not Confirmed",children:"Not Confirmed"}),(0,a.jsx)(m.eb,{value:"Online",children:"Online"}),(0,a.jsx)(m.eb,{value:"In-person",children:"In-person"}),(0,a.jsx)(m.eb,{value:"Both",children:"Both"})]})]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(d.J,{htmlFor:"company",children:"Company*"}),(0,a.jsx)(o.p,{id:"company",name:"company",value:e.company,onChange:_,className:"focus:ring-blue-500",required:!0})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(d.J,{htmlFor:"volunteer",children:"Member*"}),(0,a.jsx)(o.p,{id:"volunteer",name:"volunteer",value:e.volunteer,onChange:_,className:"focus:ring-blue-500",required:!0})]}),("incharge"===R||"admin"===R)&&(0,a.jsxs)("div",{children:[(0,a.jsx)(d.J,{htmlFor:"volunteer_email",children:"Member Email*"}),(0,a.jsx)(o.p,{id:"volunteer_email",name:"volunteer_email",type:"email",value:e.volunteer_email,onChange:_,className:"focus:ring-blue-500",required:!0})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(d.J,{htmlFor:"incharge",children:"Incharge*"}),(0,a.jsx)(o.p,{id:"incharge",name:"incharge",value:e.incharge,onChange:_,className:"focus:ring-blue-500",required:!0})]}),"admin"===R&&(0,a.jsxs)("div",{children:[(0,a.jsx)(d.J,{htmlFor:"incharge_email",children:"Incharge Email*"}),(0,a.jsxs)(m.l6,{value:e.incharge_email,onValueChange:e=>C("incharge_email",e),required:!0,children:[(0,a.jsx)(m.bq,{className:"focus:ring-blue-500",children:(0,a.jsx)(m.yv,{placeholder:"Select incharge email"})}),(0,a.jsx)(m.gC,{children:b.map(e=>(0,a.jsx)(m.eb,{value:e,children:e},e))})]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(d.J,{htmlFor:"status",children:"Status"}),(0,a.jsxs)(m.l6,{value:e.status,onValueChange:e=>C("status",e),children:[(0,a.jsx)(m.bq,{className:"focus:ring-blue-500",children:(0,a.jsx)(m.yv,{placeholder:"Select status"})}),(0,a.jsxs)(m.gC,{children:[(0,a.jsx)(m.eb,{value:"Pending",children:"Pending"}),(0,a.jsx)(m.eb,{value:"Active",children:"Accepted Invite"}),(0,a.jsx)(m.eb,{value:"Inactive",children:"Called Declined"}),(0,a.jsx)(m.eb,{value:"Emailed_Declined",children:"Emailed Declined"}),(0,a.jsx)(m.eb,{value:"Email_Sent",children:"Email Sent"}),(0,a.jsx)(m.eb,{value:"Not_Called",children:"Not Called"}),(0,a.jsx)(m.eb,{value:"Blacklisted",children:"Blacklisted"}),(0,a.jsx)(m.eb,{value:"Not_Reachable",children:"Not Reachable"}),(0,a.jsx)(m.eb,{value:"Wrong_Number",children:"Wrong Number"}),(0,a.jsx)(m.eb,{value:"Called_Postponed",children:"Called Postponed"})]})]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(d.J,{htmlFor:"hr_count",children:"HR Count*"}),(0,a.jsx)(o.p,{id:"hr_count",name:"hr_count",type:"number",min:"1",value:e.hr_count,onChange:_,className:"focus:ring-blue-500",required:!0})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(d.J,{htmlFor:"transport",children:"Transport"}),(0,a.jsx)(o.p,{id:"transport",name:"transport",value:e.transport,onChange:_,className:"focus:ring-blue-500"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(d.J,{htmlFor:"address",children:"Address"}),(0,a.jsx)(o.p,{id:"address",name:"address",value:e.address,onChange:_,className:"focus:ring-blue-500"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(d.J,{htmlFor:"internship",children:"Internship"}),(0,a.jsxs)(m.l6,{value:e.internship,onValueChange:e=>C("internship",e),children:[(0,a.jsx)(m.bq,{className:"focus:ring-blue-500",children:(0,a.jsx)(m.yv,{placeholder:"Select internship"})}),(0,a.jsxs)(m.gC,{children:[(0,a.jsx)(m.eb,{value:"Yes",children:"Yes"}),(0,a.jsx)(m.eb,{value:"No",children:"No"})]})]})]})]}),(0,a.jsxs)("div",{className:"mt-4",children:[(0,a.jsx)(d.J,{htmlFor:"comments",children:"Comments"}),(0,a.jsx)(c.T,{id:"comments",name:"comments",value:e.comments,onChange:_,className:"focus:ring-blue-500 min-h-[100px]"})]}),(0,a.jsx)(l.$,{type:"submit",className:"w-full bg-blue-800 hover:bg-blue-900",disabled:s||y,children:s||y?"Adding...":"Add HR Record"})]})})]}),j&&(0,a.jsxs)(u.Fc,{variant:"destructive",className:"mb-6 bg-red-100 border-red-400 text-red-700",children:[(0,a.jsx)(u.XL,{children:"Error"}),(0,a.jsx)(u.TN,{children:"string"==typeof j?j:Object.values(j).flat().join(", ")})]}),f&&(0,a.jsxs)(u.Fc,{className:"mb-6 bg-green-100 border-green-400 text-green-700",children:[(0,a.jsx)(u.XL,{children:"Success"}),(0,a.jsx)(u.TN,{children:"HR record has been successfully added."})]}),(0,a.jsx)(l.$,{onClick:()=>v.push("/"),className:"mt-4 bg-white hover:bg-blue-100 text-blue-800 border border-neutral-200 dark:border-neutral-800",children:"Back to HR Database"})]})}},72505:(e,r,s)=>{"use strict";s.d(r,{default:()=>d});var a=s(45512),t=s(30722),n=s(11169),l=s(61038),i=s(58009),o=s(91542);let d=function(){let e=(0,n.rd)(),[r,s]=(0,i.useState)(null),[d,c]=(0,i.useState)(!1),[u,m]=(0,i.useState)(""),[h,p]=(0,i.useState)(null),x=()=>{document.cookie="session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",localStorage.clear(),o.oR.error("Logged out :("),e.push("/login")},b=e=>`text-blue-800 cursor-pointer font-bold relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-blue-600 ${u===e?"after:w-full":"after:w-0 hover:after:w-full after:transition-all after:duration-300 after:ease-in-out hover:text-blue-600"}`;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("nav",{className:"fixed top-0 left-0 right-0 bg-white border-b border-gray-200 shadow-sm z-40",children:(0,a.jsxs)("div",{className:"max-w-screen px-4 mx-auto flex justify-between items-center h-16 relative",children:[(0,a.jsxs)("div",{className:"absolute left-4 flex items-center gap-2 cursor-pointer",onClick:()=>e.push("/"),children:[(0,a.jsx)("div",{className:"h-[6rem] w-[6rem]",children:(0,a.jsx)("img",{src:"/forese-logo-small.png",alt:"Forese Logo",className:"h-[6rem] w-auto"})}),(0,a.jsx)("h1",{className:"text-blue-800 text-2xl font-bold",children:h?"\uD83D\uDE36‍\uD83C\uDF2B️":"HR Database"})]}),(0,a.jsx)("button",{onClick:()=>c(!d),className:"md:hidden ml-auto p-2",children:(0,a.jsx)("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:d?(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"}):(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})}),("admin"===r||"incharge"===r||"volunteer"===r)&&(0,a.jsxs)("div",{className:"hidden md:flex gap-6 mx-auto items-center mt-1",children:[(0,a.jsx)("span",{onClick:()=>e.push("/"),className:b("/"),children:"Home"}),"admin"===r&&(0,a.jsx)("span",{onClick:()=>e.push("/add-user"),className:b("/add-user"),children:"Add User"}),(0,a.jsx)("span",{onClick:()=>e.push("/stats"),className:b("/stats"),children:"Stats"}),(0,a.jsx)("span",{onClick:()=>e.push("/add-hr"),className:b("/add-hr"),children:"Add HR"}),(0,a.jsx)("span",{onClick:()=>e.push("/hr-pitch"),className:b("/hr-pitch"),children:"HR Pitch"}),(0,a.jsx)("span",{onClick:()=>e.push("/csv-upload"),className:b("/csv-upload"),children:"CSV Upload"})]}),(0,a.jsx)("div",{className:"hidden md:flex gap-2 absolute right-4",children:(0,a.jsxs)(l.$,{onClick:x,className:"bg-white hover:bg-blue-100 text-blue-800 border ",children:[(0,a.jsx)(t.A,{className:"mr-2 h-4 w-4"}),"Logout"]})}),(0,a.jsxs)("div",{className:`${d?"flex":"hidden"} md:hidden absolute top-16 left-0 right-0 flex-col bg-white border-b border-gray-200 shadow-sm`,children:[("admin"===r||"incharge"===r||"volunteer"===r)&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{onClick:()=>{e.push("/"),c(!1)},className:`p-4 cursor-pointer font-bold ${"/"===u?"bg-blue-50":"hover:bg-blue-50"} text-blue-800`,children:"Home"}),"admin"===r&&(0,a.jsx)("span",{onClick:()=>{e.push("/add-user"),c(!1)},className:`p-4 cursor-pointer font-bold ${"/add-user"===u?"bg-blue-50":"hover:bg-blue-50"} text-blue-800`,children:"Add User"}),("admin"===r||"incharge"===r)&&(0,a.jsx)("span",{onClick:()=>{e.push("/stats"),c(!1)},className:`p-4 cursor-pointer font-bold ${"/stats"===u?"bg-blue-50":"hover:bg-blue-50"} text-blue-800`,children:"Stats"}),(0,a.jsx)("span",{onClick:()=>{e.push("/add-hr"),c(!1)},className:`p-4 cursor-pointer font-bold ${"/add-hr"===u?"bg-blue-50":"hover:bg-blue-50"} text-blue-800`,children:"Add HR"}),(0,a.jsx)("span",{onClick:()=>{e.push("/hr-pitch"),c(!1)},className:`p-4 cursor-pointer font-bold ${"/hr-pitch"===u?"bg-blue-50":"hover:bg-blue-50"} text-blue-800`,children:"HR Pitch"}),(0,a.jsx)("span",{onClick:()=>{e.push("/csv-upload"),c(!1)},className:`p-4 cursor-pointer font-bold ${"/csv-upload"===u?"bg-blue-50":"hover:bg-blue-50"} text-blue-800`,children:"CSV Upload"})]}),(0,a.jsxs)(l.$,{onClick:x,className:"m-4 bg-white hover:bg-blue-100 text-blue-800 border",children:[(0,a.jsx)(t.A,{className:"mr-2 h-4 w-4"}),"Logout"]})]})]})})})}},21030:(e,r,s)=>{"use strict";s.d(r,{Fc:()=>o,TN:()=>c,XL:()=>d});var a=s(45512),t=s(58009),n=s(32101),l=s(86645);let i=(0,n.F)("relative w-full rounded-lg border border-neutral-200 px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-neutral-950 [&>svg~*]:pl-7 dark:border-neutral-800 dark:[&>svg]:text-neutral-50",{variants:{variant:{default:"bg-white text-neutral-950 dark:bg-neutral-950 dark:text-neutral-50",destructive:"border-red-500/50 text-red-500 dark:border-red-500 [&>svg]:text-red-500 dark:border-red-900/50 dark:text-red-900 dark:dark:border-red-900 dark:[&>svg]:text-red-900"}},defaultVariants:{variant:"default"}}),o=t.forwardRef(({className:e,variant:r,...s},t)=>(0,a.jsx)("div",{ref:t,role:"alert",className:(0,l.cn)(i({variant:r}),e),...s}));o.displayName="Alert";let d=t.forwardRef(({className:e,...r},s)=>(0,a.jsx)("h5",{ref:s,className:(0,l.cn)("mb-1 font-medium leading-none tracking-tight",e),...r}));d.displayName="AlertTitle";let c=t.forwardRef(({className:e,...r},s)=>(0,a.jsx)("div",{ref:s,className:(0,l.cn)("text-sm [&_p]:leading-relaxed",e),...r}));c.displayName="AlertDescription"},36684:(e,r,s)=>{"use strict";s.d(r,{p:()=>l});var a=s(45512),t=s(58009),n=s(86645);let l=t.forwardRef(({className:e,type:r,...s},t)=>(0,a.jsx)("input",{type:r,className:(0,n.cn)("flex h-9 w-full rounded-md border border-neutral-200 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-neutral-950 placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:file:text-neutral-50 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300",e),ref:t,...s}));l.displayName="Input"},53266:(e,r,s)=>{"use strict";s.d(r,{J:()=>d});var a=s(45512),t=s(58009),n=s(90069),l=s(32101),i=s(86645);let o=(0,l.F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),d=t.forwardRef(({className:e,...r},s)=>(0,a.jsx)(n.b,{ref:s,className:(0,i.cn)(o(),e),...r}));d.displayName=n.b.displayName},27746:(e,r,s)=>{"use strict";s.d(r,{bq:()=>c,eb:()=>p,gC:()=>h,l6:()=>o,yv:()=>d});var a=s(45512),t=s(58009),n=s(42933),l=s(69132),i=s(86645);let o=l.bL;l.YJ;let d=l.WT,c=t.forwardRef(({className:e,children:r,...s},t)=>(0,a.jsxs)(l.l9,{ref:t,className:(0,i.cn)("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-neutral-200 bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-white placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 dark:border-neutral-800 dark:ring-offset-neutral-950 dark:placeholder:text-neutral-400 dark:focus:ring-neutral-300",e),...s,children:[r,(0,a.jsx)(l.In,{asChild:!0,children:(0,a.jsx)(n.TBE,{className:"h-4 w-4 opacity-50"})})]}));c.displayName=l.l9.displayName;let u=t.forwardRef(({className:e,...r},s)=>(0,a.jsx)(l.PP,{ref:s,className:(0,i.cn)("flex cursor-default items-center justify-center py-1",e),...r,children:(0,a.jsx)(n.Mtm,{})}));u.displayName=l.PP.displayName;let m=t.forwardRef(({className:e,...r},s)=>(0,a.jsx)(l.wn,{ref:s,className:(0,i.cn)("flex cursor-default items-center justify-center py-1",e),...r,children:(0,a.jsx)(n.D3D,{})}));m.displayName=l.wn.displayName;let h=t.forwardRef(({className:e,children:r,position:s="popper",...t},n)=>(0,a.jsx)(l.ZL,{children:(0,a.jsxs)(l.UC,{ref:n,className:(0,i.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border border-neutral-200 bg-white text-neutral-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50","popper"===s&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",e),position:s,...t,children:[(0,a.jsx)(u,{}),(0,a.jsx)(l.LM,{className:(0,i.cn)("p-1","popper"===s&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:r}),(0,a.jsx)(m,{})]})}));h.displayName=l.UC.displayName,t.forwardRef(({className:e,...r},s)=>(0,a.jsx)(l.JU,{ref:s,className:(0,i.cn)("px-2 py-1.5 text-sm font-semibold",e),...r})).displayName=l.JU.displayName;let p=t.forwardRef(({className:e,children:r,...s},t)=>(0,a.jsxs)(l.q7,{ref:t,className:(0,i.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-neutral-100 focus:text-neutral-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-neutral-800 dark:focus:text-neutral-50",e),...s,children:[(0,a.jsx)("span",{className:"absolute right-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,a.jsx)(l.VF,{children:(0,a.jsx)(n.Srz,{className:"h-4 w-4"})})}),(0,a.jsx)(l.p4,{children:r})]}));p.displayName=l.q7.displayName,t.forwardRef(({className:e,...r},s)=>(0,a.jsx)(l.wv,{ref:s,className:(0,i.cn)("-mx-1 my-1 h-px bg-neutral-100 dark:bg-neutral-800",e),...r})).displayName=l.wv.displayName},22348:(e,r,s)=>{"use strict";s.d(r,{T:()=>l});var a=s(45512),t=s(58009),n=s(86645);let l=t.forwardRef(({className:e,...r},s)=>(0,a.jsx)("textarea",{className:(0,n.cn)("flex min-h-[60px] w-full rounded-md border border-neutral-200 bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300",e),ref:s,...r}));l.displayName="Textarea"},94754:(e,r,s)=>{"use strict";s.d(r,{CR:()=>t});var a=s(16131);a.z.object({email:a.z.string().email({message:"Please enter a valid email."}).trim(),password:a.z.string().min(8,{message:"Password must be 8 chars minimum"}).trim()}).extend({name:a.z.string().min(1,"Name is required"),role:a.z.enum(["admin","volunteer","incharge"],{required_error:"Role is required",invalid_type_error:"Invalid role"})});let t=a.z.object({hr_name:a.z.string().min(1,"HR name is required"),volunteer:a.z.string().min(1,"Volunteer name is required"),incharge:a.z.string().min(1,"Incharge name is required"),company:a.z.string().min(1,"Company name is required"),phone_number:a.z.string().regex(/^\d{10}$/,"Phone number must be exactly 10 digits"),status:a.z.enum(["Pending","Active","Inactive","Email_Sent","Not_Called","Blacklisted","Not_Reachable","Wrong_Number","Called_Postponed","Emailed_Declined"],{required_error:"Status is required"}),email:a.z.string().email().optional().or(a.z.literal("")),interview_mode:a.z.enum(["Online","In-person","Both","Not Confirmed"],{required_error:"Interview mode is required",invalid_type_error:"Invalid interview mode"}).optional(),hr_count:a.z.number().int().min(1).default(1),transport:a.z.string().optional().or(a.z.literal("")),address:a.z.string().optional().or(a.z.literal("")),internship:a.z.enum(["Yes","No"]).default("No"),comments:a.z.string().optional().or(a.z.literal(""))})},2762:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>l});var a=s(62740),t=s(95159),n=s(75061);let l=function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.default,{}),(0,a.jsx)(t.default,{})]})}},95159:(e,r,s)=>{"use strict";s.d(r,{default:()=>a});let a=(0,s(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/jerry/projects/WebDev/forese/hrdb/src/components/add-hr.jsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/jerry/projects/WebDev/forese/hrdb/src/components/add-hr.jsx","default")},75061:(e,r,s)=>{"use strict";s.d(r,{default:()=>a});let a=(0,s(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/jerry/projects/WebDev/forese/hrdb/src/components/navbar.jsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/jerry/projects/WebDev/forese/hrdb/src/components/navbar.jsx","default")}};var r=require("../../webpack-runtime.js");r.C(e);var s=e=>r(r.s=e),a=r.X(0,[740,264,179,70,132,895,229],()=>s(6121));module.exports=a})();