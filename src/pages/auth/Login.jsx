import React, { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { Card, CardContent } from "../../components/ui/Card"
import { Input } from "../../components/ui/Input"
import { Label } from "../../components/ui/Label"
import { Button } from "../../components/ui/Button"

export default function Login() {
    const navigate = useNavigate()
    const [role, setRole] = useState("patient")

    const handleLogin = (e) => {
        e.preventDefault()
        // Mock login routing
        if (role === "admin") navigate("/admin/dashboard")
        else if (role === "doctor") navigate("/doctor/dashboard")
        else navigate("/patient/dashboard")
    }

    return (
        <div className="mt-8">
            <Card className="border-0 shadow-xl shadow-blue-900/5">
                <CardContent className="pt-6">
                    <div className="flex w-full mb-8 bg-slate-100 p-1 rounded-lg">
                        <button
                            onClick={() => setRole("patient")}
                            className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${role === "patient" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
                        >
                            Patient
                        </button>
                        <button
                            onClick={() => setRole("doctor")}
                            className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${role === "doctor" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
                        >
                            Doctor
                        </button>
                        <button
                            onClick={() => setRole("admin")}
                            className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${role === "admin" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
                        >
                            Admin
                        </button>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="name@example.com" required />
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <Label htmlFor="password">Password</Label>
                                <a href="#" className="font-medium text-sm text-[#2563EB] hover:underline">
                                    Forgot password?
                                </a>
                            </div>
                            <Input id="password" type="password" required />
                        </div>

                        <div className="flex items-center gap-2">
                            <input type="checkbox" id="remember" className="rounded border-slate-300 text-[#2563EB] focus:ring-[#2563EB] w-4 h-4" />
                            <Label htmlFor="remember" className="font-normal text-slate-600">Remember me</Label>
                        </div>

                        <Button type="submit" className="w-full">
                            Sign in as {role.charAt(0).toUpperCase() + role.slice(1)}
                        </Button>
                    </form>
                </CardContent>
            </Card>

            <p className="mt-6 text-center text-sm text-slate-600">
                Not a member?{' '}
                <Link to="/register" className="font-semibold text-[#2563EB] hover:text-[#1d4ed8]">
                    Register now
                </Link>
            </p>
        </div>
    )
}
