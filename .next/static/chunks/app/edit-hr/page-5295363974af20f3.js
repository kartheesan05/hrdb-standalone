(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[504],{98442:(e,r,a)=>{Promise.resolve().then(a.bind(a,76972)),Promise.resolve().then(a.bind(a,86195))},76972:(e,r,a)=>{"use strict";a.d(r,{default:()=>N});var l=a(95155),t=a(12115),n=a(76046),s=a(59539),i=a(47370),d=a(60728),o=a(96894),c=a(91072),u=a(84328),m=a(80728),h=a(98930),x=a(75828);let b=(0,x.createServerReference)("402d5dd725747646d4b712edecc6e87a341e986955",x.callServer,void 0,x.findSourceMapURL,"getHR"),p=(0,x.createServerReference)("6097c4e23b14f894a9cc59f79ec8b7e3b891e3645d",x.callServer,void 0,x.findSourceMapURL,"editHR"),v=(0,x.createServerReference)("405b56f370b18d9b7b38d660c3d4646c2d32af5853",x.callServer,void 0,x.findSourceMapURL,"deleteHR");var g=a(60234),f=a(30814),j=a(94773);function N(){return(0,l.jsx)(t.Suspense,{fallback:(0,l.jsx)("div",{children:"Loading..."}),children:(0,l.jsx)(y,{})})}function y(){let e=(0,s.rd)(),r=(0,n.useSearchParams)().get("id"),[a,x]=(0,t.useState)({hr_name:"",volunteer:"",incharge:"",company:"",email:"",phone_number:"",status:"Not_Called",interview_mode:"",hr_count:"",transport:"",address:"",internship:"No",comments:"",volunteer_email:void 0,incharge_email:void 0}),[N,y]=(0,t.useState)(!1),[_,w]=(0,t.useState)(null),[R,C]=(0,t.useState)(!1),[k,z]=(0,t.useTransition)(),[S,F]=(0,t.useState)([]),[E,q]=(0,t.useState)(!1);(0,t.useEffect)(()=>{(async()=>{if(r)try{y(!0);let e=await b(r);if(e.errors){w(e.errors);return}let a=Object.fromEntries(Object.entries(e.data).map(e=>{let[r,a]=e;return[r,null!=a?a:""]}));x(a),F(e.incharges||[])}catch(e){w("Failed to load HR data")}finally{y(!1)}})()},[r]);let H=e=>{let{name:r,value:a}=e.target;x(e=>({...e,[r]:null!=a?a:""}))},J=(e,r)=>{x(a=>({...a,[e]:r}))},I=async e=>{var l;e.preventDefault(),y(!0),w(null),C(!1);let t=g.CR.safeParse({hr_name:a.hr_name,phone_number:a.phone_number,email:a.email,interview_mode:a.interview_mode,company:a.company,volunteer:a.volunteer,incharge:a.incharge,status:a.status,hr_count:parseInt(a.hr_count),transport:a.transport,address:a.address,internship:a.internship,comments:a.comments});if((null===(l=t.data)||void 0===l?void 0:l.address)==="07032005"){w("Happy Birthday\uD83E\uDD73"),y(!1);return}if(!t.success){w(t.error.flatten().fieldErrors),y(!1);return}try{let e={...t.data};e.volunteer_email=a.volunteer_email,e.incharge_email=a.incharge_email,z(async()=>{let a=await p(r,e);if(a.errors){w(a.errors);return}C(!0)})}catch(e){w("An error occurred while updating the HR record. Please try again.")}finally{y(!1)}},P=async()=>{y(!0),w(null);try{z(async()=>{let a=await v(r);if(a.errors){w(a.errors);return}f.oR.warning("HR record deleted successfully"),e.push("/")})}catch(e){w("An error occurred while deleting the HR record.")}finally{y(!1)}};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"min-h-screen w-screen p-[75px] bg-blue-50 relative",children:[(0,l.jsxs)(d.Zp,{className:"mb-6 border-blue-200 shadow-blue-100 rounded-lg",children:[(0,l.jsx)(d.aR,{className:"bg-blue-100 rounded-t-lg mb-4",children:(0,l.jsx)(d.ZB,{className:"text-blue-800 text-center text-3xl font-bold",children:"Edit HR Record"})}),(0,l.jsx)(d.Wu,{className:"bg-white rounded-lg",children:(0,l.jsxs)("form",{onSubmit:I,className:"space-y-4",children:[(0,l.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)(c.J,{htmlFor:"hr_name",children:"HR Name*"}),(0,l.jsx)(o.p,{id:"hr_name",name:"hr_name",value:a.hr_name,onChange:H,className:"border-neutral-200",required:!0})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)(c.J,{htmlFor:"phone_number",children:"Phone Number*"}),(0,l.jsx)(o.p,{id:"phone_number",name:"phone_number",value:a.phone_number,onChange:H,className:"border-neutral-200",required:!0})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)(c.J,{htmlFor:"email",children:"Email"}),(0,l.jsx)(o.p,{id:"email",name:"email",type:"email",value:a.email,onChange:H,className:"border-neutral-200"})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)(c.J,{children:"Interview Mode"}),(0,l.jsxs)(h.l6,{value:a.interview_mode,onValueChange:e=>J("interview_mode",e),children:[(0,l.jsx)(h.bq,{className:"border-neutral-200",children:(0,l.jsx)(h.yv,{placeholder:"Interview Mode"})}),(0,l.jsxs)(h.gC,{children:[(0,l.jsx)(h.eb,{value:"Not Confirmed",children:"Not Confirmed"}),(0,l.jsx)(h.eb,{value:"Online",children:"Online"}),(0,l.jsx)(h.eb,{value:"In-person",children:"In-person"}),(0,l.jsx)(h.eb,{value:"Both",children:"Both"})]})]})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)(c.J,{htmlFor:"company",children:"Company*"}),(0,l.jsx)(o.p,{id:"company",name:"company",value:a.company,onChange:H,className:"border-neutral-200",required:!0})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)(c.J,{htmlFor:"volunteer",children:"Member*"}),(0,l.jsx)(o.p,{id:"volunteer",name:"volunteer",value:a.volunteer,onChange:H,className:"border-neutral-200"})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)(c.J,{htmlFor:"incharge",children:"Incharge*"}),(0,l.jsx)(o.p,{id:"incharge",name:"incharge",value:a.incharge,onChange:H,className:"border-neutral-200"})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)(c.J,{htmlFor:"status",children:"Status"}),(0,l.jsxs)(h.l6,{value:a.status,onValueChange:e=>J("status",e),children:[(0,l.jsx)(h.bq,{className:"border-neutral-200",children:(0,l.jsx)(h.yv,{placeholder:"Select status"})}),(0,l.jsxs)(h.gC,{children:[(0,l.jsx)(h.eb,{value:"Pending",children:"Pending"}),(0,l.jsx)(h.eb,{value:"Active",children:"Accepted Invite"}),(0,l.jsx)(h.eb,{value:"Inactive",children:"Called Declined"}),(0,l.jsx)(h.eb,{value:"Emailed_Declined",children:"Emailed Declined"}),(0,l.jsx)(h.eb,{value:"Email_Sent",children:"Email Sent"}),(0,l.jsx)(h.eb,{value:"Not_Called",children:"Not Called"}),(0,l.jsx)(h.eb,{value:"Blacklisted",children:"Blacklisted"}),(0,l.jsx)(h.eb,{value:"Not_Reachable",children:"Not Reachable"}),(0,l.jsx)(h.eb,{value:"Wrong_Number",children:"Wrong Number"}),(0,l.jsx)(h.eb,{value:"Called_Postponed",children:"Called Postponed"})]})]})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)(c.J,{htmlFor:"hr_count",children:"HR Count*"}),(0,l.jsx)(o.p,{id:"hr_count",name:"hr_count",type:"number",value:a.hr_count,onChange:H,className:"border-neutral-200",min:1})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)(c.J,{htmlFor:"transport",children:"Transport"}),(0,l.jsx)(o.p,{id:"transport",name:"transport",value:a.transport,onChange:H,className:"border-neutral-200"})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)(c.J,{htmlFor:"address",children:"Address"}),(0,l.jsx)(o.p,{id:"address",name:"address",value:a.address,onChange:H,className:"border-neutral-200"})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)(c.J,{htmlFor:"internship",children:"Internship"}),(0,l.jsxs)(h.l6,{value:a.internship,onValueChange:e=>J("internship",e),children:[(0,l.jsx)(h.bq,{className:"border-neutral-200",children:(0,l.jsx)(h.yv,{placeholder:"Select internship"})}),(0,l.jsxs)(h.gC,{children:[(0,l.jsx)(h.eb,{value:"Yes",children:"Yes"}),(0,l.jsx)(h.eb,{value:"No",children:"No"})]})]})]}),void 0!==a.volunteer_email&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{children:[(0,l.jsx)(c.J,{htmlFor:"volunteer_email",children:"Member Email*"}),(0,l.jsx)(o.p,{id:"volunteer_email",name:"volunteer_email",value:a.volunteer_email,onChange:H,className:"border-neutral-200"})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)(c.J,{htmlFor:"incharge_email",children:"Incharge Email*"}),(0,l.jsxs)(h.l6,{value:a.incharge_email,onValueChange:e=>J("incharge_email",e),children:[(0,l.jsx)(h.bq,{className:"border-neutral-200",children:(0,l.jsx)(h.yv,{placeholder:"Select incharge email"})}),(0,l.jsx)(h.gC,{children:S.map(e=>(0,l.jsx)(h.eb,{value:e,children:e},e))})]})]})]})]}),(0,l.jsxs)("div",{className:"mt-4",children:[(0,l.jsx)(c.J,{htmlFor:"comments",children:"Comments"}),(0,l.jsx)(u.T,{id:"comments",name:"comments",value:a.comments,onChange:H,className:"border-neutral-200 min-h-[100px]"})]}),(0,l.jsx)(i.$,{type:"submit",className:"w-full bg-blue-800 hover:bg-blue-900",disabled:N||k,children:N||k?"Updating...":"Update HR Record"})]})})]}),_&&(0,l.jsxs)(m.Fc,{variant:"destructive",className:"mb-6 bg-red-100 border-red-400 text-red-700",children:[(0,l.jsx)(m.XL,{children:"Error"}),(0,l.jsx)(m.TN,{children:"string"==typeof _?_:Object.values(_).flat().join(", ")})]}),R&&(0,l.jsxs)(m.Fc,{className:"mb-6 bg-green-100 border-green-400 text-green-700",children:[(0,l.jsx)(m.XL,{children:"Success"}),(0,l.jsx)(m.TN,{children:"HR record has been successfully updated."})]}),(0,l.jsxs)("div",{className:"flex gap-4 mt-4",children:[(0,l.jsx)(i.$,{onClick:()=>e.push("/"),className:"bg-white hover:bg-blue-100 text-blue-800 border border-neutral-200 dark:border-neutral-800",children:"Back to HR Database"}),(0,l.jsx)(i.$,{onClick:()=>q(!0),className:"bg-red-600 hover:bg-red-700 text-white",disabled:N||k,children:"Delete HR Record"})]})]}),(0,l.jsx)(j.Lt,{open:E,onOpenChange:q,children:(0,l.jsxs)(j.EO,{children:[(0,l.jsxs)(j.wd,{children:[(0,l.jsx)(j.r7,{children:"Are you sure?"}),(0,l.jsx)(j.$v,{children:"This action cannot be undone. This will permanently delete the HR record."})]}),(0,l.jsxs)(j.ck,{children:[(0,l.jsx)(j.Zr,{children:"Cancel"}),(0,l.jsx)(j.Rx,{onClick:P,className:"bg-red-600 hover:bg-red-700",children:"Delete"})]})]})})]})}},94773:(e,r,a)=>{"use strict";a.d(r,{$v:()=>b,EO:()=>u,Lt:()=>d,Rx:()=>p,Zr:()=>v,ck:()=>h,r7:()=>x,wd:()=>m});var l=a(95155),t=a(12115),n=a(19439),s=a(77849),i=a(47370);let d=n.bL;n.l9;let o=n.ZL,c=t.forwardRef((e,r)=>{let{className:a,...t}=e;return(0,l.jsx)(n.hJ,{className:(0,s.cn)("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a),...t,ref:r})});c.displayName=n.hJ.displayName;let u=t.forwardRef((e,r)=>{let{className:a,...t}=e;return(0,l.jsxs)(o,{children:[(0,l.jsx)(c,{}),(0,l.jsx)(n.UC,{ref:r,className:(0,s.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-neutral-200 bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg dark:border-neutral-800 dark:bg-neutral-950",a),...t})]})});u.displayName=n.UC.displayName;let m=e=>{let{className:r,...a}=e;return(0,l.jsx)("div",{className:(0,s.cn)("flex flex-col space-y-2 text-center sm:text-left",r),...a})};m.displayName="AlertDialogHeader";let h=e=>{let{className:r,...a}=e;return(0,l.jsx)("div",{className:(0,s.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",r),...a})};h.displayName="AlertDialogFooter";let x=t.forwardRef((e,r)=>{let{className:a,...t}=e;return(0,l.jsx)(n.hE,{ref:r,className:(0,s.cn)("text-lg font-semibold",a),...t})});x.displayName=n.hE.displayName;let b=t.forwardRef((e,r)=>{let{className:a,...t}=e;return(0,l.jsx)(n.VY,{ref:r,className:(0,s.cn)("text-sm text-neutral-500 dark:text-neutral-400",a),...t})});b.displayName=n.VY.displayName;let p=t.forwardRef((e,r)=>{let{className:a,...t}=e;return(0,l.jsx)(n.rc,{ref:r,className:(0,s.cn)((0,i.r)(),a),...t})});p.displayName=n.rc.displayName;let v=t.forwardRef((e,r)=>{let{className:a,...t}=e;return(0,l.jsx)(n.ZD,{ref:r,className:(0,s.cn)((0,i.r)({variant:"outline"}),"mt-2 sm:mt-0",a),...t})});v.displayName=n.ZD.displayName},80728:(e,r,a)=>{"use strict";a.d(r,{Fc:()=>d,TN:()=>c,XL:()=>o});var l=a(95155),t=a(12115),n=a(40652),s=a(77849);let i=(0,n.F)("relative w-full rounded-lg border border-neutral-200 px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-neutral-950 [&>svg~*]:pl-7 dark:border-neutral-800 dark:[&>svg]:text-neutral-50",{variants:{variant:{default:"bg-white text-neutral-950 dark:bg-neutral-950 dark:text-neutral-50",destructive:"border-red-500/50 text-red-500 dark:border-red-500 [&>svg]:text-red-500 dark:border-red-900/50 dark:text-red-900 dark:dark:border-red-900 dark:[&>svg]:text-red-900"}},defaultVariants:{variant:"default"}}),d=t.forwardRef((e,r)=>{let{className:a,variant:t,...n}=e;return(0,l.jsx)("div",{ref:r,role:"alert",className:(0,s.cn)(i({variant:t}),a),...n})});d.displayName="Alert";let o=t.forwardRef((e,r)=>{let{className:a,...t}=e;return(0,l.jsx)("h5",{ref:r,className:(0,s.cn)("mb-1 font-medium leading-none tracking-tight",a),...t})});o.displayName="AlertTitle";let c=t.forwardRef((e,r)=>{let{className:a,...t}=e;return(0,l.jsx)("div",{ref:r,className:(0,s.cn)("text-sm [&_p]:leading-relaxed",a),...t})});c.displayName="AlertDescription"},96894:(e,r,a)=>{"use strict";a.d(r,{p:()=>s});var l=a(95155),t=a(12115),n=a(77849);let s=t.forwardRef((e,r)=>{let{className:a,type:t,...s}=e;return(0,l.jsx)("input",{type:t,className:(0,n.cn)("flex h-9 w-full rounded-md border border-neutral-200 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-neutral-950 placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:file:text-neutral-50 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300",a),ref:r,...s})});s.displayName="Input"},91072:(e,r,a)=>{"use strict";a.d(r,{J:()=>o});var l=a(95155),t=a(12115),n=a(24352),s=a(40652),i=a(77849);let d=(0,s.F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),o=t.forwardRef((e,r)=>{let{className:a,...t}=e;return(0,l.jsx)(n.b,{ref:r,className:(0,i.cn)(d(),a),...t})});o.displayName=n.b.displayName},84328:(e,r,a)=>{"use strict";a.d(r,{T:()=>s});var l=a(95155),t=a(12115),n=a(77849);let s=t.forwardRef((e,r)=>{let{className:a,...t}=e;return(0,l.jsx)("textarea",{className:(0,n.cn)("flex min-h-[60px] w-full rounded-md border border-neutral-200 bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300",a),ref:r,...t})});s.displayName="Textarea"},60234:(e,r,a)=>{"use strict";a.d(r,{CR:()=>t});var l=a(43415);l.z.object({email:l.z.string().email({message:"Please enter a valid email."}).trim(),password:l.z.string().min(8,{message:"Password must be 8 chars minimum"}).trim()}).extend({name:l.z.string().min(1,"Name is required"),role:l.z.enum(["admin","volunteer","incharge"],{required_error:"Role is required",invalid_type_error:"Invalid role"})});let t=l.z.object({hr_name:l.z.string().min(1,"HR name is required"),volunteer:l.z.string().min(1,"Volunteer name is required"),incharge:l.z.string().min(1,"Incharge name is required"),company:l.z.string().min(1,"Company name is required"),phone_number:l.z.string().regex(/^\d{10}$/,"Phone number must be exactly 10 digits"),status:l.z.enum(["Pending","Active","Inactive","Email_Sent","Not_Called","Blacklisted","Not_Reachable","Wrong_Number","Called_Postponed","Emailed_Declined"],{required_error:"Status is required"}),email:l.z.string().email().optional().or(l.z.literal("")),interview_mode:l.z.enum(["Online","In-person","Both","Not Confirmed"],{required_error:"Interview mode is required",invalid_type_error:"Invalid interview mode"}).optional(),hr_count:l.z.number().int().min(1).default(1),transport:l.z.string().optional().or(l.z.literal("")),address:l.z.string().optional().or(l.z.literal("")),internship:l.z.enum(["Yes","No"]).default("No"),comments:l.z.string().optional().or(l.z.literal(""))})}},e=>{var r=r=>e(e.s=r);e.O(0,[105,539,430,814,32,255,439,60,441,517,358],()=>r(98442)),_N_E=e.O()}]);