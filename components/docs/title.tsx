import clsx from "clsx";

export default function DocsTitle({ children, size='3xl', className}: { children: React.ReactNode, size?: '5xl' | '4xl' | '3xl' | '2xl' | 'xl' | 'lg', className?: string }) {
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
    return (
        <h1 className={clsx("docs-title pl-8", getTextSize(), className)}>
            {children}
        </h1>
    )
}