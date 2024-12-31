(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[266],{94513:(e,t,a)=>{Promise.resolve().then(a.bind(a,34243))},34243:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>Z});var l=a(95155),s=a(86195),r=a(394),c=a(15255),n=a(12800),i=a(66963),d=a(23021),o=a(22175),x=a(90457),u=a(67732),m=a(34790),h=a(60728),f=a(12115),j=a(58581),p=a(27112),g=a(86354),b=a(77849);let v={light:"",dark:".dark"},y=f.createContext(null);function N(){let e=f.useContext(y);if(!e)throw Error("useChart must be used within a <ChartContainer />");return e}let w=f.forwardRef((e,t)=>{let{id:a,className:s,children:r,config:c,...n}=e,i=f.useId(),d="chart-".concat(a||i.replace(/:/g,""));return(0,l.jsx)(y.Provider,{value:{config:c},children:(0,l.jsxs)("div",{"data-chart":d,ref:t,className:(0,b.cn)("flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",s),...n,children:[(0,l.jsx)(k,{id:d,config:c}),(0,l.jsx)(j.u,{children:r})]})})});w.displayName="Chart";let k=e=>{let{id:t,config:a}=e,s=Object.entries(a).filter(e=>{let[,t]=e;return t.theme||t.color});return s.length?(0,l.jsx)("style",{dangerouslySetInnerHTML:{__html:Object.entries(v).map(e=>{let[a,l]=e;return"\n".concat(l," [data-chart=").concat(t,"] {\n").concat(s.map(e=>{var t;let[l,s]=e,r=(null===(t=s.theme)||void 0===t?void 0:t[a])||s.color;return r?"  --color-".concat(l,": ").concat(r,";"):null}).join("\n"),"\n}\n")}).join("\n")}}):null},C=p.m,S=f.forwardRef((e,t)=>{let{active:a,payload:s,className:r,indicator:c="dot",hideLabel:n=!1,hideIndicator:i=!1,label:d,labelFormatter:o,labelClassName:x,formatter:u,color:m,nameKey:h,labelKey:j}=e,{config:p}=N(),g=f.useMemo(()=>{var e;if(n||!(null==s?void 0:s.length))return null;let[t]=s,a="".concat(j||t.dataKey||t.name||"value"),r=B(p,t,a),c=j||"string"!=typeof d?null==r?void 0:r.label:(null===(e=p[d])||void 0===e?void 0:e.label)||d;return o?(0,l.jsx)("div",{className:(0,b.cn)("font-medium",x),children:o(c,s)}):c?(0,l.jsx)("div",{className:(0,b.cn)("font-medium",x),children:c}):null},[d,o,s,n,x,p,j]);if(!a||!(null==s?void 0:s.length))return null;let v=1===s.length&&"dot"!==c;return(0,l.jsxs)("div",{ref:t,className:(0,b.cn)("grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-neutral-200 border-neutral-200/50 bg-white px-2.5 py-1.5 text-xs shadow-xl dark:border-neutral-800 dark:border-neutral-800/50 dark:bg-neutral-950",r),children:[v?null:g,(0,l.jsx)("div",{className:"grid gap-1.5",children:s.map((e,t)=>{let a="".concat(h||e.name||e.dataKey||"value"),s=B(p,e,a),r=m||e.payload.fill||e.color;return(0,l.jsx)("div",{className:(0,b.cn)("flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-neutral-500 dark:[&>svg]:text-neutral-400","dot"===c&&"items-center"),children:u&&(null==e?void 0:e.value)!==void 0&&e.name?u(e.value,e.name,e,t,e.payload):(0,l.jsxs)(l.Fragment,{children:[(null==s?void 0:s.icon)?(0,l.jsx)(s.icon,{}):!i&&(0,l.jsx)("div",{className:(0,b.cn)("shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",{"h-2.5 w-2.5":"dot"===c,"w-1":"line"===c,"w-0 border-[1.5px] border-dashed bg-transparent":"dashed"===c,"my-0.5":v&&"dashed"===c}),style:{"--color-bg":r,"--color-border":r}}),(0,l.jsxs)("div",{className:(0,b.cn)("flex flex-1 justify-between leading-none",v?"items-end":"items-center"),children:[(0,l.jsxs)("div",{className:"grid gap-1.5",children:[v?g:null,(0,l.jsx)("span",{className:"text-neutral-500 dark:text-neutral-400",children:(null==s?void 0:s.label)||e.name})]}),e.value&&(0,l.jsx)("span",{className:"font-mono font-medium tabular-nums text-neutral-950 dark:text-neutral-50",children:e.value.toLocaleString()})]})]})},e.dataKey)})})]})});S.displayName="ChartTooltip";let I=g.s,E=f.forwardRef((e,t)=>{let{className:a,hideIcon:s=!1,payload:r,verticalAlign:c="bottom",nameKey:n}=e,{config:i}=N();return(null==r?void 0:r.length)?(0,l.jsx)("div",{ref:t,className:(0,b.cn)("flex items-center justify-center gap-4","top"===c?"pb-3":"pt-3",a),children:r.map(e=>{let t="".concat(n||e.dataKey||"value"),a=B(i,e,t);return(0,l.jsxs)("div",{className:(0,b.cn)("flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-neutral-500 dark:[&>svg]:text-neutral-400"),children:[(null==a?void 0:a.icon)&&!s?(0,l.jsx)(a.icon,{}):(0,l.jsx)("div",{className:"h-2 w-2 shrink-0 rounded-[2px]",style:{backgroundColor:e.color}}),null==a?void 0:a.label]},e.value)})}):null});function B(e,t,a){if("object"!=typeof t||null===t)return;let l="payload"in t&&"object"==typeof t.payload&&null!==t.payload?t.payload:void 0,s=a;return a in t&&"string"==typeof t[a]?s=t[a]:l&&a in l&&"string"==typeof l[a]&&(s=l[a]),s in e?e[s]:e[a]}E.displayName="ChartLegend";var _=a(75828);let A=(0,_.createServerReference)("40f8c2640ac63a127b5cb508fb0ade93b3bb60b796",_.callServer,void 0,_.findSourceMapURL,"getInchargeStats");var D=a(14505);function K(e){let{inchargeEmail:t}=e,[a,s]=(0,f.useState)([]),[j,p]=(0,f.useState)(!0),[g,b]=(0,f.useState)(null);(0,f.useEffect)(()=>{!async function(){try{let e=await A(t);console.log("result",e),console.log("inchargeEmail",t),e.errors?b(e.errors):(s(e.data),console.log(e.data))}catch(e){b("Failed to fetch statistics")}finally{p(!1)}}()},[]);let v=[{status:"Declined",value:a.reduce((e,t)=>e+(parseInt(t.Declined)||0),0),color:"#ef4444"},{status:"Blacklisted",value:a.reduce((e,t)=>e+(parseInt(t.Blacklisted)||0),0),color:"#1f2937"},{status:"Accepted",value:a.reduce((e,t)=>e+(parseInt(t.Accepted)||0),0),color:"#22c55e"},{status:"Pending",value:a.reduce((e,t)=>e+(parseInt(t.Pending)||0),0),color:"#fbbf24"},{status:"Email Sent",value:a.reduce((e,t)=>e+(parseInt(t["Email Sent"])||0),0),color:"#3b82f6"},{status:"Not Called",value:a.reduce((e,t)=>e+(parseInt(t["Not Called"])||0),0),color:"#f97316"}],y=v.reduce((e,t)=>e+(parseInt(t.value)||0),0);return j?(0,l.jsx)("div",{className:"flex justify-center items-center h-64",children:(0,l.jsx)(D.A,{className:"h-8 w-8 animate-spin text-blue-600"})}):g?(0,l.jsx)("div",{className:"text-center py-8 text-red-500",children:g}):0===a.length?(0,l.jsx)("div",{className:"text-center py-8 text-gray-500",children:"No statistics available."}):(0,l.jsx)("div",{className:"container mx-auto p-6 space-y-8",children:(0,l.jsx)("div",{className:"flex justify-center items-center",children:(0,l.jsxs)("div",{className:"grid gap-8 md:grid-cols-1 lg:grid-cols-2",children:[(0,l.jsxs)(h.Zp,{className:"md:col-span-1 lg:col-span-2 max-w-[900px] mx-auto w-full pb-3",children:[(0,l.jsxs)(h.aR,{children:[(0,l.jsx)(h.ZB,{children:"Contacts per Member"}),(0,l.jsx)(h.BT,{children:"Number of contacts managed by each Member"})]}),(0,l.jsx)(h.Wu,{className:"flex justify-center",children:(0,l.jsx)(w,{config:{Declined:{label:"Declined",color:"#ef4444"},Blacklisted:{label:"Blacklisted",color:"#1f2937"},Accepted:{label:"Accepted",color:"#22c55e"},Pending:{label:"Pending",color:"#fbbf24"},"Email Sent":{label:"Email Sent",color:"#3b82f6"},"Not Called":{label:"Not Called",color:"#f97316"}},className:"h-[300px] sm:h-[400px] min-w-[600px]",children:(0,l.jsxs)(r.E,{data:a,margin:{top:20,right:30,bottom:40,left:10},children:[(0,l.jsx)(c.d,{vertical:!1}),(0,l.jsx)(n.W,{dataKey:"name",tickLine:!1,axisLine:!1,tickMargin:10,angle:-45,textAnchor:"end"}),(0,l.jsx)(i.h,{tickLine:!1,axisLine:!1,tickMargin:10}),(0,l.jsx)(C,{content:(0,l.jsx)(S,{})}),(0,l.jsx)(I,{className:"absolute right-[110px] top-0 mt-6",content:(0,l.jsx)(E,{})}),v.map((e,t)=>(0,l.jsx)(d.y,{dataKey:e.status,stackId:"a",fill:e.color,radius:0===t?[0,0,4,4]:t===v.length-1?[4,4,0,0]:0},e.status))]})})})]}),(0,l.jsxs)(h.Zp,{className:"max-w-[400px] mx-auto w-full",children:[(0,l.jsxs)(h.aR,{children:[(0,l.jsx)(h.ZB,{children:"Contact Status Distribution"}),(0,l.jsxs)(h.BT,{children:["Total Contacts: ",y]})]}),(0,l.jsxs)(h.Wu,{className:"flex flex-col items-center",children:[(0,l.jsx)(w,{config:{},className:"h-[300px] w-full flex justify-center",children:(0,l.jsxs)(o.r,{width:300,height:300,children:[(0,l.jsxs)(x.F,{data:v,dataKey:"value",nameKey:"status",cx:"50%",cy:"50%",innerRadius:60,strokeWidth:5,children:[v.map((e,t)=>(0,l.jsx)(u.f,{fill:e.color},"cell-".concat(t))),(0,l.jsx)(m.J,{content:e=>{let{viewBox:t}=e;if(t&&"cx"in t&&"cy"in t)return(0,l.jsxs)("text",{x:t.cx,y:t.cy,textAnchor:"middle",dominantBaseline:"middle",children:[(0,l.jsx)("tspan",{x:t.cx,y:t.cy,className:"fill-foreground text-3xl font-bold",children:y}),(0,l.jsx)("tspan",{x:t.cx,y:(t.cy||0)+24,className:"fill-muted-foreground",children:"Contacts"})]})}})]}),(0,l.jsx)(C,{content:(0,l.jsx)(S,{hideLabel:!0})})]})}),(0,l.jsx)("div",{className:"mt-4 grid grid-cols-2 gap-4",children:v.map((e,t)=>(0,l.jsxs)("div",{className:"flex items-center gap-2",children:[(0,l.jsx)("div",{className:"h-3 w-3 rounded-full",style:{backgroundColor:e.color}}),(0,l.jsxs)("span",{className:"text-sm text-neutral-500 dark:text-neutral-400",children:[e.status," (",e.value,")"]})]},t))})]})]}),(0,l.jsxs)(h.Zp,{className:"max-w-[400px] mx-auto w-full",children:[(0,l.jsxs)(h.aR,{children:[(0,l.jsx)(h.ZB,{children:"Contact Distribution by Member"}),(0,l.jsx)(h.BT,{children:"How contacts are distributed across members"})]}),(0,l.jsx)(h.Wu,{className:"flex flex-col items-center",children:(0,l.jsx)(w,{config:{},className:"h-[300px] w-full flex justify-center",children:(0,l.jsxs)(o.r,{width:300,height:300,children:[(0,l.jsxs)(x.F,{data:a.map((e,t)=>({name:e.name,value:parseInt(e.contacts)||0,color:["#3b82f6","#22c55e","#f97316","#8b5cf6","#ec4899","#14b8a6","#f59e0b","#6366f1","#ef4444","#84cc16"][t%10]})),dataKey:"value",nameKey:"name",cx:"50%",cy:"50%",innerRadius:60,strokeWidth:5,children:[a.map((e,t)=>(0,l.jsx)(u.f,{fill:["#3b82f6","#22c55e","#f97316","#8b5cf6","#ec4899","#14b8a6","#f59e0b","#6366f1","#ef4444","#84cc16"][t%10]},"cell-".concat(t))),(0,l.jsx)(m.J,{content:e=>{let{viewBox:t}=e,s=a.reduce((e,t)=>e+(parseInt(t.contacts)||0),0);if(t&&"cx"in t&&"cy"in t)return(0,l.jsxs)("text",{x:t.cx,y:t.cy,textAnchor:"middle",dominantBaseline:"middle",children:[(0,l.jsx)("tspan",{x:t.cx,y:t.cy,className:"fill-foreground text-3xl font-bold",children:s}),(0,l.jsx)("tspan",{x:t.cx,y:(t.cy||0)+24,className:"fill-muted-foreground",children:"Contacts"})]})}})]}),(0,l.jsx)(C,{content:(0,l.jsx)(S,{hideLabel:!0})})]})})})]})]})})})}let L=(0,_.createServerReference)("003787c780d0b1412f89dc8cba2557dd4fc9d51b3a",_.callServer,void 0,_.findSourceMapURL,"getAdminStats");function R(){let[e,t]=(0,f.useState)([]),[a,s]=(0,f.useState)(!0),[j,p]=(0,f.useState)(null);(0,f.useEffect)(()=>{!async function(){try{let e=await L();e.errors?p(e.errors):t(e.data)}catch(e){p("Failed to fetch statistics")}finally{s(!1)}}()},[]);let g=[{status:"Declined",value:e.reduce((e,t)=>e+(parseInt(t.Declined)||0),0),color:"#ef4444"},{status:"Blacklisted",value:e.reduce((e,t)=>e+(parseInt(t.Blacklisted)||0),0),color:"#1f2937"},{status:"Accepted",value:e.reduce((e,t)=>e+(parseInt(t.Accepted)||0),0),color:"#22c55e"},{status:"Pending",value:e.reduce((e,t)=>e+(parseInt(t.Pending)||0),0),color:"#fbbf24"},{status:"Email Sent",value:e.reduce((e,t)=>e+(parseInt(t["Email Sent"])||0),0),color:"#3b82f6"},{status:"Not Called",value:e.reduce((e,t)=>e+(parseInt(t["Not Called"])||0),0),color:"#f97316"}],b=g.reduce((e,t)=>e+(parseInt(t.value)||0),0);return a?(0,l.jsx)("div",{className:"flex justify-center items-center h-64",children:(0,l.jsx)(D.A,{className:"h-8 w-8 animate-spin text-blue-600"})}):j?(0,l.jsx)("div",{className:"text-center py-8 text-red-500",children:j}):0===e.length?(0,l.jsx)("div",{className:"text-center py-8 text-gray-500",children:"No statistics available."}):(0,l.jsx)("div",{className:"container mx-auto p-2 sm:p-6 space-y-4 sm:space-y-8",children:(0,l.jsx)("div",{className:"flex justify-center items-center",children:(0,l.jsxs)("div",{className:"grid gap-4 sm:gap-8 w-full max-w-[1400px]",children:[(0,l.jsxs)(h.Zp,{className:"w-full",children:[(0,l.jsxs)(h.aR,{children:[(0,l.jsx)(h.ZB,{className:"text-lg sm:text-xl",children:"Contacts per ED"}),(0,l.jsx)(h.BT,{className:"text-sm",children:"Number of contacts managed by each ED"})]}),(0,l.jsx)(h.Wu,{className:"flex justify-center overflow-x-auto pb-6",children:(0,l.jsx)(w,{config:{Declined:{label:"Declined",color:"#ef4444"},Blacklisted:{label:"Blacklisted",color:"#1f2937"},Accepted:{label:"Accepted",color:"#22c55e"},Pending:{label:"Pending",color:"#fbbf24"},"Email Sent":{label:"Email Sent",color:"#3b82f6"},"Not Called":{label:"Not Called",color:"#f97316"}},className:"h-[300px] sm:h-[400px] w-full min-w-[600px] max-w-[1200px]",children:(0,l.jsxs)(r.E,{data:e,margin:{top:20,right:40,bottom:20,left:40},children:[(0,l.jsx)(c.d,{vertical:!1}),(0,l.jsx)(n.W,{dataKey:"name",tickLine:!1,axisLine:!1,tickMargin:10,angle:0,textAnchor:"middle"}),(0,l.jsx)(i.h,{tickLine:!1,axisLine:!1,tickMargin:10}),(0,l.jsx)(C,{content:(0,l.jsx)(S,{})}),(0,l.jsx)(I,{content:(0,l.jsx)(E,{})}),g.map((e,t)=>(0,l.jsx)(d.y,{dataKey:e.status,stackId:"a",fill:e.color,radius:0===t?[0,0,4,4]:t===g.length-1?[4,4,0,0]:0},e.status))]})})})]}),(0,l.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8",children:[(0,l.jsxs)(h.Zp,{className:"w-full",children:[(0,l.jsxs)(h.aR,{children:[(0,l.jsx)(h.ZB,{className:"text-lg sm:text-xl",children:"Contact Status Distribution"}),(0,l.jsxs)(h.BT,{children:["Total Contacts: ",b]})]}),(0,l.jsxs)(h.Wu,{className:"flex flex-col items-center pt-4",children:[(0,l.jsx)(w,{config:{},className:"h-[300px] w-full max-w-[400px]",children:(0,l.jsxs)(o.r,{width:300,height:300,children:[(0,l.jsxs)(x.F,{data:g,dataKey:"value",nameKey:"status",cx:"50%",cy:"50%",innerRadius:60,strokeWidth:5,children:[g.map((e,t)=>(0,l.jsx)(u.f,{fill:e.color},"cell-".concat(t))),(0,l.jsx)(m.J,{content:e=>{let{viewBox:t}=e;if(t&&"cx"in t&&"cy"in t)return(0,l.jsxs)("text",{x:t.cx,y:t.cy,textAnchor:"middle",dominantBaseline:"middle",children:[(0,l.jsx)("tspan",{x:t.cx,y:t.cy,className:"fill-foreground text-3xl font-bold",children:b}),(0,l.jsx)("tspan",{x:t.cx,y:(t.cy||0)+24,className:"fill-muted-foreground",children:"Contacts"})]})}})]}),(0,l.jsx)(C,{content:(0,l.jsx)(S,{hideLabel:!0})})]})}),(0,l.jsx)("div",{className:"mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-[400px]",children:g.map((e,t)=>(0,l.jsxs)("div",{className:"flex items-center gap-2",children:[(0,l.jsx)("div",{className:"h-3 w-3 rounded-full flex-shrink-0",style:{backgroundColor:e.color}}),(0,l.jsxs)("span",{className:"text-sm text-neutral-500 dark:text-neutral-400 truncate",children:[e.status," (",e.value,")"]})]},t))})]})]}),(0,l.jsxs)(h.Zp,{className:"w-full",children:[(0,l.jsxs)(h.aR,{children:[(0,l.jsx)(h.ZB,{className:"text-lg sm:text-xl",children:"Incharge Distribution"}),(0,l.jsx)(h.BT,{children:"Distribution of contacts among incharges"})]}),(0,l.jsxs)(h.Wu,{className:"flex flex-col items-center pt-4",children:[(0,l.jsx)(w,{config:{},className:"h-[300px] w-full max-w-[400px]",children:(0,l.jsxs)(o.r,{width:300,height:300,children:[(()=>{let t=e.map((e,t)=>({name:e.name,value:Object.entries(e).filter(e=>{let[t]=e;return"name"!==t}).reduce((e,t)=>{let[a,l]=t;return e+(parseInt(l)||0)},0)/2,color:["#3b82f6","#22c55e","#f97316","#8b5cf6","#ec4899","#14b8a6","#f59e0b","#6366f1"][t%8]}));return(0,l.jsxs)(x.F,{data:t,dataKey:"value",nameKey:"name",cx:"50%",cy:"50%",innerRadius:60,strokeWidth:5,children:[t.map((e,t)=>(0,l.jsx)(u.f,{fill:e.color},"cell-".concat(t))),(0,l.jsx)(m.J,{content:e=>{let{viewBox:t}=e;if(t&&"cx"in t&&"cy"in t)return(0,l.jsxs)("text",{x:t.cx,y:t.cy,textAnchor:"middle",dominantBaseline:"middle",children:[(0,l.jsx)("tspan",{x:t.cx,y:t.cy,className:"fill-foreground text-3xl font-bold",children:b}),(0,l.jsx)("tspan",{x:t.cx,y:(t.cy||0)+24,className:"fill-muted-foreground",children:"Contacts"})]})}})]})})(),(0,l.jsx)(C,{content:(0,l.jsx)(S,{hideLabel:!0})})]})}),(0,l.jsx)("div",{className:"mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-[400px]",children:e.map((e,t)=>{let a=Object.entries(e).filter(e=>{let[t]=e;return"name"!==t}).reduce((e,t)=>{let[a,l]=t;return e+(parseInt(l)||0)},0)/2;return(0,l.jsxs)("div",{className:"flex items-center gap-2",children:[(0,l.jsx)("div",{className:"h-3 w-3 rounded-full flex-shrink-0",style:{backgroundColor:["#3b82f6","#22c55e","#f97316","#8b5cf6","#ec4899","#14b8a6","#f59e0b","#6366f1"][t%8]}}),(0,l.jsxs)("span",{className:"text-sm text-neutral-500 dark:text-neutral-400 truncate",children:[e.name," (",a,")"]})]},t)})})]})]})]})]})})})}var W=a(98930);let Z=function(){let[e,t]=(0,f.useState)("incharge"),[a,r]=(0,f.useState)(""),[c,n]=(0,f.useState)(!1);return(0,f.useEffect)(()=>{t(localStorage.getItem("role")||"incharge")},[]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.default,{}),(0,l.jsxs)("div",{className:"container mx-auto px-2 sm:px-4 py-4 sm:py-8 mt-16",children:[(0,l.jsxs)("div",{className:"flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-4 sm:mb-8",children:[(0,l.jsxs)("h1",{className:"text-2xl sm:text-3xl font-bold text-blue-800",children:["admin"===e?"ED":"Incharge"," Statistics"]}),"admin"===e&&(0,l.jsxs)("div",{className:"flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4",children:[(0,l.jsxs)("button",{onClick:()=>n(!c),className:"w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm sm:text-base",children:["Show ",c?"Admin":"ED"," Stats"]}),c&&(0,l.jsxs)(W.l6,{value:a,onValueChange:e=>{r(e)},children:[(0,l.jsx)(W.bq,{className:"w-full sm:w-[200px] bg-white text-black",children:(0,l.jsx)(W.yv,{placeholder:"Select ED"})}),(0,l.jsx)(W.gC,{children:[{name:"Arunima",email:"arunima@forese.co.in"},{name:"Jhalak",email:"jhalak@forese.co.in"},{name:"Karthik",email:"karthik@forese.co.in"},{name:"Sandhya",email:"sandhya@forese.co.in"},{name:"Sanjana",email:"sanjana@forese.co.in"}].map(e=>(0,l.jsx)(W.eb,{value:e.email,children:e.name},e.email))})]})]})]}),"admin"===e?c?a?(0,l.jsx)(K,{inchargeEmail:a},a):(0,l.jsx)("p",{className:"mt-20 sm:mt-40 text-center text-base sm:text-lg text-red-500",children:"Please select an ED"}):(0,l.jsx)(R,{}):null,"incharge"===e&&(0,l.jsx)(K,{})]})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[105,539,430,814,32,825,60,441,517,358],()=>t(94513)),_N_E=e.O()}]);