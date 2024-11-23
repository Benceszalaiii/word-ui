"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[90],{3090:(e,a,t)=>{t.d(a,{AppSidebar:()=>c});var r=t(5155),i=t(8369),n=t(1719),o=t(7396),s=t(6046),d=t(2764);let l=[{name:"Getting Started",prefix:"/getting-started",subItems:[{title:"Installation",href:"/installation"}]},{name:"Components",prefix:"/components",subItems:[{title:"Cursor Glow",href:"/cursor-glow"},{title:"Cursor Wrapper",href:"/cursor-wrapper"}]},{name:"Hooks",prefix:"/hooks",subItems:[{title:"useCursorTheme",href:"/usecursortheme"},{title:"useMousePosition",href:"/usemouseposition"}]}];function c(){let e=(0,s.usePathname)();return(0,r.jsxs)(d.Bx,{children:[(0,r.jsx)(d.Yv,{className:"pt-16",children:l.map(a=>(0,r.jsx)(u,{title:a.name,children:a.subItems.map(t=>(0,r.jsx)(f,{active:e===a.prefix+t.href,href:"/docs"+a.prefix+t.href,children:t.title},t.href))},a.name))}),(0,r.jsx)(d.CG,{})]})}function u(e){let{title:a,children:t}=e;return(0,r.jsx)(d.wZ,{children:(0,r.jsx)(i.Nt,{defaultOpen:!0,className:"group/collapsible",children:(0,r.jsxs)(d.FX,{children:[(0,r.jsx)(i.R6,{asChild:!0,children:(0,r.jsxs)(d.Uj,{className:"font-semibold text-base",children:[a,(0,r.jsx)(n.A,{className:"ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180"})]})}),(0,r.jsx)(i.Ke,{children:(0,r.jsx)(d.q9,{children:t})})]})})})}function f(e){let{href:a,children:t,active:i}=e;return(0,r.jsx)(d.Fg,{children:(0,r.jsx)(o.default,{href:a,className:i?"underline underline-offset-2 font-bold":"",children:t})})}},4085:(e,a,t)=>{t.d(a,{$:()=>l,r:()=>d});var r=t(5155),i=t(2115),n=t(2317),o=t(652),s=t(1567);let d=(0,o.F)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline",expandIcon:"group relative text-primary-foreground bg-primary hover:bg-primary/90",ringHover:"bg-primary text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:ring-2 hover:ring-primary/90 hover:ring-offset-2",shine:"text-primary-foreground animate-shine bg-gradient-to-r from-primary via-primary/75 to-primary bg-[length:400%_100%] ",gooeyRight:"text-primary-foreground relative bg-primary z-0 overflow-hidden transition-all duration-500 before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-gradient-to-r from-zinc-400 before:transition-transform before:duration-1000  hover:before:translate-x-[0%] hover:before:translate-y-[0%] ",gooeyLeft:"text-primary-foreground relative bg-primary z-0 overflow-hidden transition-all duration-500 after:absolute after:inset-0 after:-z-10 after:translate-x-[-150%] after:translate-y-[150%] after:scale-[2.5] after:rounded-[100%] after:bg-gradient-to-l from-zinc-400 after:transition-transform after:duration-1000  hover:after:translate-x-[0%] hover:after:translate-y-[0%] ",linkHover1:"relative after:absolute after:bg-primary after:bottom-2 after:h-[1px] after:w-2/3 after:origin-bottom-left after:scale-x-100 hover:after:origin-bottom-right hover:after:scale-x-0 after:transition-transform after:ease-in-out after:duration-300",linkHover2:"relative after:absolute after:bg-primary after:bottom-2 after:h-[1px] after:w-2/3 after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),l=i.forwardRef((e,a)=>{let{className:t,variant:i,size:o,asChild:l=!1,Icon:c,iconPlacement:u,...f}=e,b=l?n.DX:"button";return(0,r.jsxs)(b,{className:(0,s.cn)(d({variant:i,size:o,className:t})),ref:a,...f,children:[c&&"left"===u&&(0,r.jsx)("div",{className:"w-0 translate-x-[0%] pr-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-100 group-hover:pr-2 group-hover:opacity-100",children:(0,r.jsx)(c,{})}),(0,r.jsx)(n.xV,{children:f.children}),c&&"right"===u&&(0,r.jsx)("div",{className:"w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-2 group-hover:opacity-100",children:(0,r.jsx)(c,{})})]})});l.displayName="Button"},2764:(e,a,t)=>{t.d(a,{Bx:()=>E,Yv:()=>D,CG:()=>L,wZ:()=>F,Uj:()=>A,FX:()=>G,q9:()=>P,Fg:()=>B,SidebarProvider:()=>M,x2:()=>I});var r=t(5155),i=t(2317),n=t(652),o=t(3017),s=t(2115),d=t(90),l=t(1567),c=t(4085);let u=s.forwardRef((e,a)=>{let{className:t,type:i,...n}=e;return(0,r.jsx)("input",{type:i,className:(0,l.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",t),ref:a,...n})});u.displayName="Input";var f=t(434);let b=s.forwardRef((e,a)=>{let{className:t,orientation:i="horizontal",decorative:n=!0,...o}=e;return(0,r.jsx)(f.b,{ref:a,decorative:n,orientation:i,className:(0,l.cn)("shrink-0 bg-border","horizontal"===i?"h-[1px] w-full":"h-full w-[1px]",t),...o})});b.displayName=f.b.displayName;var p=t(6217),m=t(767),g=t(3543);let h=p.bL;p.l9,p.bm;let x=p.ZL,v=s.forwardRef((e,a)=>{let{className:t,...i}=e;return(0,r.jsx)(p.hJ,{className:(0,l.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",t),...i,ref:a})});v.displayName=p.hJ.displayName;let w=(0,n.F)("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),y=s.forwardRef((e,a)=>{let{side:t="right",className:i,children:n,...o}=e;return(0,r.jsxs)(x,{children:[(0,r.jsx)(v,{}),(0,r.jsx)(g.s,{children:(0,r.jsx)(p.hE,{})}),(0,r.jsxs)(p.UC,{ref:a,className:(0,l.cn)(w({side:t}),i),...o,children:[n,(0,r.jsxs)(p.bm,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",children:[(0,r.jsx)(m.A,{className:"h-4 w-4"}),(0,r.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});function N(e){let{className:a,...t}=e;return(0,r.jsx)("div",{className:(0,l.cn)("animate-pulse rounded-md bg-muted",a),...t})}y.displayName=p.UC.displayName,s.forwardRef((e,a)=>{let{className:t,...i}=e;return(0,r.jsx)(p.hE,{ref:a,className:(0,l.cn)("text-lg font-semibold text-foreground",t),...i})}).displayName=p.hE.displayName,s.forwardRef((e,a)=>{let{className:t,...i}=e;return(0,r.jsx)(p.VY,{ref:a,className:(0,l.cn)("text-sm text-muted-foreground",t),...i})}).displayName=p.VY.displayName;var j=t(9710);let k=j.Kq,z=j.bL,S=j.l9,R=s.forwardRef((e,a)=>{let{className:t,sideOffset:i=4,...n}=e;return(0,r.jsx)(j.UC,{ref:a,sideOffset:i,className:(0,l.cn)("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...n})});R.displayName=j.UC.displayName;let C=s.createContext(null);function _(){let e=s.useContext(C);if(!e)throw Error("useSidebar must be used within a SidebarProvider.");return e}let M=s.forwardRef((e,a)=>{let{defaultOpen:t=!0,open:i,onOpenChange:n,className:o,style:c,children:u,...f}=e,b=(0,d.a)(),[p,m]=s.useState(!1),[g,h]=s.useState(t),x=null!=i?i:g,v=s.useCallback(e=>{let a="function"==typeof e?e(x):e;n?n(a):h(a),document.cookie="".concat("sidebar:state","=").concat(a,"; path=/; max-age=").concat(604800)},[n,x]),w=s.useCallback(()=>b?m(e=>!e):v(e=>!e),[b,v,m]);s.useEffect(()=>{let e=e=>{"b"===e.key&&(e.metaKey||e.ctrlKey)&&(e.preventDefault(),w())};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[w]);let y=x?"expanded":"collapsed",N=s.useMemo(()=>({state:y,open:x,setOpen:v,isMobile:b,openMobile:p,setOpenMobile:m,toggleSidebar:w}),[y,x,v,b,p,m,w]);return(0,r.jsx)(C.Provider,{value:N,children:(0,r.jsx)(k,{delayDuration:0,children:(0,r.jsx)("div",{style:{"--sidebar-width":"16rem","--sidebar-width-icon":"3rem",...c},className:(0,l.cn)("group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-background",o),ref:a,...f,children:u})})})});M.displayName="SidebarProvider";let E=s.forwardRef((e,a)=>{let{side:t="left",variant:i="sidebar",collapsible:n="offcanvas",className:o,children:s,...d}=e,{isMobile:c,state:u,openMobile:f,setOpenMobile:b}=_();return"none"===n?(0,r.jsx)("div",{className:(0,l.cn)("flex h-full w-[--sidebar-width] flex-col bg-background text-sidebar-foreground",o),ref:a,...d,children:s}):c?(0,r.jsx)(h,{open:f,onOpenChange:b,...d,children:(0,r.jsx)(y,{"data-sidebar":"sidebar","data-mobile":"true",className:"w-[--sidebar-width] bg-background p-0 text-sidebar-foreground [&>button]:hidden",style:{"--sidebar-width":"18rem"},side:t,children:(0,r.jsx)("div",{className:"flex h-full w-full flex-col",children:s})})}):(0,r.jsxs)("div",{ref:a,className:"group peer hidden md:block text-sidebar-foreground","data-state":u,"data-collapsible":"collapsed"===u?n:"","data-variant":i,"data-side":t,children:[(0,r.jsx)("div",{className:(0,l.cn)("duration-200 relative h-svh w-[--sidebar-width] bg-transparent transition-[width] ease-linear","group-data-[collapsible=offcanvas]:w-0","group-data-[side=right]:rotate-180","floating"===i||"inset"===i?"group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]":"group-data-[collapsible=icon]:w-[--sidebar-width-icon]")}),(0,r.jsx)("div",{className:(0,l.cn)("duration-200 fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] ease-linear md:flex","left"===t?"left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]":"right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]","floating"===i||"inset"===i?"p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]":"group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l",o),...d,children:(0,r.jsx)("div",{"data-sidebar":"sidebar",className:"flex h-full w-full flex-col bg-background group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow",children:s})})]})});E.displayName="Sidebar";let I=s.forwardRef((e,a)=>{let{className:t,onClick:i,...n}=e,{toggleSidebar:s}=_();return(0,r.jsxs)(c.$,{ref:a,"data-sidebar":"trigger",variant:"ghost",size:"icon",className:(0,l.cn)("h-7 w-7",t),onClick:e=>{null==i||i(e),s()},...n,children:[(0,r.jsx)(o.A,{}),(0,r.jsx)("span",{className:"sr-only",children:"Toggle Sidebar"})]})});I.displayName="SidebarTrigger",s.forwardRef((e,a)=>{let{className:t,...i}=e,{toggleSidebar:n}=_();return(0,r.jsx)("button",{ref:a,"data-sidebar":"rail","aria-label":"Toggle Sidebar",tabIndex:-1,onClick:n,title:"Toggle Sidebar",className:(0,l.cn)("absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-background-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex","[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize","[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize","group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-background","[[data-side=left][data-collapsible=offcanvas]_&]:-right-2","[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",t),...i})}).displayName="SidebarRail",s.forwardRef((e,a)=>{let{className:t,...i}=e;return(0,r.jsx)("main",{ref:a,className:(0,l.cn)("relative flex min-h-svh flex-1 flex-col bg-background","peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",t),...i})}).displayName="SidebarInset",s.forwardRef((e,a)=>{let{className:t,...i}=e;return(0,r.jsx)(u,{ref:a,"data-sidebar":"input",className:(0,l.cn)("h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",t),...i})}).displayName="SidebarInput",s.forwardRef((e,a)=>{let{className:t,...i}=e;return(0,r.jsx)("div",{ref:a,"data-sidebar":"header",className:(0,l.cn)("flex flex-col gap-2 p-2",t),...i})}).displayName="SidebarHeader";let L=s.forwardRef((e,a)=>{let{className:t,...i}=e;return(0,r.jsx)("div",{ref:a,"data-sidebar":"footer",className:(0,l.cn)("flex flex-col gap-2 p-2",t),...i})});L.displayName="SidebarFooter",s.forwardRef((e,a)=>{let{className:t,...i}=e;return(0,r.jsx)(b,{ref:a,"data-sidebar":"separator",className:(0,l.cn)("mx-2 w-auto bg-background-border",t),...i})}).displayName="SidebarSeparator";let D=s.forwardRef((e,a)=>{let{className:t,...i}=e;return(0,r.jsx)("div",{ref:a,"data-sidebar":"content",className:(0,l.cn)("flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",t),...i})});D.displayName="SidebarContent",s.forwardRef((e,a)=>{let{className:t,...i}=e;return(0,r.jsx)("div",{ref:a,"data-sidebar":"group",className:(0,l.cn)("relative flex w-full min-w-0 flex-col p-2",t),...i})}).displayName="SidebarGroup",s.forwardRef((e,a)=>{let{className:t,asChild:n=!1,...o}=e,s=n?i.DX:"div";return(0,r.jsx)(s,{ref:a,"data-sidebar":"group-label",className:(0,l.cn)("duration-200 flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0","group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",t),...o})}).displayName="SidebarGroupLabel",s.forwardRef((e,a)=>{let{className:t,asChild:n=!1,...o}=e,s=n?i.DX:"button";return(0,r.jsx)(s,{ref:a,"data-sidebar":"group-action",className:(0,l.cn)("absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-background-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0","after:absolute after:-inset-2 after:md:hidden","group-data-[collapsible=icon]:hidden",t),...o})}).displayName="SidebarGroupAction",s.forwardRef((e,a)=>{let{className:t,...i}=e;return(0,r.jsx)("div",{ref:a,"data-sidebar":"group-content",className:(0,l.cn)("w-full text-sm",t),...i})}).displayName="SidebarGroupContent";let F=s.forwardRef((e,a)=>{let{className:t,...i}=e;return(0,r.jsx)("ul",{ref:a,"data-sidebar":"menu",className:(0,l.cn)("flex w-full min-w-0 flex-col gap-1",t),...i})});F.displayName="SidebarMenu";let G=s.forwardRef((e,a)=>{let{className:t,...i}=e;return(0,r.jsx)("li",{ref:a,"data-sidebar":"menu-item",className:(0,l.cn)("group/menu-item relative",t),...i})});G.displayName="SidebarMenuItem";let X=(0,n.F)("peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-background-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-background-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-background-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-background-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",{variants:{variant:{default:"hover:bg-background-accent hover:text-sidebar-accent-foreground",outline:"bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-background-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"},size:{default:"h-8 text-sm",sm:"h-7 text-xs",lg:"h-12 text-sm group-data-[collapsible=icon]:!p-0"}},defaultVariants:{variant:"default",size:"default"}}),A=s.forwardRef((e,a)=>{let{asChild:t=!1,isActive:n=!1,variant:o="default",size:s="default",tooltip:d,className:c,...u}=e,f=t?i.DX:"button",{isMobile:b,state:p}=_(),m=(0,r.jsx)(f,{ref:a,"data-sidebar":"menu-button","data-size":s,"data-active":n,className:(0,l.cn)(X({variant:o,size:s}),c),...u});return d?("string"==typeof d&&(d={children:d}),(0,r.jsxs)(z,{children:[(0,r.jsx)(S,{asChild:!0,children:m}),(0,r.jsx)(R,{side:"right",align:"center",hidden:"collapsed"!==p||b,...d})]})):m});A.displayName="SidebarMenuButton",s.forwardRef((e,a)=>{let{className:t,asChild:n=!1,showOnHover:o=!1,...s}=e,d=n?i.DX:"button";return(0,r.jsx)(d,{ref:a,"data-sidebar":"menu-action",className:(0,l.cn)("absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-background-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0","after:absolute after:-inset-2 after:md:hidden","peer-data-[size=sm]/menu-button:top-1","peer-data-[size=default]/menu-button:top-1.5","peer-data-[size=lg]/menu-button:top-2.5","group-data-[collapsible=icon]:hidden",o&&"group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",t),...s})}).displayName="SidebarMenuAction",s.forwardRef((e,a)=>{let{className:t,...i}=e;return(0,r.jsx)("div",{ref:a,"data-sidebar":"menu-badge",className:(0,l.cn)("absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground select-none pointer-events-none","peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground","peer-data-[size=sm]/menu-button:top-1","peer-data-[size=default]/menu-button:top-1.5","peer-data-[size=lg]/menu-button:top-2.5","group-data-[collapsible=icon]:hidden",t),...i})}).displayName="SidebarMenuBadge",s.forwardRef((e,a)=>{let{className:t,showIcon:i=!1,...n}=e,o=s.useMemo(()=>"".concat(Math.floor(40*Math.random())+50,"%"),[]);return(0,r.jsxs)("div",{ref:a,"data-sidebar":"menu-skeleton",className:(0,l.cn)("rounded-md h-8 flex gap-2 px-2 items-center",t),...n,children:[i&&(0,r.jsx)(N,{className:"size-4 rounded-md","data-sidebar":"menu-skeleton-icon"}),(0,r.jsx)(N,{className:"h-4 flex-1 max-w-[--skeleton-width]","data-sidebar":"menu-skeleton-text",style:{"--skeleton-width":o}})]})}).displayName="SidebarMenuSkeleton";let P=s.forwardRef((e,a)=>{let{className:t,...i}=e;return(0,r.jsx)("ul",{ref:a,"data-sidebar":"menu-sub",className:(0,l.cn)("mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5","group-data-[collapsible=icon]:hidden",t),...i})});P.displayName="SidebarMenuSub";let B=s.forwardRef((e,a)=>{let{...t}=e;return(0,r.jsx)("li",{ref:a,...t})});B.displayName="SidebarMenuSubItem",s.forwardRef((e,a)=>{let{asChild:t=!1,size:n="md",isActive:o,className:s,...d}=e,c=t?i.DX:"a";return(0,r.jsx)(c,{ref:a,"data-sidebar":"menu-sub-button","data-size":n,"data-active":o,className:(0,l.cn)("flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-background-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-background-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground","data-[active=true]:bg-background-accent data-[active=true]:text-sidebar-accent-foreground","sm"===n&&"text-xs","md"===n&&"text-sm","group-data-[collapsible=icon]:hidden",s),...d})}).displayName="SidebarMenuSubButton"},90:(e,a,t)=>{t.d(a,{a:()=>i});var r=t(2115);function i(){let[e,a]=r.useState(void 0);return r.useEffect(()=>{let e=window.matchMedia("(max-width: ".concat(767,"px)")),t=()=>{a(window.innerWidth<768)};return e.addEventListener("change",t),a(window.innerWidth<768),()=>e.removeEventListener("change",t)},[]),!!e}},1567:(e,a,t)=>{t.d(a,{cn:()=>n});var r=t(3463),i=t(9795);function n(){for(var e=arguments.length,a=Array(e),t=0;t<e;t++)a[t]=arguments[t];return(0,i.QP)((0,r.$)(a))}}}]);