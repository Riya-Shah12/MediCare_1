import * as React from "react"
import { cn } from "../../utils/cn"

const Button = React.forwardRef(
    ({ className, variant = "primary", size = "default", ...props }, ref) => {

        const variants = {
            primary: "bg-[#2563EB] text-white hover:bg-[#1d4ed8] shadow-sm",
            secondary: "bg-[#14B8A6] text-white hover:bg-[#0f766e] shadow-sm",
            outline: "border border-border bg-transparent hover:bg-slate-100 text-slate-700",
            ghost: "hover:bg-slate-100 hover:text-slate-900 text-slate-700",
            danger: "bg-error text-white hover:bg-red-600 shadow-sm",
        }

        const sizes = {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10",
        }

        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }
