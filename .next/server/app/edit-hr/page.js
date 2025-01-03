(()=>{var e={};e.id=504,e.ids=[504],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},42449:e=>{"use strict";e.exports=require("pg")},55511:e=>{"use strict";e.exports=require("crypto")},29021:e=>{"use strict";e.exports=require("fs")},33873:e=>{"use strict";e.exports=require("path")},27910:e=>{"use strict";e.exports=require("stream")},74075:e=>{"use strict";e.exports=require("zlib")},4573:e=>{"use strict";e.exports=require("node:buffer")},77598:e=>{"use strict";e.exports=require("node:crypto")},57975:e=>{"use strict";e.exports=require("node:util")},30177:(e,r,s)=>{"use strict";s.r(r),s.d(r,{GlobalError:()=>l.a,__next_app__:()=>u,pages:()=>c,routeModule:()=>h,tree:()=>d});var n=s(70260),i=s(28203),t=s(25155),l=s.n(t),a=s(67292),o={};for(let e in a)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>a[e]);s.d(r,o);let d=["",{children:["edit-hr",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,80513)),"/Users/jerry/projects/WebDev/forese/hrdb/src/app/edit-hr/page.jsx"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,98180)),"/Users/jerry/projects/WebDev/forese/hrdb/src/app/layout.jsx"],"not-found":[()=>Promise.resolve().then(s.bind(s,76868)),"/Users/jerry/projects/WebDev/forese/hrdb/src/app/not-found.jsx"],forbidden:[()=>Promise.resolve().then(s.t.bind(s,69116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(s.t.bind(s,41485,23)),"next/dist/client/components/unauthorized-error"]}],c=["/Users/jerry/projects/WebDev/forese/hrdb/src/app/edit-hr/page.jsx"],u={require:s,loadChunk:()=>Promise.resolve()},h=new n.AppPageRouteModule({definition:{kind:i.RouteKind.APP_PAGE,page:"/edit-hr/page",pathname:"/edit-hr",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},50886:(e,r,s)=>{Promise.resolve().then(s.bind(s,82276)),Promise.resolve().then(s.bind(s,75061))},20622:(e,r,s)=>{Promise.resolve().then(s.bind(s,41780)),Promise.resolve().then(s.bind(s,72505))},41780:(e,r,s)=>{"use strict";s.d(r,{default:()=>f});var n=s(45512),i=s(58009),t=s(79334),l=s(11169),a=s(61038),o=s(69576),d=s(36684),c=s(53266),u=s(22348),h=s(21030),m=s(27746),b=s(26248);b.callServer,b.findSourceMapURL;let p=(0,b.createServerReference)("6097c4e23b14f894a9cc59f79ec8b7e3b891e3645d",b.callServer,void 0,b.findSourceMapURL,"editHR"),x=(0,b.createServerReference)("405b56f370b18d9b7b38d660c3d4646c2d32af5853",b.callServer,void 0,b.findSourceMapURL,"deleteHR");var v=s(94754),j=s(91542),g=s(60621);function f(){return(0,n.jsx)(i.Suspense,{fallback:(0,n.jsx)("div",{children:"Loading..."}),children:(0,n.jsx)(_,{})})}function _(){let e=(0,l.rd)(),r=(0,t.useSearchParams)().get("id"),[s,b]=(0,i.useState)({hr_name:"",volunteer:"",incharge:"",company:"",email:"",phone_number:"",status:"Not_Called",interview_mode:"",hr_count:"",transport:"",address:"",internship:"No",comments:"",volunteer_email:void 0,incharge_email:void 0}),[f,_]=(0,i.useState)(!1),[y,N]=(0,i.useState)(null),[C,R]=(0,i.useState)(!1),[q,w]=(0,i.useTransition)(),[P,z]=(0,i.useState)([]),[S,k]=(0,i.useState)(!1),F=e=>{let{name:r,value:s}=e.target;b(e=>({...e,[r]:s??""}))},I=(e,r)=>{b(s=>({...s,[e]:r}))},E=async e=>{e.preventDefault(),_(!0),N(null),R(!1);let n=v.CR.safeParse({hr_name:s.hr_name,phone_number:s.phone_number,email:s.email,interview_mode:s.interview_mode,company:s.company,volunteer:s.volunteer,incharge:s.incharge,status:s.status,hr_count:parseInt(s.hr_count),transport:s.transport,address:s.address,internship:s.internship,comments:s.comments});if(n.data?.address==="07032005"){N("Happy Birthday\uD83E\uDD73"),_(!1);return}if(!n.success){N(n.error.flatten().fieldErrors),_(!1);return}try{let e={...n.data};e.volunteer_email=s.volunteer_email,e.incharge_email=s.incharge_email,w(async()=>{let s=await p(r,e);if(s.errors){N(s.errors);return}R(!0)})}catch(e){N("An error occurred while updating the HR record. Please try again.")}finally{_(!1)}},H=async()=>{_(!0),N(null);try{w(async()=>{let s=await x(r);if(s.errors){N(s.errors);return}j.oR.warning("HR record deleted successfully"),e.push("/")})}catch(e){N("An error occurred while deleting the HR record.")}finally{_(!1)}};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"min-h-screen w-screen p-[75px] bg-blue-50 relative",children:[(0,n.jsxs)(o.Zp,{className:"mb-6 border-blue-200 shadow-blue-100 rounded-lg",children:[(0,n.jsx)(o.aR,{className:"bg-blue-100 rounded-t-lg mb-4",children:(0,n.jsx)(o.ZB,{className:"text-blue-800 text-center text-3xl font-bold",children:"Edit HR Record"})}),(0,n.jsx)(o.Wu,{className:"bg-white rounded-lg",children:(0,n.jsxs)("form",{onSubmit:E,className:"space-y-4",children:[(0,n.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)(c.J,{htmlFor:"hr_name",children:"HR Name"}),(0,n.jsx)(d.p,{id:"hr_name",name:"hr_name",value:s.hr_name,onChange:F,className:"border-blue-200 focus:ring-blue-500",required:!0})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(c.J,{htmlFor:"phone_number",children:"Phone Number"}),(0,n.jsx)(d.p,{id:"phone_number",name:"phone_number",value:s.phone_number,onChange:F,className:"border-blue-200 focus:ring-blue-500",required:!0})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(c.J,{htmlFor:"email",children:"Email"}),(0,n.jsx)(d.p,{id:"email",name:"email",type:"email",value:s.email,onChange:F,className:"border-blue-200 focus:ring-blue-500"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(c.J,{children:"Interview Mode"}),(0,n.jsxs)(m.l6,{value:s.interview_mode,onValueChange:e=>I("interview_mode",e),children:[(0,n.jsx)(m.bq,{className:"border-blue-200 focus:ring-blue-500",children:(0,n.jsx)(m.yv,{placeholder:"Interview Mode"})}),(0,n.jsxs)(m.gC,{children:[(0,n.jsx)(m.eb,{value:"Not Confirmed",children:"Not Confirmed"}),(0,n.jsx)(m.eb,{value:"Online",children:"Online"}),(0,n.jsx)(m.eb,{value:"In-person",children:"In-person"}),(0,n.jsx)(m.eb,{value:"Both",children:"Both"})]})]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(c.J,{htmlFor:"company",children:"Company"}),(0,n.jsx)(d.p,{id:"company",name:"company",value:s.company,onChange:F,className:"border-blue-200 focus:ring-blue-500",required:!0})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(c.J,{htmlFor:"volunteer",children:"Member"}),(0,n.jsx)(d.p,{id:"volunteer",name:"volunteer",value:s.volunteer,onChange:F,className:"border-blue-200 focus:ring-blue-500"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(c.J,{htmlFor:"incharge",children:"Incharge"}),(0,n.jsx)(d.p,{id:"incharge",name:"incharge",value:s.incharge,onChange:F,className:"border-blue-200 focus:ring-blue-500"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(c.J,{htmlFor:"status",children:"Status"}),(0,n.jsxs)(m.l6,{value:s.status,onValueChange:e=>I("status",e),children:[(0,n.jsx)(m.bq,{className:"border-blue-200 focus:ring-blue-500",children:(0,n.jsx)(m.yv,{placeholder:"Select status"})}),(0,n.jsxs)(m.gC,{children:[(0,n.jsx)(m.eb,{value:"Pending",children:"Pending"}),(0,n.jsx)(m.eb,{value:"Active",children:"Accepted"}),(0,n.jsx)(m.eb,{value:"Inactive",children:"Declined"}),(0,n.jsx)(m.eb,{value:"Email_Sent",children:"Email Sent"}),(0,n.jsx)(m.eb,{value:"Not_Called",children:"Not Called"}),(0,n.jsx)(m.eb,{value:"Blacklisted",children:"Blacklisted"}),(0,n.jsx)(m.eb,{value:"Not_Reachable",children:"Not Reachable"}),(0,n.jsx)(m.eb,{value:"Wrong_Number",children:"Wrong Number"}),(0,n.jsx)(m.eb,{value:"Called_Postponed",children:"Called Postponed"})]})]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(c.J,{htmlFor:"hr_count",children:"HR Count"}),(0,n.jsx)(d.p,{id:"hr_count",name:"hr_count",type:"number",value:s.hr_count,onChange:F,className:"border-blue-200 focus:ring-blue-500",min:1})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(c.J,{htmlFor:"transport",children:"Transport"}),(0,n.jsx)(d.p,{id:"transport",name:"transport",value:s.transport,onChange:F,className:"border-blue-200 focus:ring-blue-500"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(c.J,{htmlFor:"address",children:"Address"}),(0,n.jsx)(d.p,{id:"address",name:"address",value:s.address,onChange:F,className:"border-blue-200 focus:ring-blue-500"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(c.J,{htmlFor:"internship",children:"Internship"}),(0,n.jsxs)(m.l6,{value:s.internship,onValueChange:e=>I("internship",e),children:[(0,n.jsx)(m.bq,{className:"border-blue-200 focus:ring-blue-500",children:(0,n.jsx)(m.yv,{placeholder:"Select internship"})}),(0,n.jsxs)(m.gC,{children:[(0,n.jsx)(m.eb,{value:"Yes",children:"Yes"}),(0,n.jsx)(m.eb,{value:"No",children:"No"})]})]})]}),void 0!==s.volunteer_email&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{children:[(0,n.jsx)(c.J,{htmlFor:"volunteer_email",children:"Member Email"}),(0,n.jsx)(d.p,{id:"volunteer_email",name:"volunteer_email",value:s.volunteer_email,onChange:F,className:"border-blue-200 focus:ring-blue-500"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(c.J,{htmlFor:"incharge_email",children:"Incharge Email"}),(0,n.jsxs)(m.l6,{value:s.incharge_email,onValueChange:e=>I("incharge_email",e),children:[(0,n.jsx)(m.bq,{className:"border-blue-200 focus:ring-blue-500",children:(0,n.jsx)(m.yv,{placeholder:"Select incharge email"})}),(0,n.jsx)(m.gC,{children:P.map(e=>(0,n.jsx)(m.eb,{value:e,children:e},e))})]})]})]})]}),(0,n.jsxs)("div",{className:"mt-4",children:[(0,n.jsx)(c.J,{htmlFor:"comments",children:"Comments"}),(0,n.jsx)(u.T,{id:"comments",name:"comments",value:s.comments,onChange:F,className:"border-blue-200 focus:ring-blue-500 min-h-[100px]"})]}),(0,n.jsx)(a.$,{type:"submit",className:"w-full bg-blue-800 hover:bg-blue-900",disabled:f||q,children:f||q?"Updating...":"Update HR Record"})]})})]}),y&&(0,n.jsxs)(h.Fc,{variant:"destructive",className:"mb-6 bg-red-100 border-red-400 text-red-700",children:[(0,n.jsx)(h.XL,{children:"Error"}),(0,n.jsx)(h.TN,{children:"string"==typeof y?y:Object.values(y).flat().join(", ")})]}),C&&(0,n.jsxs)(h.Fc,{className:"mb-6 bg-green-100 border-green-400 text-green-700",children:[(0,n.jsx)(h.XL,{children:"Success"}),(0,n.jsx)(h.TN,{children:"HR record has been successfully updated."})]}),(0,n.jsxs)("div",{className:"flex gap-4 mt-4",children:[(0,n.jsx)(a.$,{onClick:()=>e.push("/"),className:"bg-white hover:bg-blue-100 text-blue-800 border border-neutral-200 dark:border-neutral-800",children:"Back to HR Database"}),(0,n.jsx)(a.$,{onClick:()=>k(!0),className:"bg-red-600 hover:bg-red-700 text-white",disabled:f||q,children:"Delete HR Record"})]})]}),(0,n.jsx)(g.Lt,{open:S,onOpenChange:k,children:(0,n.jsxs)(g.EO,{children:[(0,n.jsxs)(g.wd,{children:[(0,n.jsx)(g.r7,{children:"Are you sure?"}),(0,n.jsx)(g.$v,{children:"This action cannot be undone. This will permanently delete the HR record."})]}),(0,n.jsxs)(g.ck,{children:[(0,n.jsx)(g.Zr,{children:"Cancel"}),(0,n.jsx)(g.Rx,{onClick:H,className:"bg-red-600 hover:bg-red-700",children:"Delete"})]})]})})]})}},22348:(e,r,s)=>{"use strict";s.d(r,{T:()=>l});var n=s(45512),i=s(58009),t=s(86645);let l=i.forwardRef(({className:e,...r},s)=>(0,n.jsx)("textarea",{className:(0,t.cn)("flex min-h-[60px] w-full rounded-md border border-neutral-200 bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300",e),ref:s,...r}));l.displayName="Textarea"},94754:(e,r,s)=>{"use strict";s.d(r,{CR:()=>i});var n=s(16131);n.z.object({email:n.z.string().email({message:"Please enter a valid email."}).trim(),password:n.z.string().min(8,{message:"Password must be 8 chars minimum"}).trim()}).extend({name:n.z.string().min(1,"Name is required"),role:n.z.enum(["admin","volunteer","incharge"],{required_error:"Role is required",invalid_type_error:"Invalid role"})});let i=n.z.object({hr_name:n.z.string().min(1,"HR name is required"),volunteer:n.z.string().min(1,"Volunteer name is required"),incharge:n.z.string().min(1,"Incharge name is required"),company:n.z.string().min(1,"Company name is required"),phone_number:n.z.string().regex(/^\d{10}$/,"Phone number must be exactly 10 digits"),status:n.z.enum(["Pending","Active","Inactive","Email_Sent","Not_Called","Blacklisted","Not_Reachable","Wrong_Number","Called_Postponed"],{required_error:"Status is required"}),email:n.z.string().email().optional().or(n.z.literal("")),interview_mode:n.z.enum(["Online","In-person","Both","Not Confirmed"],{required_error:"Interview mode is required",invalid_type_error:"Invalid interview mode"}).optional(),hr_count:n.z.number().int().min(1).default(1),transport:n.z.string().optional().or(n.z.literal("")),address:n.z.string().optional().or(n.z.literal("")),internship:n.z.enum(["Yes","No"]).default("No"),comments:n.z.string().optional().or(n.z.literal(""))})},80513:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>l});var n=s(62740),i=s(82276),t=s(75061);let l=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.default,{}),(0,n.jsx)(i.default,{})]})}},82276:(e,r,s)=>{"use strict";s.d(r,{default:()=>n});let n=(0,s(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/jerry/projects/WebDev/forese/hrdb/src/components/edit-hr.jsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/jerry/projects/WebDev/forese/hrdb/src/components/edit-hr.jsx","default")}};var r=require("../../webpack-runtime.js");r.C(e);var s=e=>r(r.s=e),n=r.X(0,[740,264,179,70,132,895,460,229,401],()=>s(30177));module.exports=n})();