(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[166],{4630:(e,r,t)=>{Promise.resolve().then(t.bind(t,1784))},1784:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>l});var n=t(5155),a=t(843),o=t(1089),s=t(3577),i=t(1641);function l(){return(0,n.jsxs)(o.By,{children:[(0,n.jsx)(s.A,{}),(0,n.jsx)(o.kt,{children:"Cursor Glow"}),(0,n.jsxs)(o.hh,{children:[(0,n.jsxs)(i.tU,{defaultValue:"preview",className:"w-full",children:[(0,n.jsxs)(i.j7,{children:[(0,n.jsx)(i.Xi,{value:"preview",children:"Preview"}),(0,n.jsx)(i.Xi,{value:"code",children:"Code"})]}),(0,n.jsx)(i.av,{value:"preview",children:(0,n.jsx)(o.AZ,{children:"Hover around the screen to preview"})}),(0,n.jsx)(i.av,{value:"code",children:(0,n.jsx)(a.default,{language:"tsx",filename:"components/cursor-glow.tsx",code:'\nimport { useIsMobile } from "@/hooks/use-mobile";\nimport { useMousePosition } from "@/hooks/use-mouseposition";\nimport { motion } from "framer-motion";\n\nexport default function CursorGlow() {\n  const mousePos = useMousePosition();\n  const isMobile = useIsMobile();\n  return (\n    <div\n      className={`fixed left-0 top-0 -z-10 h-screen w-screen overflow-hidden`}\n    >\n      <motion.div\n        hidden={isMobile || (mousePos.x === 0 && mousePos.y === 0)}\n        className={`bg-cursor fixed h-28 w-28 rounded-xl opacity-55 blur-2xl transition-colors duration-700`}\n        animate={{ x: mousePos.x, y: mousePos.y }}\n        transition={{ duration: 0.2, ease: "easeOut", stiffness: 100 }}\n      />\n    </div>\n  );\n}\n'})})]}),(0,n.jsx)(o.kt,{className:"mt-16",children:"Usage"}),(0,n.jsxs)(o.AZ,{children:["Include ",(0,n.jsx)("span",{className:"inline-code",children:"--cursor"})," in your"," ",(0,n.jsx)("span",{className:"inline-code",children:"global.css"})," file."]}),(0,n.jsx)(a.default,{language:"css",filename:"global.css",code:"\n@layer base {\n  :root {\n    --cursor: #5b21b6;\n        }\n      }\n"}),(0,n.jsxs)(o.AZ,{children:[" Add cursor to your ",(0,n.jsx)("span",{className:"inline-code",children:"tailwind.config.ts"})," file"]}),(0,n.jsx)(a.default,{language:"typescript",filename:"tailwind.config.ts",code:'\n  theme: {\n    extend: {\n      colors: {\n        cursor: "var(--cursor)",\n        '})]})]})}},843:(e,r,t)=>{"use strict";t.d(r,{default:()=>u});var n=t(5155),a=t(4522),o=t(3721),s=t.n(o),i=t(7341),l=t(3113),d=t(814),c=t(4085);let u=function(e){let{code:r,language:t,filename:o}=e,[,u]=(0,l.A)();return(0,n.jsx)(a.NG,{code:r,language:t,children:(0,n.jsxs)("div",{className:"relative",children:[o&&(0,n.jsx)("p",{className:"absolute top-0 left-0 rounded-t-xl w-full p-2 border bg-neutral-950 text-sm ".concat(s().className," antialiased"),children:o}),(0,n.jsx)(a.NG.Code,{className:"bg-white/75 dark:bg-neutral-900/75 overflow-x-scroll p-6 ".concat(o&&"pt-12"," rounded-xl shadow-lg"),children:(0,n.jsxs)("div",{className:"table-row",children:[(0,n.jsx)(a.NG.LineNumber,{className:"table-cell pr-4 text-sm text-gray-500 text-right select-none"}),(0,n.jsx)(a.NG.LineContent,{className:"table-cell",children:(0,n.jsx)(a.NG.Token,{})})]})}),(0,n.jsx)(c.$,{variant:"ghost",size:"icon",className:"absolute top-0 right-0 rounded-br-none",onClick:()=>{u(r),d.oR.success("Code copied to clipboard")},children:(0,n.jsx)(i.A,{className:"h-4 w-4"})})]})})}},1089:(e,r,t)=>{"use strict";t.d(r,{hh:()=>a,AZ:()=>l,By:()=>o,kt:()=>i});var n=t(5155);function a(e){let{children:r}=e;return(0,n.jsx)("article",{className:"docs-content",children:r})}function o(e){let{children:r}=e;return(0,n.jsx)("section",{className:"docs",children:r})}var s=t(3463);function i(e){let{children:r,size:t="3xl",className:a}=e;return(0,n.jsx)("h1",{className:(0,s.A)("docs-title pl-8",(()=>{switch(t){case"5xl":return"text-5xl";case"4xl":return"text-4xl";case"3xl":default:return"text-3xl";case"2xl":return"text-2xl";case"xl":return"text-xl";case"lg":return"text-lg"}})(),a),children:r})}function l(e){let{children:r,className:t}=e;return(0,n.jsx)("div",{className:(0,s.A)("docs-description",t),children:r})}},3577:(e,r,t)=>{"use strict";t.d(r,{A:()=>l});var n=t(5155),a=t(90),o=t(2115);let s=()=>{let[e,r]=(0,o.useState)({x:0,y:0});return(0,o.useEffect)(()=>{let e=e=>{r({x:e.clientX-56,y:e.clientY-56})};return window.addEventListener("mousemove",e),()=>{window.removeEventListener("mousemove",e)}},[]),e};var i=t(6225);function l(){let e=s(),r=(0,a.a)();return(0,n.jsx)("div",{className:"fixed left-0 top-0 -z-10 h-screen w-screen overflow-hidden",children:(0,n.jsx)(i.P.div,{hidden:r||0===e.x&&0===e.y,className:"bg-cursor fixed h-28 w-28 rounded-xl opacity-55 blur-2xl transition-colors duration-700",animate:{x:e.x,y:e.y},transition:{duration:.2,ease:"easeOut",stiffness:100}})})}},4085:(e,r,t)=>{"use strict";t.d(r,{$:()=>d,r:()=>l});var n=t(5155),a=t(2115),o=t(2317),s=t(652),i=t(1567);let l=(0,s.F)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline",expandIcon:"group relative text-primary-foreground bg-primary hover:bg-primary/90",ringHover:"bg-primary text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:ring-2 hover:ring-primary/90 hover:ring-offset-2",shine:"text-primary-foreground animate-shine bg-gradient-to-r from-primary via-primary/75 to-primary bg-[length:400%_100%] ",gooeyRight:"text-primary-foreground relative bg-primary z-0 overflow-hidden transition-all duration-500 before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-gradient-to-r from-zinc-400 before:transition-transform before:duration-1000  hover:before:translate-x-[0%] hover:before:translate-y-[0%] ",gooeyLeft:"text-primary-foreground relative bg-primary z-0 overflow-hidden transition-all duration-500 after:absolute after:inset-0 after:-z-10 after:translate-x-[-150%] after:translate-y-[150%] after:scale-[2.5] after:rounded-[100%] after:bg-gradient-to-l from-zinc-400 after:transition-transform after:duration-1000  hover:after:translate-x-[0%] hover:after:translate-y-[0%] ",linkHover1:"relative after:absolute after:bg-primary after:bottom-2 after:h-[1px] after:w-2/3 after:origin-bottom-left after:scale-x-100 hover:after:origin-bottom-right hover:after:scale-x-0 after:transition-transform after:ease-in-out after:duration-300",linkHover2:"relative after:absolute after:bg-primary after:bottom-2 after:h-[1px] after:w-2/3 after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=a.forwardRef((e,r)=>{let{className:t,variant:a,size:s,asChild:d=!1,Icon:c,iconPlacement:u,...f}=e,x=d?o.DX:"button";return(0,n.jsxs)(x,{className:(0,i.cn)(l({variant:a,size:s,className:t})),ref:r,...f,children:[c&&"left"===u&&(0,n.jsx)("div",{className:"w-0 translate-x-[0%] pr-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-100 group-hover:pr-2 group-hover:opacity-100",children:(0,n.jsx)(c,{})}),(0,n.jsx)(o.xV,{children:f.children}),c&&"right"===u&&(0,n.jsx)("div",{className:"w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-2 group-hover:opacity-100",children:(0,n.jsx)(c,{})})]})});d.displayName="Button"},1641:(e,r,t)=>{"use strict";t.d(r,{Xi:()=>d,av:()=>c,j7:()=>l,tU:()=>i});var n=t(5155),a=t(2115),o=t(8629),s=t(1567);let i=o.bL,l=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)(o.B8,{ref:r,className:(0,s.cn)("flex h-10 items-center justify-start border-b-2 border-border p-1 text-muted-foreground",t),...a})});l.displayName=o.B8.displayName;let d=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)(o.l9,{ref:r,className:(0,s.cn)("flex items-center justify-center whitespace-nowrap px-3 py-1.5 pb-3 text-sm data-[state=active]:border-b border-b-violet-600 dark:border-b-violet-400 font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-violet-600 data-[state=active]:dark:text-violet-400 data-[state=active]:shadow-sm",t),...a})});d.displayName=o.l9.displayName;let c=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)(o.UC,{ref:r,className:(0,s.cn)("mt-2 ring-offset-background w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",t),...a})});c.displayName=o.UC.displayName},90:(e,r,t)=>{"use strict";t.d(r,{a:()=>a});var n=t(2115);function a(){let[e,r]=n.useState(void 0);return n.useEffect(()=>{let e=window.matchMedia("(max-width: ".concat(767,"px)")),t=()=>{r(window.innerWidth<768)};return e.addEventListener("change",t),r(window.innerWidth<768),()=>e.removeEventListener("change",t)},[]),!!e}},1567:(e,r,t)=>{"use strict";t.d(r,{cn:()=>o});var n=t(3463),a=t(9795);function o(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,a.QP)((0,n.$)(r))}}},e=>{var r=r=>e(e.s=r);e.O(0,[641,132,934,785,88,357,441,517,358],()=>r(4630)),_N_E=e.O()}]);