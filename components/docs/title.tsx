"use client";
import clsx from "clsx";
import useScroll from "hooks/use-scroll";

export default function DocsTitle({ children, size='3xl', className, main}: { children: React.ReactNode, main?: boolean, size?: '5xl' | '4xl' | '3xl' | '2xl' | 'xl' | 'lg', className?: string }) {
    const getTextSize = () => {switch(size){
        case '5xl':
            return 'text-5xl'
        case '4xl':
            return 'text-4xl'
        case '3xl':
            return 'text-3xl'
        case '2xl':
            return 'text-2xl'
        case 'xl':
            return 'text-xl'
        case 'lg':
            return 'text-lg'
        default:
            return 'text-3xl'
    }}
    if (main){
        return (
            <MainText textSize={getTextSize()} className={className || ""}>
                {children}
            </MainText>
        )
    }
    return (
        <h1 className={clsx("docs-title pl-8", getTextSize(), className)}>
            {children}
        </h1>
    )
}


const MainText = ({children, className, textSize}: {children: React.ReactNode, textSize: string, className: string}) => {
    const scrolled = useScroll(72);
    return (

        <h1 onClick={()=> {
            if (scrolled){
                window.scrollTo({top: 0, behavior: 'smooth'})
            }
        }} className={clsx("sticky z-30 top-16 w-full docs-title pl-8 transition-all transform-gpu will-change-transform duration-500 flex", textSize, className, scrolled && " backdrop-blur-lg pl-24 text-cursor flex-col cursor-pointer bg-white/75 dark:bg-black/75 bg-opacity-75")}>
            {children}
        </h1>
    )
}