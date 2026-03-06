import React from "react"
import { Link, useLocation } from "react-router-dom"
import { cn } from "../../utils/cn"
import { LogOut } from "lucide-react"

export function Sidebar({ navigation, role }) {
    const location = useLocation()

    return (
        <div className="flex h-full w-64 flex-col border-r border-slate-200 bg-white shadow-sm">
            <div className="flex h-16 items-center px-6 border-b border-slate-100">
                <span className="text-xl font-bold text-slate-900 tracking-tight">
                    <span className="text-[#2563EB]">Medicare</span> AI
                </span>
            </div>

            <div className="flex-1 overflow-y-auto py-4">
                <nav className="space-y-1 px-3">
                    {navigation.map((item) => {
                        const isActive = location.pathname.startsWith(item.href)
                        return (
                            <Link
                                key={item.name}
                                to={item.href}
                                className={cn(
                                    isActive
                                        ? "bg-[#E0F2FE] text-[#2563EB] font-medium"
                                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900",
                                    "group flex items-center rounded-md px-3 py-2 text-sm transition-colors"
                                )}
                            >
                                <item.icon
                                    className={cn(
                                        isActive ? "text-[#2563EB]" : "text-slate-400 group-hover:text-slate-500",
                                        "mr-3 h-5 w-5 flex-shrink-0 transition-colors"
                                    )}
                                    aria-hidden="true"
                                />
                                {item.name}
                            </Link>
                        )
                    })}
                </nav>
            </div>

            <div className="border-t border-slate-100 p-4">
                <Link
                    to="/login"
                    className="group flex items-center rounded-md px-3 py-2 text-sm text-red-600 hover:bg-red-50 hover:text-red-700 transition-colors"
                >
                    <LogOut
                        className="mr-3 h-5 w-5 flex-shrink-0 text-red-400 group-hover:text-red-500 transition-colors"
                        aria-hidden="true"
                    />
                    Logout
                </Link>
            </div>
        </div>
    )
}
