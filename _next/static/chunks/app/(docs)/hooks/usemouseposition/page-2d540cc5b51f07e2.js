(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[274,829],{8463:(e,r,t)=>{Promise.resolve().then(t.bind(t,843)),Promise.resolve().then(t.bind(t,5630))},843:(e,r,t)=>{"use strict";t.d(r,{default:()=>f});var a=t(5155),o=t(4522),n=t(7341),i=t(3721),l=t.n(i),s=t(3113),c=t(814),d=t(4085);let f=function(e){let{code:r,language:t,filename:i}=e,[,f]=(0,s.A)(),u=()=>{f(r)};return(0,a.jsx)(o.NG,{code:r,language:t,children:(0,a.jsxs)("div",{className:"relative border select-text overflow-scroll rounded-xl max-w-screen-lg max-h-96",children:[(0,a.jsxs)("div",{className:"sticky top-0 flex flex-row justify-between left-0 w-full bg-gray-200 dark:bg-neutral-950",children:[i&&(0,a.jsx)("p",{className:"p-2 text-sm ".concat(l().className," antialiased"),children:i}),(0,a.jsx)(d.$,{variant:"ghost",size:"icon",className:"rounded-br-none",onClick:()=>{u(),c.oR.info("Code copied to clipboard",{icon:"\uD83D\uDCCB"})},children:(0,a.jsx)(n.A,{className:"h-4 w-4"})})]}),(0,a.jsx)(o.NG.Code,{className:"bg-white/50 dark:bg-neutral-900/75 overflow-x-scroll p-6 shadow-lg",children:(0,a.jsxs)("div",{className:"table-row",children:[(0,a.jsx)(o.NG.LineNumber,{className:"table-cell pr-4 text-sm text-gray-500 text-right select-none"}),(0,a.jsx)(o.NG.LineContent,{className:"table-cell",children:(0,a.jsx)(o.NG.Token,{})})]})})]})})}},5630:(e,r,t)=>{"use strict";t.d(r,{default:()=>i});var a=t(5155),o=t(3463),n=t(2115);function i(e){let{children:r,size:t="3xl",className:n,main:i}=e,s=()=>{switch(t){case"5xl":return"text-5xl";case"4xl":return"text-4xl";case"3xl":default:return"text-3xl";case"2xl":return"text-2xl";case"xl":return"text-xl";case"lg":return"text-lg"}};return i?(0,a.jsx)(l,{textSize:s(),className:n||"",children:r}):(0,a.jsx)("h1",{className:(0,o.A)("docs-title pl-8",s(),n),children:r})}let l=e=>{let{children:r,className:t,textSize:i}=e,l=function(e){let[r,t]=(0,n.useState)(!1),a=(0,n.useCallback)(()=>{t(window.scrollY>72)},[72]);return(0,n.useEffect)(()=>(window.addEventListener("scroll",a),()=>window.removeEventListener("scroll",a)),[a]),r}(0);return(0,a.jsx)("h1",{onClick:()=>{l&&window.scrollTo({top:0,behavior:"smooth"})},className:(0,o.A)("sticky z-30 top-16 w-full docs-title pl-8 transition-all transform-gpu will-change-transform duration-500 flex",i,t,l&&" backdrop-blur-lg pl-24 text-cursor flex-col cursor-pointer bg-white/75 dark:bg-black/75 bg-opacity-75"),children:r})}},4085:(e,r,t)=>{"use strict";t.d(r,{$:()=>c,r:()=>s});var a=t(5155),o=t(2115),n=t(2317),i=t(652),l=t(1567);let s=(0,i.F)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline",expandIcon:"group relative text-primary-foreground bg-primary hover:bg-primary/90",ringHover:"bg-primary text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:ring-2 hover:ring-primary/90 hover:ring-offset-2",shine:"text-primary-foreground animate-shine bg-gradient-to-r from-primary via-primary/75 to-primary bg-[length:400%_100%] ",gooeyRight:"text-primary-foreground relative bg-primary z-0 overflow-hidden transition-all duration-500 before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-gradient-to-r from-zinc-400 before:transition-transform before:duration-1000  hover:before:translate-x-[0%] hover:before:translate-y-[0%] ",gooeyLeft:"text-primary-foreground relative bg-primary z-0 overflow-hidden transition-all duration-500 after:absolute after:inset-0 after:-z-10 after:translate-x-[-150%] after:translate-y-[150%] after:scale-[2.5] after:rounded-[100%] after:bg-gradient-to-l from-zinc-400 after:transition-transform after:duration-1000  hover:after:translate-x-[0%] hover:after:translate-y-[0%] ",linkHover1:"relative after:absolute after:bg-primary after:bottom-2 after:h-[1px] after:w-2/3 after:origin-bottom-left after:scale-x-100 hover:after:origin-bottom-right hover:after:scale-x-0 after:transition-transform after:ease-in-out after:duration-300",linkHover2:"relative after:absolute after:bg-primary after:bottom-2 after:h-[1px] after:w-2/3 after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=o.forwardRef((e,r)=>{let{className:t,variant:o,size:i,asChild:c=!1,Icon:d,iconPlacement:f,...u}=e,g=c?n.DX:"button";return(0,a.jsxs)(g,{className:(0,l.cn)(s({variant:o,size:i,className:t})),ref:r,...u,children:[d&&"left"===f&&(0,a.jsx)("div",{className:"w-0 translate-x-[0%] pr-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-100 group-hover:pr-2 group-hover:opacity-100",children:(0,a.jsx)(d,{})}),(0,a.jsx)(n.xV,{children:u.children}),d&&"right"===f&&(0,a.jsx)("div",{className:"w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-2 group-hover:opacity-100",children:(0,a.jsx)(d,{})})]})});c.displayName="Button"},1567:(e,r,t)=>{"use strict";t.d(r,{cn:()=>n});var a=t(3463),o=t(9795);function n(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,o.QP)((0,a.$)(r))}}},e=>{var r=r=>e(e.s=r);e.O(0,[641,716,350,785,441,517,358],()=>r(8463)),_N_E=e.O()}]);