(()=>{var e={};e.id=504,e.ids=[504],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},42449:e=>{"use strict";e.exports=require("pg")},55511:e=>{"use strict";e.exports=require("crypto")},29021:e=>{"use strict";e.exports=require("fs")},33873:e=>{"use strict";e.exports=require("path")},27910:e=>{"use strict";e.exports=require("stream")},74075:e=>{"use strict";e.exports=require("zlib")},4573:e=>{"use strict";e.exports=require("node:buffer")},77598:e=>{"use strict";e.exports=require("node:crypto")},57975:e=>{"use strict";e.exports=require("node:util")},30177:(e,r,s)=>{"use strict";s.r(r),s.d(r,{GlobalError:()=>i.a,__next_app__:()=>u,pages:()=>c,routeModule:()=>h,tree:()=>d});var n=s(70260),t=s(28203),l=s(25155),i=s.n(l),a=s(67292),o={};for(let e in a)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>a[e]);s.d(r,o);let d=["",{children:["edit-hr",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,80513)),"/Users/jerry/projects/WebDev/forese/hrdb/src/app/edit-hr/page.jsx"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,98180)),"/Users/jerry/projects/WebDev/forese/hrdb/src/app/layout.jsx"],"not-found":[()=>Promise.resolve().then(s.bind(s,76868)),"/Users/jerry/projects/WebDev/forese/hrdb/src/app/not-found.jsx"],forbidden:[()=>Promise.resolve().then(s.t.bind(s,69116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(s.t.bind(s,41485,23)),"next/dist/client/components/unauthorized-error"]}],c=["/Users/jerry/projects/WebDev/forese/hrdb/src/app/edit-hr/page.jsx"],u={require:s,loadChunk:()=>Promise.resolve()},h=new n.AppPageRouteModule({definition:{kind:t.RouteKind.APP_PAGE,page:"/edit-hr/page",pathname:"/edit-hr",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},50886:(e,r,s)=>{Promise.resolve().then(s.bind(s,82276)),Promise.resolve().then(s.bind(s,75061))},20622:(e,r,s)=>{Promise.resolve().then(s.bind(s,41780)),Promise.resolve().then(s.bind(s,72505))},41780:(e,r,s)=>{"use strict";s.d(r,{default:()=>j});var n=s(45512),t=s(58009),l=s(79334),i=s(11169),a=s(61038),o=s(69576),d=s(36684),c=s(53266),u=s(22348),h=s(21030),m=s(27746),b=s(26248);b.callServer,b.findSourceMapURL;let p=(0,b.createServerReference)("6097c4e23b14f894a9cc59f79ec8b7e3b891e3645d",b.callServer,void 0,b.findSourceMapURL,"editHR"),x=(0,b.createServerReference)("405b56f370b18d9b7b38d660c3d4646c2d32af5853",b.callServer,void 0,b.findSourceMapURL,"deleteHR");var v=s(94754);function j(){return(0,n.jsx)(t.Suspense,{fallback:(0,n.jsx)("div",{children:"Loading..."}),children:(0,n.jsx)(g,{})})}function g(){let e=(0,i.rd)(),r=(0,l.useSearchParams)().get("id"),[s,b]=(0,t.useState)({hr_name:"",volunteer:"",incharge:"",company:"",email:"",phone_number:"",status:"Not_Called",interview_mode:"",hr_count:"",transport:"",address:"",internship:"No",comments:"",volunteer_email:void 0,incharge_email:void 0}),[j,g]=(0,t.useState)(!1),[f,_]=(0,t.useState)(null),[y,N]=(0,t.useState)(!1),[C,w]=(0,t.useTransition)(),[R,q]=(0,t.useState)([]),P=e=>{let{name:r,value:s}=e.target;b(e=>({...e,[r]:s??""}))},S=(e,r)=>{b(s=>({...s,[e]:r}))},F=async e=>{e.preventDefault(),g(!0),_(null),N(!1);let n=v.CR.safeParse({hr_name:s.hr_name,phone_number:s.phone_number,email:s.email,interview_mode:s.interview_mode,company:s.company,volunteer:s.volunteer,incharge:s.incharge,status:s.status,hr_count:parseInt(s.hr_count),transport:s.transport,address:s.address,internship:s.internship,comments:s.comments});if(n.data?.address==="07032005"){_("Happy Birthday\uD83E\uDD73"),g(!1);return}if(!n.success){_(n.error.flatten().fieldErrors),g(!1);return}try{let e={...n.data};e.volunteer_email=s.volunteer_email,e.incharge_email=s.incharge_email,w(async()=>{let s=await p(r,e);if(s.errors){_(s.errors);return}N(!0)})}catch(e){_("An error occurred while updating the HR record. Please try again.")}finally{g(!1)}},J=async()=>{if(window?.confirm("Are you sure you want to delete this HR record? This action cannot be undone.")){g(!0),_(null);try{w(async()=>{let s=await x(r);if(s.errors){_(s.errors);return}e.push("/")})}catch(e){_("An error occurred while deleting the HR record.")}finally{g(!1)}}};return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"min-h-screen w-screen p-[75px] bg-blue-50 relative",children:[(0,n.jsxs)(o.Zp,{className:"mb-6 border-blue-200 shadow-blue-100 rounded-lg",children:[(0,n.jsx)(o.aR,{className:"bg-blue-100 rounded-t-lg mb-4",children:(0,n.jsx)(o.ZB,{className:"text-blue-800 text-center text-3xl font-bold",children:"Edit HR Record"})}),(0,n.jsx)(o.Wu,{className:"bg-white rounded-lg",children:(0,n.jsxs)("form",{onSubmit:F,className:"space-y-4",children:[(0,n.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)(c.J,{htmlFor:"hr_name",children:"HR Name"}),(0,n.jsx)(d.p,{id:"hr_name",name:"hr_name",value:s.hr_name,onChange:P,className:"border-blue-200 focus:ring-blue-500",required:!0})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(c.J,{htmlFor:"phone_number",children:"Phone Number"}),(0,n.jsx)(d.p,{id:"phone_number",name:"phone_number",value:s.phone_number,onChange:P,className:"border-blue-200 focus:ring-blue-500",required:!0})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(c.J,{htmlFor:"email",children:"Email"}),(0,n.jsx)(d.p,{id:"email",name:"email",type:"email",value:s.email,onChange:P,className:"border-blue-200 focus:ring-blue-500"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(c.J,{children:"Interview Mode"}),(0,n.jsxs)(m.l6,{value:s.interview_mode,onValueChange:e=>S("interview_mode",e),children:[(0,n.jsx)(m.bq,{className:"border-blue-200 focus:ring-blue-500",children:(0,n.jsx)(m.yv,{placeholder:"Interview Mode"})}),(0,n.jsxs)(m.gC,{children:[(0,n.jsx)(m.eb,{value:"Not Confirmed",children:"Not Confirmed"}),(0,n.jsx)(m.eb,{value:"Online",children:"Online"}),(0,n.jsx)(m.eb,{value:"In-person",children:"In-person"}),(0,n.jsx)(m.eb,{value:"Both",children:"Both"})]})]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(c.J,{htmlFor:"company",children:"Company"}),(0,n.jsx)(d.p,{id:"company",name:"company",value:s.company,onChange:P,className:"border-blue-200 focus:ring-blue-500",required:!0})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(c.J,{htmlFor:"volunteer",children:"Member"}),(0,n.jsx)(d.p,{id:"volunteer",name:"volunteer",value:s.volunteer,onChange:P,className:"border-blue-200 focus:ring-blue-500"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(c.J,{htmlFor:"incharge",children:"Incharge"}),(0,n.jsx)(d.p,{id:"incharge",name:"incharge",value:s.incharge,onChange:P,className:"border-blue-200 focus:ring-blue-500"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(c.J,{htmlFor:"status",children:"Status"}),(0,n.jsxs)(m.l6,{value:s.status,onValueChange:e=>S("status",e),children:[(0,n.jsx)(m.bq,{className:"border-blue-200 focus:ring-blue-500",children:(0,n.jsx)(m.yv,{placeholder:"Select status"})}),(0,n.jsxs)(m.gC,{children:[(0,n.jsx)(m.eb,{value:"Pending",children:"Pending"}),(0,n.jsx)(m.eb,{value:"Active",children:"Accepted"}),(0,n.jsx)(m.eb,{value:"Inactive",children:"Declined"}),(0,n.jsx)(m.eb,{value:"Email_Sent",children:"Email Sent"}),(0,n.jsx)(m.eb,{value:"Not_Called",children:"Not Called"}),(0,n.jsx)(m.eb,{value:"Blacklisted",children:"Blacklisted"})]})]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(c.J,{htmlFor:"hr_count",children:"HR Count"}),(0,n.jsx)(d.p,{id:"hr_count",name:"hr_count",type:"number",value:s.hr_count,onChange:P,className:"border-blue-200 focus:ring-blue-500",min:1})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(c.J,{htmlFor:"transport",children:"Transport"}),(0,n.jsx)(d.p,{id:"transport",name:"transport",value:s.transport,onChange:P,className:"border-blue-200 focus:ring-blue-500"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(c.J,{htmlFor:"address",children:"Address"}),(0,n.jsx)(d.p,{id:"address",name:"address",value:s.address,onChange:P,className:"border-blue-200 focus:ring-blue-500"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(c.J,{htmlFor:"internship",children:"Internship"}),(0,n.jsxs)(m.l6,{value:s.internship,onValueChange:e=>S("internship",e),children:[(0,n.jsx)(m.bq,{className:"border-blue-200 focus:ring-blue-500",children:(0,n.jsx)(m.yv,{placeholder:"Select internship"})}),(0,n.jsxs)(m.gC,{children:[(0,n.jsx)(m.eb,{value:"Yes",children:"Yes"}),(0,n.jsx)(m.eb,{value:"No",children:"No"})]})]})]}),void 0!==s.volunteer_email&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{children:[(0,n.jsx)(c.J,{htmlFor:"volunteer_email",children:"Member Email"}),(0,n.jsx)(d.p,{id:"volunteer_email",name:"volunteer_email",value:s.volunteer_email,onChange:P,className:"border-blue-200 focus:ring-blue-500"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(c.J,{htmlFor:"incharge_email",children:"Incharge Email"}),(0,n.jsxs)(m.l6,{value:s.incharge_email,onValueChange:e=>S("incharge_email",e),children:[(0,n.jsx)(m.bq,{className:"border-blue-200 focus:ring-blue-500",children:(0,n.jsx)(m.yv,{placeholder:"Select incharge email"})}),(0,n.jsx)(m.gC,{children:R.map(e=>(0,n.jsx)(m.eb,{value:e,children:e},e))})]})]})]})]}),(0,n.jsxs)("div",{className:"mt-4",children:[(0,n.jsx)(c.J,{htmlFor:"comments",children:"Comments"}),(0,n.jsx)(u.T,{id:"comments",name:"comments",value:s.comments,onChange:P,className:"border-blue-200 focus:ring-blue-500 min-h-[100px]"})]}),(0,n.jsx)(a.$,{type:"submit",className:"w-full bg-blue-800 hover:bg-blue-900",disabled:j||C,children:j||C?"Updating...":"Update HR Record"})]})})]}),f&&(0,n.jsxs)(h.Fc,{variant:"destructive",className:"mb-6 bg-red-100 border-red-400 text-red-700",children:[(0,n.jsx)(h.XL,{children:"Error"}),(0,n.jsx)(h.TN,{children:"string"==typeof f?f:Object.values(f).flat().join(", ")})]}),y&&(0,n.jsxs)(h.Fc,{className:"mb-6 bg-green-100 border-green-400 text-green-700",children:[(0,n.jsx)(h.XL,{children:"Success"}),(0,n.jsx)(h.TN,{children:"HR record has been successfully updated."})]}),(0,n.jsxs)("div",{className:"flex gap-4 mt-4",children:[(0,n.jsx)(a.$,{onClick:()=>e.push("/"),className:"bg-white hover:bg-blue-100 text-blue-800 border border-neutral-200 dark:border-neutral-800",children:"Back to HR Database"}),(0,n.jsx)(a.$,{onClick:J,className:"bg-red-600 hover:bg-red-700 text-white",disabled:j||C,children:"Delete HR Record"})]})]})})}},80513:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>i});var n=s(62740),t=s(82276),l=s(75061);let i=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.default,{}),(0,n.jsx)(t.default,{})]})}},82276:(e,r,s)=>{"use strict";s.d(r,{default:()=>n});let n=(0,s(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/jerry/projects/WebDev/forese/hrdb/src/components/edit-hr.jsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/jerry/projects/WebDev/forese/hrdb/src/components/edit-hr.jsx","default")}};var r=require("../../webpack-runtime.js");r.C(e);var s=e=>r(r.s=e),n=r.X(0,[740,264,179,70,132,895,468,219],()=>s(30177));module.exports=n})();