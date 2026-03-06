import React from "react"
import { Outlet } from "react-router-dom"
import { Pill } from "lucide-react"

export function AuthLayout() {
    return (
        <div className="flex min-h-screen bg-slate-50">
            <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24 w-full lg:w-1/2">
                <div className="mx-auto w-full max-w-sm lg:w-96">
                    <div className="flex items-center gap-2">
                        <div className="bg-[#2563EB] p-2 rounded-lg">
                            <Pill className="h-6 w-6 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                            Medicare API
                        </h2>
                    </div>
                    <Outlet />
                </div>
            </div>
            <div className="relative hidden w-0 flex-1 lg:block bg-[#2563EB]">
                <div className="absolute inset-0 h-full w-full object-cover mix-blend-multiply opacity-20"
                    style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "20px 20px" }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-12">
                    <h1 className="text-4xl font-bold mb-4">AI-Powered Smart Healthcare</h1>
                    <p className="text-lg text-blue-100 text-center max-w-md">Get instant disease prediction using AI and connect with certified doctors.</p>
                </div>
            </div>
        </div>
    )
}
