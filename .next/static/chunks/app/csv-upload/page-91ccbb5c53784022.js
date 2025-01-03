(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[537],{41226:()=>{},76359:(e,r,t)=>{Promise.resolve().then(t.bind(t,27179)),Promise.resolve().then(t.bind(t,86195))},27179:(e,r,t)=>{"use strict";t.d(r,{default:()=>p});var a=t(95155),l=t(12115),s=t(47370),n=t(60728),o=t(80728),d=t(29159),c=t.n(d),i=t(75828);let u=(0,i.createServerReference)("40cc87c780b504b12be444c7b52b79777878f92789",i.callServer,void 0,i.findSourceMapURL,"addHrBulk");var h=t(30814);let m={container:"flex flex-col items-center justify-center space-y-4 h-full",hiddenInput:"hidden",customButton:"bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded cursor-pointer transition-colors",label:"text-sm text-gray-600 mt-2"},p=function(){let[e,r]=(0,l.useState)(null),[t,d]=(0,l.useState)(!1),[i,p]=(0,l.useState)(null),[b,x]=(0,l.useState)(null),[f,g]=(0,l.useState)({total:0,success:0,failed:0}),[v,j]=(0,l.useState)([]),[N,k]=(0,l.useState)([]),w=r=>{let t=r||e;d(!0),p(null),x(null),k([]),c().parse(t,{header:!0,skipEmptyLines:!0,transformHeader:e=>e.replace("*","").trim(),complete:e=>{if(e.errors.length>0){p("CSV parsing errors check csv format: ".concat(e.errors.map(e=>e.message).join(", "))),d(!1);return}console.log("Raw parsed data:",e.data);let r=[],t={total:e.data.length,success:0,failed:0},a=[];for(let l of e.data)try{if(!Object.values(l).some(e=>e)){console.log("Skipping empty row");continue}let e={};Object.entries(l).forEach(r=>{let[t,a]=r;e[t.replace(/\s+/g,"").toLowerCase()]=(null==a?void 0:a.toString().trim())||""});let s=["hr_name","phone_number","company"].filter(r=>!e[r]),n=e.phone_number.replace(/\D/g,"");if(10!==n.length){let r="Invalid phone number for HR: ".concat(e.hr_name||"Unknown",". Must be exactly 10 digits.");a.push(r),t.failed++;continue}if(s.length>0){let r="Missing mandatory fields: ".concat(s.join(", ")," for HR: ").concat(e.hr_name||"Unknown");a.push(r),t.failed++;continue}let o={hr_name:e.hr_name.trim(),phone_number:e.phone_number.toString().trim(),company:e.company.trim(),email:(e.email||"").trim()};r.push(o),t.success++}catch(r){let e="Error processing row for HR: ".concat(l.hr_name||"Unknown"," - ").concat(r.message);console.error(e),a.push(e),t.failed++}j(r),g(t),k(a),d(!1)},error:e=>{p("Error parsing CSV file: "+e.message),d(!1)}})},y=async()=>{if(console.log(v),d(!0),p(null),x(null),0===v.length){p("No records to upload"),d(!1);return}let e=await u(v);x(e),console.log(e),d(!1)},C=e=>{let r=new Blob([c().unparse({fields:Object.keys(e[0]),data:e})],{type:"text/csv;charset=utf-8;"}),t=document.createElement("a");t.href=URL.createObjectURL(r),t.download="hr_contacts_duplicates.csv",t.click(),h.oR.success("Duplicates downloaded successfully")};return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(n.Zp,{className:" shadow-blue-100 rounded-xl max-w-[26.5rem] mx-auto w-full overflow-hidden",children:[(0,a.jsx)(n.aR,{className:"bg-blue-100 rounded-t-lg",children:(0,a.jsx)(n.ZB,{className:"text-blue-800 text-center text-3xl font-bold",children:"Upload HR Records"})}),(0,a.jsx)(n.Wu,{className:"bg-white p-6 rounded-b-xl",children:(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsx)("div",{className:"border-2 border-dashed rounded-lg p-12 h-48",children:(0,a.jsx)("div",{className:m.container,children:(0,a.jsxs)("div",{className:"text-center",children:[(0,a.jsx)("input",{type:"file",accept:".csv",onChange:e=>{let t=e.target.files[0];if((null==t?void 0:t.type)!=="text/csv"){p("Please upload a valid CSV file");return}r(t),p(null),w(t)},className:m.hiddenInput,id:"file-upload"}),(0,a.jsx)("label",{htmlFor:"file-upload",className:m.customButton,children:"Choose CSV File"}),e&&(0,a.jsxs)("div",{className:"flex items-center gap-2 justify-center mt-2",children:[(0,a.jsx)("p",{className:m.label,children:e.name}),(0,a.jsx)("button",{onClick:()=>{let e=document.getElementById("file-upload");e&&(e.value=""),r(null),p(null),x(null),j([]),k([]),g({total:0,success:0,failed:0})},className:"text-gray-500 hover:text-gray-700 flex items-center",title:"Clear file",children:"✕"})]})]})})}),(0,a.jsxs)("div",{className:"flex flex-col space-y-4",children:[(0,a.jsx)(s.$,{onClick:()=>{let e=new Blob([c().unparse({fields:["hr_name*","phone_number*","company*","email"],data:[{"hr_name*":"HR Name","phone_number*":"1234567890","company*":"Company Name",email:""}]})],{type:"text/csv;charset=utf-8;"}),r=document.createElement("a");r.href=URL.createObjectURL(e),r.download="hr_contacts_template.csv",r.click(),h.oR.success("CSV template downloaded successfully")},className:"bg-green-600 hover:bg-green-700",disabled:e,children:"Download CSV Template"}),(0,a.jsx)(s.$,{onClick:y,disabled:!e||t||N.length>0,className:"bg-blue-800 hover:bg-blue-900",children:t?"Uploading...":"Upload CSV"})]}),N.length>0&&(0,a.jsxs)(o.Fc,{variant:"destructive",className:"bg-red-100 border-red-400 text-red-700",children:[(0,a.jsx)(o.XL,{children:"Validation Errors"}),(0,a.jsx)(o.TN,{children:(0,a.jsx)("ul",{className:"list-disc pl-4",children:N.map((e,r)=>(0,a.jsx)("li",{children:e},r))})})]}),i&&(0,a.jsxs)(o.Fc,{variant:"destructive",className:"bg-red-100 border-red-400 text-red-700",children:[(0,a.jsx)(o.XL,{children:"Error"}),(0,a.jsx)(o.TN,{children:i})]}),(null==b?void 0:b.success)&&(0,a.jsxs)(o.Fc,{className:"bg-green-100 border-green-400 text-green-700",children:[(0,a.jsx)(o.XL,{children:"Upload Complete"}),(0,a.jsx)(o.TN,{children:b.message})]}),(null==b?void 0:b.errors)&&b.errors.length>0&&(0,a.jsxs)(o.Fc,{variant:"destructive",className:"bg-red-100 border-red-400 text-red-700",children:[(0,a.jsx)(o.XL,{children:"Upload Errors"}),(0,a.jsx)(o.TN,{children:b.errors.join(", ")})]}),(null==b?void 0:b.duplicates)&&b.duplicates.length>0&&(0,a.jsxs)(s.$,{onClick:()=>C(b.duplicates),className:"bg-yellow-500 hover:bg-yellow-600 mt-2 w-full",children:["Download ",b.duplicates.length," Duplicate Records"]})]})})]})})}},86195:(e,r,t)=>{"use strict";t.d(r,{default:()=>c});var a=t(95155),l=t(65236),s=t(59539),n=t(47370),o=t(12115),d=t(30814);let c=function(){let e=(0,s.rd)(),[r,t]=(0,o.useState)(null),[c,i]=(0,o.useState)(!1),[u,h]=(0,o.useState)(""),[m,p]=(0,o.useState)(null);(0,o.useEffect)(()=>{{t(localStorage.getItem("role")),h(window.location.pathname);let e=localStorage.getItem("name");"Arunima"===e&&p(e)}},[]);let b=()=>{document.cookie="session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",localStorage.clear(),d.oR.error("Logged out :("),e.push("/login")},x=e=>"".concat("text-blue-800 cursor-pointer font-bold relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-blue-600"," ").concat(u===e?"after:w-full":"after:w-0 hover:after:w-full after:transition-all after:duration-300 after:ease-in-out hover:text-blue-600");return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("nav",{className:"fixed top-0 left-0 right-0 bg-white border-b border-gray-200 shadow-sm z-40",children:(0,a.jsxs)("div",{className:"max-w-screen px-4 mx-auto flex justify-between items-center h-16 relative",children:[(0,a.jsxs)("div",{className:"absolute left-4 flex items-center gap-2 cursor-pointer",onClick:()=>e.push("/"),children:[(0,a.jsx)("div",{className:"h-[6rem] w-[6rem]",children:(0,a.jsx)("img",{src:"/forese-logo-small.png",alt:"Forese Logo",className:"h-[6rem] w-auto"})}),(0,a.jsx)("h1",{className:"text-blue-800 text-2xl font-bold",children:m?"Mwuahhh :3":"HR Database"})]}),(0,a.jsx)("button",{onClick:()=>i(!c),className:"md:hidden ml-auto p-2",children:(0,a.jsx)("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:c?(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"}):(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})}),("admin"===r||"incharge"===r||"volunteer"===r)&&(0,a.jsxs)("div",{className:"hidden md:flex gap-6 mx-auto items-center mt-1",children:[(0,a.jsx)("span",{onClick:()=>e.push("/"),className:x("/"),children:"Home"}),"admin"===r&&(0,a.jsx)("span",{onClick:()=>e.push("/add-user"),className:x("/add-user"),children:"Add User"}),(0,a.jsx)("span",{onClick:()=>e.push("/stats"),className:x("/stats"),children:"Stats"}),(0,a.jsx)("span",{onClick:()=>e.push("/add-hr"),className:x("/add-hr"),children:"Add HR"}),(0,a.jsx)("span",{onClick:()=>e.push("/hr-pitch"),className:x("/hr-pitch"),children:"HR Pitch"}),(0,a.jsx)("span",{onClick:()=>e.push("/csv-upload"),className:x("/csv-upload"),children:"CSV Upload"})]}),(0,a.jsx)("div",{className:"hidden md:flex gap-2 absolute right-4",children:(0,a.jsxs)(n.$,{onClick:b,className:"bg-white hover:bg-blue-100 text-blue-800 border border-blue-200",children:[(0,a.jsx)(l.A,{className:"mr-2 h-4 w-4"}),"Logout"]})}),(0,a.jsxs)("div",{className:"".concat(c?"flex":"hidden"," md:hidden absolute top-16 left-0 right-0 flex-col bg-white border-b border-gray-200 shadow-sm"),children:[("admin"===r||"incharge"===r||"volunteer"===r)&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{onClick:()=>{e.push("/"),i(!1)},className:"p-4 cursor-pointer font-bold ".concat("/"===u?"bg-blue-50":"hover:bg-blue-50"," text-blue-800"),children:"Home"}),"admin"===r&&(0,a.jsx)("span",{onClick:()=>{e.push("/add-user"),i(!1)},className:"p-4 cursor-pointer font-bold ".concat("/add-user"===u?"bg-blue-50":"hover:bg-blue-50"," text-blue-800"),children:"Add User"}),("admin"===r||"incharge"===r)&&(0,a.jsx)("span",{onClick:()=>{e.push("/stats"),i(!1)},className:"p-4 cursor-pointer font-bold ".concat("/stats"===u?"bg-blue-50":"hover:bg-blue-50"," text-blue-800"),children:"Stats"}),(0,a.jsx)("span",{onClick:()=>{e.push("/add-hr"),i(!1)},className:"p-4 cursor-pointer font-bold ".concat("/add-hr"===u?"bg-blue-50":"hover:bg-blue-50"," text-blue-800"),children:"Add HR"}),(0,a.jsx)("span",{onClick:()=>{e.push("/hr-pitch"),i(!1)},className:"p-4 cursor-pointer font-bold ".concat("/hr-pitch"===u?"bg-blue-50":"hover:bg-blue-50"," text-blue-800"),children:"HR Pitch"}),(0,a.jsx)("span",{onClick:()=>{e.push("/csv-upload"),i(!1)},className:"p-4 cursor-pointer font-bold ".concat("/csv-upload"===u?"bg-blue-50":"hover:bg-blue-50"," text-blue-800"),children:"CSV Upload"})]}),(0,a.jsxs)(n.$,{onClick:b,className:"m-4 bg-white hover:bg-blue-100 text-blue-800 border border-blue-200",children:[(0,a.jsx)(l.A,{className:"mr-2 h-4 w-4"}),"Logout"]})]})]})})})}},80728:(e,r,t)=>{"use strict";t.d(r,{Fc:()=>d,TN:()=>i,XL:()=>c});var a=t(95155),l=t(12115),s=t(40652),n=t(77849);let o=(0,s.F)("relative w-full rounded-lg border border-neutral-200 px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-neutral-950 [&>svg~*]:pl-7 dark:border-neutral-800 dark:[&>svg]:text-neutral-50",{variants:{variant:{default:"bg-white text-neutral-950 dark:bg-neutral-950 dark:text-neutral-50",destructive:"border-red-500/50 text-red-500 dark:border-red-500 [&>svg]:text-red-500 dark:border-red-900/50 dark:text-red-900 dark:dark:border-red-900 dark:[&>svg]:text-red-900"}},defaultVariants:{variant:"default"}}),d=l.forwardRef((e,r)=>{let{className:t,variant:l,...s}=e;return(0,a.jsx)("div",{ref:r,role:"alert",className:(0,n.cn)(o({variant:l}),t),...s})});d.displayName="Alert";let c=l.forwardRef((e,r)=>{let{className:t,...l}=e;return(0,a.jsx)("h5",{ref:r,className:(0,n.cn)("mb-1 font-medium leading-none tracking-tight",t),...l})});c.displayName="AlertTitle";let i=l.forwardRef((e,r)=>{let{className:t,...l}=e;return(0,a.jsx)("div",{ref:r,className:(0,n.cn)("text-sm [&_p]:leading-relaxed",t),...l})});i.displayName="AlertDescription"},47370:(e,r,t)=>{"use strict";t.d(r,{$:()=>c,r:()=>d});var a=t(95155),l=t(12115),s=t(14707),n=t(40652),o=t(77849);let d=(0,n.F)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-neutral-300",{variants:{variant:{default:"bg-neutral-900 text-neutral-50 shadow hover:bg-neutral-900/90 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90",destructive:"bg-red-500 text-neutral-50 shadow-sm hover:bg-red-500/90 dark:bg-red-900 dark:text-neutral-50 dark:hover:bg-red-900/90",outline:"border border-neutral-200 bg-white shadow-sm hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",secondary:"bg-neutral-100 text-neutral-900 shadow-sm hover:bg-neutral-100/80 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80",ghost:"hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",link:"text-neutral-900 underline-offset-4 hover:underline dark:text-neutral-50"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),c=l.forwardRef((e,r)=>{let{className:t,variant:l,size:n,asChild:c=!1,...i}=e,u=c?s.DX:"button";return(0,a.jsx)(u,{className:(0,o.cn)(d({variant:l,size:n,className:t})),ref:r,...i})});c.displayName="Button"},60728:(e,r,t)=>{"use strict";t.d(r,{BT:()=>c,Wu:()=>i,ZB:()=>d,Zp:()=>n,aR:()=>o,wL:()=>u});var a=t(95155),l=t(12115),s=t(77849);let n=l.forwardRef((e,r)=>{let{className:t,...l}=e;return(0,a.jsx)("div",{ref:r,className:(0,s.cn)("rounded-xl border border-neutral-200 bg-white text-neutral-950 shadow dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50",t),...l})});n.displayName="Card";let o=l.forwardRef((e,r)=>{let{className:t,...l}=e;return(0,a.jsx)("div",{ref:r,className:(0,s.cn)("flex flex-col space-y-1.5 p-6",t),...l})});o.displayName="CardHeader";let d=l.forwardRef((e,r)=>{let{className:t,...l}=e;return(0,a.jsx)("h3",{ref:r,className:(0,s.cn)("font-semibold leading-none tracking-tight",t),...l})});d.displayName="CardTitle";let c=l.forwardRef((e,r)=>{let{className:t,...l}=e;return(0,a.jsx)("p",{ref:r,className:(0,s.cn)("text-sm text-neutral-500 dark:text-neutral-400",t),...l})});c.displayName="CardDescription";let i=l.forwardRef((e,r)=>{let{className:t,...l}=e;return(0,a.jsx)("div",{ref:r,className:(0,s.cn)("p-6 pt-0",t),...l})});i.displayName="CardContent";let u=l.forwardRef((e,r)=>{let{className:t,...l}=e;return(0,a.jsx)("div",{ref:r,className:(0,s.cn)("flex items-center p-6 pt-0",t),...l})});u.displayName="CardFooter"},77849:(e,r,t)=>{"use strict";t.d(r,{cn:()=>s});var a=t(43463),l=t(69795);function s(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,l.QP)((0,a.$)(r))}}},e=>{var r=r=>e(e.s=r);e.O(0,[539,430,814,107,441,517,358],()=>r(76359)),_N_E=e.O()}]);