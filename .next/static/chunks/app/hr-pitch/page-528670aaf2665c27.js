(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[922],{41226:()=>{},69289:(e,t,r)=>{Promise.resolve().then(r.bind(r,86195)),Promise.resolve().then(r.bind(r,92421))},67401:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});var n=r(12115);let o=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),a=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim()};var l={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let i=(0,n.forwardRef)((e,t)=>{let{color:r="currentColor",size:o=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:u="",children:d,iconNode:c,...f}=e;return(0,n.createElement)("svg",{ref:t,...l,width:o,height:o,stroke:r,strokeWidth:s?24*Number(i)/Number(o):i,className:a("lucide",u),...f},[...c.map(e=>{let[t,r]=e;return(0,n.createElement)(t,r)}),...Array.isArray(d)?d:[d]])}),s=(e,t)=>{let r=(0,n.forwardRef)((r,l)=>{let{className:s,...u}=r;return(0,n.createElement)(i,{ref:l,iconNode:t,className:a("lucide-".concat(o(e)),s),...u})});return r.displayName="".concat(e),r}},65236:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=(0,r(67401).A)("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]])},86195:(e,t,r)=>{"use strict";r.d(t,{default:()=>s});var n=r(95155),o=r(65236),a=r(59539),l=r(47370),i=r(12115);let s=function(){let e=(0,a.rd)(),[t,r]=(0,i.useState)(null),[s,u]=(0,i.useState)(!1),[d,c]=(0,i.useState)("");(0,i.useEffect)(()=>{r(localStorage.getItem("role")),c(window.location.pathname)},[]);let f=()=>{document.cookie="session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",localStorage.clear(),e.push("/login")},p=e=>"".concat("text-blue-800 cursor-pointer font-bold relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-blue-600"," ").concat(d===e?"after:w-full":"after:w-0 hover:after:w-full after:transition-all after:duration-300 after:ease-in-out hover:text-blue-600");return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("nav",{className:"fixed top-0 left-0 right-0 bg-white border-b border-gray-200 shadow-sm z-40",children:(0,n.jsxs)("div",{className:"max-w-screen px-4 mx-auto flex justify-between items-center h-16 relative",children:[(0,n.jsxs)("div",{className:"absolute left-4 flex items-center gap-2 cursor-pointer",onClick:()=>e.push("/"),children:[(0,n.jsx)("img",{src:"https://cdn.forese.co.in/forese-logo.png",alt:"Forese Logo",className:"h-[6rem] w-auto"}),(0,n.jsx)("h1",{className:"text-blue-800 text-2xl font-bold",children:"HR Database"})]}),(0,n.jsx)("button",{onClick:()=>u(!s),className:"md:hidden ml-auto p-2",children:(0,n.jsx)("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s?(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"}):(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})}),("admin"===t||"incharge"===t||"volunteer"===t)&&(0,n.jsxs)("div",{className:"hidden md:flex gap-6 mx-auto items-center mt-1",children:[(0,n.jsx)("span",{onClick:()=>e.push("/"),className:p("/"),children:"Home"}),"admin"===t&&(0,n.jsx)("span",{onClick:()=>e.push("/add-user"),className:p("/add-user"),children:"Add User"}),("admin"===t||"incharge"===t)&&(0,n.jsx)("span",{onClick:()=>e.push("/stats"),className:p("/stats"),children:"Stats"}),(0,n.jsx)("span",{onClick:()=>e.push("/add-hr"),className:p("/add-hr"),children:"Add HR"}),(0,n.jsx)("span",{onClick:()=>e.push("/hr-pitch"),className:p("/hr-pitch"),children:"HR Pitch"}),(0,n.jsx)("span",{onClick:()=>e.push("/csv-upload"),className:p("/csv-upload"),children:"CSV Upload"})]}),(0,n.jsx)("div",{className:"hidden md:flex gap-2 absolute right-4",children:(0,n.jsxs)(l.$,{onClick:f,className:"bg-white hover:bg-blue-100 text-blue-800 border border-blue-200",children:[(0,n.jsx)(o.A,{className:"mr-2 h-4 w-4"}),"Logout"]})}),(0,n.jsxs)("div",{className:"".concat(s?"flex":"hidden"," md:hidden absolute top-16 left-0 right-0 flex-col bg-white border-b border-gray-200 shadow-sm"),children:[("admin"===t||"incharge"===t||"volunteer"===t)&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{onClick:()=>{e.push("/"),u(!1)},className:"p-4 cursor-pointer font-bold ".concat("/"===d?"bg-blue-50":"hover:bg-blue-50"," text-blue-800"),children:"Home"}),"admin"===t&&(0,n.jsx)("span",{onClick:()=>{e.push("/add-user"),u(!1)},className:"p-4 cursor-pointer font-bold ".concat("/add-user"===d?"bg-blue-50":"hover:bg-blue-50"," text-blue-800"),children:"Add User"}),("admin"===t||"incharge"===t)&&(0,n.jsx)("span",{onClick:()=>{e.push("/stats"),u(!1)},className:"p-4 cursor-pointer font-bold ".concat("/stats"===d?"bg-blue-50":"hover:bg-blue-50"," text-blue-800"),children:"Stats"}),(0,n.jsx)("span",{onClick:()=>{e.push("/add-hr"),u(!1)},className:"p-4 cursor-pointer font-bold ".concat("/add-hr"===d?"bg-blue-50":"hover:bg-blue-50"," text-blue-800"),children:"Add HR"}),(0,n.jsx)("span",{onClick:()=>{e.push("/hr-pitch"),u(!1)},className:"p-4 cursor-pointer font-bold ".concat("/hr-pitch"===d?"bg-blue-50":"hover:bg-blue-50"," text-blue-800"),children:"HR Pitch"}),(0,n.jsx)("span",{onClick:()=>{e.push("/csv-upload"),u(!1)},className:"p-4 cursor-pointer font-bold ".concat("/csv-upload"===d?"bg-blue-50":"hover:bg-blue-50"," text-blue-800"),children:"CSV Upload"})]}),(0,n.jsxs)(l.$,{onClick:f,className:"m-4 bg-white hover:bg-blue-100 text-blue-800 border border-blue-200",children:[(0,n.jsx)(o.A,{className:"mr-2 h-4 w-4"}),"Logout"]})]})]})})})}},92421:(e,t,r)=>{"use strict";r.d(t,{Accordion:()=>ei,AccordionContent:()=>ed,AccordionItem:()=>es,AccordionTrigger:()=>eu});var n=r(95155),o=r(12115),a=r(18166),l=r(79299);function i(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}function s(...e){return o.useCallback(function(...e){return t=>{let r=!1,n=e.map(e=>{let n=i(e,t);return r||"function"!=typeof n||(r=!0),n});if(r)return()=>{for(let t=0;t<n.length;t++){let r=n[t];"function"==typeof r?r():i(e[t],null)}}}}(...e),e)}function u(e,t,{checkForDefaultPrevented:r=!0}={}){return function(n){if(e?.(n),!1===r||!n.defaultPrevented)return t?.(n)}}var d=r(1488);r(47650);var c=r(14707),f=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let r=o.forwardRef((e,r)=>{let{asChild:o,...a}=e,l=o?c.DX:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,n.jsx)(l,{...a,ref:r})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{}),p=r(46611),m=e=>{let{present:t,children:r}=e,n=function(e){var t,r;let[n,a]=o.useState(),l=o.useRef({}),i=o.useRef(e),s=o.useRef("none"),[u,d]=(t=e?"mounted":"unmounted",r={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},o.useReducer((e,t)=>{let n=r[e][t];return null!=n?n:e},t));return o.useEffect(()=>{let e=h(l.current);s.current="mounted"===u?e:"none"},[u]),(0,p.N)(()=>{let t=l.current,r=i.current;if(r!==e){let n=s.current,o=h(t);e?d("MOUNT"):"none"===o||(null==t?void 0:t.display)==="none"?d("UNMOUNT"):r&&n!==o?d("ANIMATION_OUT"):d("UNMOUNT"),i.current=e}},[e,d]),(0,p.N)(()=>{if(n){var e;let t;let r=null!==(e=n.ownerDocument.defaultView)&&void 0!==e?e:window,o=e=>{let o=h(l.current).includes(e.animationName);if(e.target===n&&o&&(d("ANIMATION_END"),!i.current)){let e=n.style.animationFillMode;n.style.animationFillMode="forwards",t=r.setTimeout(()=>{"forwards"===n.style.animationFillMode&&(n.style.animationFillMode=e)})}},a=e=>{e.target===n&&(s.current=h(l.current))};return n.addEventListener("animationstart",a),n.addEventListener("animationcancel",o),n.addEventListener("animationend",o),()=>{r.clearTimeout(t),n.removeEventListener("animationstart",a),n.removeEventListener("animationcancel",o),n.removeEventListener("animationend",o)}}d("ANIMATION_END")},[n,d]),{isPresent:["mounted","unmountSuspended"].includes(u),ref:o.useCallback(e=>{e&&(l.current=getComputedStyle(e)),a(e)},[])}}(t),a="function"==typeof r?r({present:n.isPresent}):o.Children.only(r),l=s(n.ref,function(e){var t,r;let n=null===(t=Object.getOwnPropertyDescriptor(e.props,"ref"))||void 0===t?void 0:t.get,o=n&&"isReactWarning"in n&&n.isReactWarning;return o?e.ref:(o=(n=null===(r=Object.getOwnPropertyDescriptor(e,"ref"))||void 0===r?void 0:r.get)&&"isReactWarning"in n&&n.isReactWarning)?e.props.ref:e.props.ref||e.ref}(a));return"function"==typeof r||n.isPresent?o.cloneElement(a,{ref:l}):null};function h(e){return(null==e?void 0:e.animationName)||"none"}m.displayName="Presence";var b=r(67668),v="Collapsible",[x,g]=(0,a.A)(v),[N,w]=x(v),y=o.forwardRef((e,t)=>{let{__scopeCollapsible:r,open:a,defaultOpen:l,disabled:i,onOpenChange:s,...u}=e,[c=!1,p]=(0,d.i)({prop:a,defaultProp:l,onChange:s});return(0,n.jsx)(N,{scope:r,disabled:i,contentId:(0,b.B)(),open:c,onOpenToggle:o.useCallback(()=>p(e=>!e),[p]),children:(0,n.jsx)(f.div,{"data-state":M(c),"data-disabled":i?"":void 0,...u,ref:t})})});y.displayName=v;var j="CollapsibleTrigger",k=o.forwardRef((e,t)=>{let{__scopeCollapsible:r,...o}=e,a=w(j,r);return(0,n.jsx)(f.button,{type:"button","aria-controls":a.contentId,"aria-expanded":a.open||!1,"data-state":M(a.open),"data-disabled":a.disabled?"":void 0,disabled:a.disabled,...o,ref:t,onClick:u(e.onClick,a.onOpenToggle)})});k.displayName=j;var C="CollapsibleContent",A=o.forwardRef((e,t)=>{let{forceMount:r,...o}=e,a=w(C,e.__scopeCollapsible);return(0,n.jsx)(m,{present:r||a.open,children:e=>{let{present:r}=e;return(0,n.jsx)(R,{...o,ref:t,present:r})}})});A.displayName=C;var R=o.forwardRef((e,t)=>{let{__scopeCollapsible:r,present:a,children:l,...i}=e,u=w(C,r),[d,c]=o.useState(a),m=o.useRef(null),h=s(t,m),b=o.useRef(0),v=b.current,x=o.useRef(0),g=x.current,N=u.open||d,y=o.useRef(N),j=o.useRef(void 0);return o.useEffect(()=>{let e=requestAnimationFrame(()=>y.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,p.N)(()=>{let e=m.current;if(e){j.current=j.current||{transitionDuration:e.style.transitionDuration,animationName:e.style.animationName},e.style.transitionDuration="0s",e.style.animationName="none";let t=e.getBoundingClientRect();b.current=t.height,x.current=t.width,y.current||(e.style.transitionDuration=j.current.transitionDuration,e.style.animationName=j.current.animationName),c(a)}},[u.open,a]),(0,n.jsx)(f.div,{"data-state":M(u.open),"data-disabled":u.disabled?"":void 0,id:u.contentId,hidden:!N,...i,ref:h,style:{"--radix-collapsible-content-height":v?"".concat(v,"px"):void 0,"--radix-collapsible-content-width":g?"".concat(g,"px"):void 0,...e.style},children:N&&l})});function M(e){return e?"open":"closed"}var O=r(4256),I="Accordion",_=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[S,E,D]=(0,l.N)(I),[P,T]=(0,a.A)(I,[D,g]),L=g(),U=o.forwardRef((e,t)=>{let{type:r,...o}=e;return(0,n.jsx)(S.Provider,{scope:e.__scopeAccordion,children:"multiple"===r?(0,n.jsx)(B,{...o,ref:t}):(0,n.jsx)(z,{...o,ref:t})})});U.displayName=I;var[$,H]=P(I),[F,W]=P(I,{collapsible:!1}),z=o.forwardRef((e,t)=>{let{value:r,defaultValue:a,onValueChange:l=()=>{},collapsible:i=!1,...s}=e,[u,c]=(0,d.i)({prop:r,defaultProp:a,onChange:l});return(0,n.jsx)($,{scope:e.__scopeAccordion,value:u?[u]:[],onItemOpen:c,onItemClose:o.useCallback(()=>i&&c(""),[i,c]),children:(0,n.jsx)(F,{scope:e.__scopeAccordion,collapsible:i,children:(0,n.jsx)(q,{...s,ref:t})})})}),B=o.forwardRef((e,t)=>{let{value:r,defaultValue:a,onValueChange:l=()=>{},...i}=e,[s=[],u]=(0,d.i)({prop:r,defaultProp:a,onChange:l}),c=o.useCallback(e=>u(function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[...t,e]}),[u]),f=o.useCallback(e=>u(function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t.filter(t=>t!==e)}),[u]);return(0,n.jsx)($,{scope:e.__scopeAccordion,value:s,onItemOpen:c,onItemClose:f,children:(0,n.jsx)(F,{scope:e.__scopeAccordion,collapsible:!0,children:(0,n.jsx)(q,{...i,ref:t})})})}),[V,X]=P(I),q=o.forwardRef((e,t)=>{let{__scopeAccordion:r,disabled:a,dir:l,orientation:i="vertical",...d}=e,c=s(o.useRef(null),t),p=E(r),m="ltr"===(0,O.jH)(l),h=u(e.onKeyDown,e=>{var t;if(!_.includes(e.key))return;let r=e.target,n=p().filter(e=>{var t;return!(null===(t=e.ref.current)||void 0===t?void 0:t.disabled)}),o=n.findIndex(e=>e.ref.current===r),a=n.length;if(-1===o)return;e.preventDefault();let l=o,s=a-1,u=()=>{(l=o+1)>s&&(l=0)},d=()=>{(l=o-1)<0&&(l=s)};switch(e.key){case"Home":l=0;break;case"End":l=s;break;case"ArrowRight":"horizontal"===i&&(m?u():d());break;case"ArrowDown":"vertical"===i&&u();break;case"ArrowLeft":"horizontal"===i&&(m?d():u());break;case"ArrowUp":"vertical"===i&&d()}null===(t=n[l%a].ref.current)||void 0===t||t.focus()});return(0,n.jsx)(V,{scope:r,disabled:a,direction:l,orientation:i,children:(0,n.jsx)(S.Slot,{scope:r,children:(0,n.jsx)(f.div,{...d,"data-orientation":i,ref:c,onKeyDown:a?void 0:h})})})}),K="AccordionItem",[J,Q]=P(K),Z=o.forwardRef((e,t)=>{let{__scopeAccordion:r,value:o,...a}=e,l=X(K,r),i=H(K,r),s=L(r),u=(0,b.B)(),d=o&&i.value.includes(o)||!1,c=l.disabled||e.disabled;return(0,n.jsx)(J,{scope:r,open:d,disabled:c,triggerId:u,children:(0,n.jsx)(y,{"data-orientation":l.orientation,"data-state":eo(d),...s,...a,ref:t,disabled:c,open:d,onOpenChange:e=>{e?i.onItemOpen(o):i.onItemClose(o)}})})});Z.displayName=K;var G="AccordionHeader",Y=o.forwardRef((e,t)=>{let{__scopeAccordion:r,...o}=e,a=X(I,r),l=Q(G,r);return(0,n.jsx)(f.h3,{"data-orientation":a.orientation,"data-state":eo(l.open),"data-disabled":l.disabled?"":void 0,...o,ref:t})});Y.displayName=G;var ee="AccordionTrigger",et=o.forwardRef((e,t)=>{let{__scopeAccordion:r,...o}=e,a=X(I,r),l=Q(ee,r),i=W(ee,r),s=L(r);return(0,n.jsx)(S.ItemSlot,{scope:r,children:(0,n.jsx)(k,{"aria-disabled":l.open&&!i.collapsible||void 0,"data-orientation":a.orientation,id:l.triggerId,...s,...o,ref:t})})});et.displayName=ee;var er="AccordionContent",en=o.forwardRef((e,t)=>{let{__scopeAccordion:r,...o}=e,a=X(I,r),l=Q(er,r),i=L(r);return(0,n.jsx)(A,{role:"region","aria-labelledby":l.triggerId,"data-orientation":a.orientation,...i,...o,ref:t,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...e.style}})});function eo(e){return e?"open":"closed"}en.displayName=er;var ea=r(77849),el=r(87365);let ei=U,es=o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,n.jsx)(Z,{ref:t,className:(0,ea.cn)("border-b",r),...o})});es.displayName="AccordionItem";let eu=o.forwardRef((e,t)=>{let{className:r,children:o,...a}=e;return(0,n.jsx)(Y,{className:"flex",children:(0,n.jsxs)(et,{ref:t,className:(0,ea.cn)("flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",r),...a,children:[o,(0,n.jsx)(el.D3D,{className:"h-4 w-4 shrink-0 text-neutral-500 transition-transform duration-200 dark:text-neutral-400"})]})})});eu.displayName=et.displayName;let ed=o.forwardRef((e,t)=>{let{className:r,children:o,...a}=e;return(0,n.jsx)(en,{ref:t,className:"overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...a,children:(0,n.jsx)("div",{className:(0,ea.cn)("pb-4 pt-0",r),children:o})})});ed.displayName=en.displayName},47370:(e,t,r)=>{"use strict";r.d(t,{$:()=>u,r:()=>s});var n=r(95155),o=r(12115),a=r(14707),l=r(40652),i=r(77849);let s=(0,l.F)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-neutral-300",{variants:{variant:{default:"bg-neutral-900 text-neutral-50 shadow hover:bg-neutral-900/90 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90",destructive:"bg-red-500 text-neutral-50 shadow-sm hover:bg-red-500/90 dark:bg-red-900 dark:text-neutral-50 dark:hover:bg-red-900/90",outline:"border border-neutral-200 bg-white shadow-sm hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",secondary:"bg-neutral-100 text-neutral-900 shadow-sm hover:bg-neutral-100/80 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80",ghost:"hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",link:"text-neutral-900 underline-offset-4 hover:underline dark:text-neutral-50"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),u=o.forwardRef((e,t)=>{let{className:r,variant:o,size:l,asChild:u=!1,...d}=e,c=u?a.DX:"button";return(0,n.jsx)(c,{className:(0,i.cn)(s({variant:o,size:l,className:r})),ref:t,...d})});u.displayName="Button"},77849:(e,t,r)=>{"use strict";r.d(t,{cn:()=>a});var n=r(43463),o=r(69795);function a(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,o.QP)((0,n.$)(t))}},79299:(e,t,r)=>{"use strict";r.d(t,{N:()=>u});var n=r(12115),o=r(18166);function a(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}function l(...e){return n.useCallback(function(...e){return t=>{let r=!1,n=e.map(e=>{let n=a(e,t);return r||"function"!=typeof n||(r=!0),n});if(r)return()=>{for(let t=0;t<n.length;t++){let r=n[t];"function"==typeof r?r():a(e[t],null)}}}}(...e),e)}var i=r(14707),s=r(95155);function u(e){let t=e+"CollectionProvider",[r,a]=(0,o.A)(t),[u,d]=r(t,{collectionRef:{current:null},itemMap:new Map}),c=e=>{let{scope:t,children:r}=e,o=n.useRef(null),a=n.useRef(new Map).current;return(0,s.jsx)(u,{scope:t,itemMap:a,collectionRef:o,children:r})};c.displayName=t;let f=e+"CollectionSlot",p=n.forwardRef((e,t)=>{let{scope:r,children:n}=e,o=l(t,d(f,r).collectionRef);return(0,s.jsx)(i.DX,{ref:o,children:n})});p.displayName=f;let m=e+"CollectionItemSlot",h="data-radix-collection-item",b=n.forwardRef((e,t)=>{let{scope:r,children:o,...a}=e,u=n.useRef(null),c=l(t,u),f=d(m,r);return n.useEffect(()=>(f.itemMap.set(u,{ref:u,...a}),()=>void f.itemMap.delete(u))),(0,s.jsx)(i.DX,{[h]:"",ref:c,children:o})});return b.displayName=m,[{Provider:c,Slot:p,ItemSlot:b},function(t){let r=d(e+"CollectionConsumer",t);return n.useCallback(()=>{let e=r.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll("[".concat(h,"]")));return Array.from(r.itemMap.values()).sort((e,r)=>t.indexOf(e.ref.current)-t.indexOf(r.ref.current))},[r.collectionRef,r.itemMap])},a]}},18166:(e,t,r)=>{"use strict";r.d(t,{A:()=>l,q:()=>a});var n=r(12115),o=r(95155);function a(e,t){let r=n.createContext(t),a=e=>{let{children:t,...a}=e,l=n.useMemo(()=>a,Object.values(a));return(0,o.jsx)(r.Provider,{value:l,children:t})};return a.displayName=e+"Provider",[a,function(o){let a=n.useContext(r);if(a)return a;if(void 0!==t)return t;throw Error(`\`${o}\` must be used within \`${e}\``)}]}function l(e,t=[]){let r=[],a=()=>{let t=r.map(e=>n.createContext(e));return function(r){let o=r?.[e]||t;return n.useMemo(()=>({[`__scope${e}`]:{...r,[e]:o}}),[r,o])}};return a.scopeName=e,[function(t,a){let l=n.createContext(a),i=r.length;r=[...r,a];let s=t=>{let{scope:r,children:a,...s}=t,u=r?.[e]?.[i]||l,d=n.useMemo(()=>s,Object.values(s));return(0,o.jsx)(u.Provider,{value:d,children:a})};return s.displayName=t+"Provider",[s,function(r,o){let s=o?.[e]?.[i]||l,u=n.useContext(s);if(u)return u;if(void 0!==a)return a;throw Error(`\`${r}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let r=()=>{let r=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=r.reduce((t,{useScope:r,scopeName:n})=>{let o=r(e)[`__scope${n}`];return{...t,...o}},{});return n.useMemo(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return r.scopeName=t.scopeName,r}(a,...t)]}},4256:(e,t,r)=>{"use strict";r.d(t,{jH:()=>a});var n=r(12115);r(95155);var o=n.createContext(void 0);function a(e){let t=n.useContext(o);return e||t||"ltr"}},67668:(e,t,r)=>{"use strict";r.d(t,{B:()=>s});var n,o=r(12115),a=r(46611),l=(n||(n=r.t(o,2)))["useId".toString()]||(()=>void 0),i=0;function s(e){let[t,r]=o.useState(l());return(0,a.N)(()=>{e||r(e=>e??String(i++))},[e]),e||(t?`radix-${t}`:"")}},41524:(e,t,r)=>{"use strict";r.d(t,{c:()=>o});var n=r(12115);function o(e){let t=n.useRef(e);return n.useEffect(()=>{t.current=e}),n.useMemo(()=>(...e)=>t.current?.(...e),[])}},1488:(e,t,r)=>{"use strict";r.d(t,{i:()=>a});var n=r(12115),o=r(41524);function a({prop:e,defaultProp:t,onChange:r=()=>{}}){let[a,l]=function({defaultProp:e,onChange:t}){let r=n.useState(e),[a]=r,l=n.useRef(a),i=(0,o.c)(t);return n.useEffect(()=>{l.current!==a&&(i(a),l.current=a)},[a,l,i]),r}({defaultProp:t,onChange:r}),i=void 0!==e,s=i?e:a,u=(0,o.c)(r);return[s,n.useCallback(t=>{if(i){let r="function"==typeof t?t(e):t;r!==e&&u(r)}else l(t)},[i,e,l,u])]}},46611:(e,t,r)=>{"use strict";r.d(t,{N:()=>o});var n=r(12115),o=globalThis?.document?n.useLayoutEffect:()=>{}}},e=>{var t=t=>e(e.s=t);e.O(0,[105,539,430,441,517,358],()=>t(69289)),_N_E=e.O()}]);