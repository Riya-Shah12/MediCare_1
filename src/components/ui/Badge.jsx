import * as React from "react"
import { cn } from "../../utils/cn"

function Badge({ className, variant = "default", ...props }) {
    const variants = {
        default: "bg-slate-100 text-slate-900 border-transparent",
        primary: "bg-[#E0F2FE] text-[#2563EB] border-transparent", // Light Cyan background, Blue text
        secondary: "bg-slate-100 text-slate-800 border-transparent",
        success: "bg-green-100 text-green-800 border-transparent",
        warning: "bg-orange-100 text-orange-800 border-transparent",
        danger: "bg-red-100 text-red-800 border-transparent",
        outline: "text-slate-950 border-slate-200",
    }

    return (
        <div
            className={cn(
                "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                variants[variant],
                className
            )}
            {...props}
        />
    )
}

export { Badge }
