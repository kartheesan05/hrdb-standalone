"use strict";exports.id=219,exports.ids=[219],exports.modules={72505:(e,r,t)=>{t.d(r,{default:()=>o});var a=t(45512),s=t(30722),l=t(11169),n=t(61038),d=t(58009),i=t(91542);let o=function(){let e=(0,l.rd)(),[r,t]=(0,d.useState)(null),[o,c]=(0,d.useState)(!1),[u,m]=(0,d.useState)(""),p=()=>{document.cookie="session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",localStorage.clear(),i.oR.error("Logged out :("),e.push("/login")},h=e=>`text-blue-800 cursor-pointer font-bold relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-blue-600 ${u===e?"after:w-full":"after:w-0 hover:after:w-full after:transition-all after:duration-300 after:ease-in-out hover:text-blue-600"}`;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("nav",{className:"fixed top-0 left-0 right-0 bg-white border-b border-gray-200 shadow-sm z-40",children:(0,a.jsxs)("div",{className:"max-w-screen px-4 mx-auto flex justify-between items-center h-16 relative",children:[(0,a.jsxs)("div",{className:"absolute left-4 flex items-center gap-2 cursor-pointer",onClick:()=>e.push("/"),children:[(0,a.jsx)("img",{src:"https://cdn.forese.co.in/forese-logo.png",alt:"Forese Logo",className:"h-[6rem] w-auto"}),(0,a.jsx)("h1",{className:"text-blue-800 text-2xl font-bold",children:"HR Database"})]}),(0,a.jsx)("button",{onClick:()=>c(!o),className:"md:hidden ml-auto p-2",children:(0,a.jsx)("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o?(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"}):(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})}),("admin"===r||"incharge"===r||"volunteer"===r)&&(0,a.jsxs)("div",{className:"hidden md:flex gap-6 mx-auto items-center mt-1",children:[(0,a.jsx)("span",{onClick:()=>e.push("/"),className:h("/"),children:"Home"}),"admin"===r&&(0,a.jsx)("span",{onClick:()=>e.push("/add-user"),className:h("/add-user"),children:"Add User"}),("admin"===r||"incharge"===r)&&(0,a.jsx)("span",{onClick:()=>e.push("/stats"),className:h("/stats"),children:"Stats"}),(0,a.jsx)("span",{onClick:()=>e.push("/add-hr"),className:h("/add-hr"),children:"Add HR"}),(0,a.jsx)("span",{onClick:()=>e.push("/hr-pitch"),className:h("/hr-pitch"),children:"HR Pitch"}),(0,a.jsx)("span",{onClick:()=>e.push("/csv-upload"),className:h("/csv-upload"),children:"CSV Upload"})]}),(0,a.jsx)("div",{className:"hidden md:flex gap-2 absolute right-4",children:(0,a.jsxs)(n.$,{onClick:p,className:"bg-white hover:bg-blue-100 text-blue-800 border border-blue-200",children:[(0,a.jsx)(s.A,{className:"mr-2 h-4 w-4"}),"Logout"]})}),(0,a.jsxs)("div",{className:`${o?"flex":"hidden"} md:hidden absolute top-16 left-0 right-0 flex-col bg-white border-b border-gray-200 shadow-sm`,children:[("admin"===r||"incharge"===r||"volunteer"===r)&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{onClick:()=>{e.push("/"),c(!1)},className:`p-4 cursor-pointer font-bold ${"/"===u?"bg-blue-50":"hover:bg-blue-50"} text-blue-800`,children:"Home"}),"admin"===r&&(0,a.jsx)("span",{onClick:()=>{e.push("/add-user"),c(!1)},className:`p-4 cursor-pointer font-bold ${"/add-user"===u?"bg-blue-50":"hover:bg-blue-50"} text-blue-800`,children:"Add User"}),("admin"===r||"incharge"===r)&&(0,a.jsx)("span",{onClick:()=>{e.push("/stats"),c(!1)},className:`p-4 cursor-pointer font-bold ${"/stats"===u?"bg-blue-50":"hover:bg-blue-50"} text-blue-800`,children:"Stats"}),(0,a.jsx)("span",{onClick:()=>{e.push("/add-hr"),c(!1)},className:`p-4 cursor-pointer font-bold ${"/add-hr"===u?"bg-blue-50":"hover:bg-blue-50"} text-blue-800`,children:"Add HR"}),(0,a.jsx)("span",{onClick:()=>{e.push("/hr-pitch"),c(!1)},className:`p-4 cursor-pointer font-bold ${"/hr-pitch"===u?"bg-blue-50":"hover:bg-blue-50"} text-blue-800`,children:"HR Pitch"}),(0,a.jsx)("span",{onClick:()=>{e.push("/csv-upload"),c(!1)},className:`p-4 cursor-pointer font-bold ${"/csv-upload"===u?"bg-blue-50":"hover:bg-blue-50"} text-blue-800`,children:"CSV Upload"})]}),(0,a.jsxs)(n.$,{onClick:p,className:"m-4 bg-white hover:bg-blue-100 text-blue-800 border border-blue-200",children:[(0,a.jsx)(s.A,{className:"mr-2 h-4 w-4"}),"Logout"]})]})]})})})}},21030:(e,r,t)=>{t.d(r,{Fc:()=>i,TN:()=>c,XL:()=>o});var a=t(45512),s=t(58009),l=t(32101),n=t(86645);let d=(0,l.F)("relative w-full rounded-lg border border-neutral-200 px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-neutral-950 [&>svg~*]:pl-7 dark:border-neutral-800 dark:[&>svg]:text-neutral-50",{variants:{variant:{default:"bg-white text-neutral-950 dark:bg-neutral-950 dark:text-neutral-50",destructive:"border-red-500/50 text-red-500 dark:border-red-500 [&>svg]:text-red-500 dark:border-red-900/50 dark:text-red-900 dark:dark:border-red-900 dark:[&>svg]:text-red-900"}},defaultVariants:{variant:"default"}}),i=s.forwardRef(({className:e,variant:r,...t},s)=>(0,a.jsx)("div",{ref:s,role:"alert",className:(0,n.cn)(d({variant:r}),e),...t}));i.displayName="Alert";let o=s.forwardRef(({className:e,...r},t)=>(0,a.jsx)("h5",{ref:t,className:(0,n.cn)("mb-1 font-medium leading-none tracking-tight",e),...r}));o.displayName="AlertTitle";let c=s.forwardRef(({className:e,...r},t)=>(0,a.jsx)("div",{ref:t,className:(0,n.cn)("text-sm [&_p]:leading-relaxed",e),...r}));c.displayName="AlertDescription"},36684:(e,r,t)=>{t.d(r,{p:()=>n});var a=t(45512),s=t(58009),l=t(86645);let n=s.forwardRef(({className:e,type:r,...t},s)=>(0,a.jsx)("input",{type:r,className:(0,l.cn)("flex h-9 w-full rounded-md border border-neutral-200 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-neutral-950 placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:file:text-neutral-50 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300",e),ref:s,...t}));n.displayName="Input"},53266:(e,r,t)=>{t.d(r,{J:()=>o});var a=t(45512),s=t(58009),l=t(90069),n=t(32101),d=t(86645);let i=(0,n.F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),o=s.forwardRef(({className:e,...r},t)=>(0,a.jsx)(l.b,{ref:t,className:(0,d.cn)(i(),e),...r}));o.displayName=l.b.displayName},27746:(e,r,t)=>{t.d(r,{bq:()=>c,eb:()=>h,gC:()=>p,l6:()=>i,yv:()=>o});var a=t(45512),s=t(58009),l=t(42933),n=t(69132),d=t(86645);let i=n.bL;n.YJ;let o=n.WT,c=s.forwardRef(({className:e,children:r,...t},s)=>(0,a.jsxs)(n.l9,{ref:s,className:(0,d.cn)("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-neutral-200 bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-white placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 dark:border-neutral-800 dark:ring-offset-neutral-950 dark:placeholder:text-neutral-400 dark:focus:ring-neutral-300",e),...t,children:[r,(0,a.jsx)(n.In,{asChild:!0,children:(0,a.jsx)(l.TBE,{className:"h-4 w-4 opacity-50"})})]}));c.displayName=n.l9.displayName;let u=s.forwardRef(({className:e,...r},t)=>(0,a.jsx)(n.PP,{ref:t,className:(0,d.cn)("flex cursor-default items-center justify-center py-1",e),...r,children:(0,a.jsx)(l.Mtm,{})}));u.displayName=n.PP.displayName;let m=s.forwardRef(({className:e,...r},t)=>(0,a.jsx)(n.wn,{ref:t,className:(0,d.cn)("flex cursor-default items-center justify-center py-1",e),...r,children:(0,a.jsx)(l.D3D,{})}));m.displayName=n.wn.displayName;let p=s.forwardRef(({className:e,children:r,position:t="popper",...s},l)=>(0,a.jsx)(n.ZL,{children:(0,a.jsxs)(n.UC,{ref:l,className:(0,d.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border border-neutral-200 bg-white text-neutral-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50","popper"===t&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",e),position:t,...s,children:[(0,a.jsx)(u,{}),(0,a.jsx)(n.LM,{className:(0,d.cn)("p-1","popper"===t&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:r}),(0,a.jsx)(m,{})]})}));p.displayName=n.UC.displayName,s.forwardRef(({className:e,...r},t)=>(0,a.jsx)(n.JU,{ref:t,className:(0,d.cn)("px-2 py-1.5 text-sm font-semibold",e),...r})).displayName=n.JU.displayName;let h=s.forwardRef(({className:e,children:r,...t},s)=>(0,a.jsxs)(n.q7,{ref:s,className:(0,d.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-neutral-100 focus:text-neutral-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-neutral-800 dark:focus:text-neutral-50",e),...t,children:[(0,a.jsx)("span",{className:"absolute right-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,a.jsx)(n.VF,{children:(0,a.jsx)(l.Srz,{className:"h-4 w-4"})})}),(0,a.jsx)(n.p4,{children:r})]}));h.displayName=n.q7.displayName,s.forwardRef(({className:e,...r},t)=>(0,a.jsx)(n.wv,{ref:t,className:(0,d.cn)("-mx-1 my-1 h-px bg-neutral-100 dark:bg-neutral-800",e),...r})).displayName=n.wv.displayName},22348:(e,r,t)=>{t.d(r,{T:()=>n});var a=t(45512),s=t(58009),l=t(86645);let n=s.forwardRef(({className:e,...r},t)=>(0,a.jsx)("textarea",{className:(0,l.cn)("flex min-h-[60px] w-full rounded-md border border-neutral-200 bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300",e),ref:t,...r}));n.displayName="Textarea"},94754:(e,r,t)=>{t.d(r,{CR:()=>s});var a=t(16131);a.z.object({email:a.z.string().email({message:"Please enter a valid email."}).trim(),password:a.z.string().min(8,{message:"Password must be 8 chars minimum"}).trim()}).extend({name:a.z.string().min(1,"Name is required"),role:a.z.enum(["admin","volunteer","incharge"],{required_error:"Role is required",invalid_type_error:"Invalid role"})});let s=a.z.object({hr_name:a.z.string().min(1,"HR name is required"),volunteer:a.z.string().min(1,"Volunteer name is required"),incharge:a.z.string().min(1,"Incharge name is required"),company:a.z.string().min(1,"Company name is required"),phone_number:a.z.string().regex(/^\d{10}$/,"Phone number must be exactly 10 digits"),status:a.z.enum(["Pending","Active","Inactive","Email_Sent","Not_Called","Blacklisted","Not_Reachable","Wrong_Number","Called_Postponed"],{required_error:"Status is required"}),email:a.z.string().email().optional().or(a.z.literal("")),interview_mode:a.z.enum(["Online","In-person","Both","Not Confirmed"],{required_error:"Interview mode is required",invalid_type_error:"Invalid interview mode"}).optional(),hr_count:a.z.number().int().min(1).default(1),transport:a.z.string().optional().or(a.z.literal("")),address:a.z.string().optional().or(a.z.literal("")),internship:a.z.enum(["Yes","No"]).default("No"),comments:a.z.string().optional().or(a.z.literal(""))})},75061:(e,r,t)=>{t.d(r,{default:()=>a});let a=(0,t(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/jerry/projects/WebDev/forese/hrdb/src/components/navbar.jsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/jerry/projects/WebDev/forese/hrdb/src/components/navbar.jsx","default")}};