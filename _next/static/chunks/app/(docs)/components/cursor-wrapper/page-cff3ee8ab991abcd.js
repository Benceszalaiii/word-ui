(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[247],{5565:(e,r,s)=>{Promise.resolve().then(s.bind(s,2277))},2277:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>u});var n=s(5155),t=s(4085),l=s(7396),o=s(843),a=s(6393),c=s(3577),i=s(8006),d=s(8095);function u(){return(0,n.jsxs)(a.By,{children:[(0,n.jsx)(c.A,{}),(0,n.jsx)(a.kt,{main:!0,children:"Cursor Wrapper"}),(0,n.jsxs)(a.hh,{children:[(0,n.jsxs)(a.AZ,{children:["Use with"," ",(0,n.jsx)(l.default,{href:"/components/cursor-glow",className:"underline underline-offset-2",children:"Cursor Glow"})," ","to create color changing cursor glow."]}),(0,n.jsxs)(d.tU,{defaultValue:"preview",className:"w-full",children:[(0,n.jsxs)(d.j7,{children:[(0,n.jsx)(d.Xi,{value:"preview",children:"Preview"}),(0,n.jsx)(d.Xi,{value:"code",children:"Code"})]}),(0,n.jsxs)(d.av,{value:"preview",children:[(0,n.jsx)(i.A,{color:"255 0 0",children:(0,n.jsx)(i.w,{title:"Custom Section",className:"h-64",children:"The cursor will be red in this section"})}),(0,n.jsx)(i.w,{title:"Shadcn button with glow",className:"h-64",children:(0,n.jsx)(i.A,{color:"10 100 255",children:(0,n.jsx)(t.$,{variant:"secondary",children:"Hover me"})})})]}),(0,n.jsxs)(d.av,{value:"code",children:[(0,n.jsx)(a.kt,{size:"lg",className:"pb-1 mb-4",children:"Dependencies"}),(0,n.jsxs)(a.AZ,{children:["Requires"," ",(0,n.jsx)(l.default,{href:"/hooks/use-cursor-theme",className:"underline underline-offset-2",children:"useCursorTheme"})," ","hook"]}),(0,n.jsx)(o.default,{language:"tsx",filename:"components/cursor-wrapper.tsx",code:'\n"use client";\n\nimport useCursorTheme from "hooks/use-cursor-theme";\nimport React from "react";\n\nconst CursorWrapper = React.forwardRef<\n  HTMLDivElement,\n  { color: string; children: React.ReactNode }\n>(({ color, children }, ref) => {\n  const { setTheme, setCursorDefault, defaultTheme } = useCursorTheme();\n\n  return (\n    <div\n      onMouseEnter={() => {\n        setTheme(color || defaultTheme);\n      }}\n      onMouseLeave={setCursorDefault}\n      ref={ref}\n      style={{ display: "contents" }}\n    >\n      {children}\n    </div>\n  );\n});\n\nCursorWrapper.displayName = "CursorWrapper";\nexport default CursorWrapper;\n'})]})]}),(0,n.jsx)(a.kt,{size:"2xl",className:"mt-12",children:"Usage"}),(0,n.jsxs)(a.AZ,{children:["You can use the ",(0,n.jsx)("span",{className:"inline-code",children:"title"})," parameter to add a title to the section."]}),(0,n.jsxs)(a.AZ,{children:["To set the cursor's color, use the"," ",(0,n.jsx)("span",{className:"inline-code",children:"cursorColor"})," parameter."]}),(0,n.jsx)(o.default,{language:"tsx",filename:"page.tsx",code:'\nexport default function Page(){\n  return (\n      {/*  Use rgb for color, without brackets*/}\n      <CursorWrapper color="255 0 0">\n        <Section title="Custom Section">\n          The cursor will be red in this section\n        </Section>\n      </CursorWrapper>\n    )\n}\n'})]})]})}},8006:(e,r,s)=>{"use strict";s.d(r,{A:()=>c,w:()=>i});var n=s(5155),t=s(1516),l=s(2115),o=s(9795);let a=l.forwardRef((e,r)=>{let{color:s,children:l}=e,{setTheme:o,setCursorDefault:a,defaultTheme:c}=(0,t.A)();return(0,n.jsx)("div",{onMouseEnter:()=>{o(s||c)},onMouseLeave:a,ref:r,style:{display:"contents"},children:l})});a.displayName="CursorWrapper";let c=a;function i(e){let{children:r,title:s,className:t}=e;return(0,n.jsxs)("section",{className:(0,o.QP)("relative mt-8 flex w-full max-w-screen-md flex-col items-center justify-center gap-4 rounded-lg border border-border bg-opacity-10 p-8 backdrop-blur-lg md:gap-8 md:overflow-hidden",t),children:[(0,n.jsx)("legend",{about:"Legend",className:"self-start absolute top-2 left-4 text-lg font-semibold text-opacity-75 select-none -z-10 text-black/75 animate-in dark:text-white/75",children:s}),r]})}}},e=>{var r=r=>e(e.s=r);e.O(0,[641,716,350,785,9,396,292,889,441,517,358],()=>r(5565)),_N_E=e.O()}]);