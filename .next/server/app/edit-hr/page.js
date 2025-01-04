(()=>{var e={};e.id=504,e.ids=[504],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},42449:e=>{"use strict";e.exports=require("pg")},55511:e=>{"use strict";e.exports=require("crypto")},29021:e=>{"use strict";e.exports=require("fs")},33873:e=>{"use strict";e.exports=require("path")},27910:e=>{"use strict";e.exports=require("stream")},74075:e=>{"use strict";e.exports=require("zlib")},4573:e=>{"use strict";e.exports=require("node:buffer")},77598:e=>{"use strict";e.exports=require("node:crypto")},57975:e=>{"use strict";e.exports=require("node:util")},30177:(e,r,n)=>{"use strict";n.r(r),n.d(r,{GlobalError:()=>i.a,__next_app__:()=>u,pages:()=>c,routeModule:()=>h,tree:()=>o});var s=n(70260),t=n(28203),a=n(25155),i=n.n(a),l=n(67292),d={};for(let e in l)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>l[e]);n.d(r,d);let o=["",{children:["edit-hr",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(n.bind(n,80513)),"/Users/jerry/projects/WebDev/forese/hrdb/src/app/edit-hr/page.jsx"]}]},{}]},{layout:[()=>Promise.resolve().then(n.bind(n,98180)),"/Users/jerry/projects/WebDev/forese/hrdb/src/app/layout.jsx"],"not-found":[()=>Promise.resolve().then(n.bind(n,76868)),"/Users/jerry/projects/WebDev/forese/hrdb/src/app/not-found.jsx"],forbidden:[()=>Promise.resolve().then(n.t.bind(n,69116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(n.t.bind(n,41485,23)),"next/dist/client/components/unauthorized-error"]}],c=["/Users/jerry/projects/WebDev/forese/hrdb/src/app/edit-hr/page.jsx"],u={require:n,loadChunk:()=>Promise.resolve()},h=new s.AppPageRouteModule({definition:{kind:t.RouteKind.APP_PAGE,page:"/edit-hr/page",pathname:"/edit-hr",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:o}})},50886:(e,r,n)=>{Promise.resolve().then(n.bind(n,82276)),Promise.resolve().then(n.bind(n,75061))},20622:(e,r,n)=>{Promise.resolve().then(n.bind(n,41780)),Promise.resolve().then(n.bind(n,72505))},41780:(e,r,n)=>{"use strict";n.d(r,{default:()=>_});var s=n(45512),t=n(58009),a=n(79334),i=n(11169),l=n(61038),d=n(69576),o=n(36684),c=n(53266),u=n(22348),h=n(21030),m=n(27746),p=n(26248);p.callServer,p.findSourceMapURL;let x=(0,p.createServerReference)("6097c4e23b14f894a9cc59f79ec8b7e3b891e3645d",p.callServer,void 0,p.findSourceMapURL,"editHR"),b=(0,p.createServerReference)("405b56f370b18d9b7b38d660c3d4646c2d32af5853",p.callServer,void 0,p.findSourceMapURL,"deleteHR");var v=n(94754),j=n(91542),g=n(60621);function _(){return(0,s.jsx)(t.Suspense,{fallback:(0,s.jsx)("div",{children:"Loading..."}),children:(0,s.jsx)(f,{})})}function f(){let e=(0,i.rd)(),r=(0,a.useSearchParams)().get("id"),[n,p]=(0,t.useState)({hr_name:"",volunteer:"",incharge:"",company:"",email:"",phone_number:"",status:"Not_Called",interview_mode:"",hr_count:"",transport:"",address:"",internship:"No",comments:"",volunteer_email:void 0,incharge_email:void 0}),[_,f]=(0,t.useState)(!1),[y,N]=(0,t.useState)(null),[C,R]=(0,t.useState)(!1),[q,w]=(0,t.useTransition)(),[P,z]=(0,t.useState)([]),[S,k]=(0,t.useState)(!1),F=e=>{let{name:r,value:n}=e.target;p(e=>({...e,[r]:n??""}))},E=(e,r)=>{p(n=>({...n,[e]:r}))},I=async e=>{e.preventDefault(),f(!0),N(null),R(!1);let s=v.CR.safeParse({hr_name:n.hr_name,phone_number:n.phone_number,email:n.email,interview_mode:n.interview_mode,company:n.company,volunteer:n.volunteer,incharge:n.incharge,status:n.status,hr_count:parseInt(n.hr_count),transport:n.transport,address:n.address,internship:n.internship,comments:n.comments});if(s.data?.address==="07032005"){N("Happy Birthday\uD83E\uDD73"),f(!1);return}if(!s.success){N(s.error.flatten().fieldErrors),f(!1);return}try{let e={...s.data};e.volunteer_email=n.volunteer_email,e.incharge_email=n.incharge_email,w(async()=>{let n=await x(r,e);if(n.errors){N(n.errors);return}R(!0)})}catch(e){N("An error occurred while updating the HR record. Please try again.")}finally{f(!1)}},H=async()=>{f(!0),N(null);try{w(async()=>{let n=await b(r);if(n.errors){N(n.errors);return}j.oR.warning("HR record deleted successfully"),e.push("/")})}catch(e){N("An error occurred while deleting the HR record.")}finally{f(!1)}};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"min-h-screen w-screen p-[75px] bg-blue-50 relative",children:[(0,s.jsxs)(d.Zp,{className:"mb-6 border-blue-200 shadow-blue-100 rounded-lg",children:[(0,s.jsx)(d.aR,{className:"bg-blue-100 rounded-t-lg mb-4",children:(0,s.jsx)(d.ZB,{className:"text-blue-800 text-center text-3xl font-bold",children:"Edit HR Record"})}),(0,s.jsx)(d.Wu,{className:"bg-white rounded-lg",children:(0,s.jsxs)("form",{onSubmit:I,className:"space-y-4",children:[(0,s.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)(c.J,{htmlFor:"hr_name",children:"HR Name*"}),(0,s.jsx)(o.p,{id:"hr_name",name:"hr_name",value:n.hr_name,onChange:F,className:"border-neutral-200",required:!0})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(c.J,{htmlFor:"phone_number",children:"Phone Number*"}),(0,s.jsx)(o.p,{id:"phone_number",name:"phone_number",value:n.phone_number,onChange:F,className:"border-neutral-200",required:!0})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(c.J,{htmlFor:"email",children:"Email"}),(0,s.jsx)(o.p,{id:"email",name:"email",type:"email",value:n.email,onChange:F,className:"border-neutral-200"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(c.J,{children:"Interview Mode"}),(0,s.jsxs)(m.l6,{value:n.interview_mode,onValueChange:e=>E("interview_mode",e),children:[(0,s.jsx)(m.bq,{className:"border-neutral-200",children:(0,s.jsx)(m.yv,{placeholder:"Interview Mode"})}),(0,s.jsxs)(m.gC,{children:[(0,s.jsx)(m.eb,{value:"Not Confirmed",children:"Not Confirmed"}),(0,s.jsx)(m.eb,{value:"Online",children:"Online"}),(0,s.jsx)(m.eb,{value:"In-person",children:"In-person"}),(0,s.jsx)(m.eb,{value:"Both",children:"Both"})]})]})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(c.J,{htmlFor:"company",children:"Company*"}),(0,s.jsx)(o.p,{id:"company",name:"company",value:n.company,onChange:F,className:"border-neutral-200",required:!0})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(c.J,{htmlFor:"volunteer",children:"Member*"}),(0,s.jsx)(o.p,{id:"volunteer",name:"volunteer",value:n.volunteer,onChange:F,className:"border-neutral-200"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(c.J,{htmlFor:"incharge",children:"Incharge*"}),(0,s.jsx)(o.p,{id:"incharge",name:"incharge",value:n.incharge,onChange:F,className:"border-neutral-200"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(c.J,{htmlFor:"status",children:"Status"}),(0,s.jsxs)(m.l6,{value:n.status,onValueChange:e=>E("status",e),children:[(0,s.jsx)(m.bq,{className:"border-neutral-200",children:(0,s.jsx)(m.yv,{placeholder:"Select status"})}),(0,s.jsxs)(m.gC,{children:[(0,s.jsx)(m.eb,{value:"Pending",children:"Pending"}),(0,s.jsx)(m.eb,{value:"Active",children:"Accepted Invite"}),(0,s.jsx)(m.eb,{value:"Inactive",children:"Called Declined"}),(0,s.jsx)(m.eb,{value:"Emailed_Declined",children:"Emailed Declined"}),(0,s.jsx)(m.eb,{value:"Email_Sent",children:"Email Sent"}),(0,s.jsx)(m.eb,{value:"Not_Called",children:"Not Called"}),(0,s.jsx)(m.eb,{value:"Blacklisted",children:"Blacklisted"}),(0,s.jsx)(m.eb,{value:"Not_Reachable",children:"Not Reachable"}),(0,s.jsx)(m.eb,{value:"Wrong_Number",children:"Wrong Number"}),(0,s.jsx)(m.eb,{value:"Called_Postponed",children:"Called Postponed"})]})]})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(c.J,{htmlFor:"hr_count",children:"HR Count*"}),(0,s.jsx)(o.p,{id:"hr_count",name:"hr_count",type:"number",value:n.hr_count,onChange:F,className:"border-neutral-200",min:1})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(c.J,{htmlFor:"transport",children:"Transport"}),(0,s.jsx)(o.p,{id:"transport",name:"transport",value:n.transport,onChange:F,className:"border-neutral-200"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(c.J,{htmlFor:"address",children:"Address"}),(0,s.jsx)(o.p,{id:"address",name:"address",value:n.address,onChange:F,className:"border-neutral-200"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(c.J,{htmlFor:"internship",children:"Internship"}),(0,s.jsxs)(m.l6,{value:n.internship,onValueChange:e=>E("internship",e),children:[(0,s.jsx)(m.bq,{className:"border-neutral-200",children:(0,s.jsx)(m.yv,{placeholder:"Select internship"})}),(0,s.jsxs)(m.gC,{children:[(0,s.jsx)(m.eb,{value:"Yes",children:"Yes"}),(0,s.jsx)(m.eb,{value:"No",children:"No"})]})]})]}),void 0!==n.volunteer_email&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{children:[(0,s.jsx)(c.J,{htmlFor:"volunteer_email",children:"Member Email*"}),(0,s.jsx)(o.p,{id:"volunteer_email",name:"volunteer_email",value:n.volunteer_email,onChange:F,className:"border-neutral-200"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(c.J,{htmlFor:"incharge_email",children:"Incharge Email*"}),(0,s.jsxs)(m.l6,{value:n.incharge_email,onValueChange:e=>E("incharge_email",e),children:[(0,s.jsx)(m.bq,{className:"border-neutral-200",children:(0,s.jsx)(m.yv,{placeholder:"Select incharge email"})}),(0,s.jsx)(m.gC,{children:P.map(e=>(0,s.jsx)(m.eb,{value:e,children:e},e))})]})]})]})]}),(0,s.jsxs)("div",{className:"mt-4",children:[(0,s.jsx)(c.J,{htmlFor:"comments",children:"Comments"}),(0,s.jsx)(u.T,{id:"comments",name:"comments",value:n.comments,onChange:F,className:"border-neutral-200 min-h-[100px]"})]}),(0,s.jsx)(l.$,{type:"submit",className:"w-full bg-blue-800 hover:bg-blue-900",disabled:_||q,children:_||q?"Updating...":"Update HR Record"})]})})]}),y&&(0,s.jsxs)(h.Fc,{variant:"destructive",className:"mb-6 bg-red-100 border-red-400 text-red-700",children:[(0,s.jsx)(h.XL,{children:"Error"}),(0,s.jsx)(h.TN,{children:"string"==typeof y?y:Object.values(y).flat().join(", ")})]}),C&&(0,s.jsxs)(h.Fc,{className:"mb-6 bg-green-100 border-green-400 text-green-700",children:[(0,s.jsx)(h.XL,{children:"Success"}),(0,s.jsx)(h.TN,{children:"HR record has been successfully updated."})]}),(0,s.jsxs)("div",{className:"flex gap-4 mt-4",children:[(0,s.jsx)(l.$,{onClick:()=>e.push("/"),className:"bg-white hover:bg-blue-100 text-blue-800 border border-neutral-200 dark:border-neutral-800",children:"Back to HR Database"}),(0,s.jsx)(l.$,{onClick:()=>k(!0),className:"bg-red-600 hover:bg-red-700 text-white",disabled:_||q,children:"Delete HR Record"})]})]}),(0,s.jsx)(g.Lt,{open:S,onOpenChange:k,children:(0,s.jsxs)(g.EO,{children:[(0,s.jsxs)(g.wd,{children:[(0,s.jsx)(g.r7,{children:"Are you sure?"}),(0,s.jsx)(g.$v,{children:"This action cannot be undone. This will permanently delete the HR record."})]}),(0,s.jsxs)(g.ck,{children:[(0,s.jsx)(g.Zr,{children:"Cancel"}),(0,s.jsx)(g.Rx,{onClick:H,className:"bg-red-600 hover:bg-red-700",children:"Delete"})]})]})})]})}},22348:(e,r,n)=>{"use strict";n.d(r,{T:()=>i});var s=n(45512),t=n(58009),a=n(86645);let i=t.forwardRef(({className:e,...r},n)=>(0,s.jsx)("textarea",{className:(0,a.cn)("flex min-h-[60px] w-full rounded-md border border-neutral-200 bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300",e),ref:n,...r}));i.displayName="Textarea"},94754:(e,r,n)=>{"use strict";n.d(r,{CR:()=>t});var s=n(16131);s.z.object({email:s.z.string().email({message:"Please enter a valid email."}).trim(),password:s.z.string().min(8,{message:"Password must be 8 chars minimum"}).trim()}).extend({name:s.z.string().min(1,"Name is required"),role:s.z.enum(["admin","volunteer","incharge"],{required_error:"Role is required",invalid_type_error:"Invalid role"})});let t=s.z.object({hr_name:s.z.string().min(1,"HR name is required"),volunteer:s.z.string().min(1,"Volunteer name is required"),incharge:s.z.string().min(1,"Incharge name is required"),company:s.z.string().min(1,"Company name is required"),phone_number:s.z.string().regex(/^\d{10}$/,"Phone number must be exactly 10 digits"),status:s.z.enum(["Pending","Active","Inactive","Email_Sent","Not_Called","Blacklisted","Not_Reachable","Wrong_Number","Called_Postponed","Emailed_Declined"],{required_error:"Status is required"}),email:s.z.string().email().optional().or(s.z.literal("")),interview_mode:s.z.enum(["Online","In-person","Both","Not Confirmed"],{required_error:"Interview mode is required",invalid_type_error:"Invalid interview mode"}).optional(),hr_count:s.z.number().int().min(1).default(1),transport:s.z.string().optional().or(s.z.literal("")),address:s.z.string().optional().or(s.z.literal("")),internship:s.z.enum(["Yes","No"]).default("No"),comments:s.z.string().optional().or(s.z.literal(""))})},80513:(e,r,n)=>{"use strict";n.r(r),n.d(r,{default:()=>i});var s=n(62740),t=n(82276),a=n(75061);let i=function(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.default,{}),(0,s.jsx)(t.default,{})]})}},82276:(e,r,n)=>{"use strict";n.d(r,{default:()=>s});let s=(0,n(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/jerry/projects/WebDev/forese/hrdb/src/components/edit-hr.jsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/jerry/projects/WebDev/forese/hrdb/src/components/edit-hr.jsx","default")}};var r=require("../../webpack-runtime.js");r.C(e);var n=e=>r(r.s=e),s=r.X(0,[740,264,179,70,132,895,460,229,401],()=>n(30177));module.exports=s})();