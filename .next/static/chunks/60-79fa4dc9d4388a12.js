(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[60],{41226:()=>{},86195:(e,t,r)=>{"use strict";r.d(t,{default:()=>i});var a=r(95155),s=r(65236),l=r(59539),n=r(47370),d=r(12115),o=r(30814);let i=function(){let e=(0,l.rd)(),[t,r]=(0,d.useState)(null),[i,c]=(0,d.useState)(!1),[u,h]=(0,d.useState)("");(0,d.useEffect)(()=>{r(localStorage.getItem("role")),h(window.location.pathname)},[]);let p=()=>{document.cookie="session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",localStorage.clear(),o.oR.error("Logged out :("),e.push("/login")},m=e=>"".concat("text-blue-800 cursor-pointer font-bold relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-blue-600"," ").concat(u===e?"after:w-full":"after:w-0 hover:after:w-full after:transition-all after:duration-300 after:ease-in-out hover:text-blue-600");return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("nav",{className:"fixed top-0 left-0 right-0 bg-white border-b border-gray-200 shadow-sm z-40",children:(0,a.jsxs)("div",{className:"max-w-screen px-4 mx-auto flex justify-between items-center h-16 relative",children:[(0,a.jsxs)("div",{className:"absolute left-4 flex items-center gap-2 cursor-pointer",onClick:()=>e.push("/"),children:[(0,a.jsx)("img",{src:"https://cdn.forese.co.in/forese-logo.png",alt:"Forese Logo",className:"h-[6rem] w-auto"}),(0,a.jsx)("h1",{className:"text-blue-800 text-2xl font-bold",children:"HR Database"})]}),(0,a.jsx)("button",{onClick:()=>c(!i),className:"md:hidden ml-auto p-2",children:(0,a.jsx)("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:i?(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"}):(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})}),("admin"===t||"incharge"===t||"volunteer"===t)&&(0,a.jsxs)("div",{className:"hidden md:flex gap-6 mx-auto items-center mt-1",children:[(0,a.jsx)("span",{onClick:()=>e.push("/"),className:m("/"),children:"Home"}),"admin"===t&&(0,a.jsx)("span",{onClick:()=>e.push("/add-user"),className:m("/add-user"),children:"Add User"}),("admin"===t||"incharge"===t)&&(0,a.jsx)("span",{onClick:()=>e.push("/stats"),className:m("/stats"),children:"Stats"}),(0,a.jsx)("span",{onClick:()=>e.push("/add-hr"),className:m("/add-hr"),children:"Add HR"}),(0,a.jsx)("span",{onClick:()=>e.push("/hr-pitch"),className:m("/hr-pitch"),children:"HR Pitch"}),(0,a.jsx)("span",{onClick:()=>e.push("/csv-upload"),className:m("/csv-upload"),children:"CSV Upload"})]}),(0,a.jsx)("div",{className:"hidden md:flex gap-2 absolute right-4",children:(0,a.jsxs)(n.$,{onClick:p,className:"bg-white hover:bg-blue-100 text-blue-800 border border-blue-200",children:[(0,a.jsx)(s.A,{className:"mr-2 h-4 w-4"}),"Logout"]})}),(0,a.jsxs)("div",{className:"".concat(i?"flex":"hidden"," md:hidden absolute top-16 left-0 right-0 flex-col bg-white border-b border-gray-200 shadow-sm"),children:[("admin"===t||"incharge"===t||"volunteer"===t)&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{onClick:()=>{e.push("/"),c(!1)},className:"p-4 cursor-pointer font-bold ".concat("/"===u?"bg-blue-50":"hover:bg-blue-50"," text-blue-800"),children:"Home"}),"admin"===t&&(0,a.jsx)("span",{onClick:()=>{e.push("/add-user"),c(!1)},className:"p-4 cursor-pointer font-bold ".concat("/add-user"===u?"bg-blue-50":"hover:bg-blue-50"," text-blue-800"),children:"Add User"}),("admin"===t||"incharge"===t)&&(0,a.jsx)("span",{onClick:()=>{e.push("/stats"),c(!1)},className:"p-4 cursor-pointer font-bold ".concat("/stats"===u?"bg-blue-50":"hover:bg-blue-50"," text-blue-800"),children:"Stats"}),(0,a.jsx)("span",{onClick:()=>{e.push("/add-hr"),c(!1)},className:"p-4 cursor-pointer font-bold ".concat("/add-hr"===u?"bg-blue-50":"hover:bg-blue-50"," text-blue-800"),children:"Add HR"}),(0,a.jsx)("span",{onClick:()=>{e.push("/hr-pitch"),c(!1)},className:"p-4 cursor-pointer font-bold ".concat("/hr-pitch"===u?"bg-blue-50":"hover:bg-blue-50"," text-blue-800"),children:"HR Pitch"}),(0,a.jsx)("span",{onClick:()=>{e.push("/csv-upload"),c(!1)},className:"p-4 cursor-pointer font-bold ".concat("/csv-upload"===u?"bg-blue-50":"hover:bg-blue-50"," text-blue-800"),children:"CSV Upload"})]}),(0,a.jsxs)(n.$,{onClick:p,className:"m-4 bg-white hover:bg-blue-100 text-blue-800 border border-blue-200",children:[(0,a.jsx)(s.A,{className:"mr-2 h-4 w-4"}),"Logout"]})]})]})})})}},47370:(e,t,r)=>{"use strict";r.d(t,{$:()=>i,r:()=>o});var a=r(95155),s=r(12115),l=r(14707),n=r(40652),d=r(77849);let o=(0,n.F)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-neutral-300",{variants:{variant:{default:"bg-neutral-900 text-neutral-50 shadow hover:bg-neutral-900/90 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90",destructive:"bg-red-500 text-neutral-50 shadow-sm hover:bg-red-500/90 dark:bg-red-900 dark:text-neutral-50 dark:hover:bg-red-900/90",outline:"border border-neutral-200 bg-white shadow-sm hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",secondary:"bg-neutral-100 text-neutral-900 shadow-sm hover:bg-neutral-100/80 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80",ghost:"hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",link:"text-neutral-900 underline-offset-4 hover:underline dark:text-neutral-50"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),i=s.forwardRef((e,t)=>{let{className:r,variant:s,size:n,asChild:i=!1,...c}=e,u=i?l.DX:"button";return(0,a.jsx)(u,{className:(0,d.cn)(o({variant:s,size:n,className:r})),ref:t,...c})});i.displayName="Button"},60728:(e,t,r)=>{"use strict";r.d(t,{BT:()=>i,Wu:()=>c,ZB:()=>o,Zp:()=>n,aR:()=>d,wL:()=>u});var a=r(95155),s=r(12115),l=r(77849);let n=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{ref:t,className:(0,l.cn)("rounded-xl border border-neutral-200 bg-white text-neutral-950 shadow dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50",r),...s})});n.displayName="Card";let d=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{ref:t,className:(0,l.cn)("flex flex-col space-y-1.5 p-6",r),...s})});d.displayName="CardHeader";let o=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("h3",{ref:t,className:(0,l.cn)("font-semibold leading-none tracking-tight",r),...s})});o.displayName="CardTitle";let i=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("p",{ref:t,className:(0,l.cn)("text-sm text-neutral-500 dark:text-neutral-400",r),...s})});i.displayName="CardDescription";let c=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{ref:t,className:(0,l.cn)("p-6 pt-0",r),...s})});c.displayName="CardContent";let u=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{ref:t,className:(0,l.cn)("flex items-center p-6 pt-0",r),...s})});u.displayName="CardFooter"},98930:(e,t,r)=>{"use strict";r.d(t,{bq:()=>c,eb:()=>m,gC:()=>p,l6:()=>o,yv:()=>i});var a=r(95155),s=r(12115),l=r(87365),n=r(87588),d=r(77849);let o=n.bL;n.YJ;let i=n.WT,c=s.forwardRef((e,t)=>{let{className:r,children:s,...o}=e;return(0,a.jsxs)(n.l9,{ref:t,className:(0,d.cn)("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-neutral-200 bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-white placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 dark:border-neutral-800 dark:ring-offset-neutral-950 dark:placeholder:text-neutral-400 dark:focus:ring-neutral-300",r),...o,children:[s,(0,a.jsx)(n.In,{asChild:!0,children:(0,a.jsx)(l.TBE,{className:"h-4 w-4 opacity-50"})})]})});c.displayName=n.l9.displayName;let u=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(n.PP,{ref:t,className:(0,d.cn)("flex cursor-default items-center justify-center py-1",r),...s,children:(0,a.jsx)(l.Mtm,{})})});u.displayName=n.PP.displayName;let h=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(n.wn,{ref:t,className:(0,d.cn)("flex cursor-default items-center justify-center py-1",r),...s,children:(0,a.jsx)(l.D3D,{})})});h.displayName=n.wn.displayName;let p=s.forwardRef((e,t)=>{let{className:r,children:s,position:l="popper",...o}=e;return(0,a.jsx)(n.ZL,{children:(0,a.jsxs)(n.UC,{ref:t,className:(0,d.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border border-neutral-200 bg-white text-neutral-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50","popper"===l&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",r),position:l,...o,children:[(0,a.jsx)(u,{}),(0,a.jsx)(n.LM,{className:(0,d.cn)("p-1","popper"===l&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:s}),(0,a.jsx)(h,{})]})})});p.displayName=n.UC.displayName,s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(n.JU,{ref:t,className:(0,d.cn)("px-2 py-1.5 text-sm font-semibold",r),...s})}).displayName=n.JU.displayName;let m=s.forwardRef((e,t)=>{let{className:r,children:s,...o}=e;return(0,a.jsxs)(n.q7,{ref:t,className:(0,d.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-neutral-100 focus:text-neutral-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-neutral-800 dark:focus:text-neutral-50",r),...o,children:[(0,a.jsx)("span",{className:"absolute right-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,a.jsx)(n.VF,{children:(0,a.jsx)(l.Srz,{className:"h-4 w-4"})})}),(0,a.jsx)(n.p4,{children:s})]})});m.displayName=n.q7.displayName,s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(n.wv,{ref:t,className:(0,d.cn)("-mx-1 my-1 h-px bg-neutral-100 dark:bg-neutral-800",r),...s})}).displayName=n.wv.displayName},77849:(e,t,r)=>{"use strict";r.d(t,{cn:()=>l});var a=r(43463),s=r(69795);function l(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,s.QP)((0,a.$)(t))}}}]);