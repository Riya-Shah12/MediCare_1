import React from 'react'
import { StatCard } from '../../components/shared/StatCard'
import { Users, UserPlus, Activity, TrendingUp, DollarSign } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card'
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

export default function AdminDashboard() {

    const growthData = [
        { name: 'Jan', users: 4000 },
        { name: 'Feb', users: 3000 },
        { name: 'Mar', users: 5000 },
        { name: 'Apr', users: 4500 },
        { name: 'May', users: 6000 },
        { name: 'Jun', users: 8000 },
    ]

    const diseaseData = [
        { name: 'Viral Fever', cases: 400 },
        { name: 'Cold', cases: 300 },
        { name: 'Malaria', cases: 150 },
        { name: 'Typhoid', cases: 200 },
        { name: 'Covid-19', cases: 50 },
    ]

    return (
        <div className="p-6 lg:p-8 max-w-7xl mx-auto space-y-8">
            {/* Stats Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    title="Total Users"
                    value="12,450"
                    icon={Users}
                    iconColor="text-blue-500"
                    iconBg="bg-blue-50"
                />
                <StatCard
                    title="Active Doctors"
                    value="456"
                    icon={UserPlus}
                    iconColor="text-green-500"
                    iconBg="bg-green-50"
                />
                <StatCard
                    title="AI Consultations"
                    value="8,234"
                    icon={Activity}
                    iconColor="text-purple-500"
                    iconBg="bg-purple-50"
                />
                <StatCard
                    title="Growth"
                    value="+15%"
                    icon={TrendingUp}
                    iconColor="text-[#2563EB]"
                    iconBg="bg-[#E0F2FE]"
                />
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="border-0 shadow-sm border-slate-100">
                    <CardHeader>
                        <CardTitle>Platform Growth</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="h-80">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={growthData}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} />
                                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} />
                                    <Tooltip />
                                    <Area type="monotone" dataKey="users" stroke="#2563EB" fill="#E0F2FE" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-0 shadow-sm border-slate-100">
                    <CardHeader>
                        <CardTitle>Top AI Predicted Diseases</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="h-80">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={diseaseData} layout="vertical" margin={{ left: 20 }}>
                                    <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
                                    <XAxis type="number" axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} />
                                    <YAxis type="category" dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} />
                                    <Tooltip cursor={{ fill: '#f8fafc' }} />
                                    <Bar dataKey="cases" fill="#14B8A6" radius={[0, 4, 4, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
