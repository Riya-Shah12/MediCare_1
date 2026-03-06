import React, { useState } from "react"
import { Outlet } from "react-router-dom"
import { Sidebar } from "./Sidebar"
import { Navbar } from "./Navbar"

export function DashboardLayout({ navigation, role, userName }) {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <div className="flex h-screen overflow-hidden bg-slate-50">
            {/* Mobile sidebar overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 z-40 bg-slate-900/80 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar container */}
            <div
                className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-white transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <Sidebar navigation={navigation} role={role} />
            </div>

            {/* Main content area */}
            <div className="flex flex-1 flex-col overflow-hidden">
                <Navbar
                    onMenuClick={() => setSidebarOpen(true)}
                    userRole={role}
                    userName={userName}
                />

                <main className="flex-1 overflow-y-auto bg-[#F8FAFC]">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}
