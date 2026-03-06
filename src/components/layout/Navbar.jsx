import React from "react"
import { Bell, Menu, UserCircle } from "lucide-react"

export function Navbar({ onMenuClick, userRole, userName }) {
    return (
        <header className="sticky top-0 z-10 flex h-16 flex-shrink-0 items-center gap-x-4 border-b border-border bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            <button
                type="button"
                className="-m-2.5 p-2.5 text-slate-700 lg:hidden"
                onClick={onMenuClick}
            >
                <span className="sr-only">Open sidebar</span>
                <Menu className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Separator for mobile */}
            <div className="h-6 w-px bg-slate-200 lg:hidden" aria-hidden="true" />

            <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
                <div className="flex flex-1"></div>
                <div className="flex items-center gap-x-4 lg:gap-x-6">
                    <button
                        type="button"
                        className="-m-2.5 p-2.5 text-slate-400 hover:text-slate-500 relative"
                    >
                        <span className="sr-only">View notifications</span>
                        <Bell className="h-6 w-6" aria-hidden="true" />
                        <span className="absolute top-2.5 right-2.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
                    </button>

                    {/* Separator */}
                    <div
                        className="hidden lg:block lg:h-6 lg:w-px lg:bg-slate-200"
                        aria-hidden="true"
                    />

                    {/* Profile dropdown */}
                    <div className="flex items-center gap-x-4">
                        <div className="text-right hidden sm:block">
                            <p className="text-sm font-semibold text-slate-900">{userName || "User"}</p>
                            <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">{userRole || "Patient"}</p>
                        </div>
                        <UserCircle className="h-8 w-8 text-[#2563EB]" />
                    </div>
                </div>
            </div>
        </header>
    )
}
