import React, { useState } from 'react'
import { StatCard } from '../../components/shared/StatCard'
import { Clock, BadgeCheck, Users, Activity, FileText, Search } from 'lucide-react'
import { Card, CardContent } from '../../components/ui/Card'
import { Badge } from '../../components/ui/Badge'
import { Button } from '../../components/ui/Button'
import { Input } from '../../components/ui/Input'
import { useNavigate } from 'react-router-dom'

export default function DoctorDashboard() {
    const [activeTab, setActiveTab] = useState('pending')
    const navigate = useNavigate()

    // Mock data matching the screenshot structure
    const pendingCases = [
        {
            id: 1,
            name: 'Rajesh Kumar',
            age: 27,
            gender: 'Male',
            status: 'URGENT',
            timeAgo: '2 Hours Ago',
            symptoms: ['High fever', 'Body ache', 'Head Ace', 'Fatigue'],
            aiDiagnosis: 'Viral Fever',
            aiRecommendations: [
                'Rest for 3-4 days',
                'Stay hydrated',
                'Paracetamol 500mg (3x daily)',
                'Monitor temperature'
            ]
        },
        {
            id: 2,
            name: 'Priya Singh',
            age: 34,
            gender: 'Female',
            status: 'ROUTINE',
            timeAgo: '3 Hours Ago',
            symptoms: ['Cough', 'Sore throat', 'Runny nose'],
            aiDiagnosis: 'Common Cold',
            aiRecommendations: [
                'Warm fluids',
                'Steam inhalation',
                'Cough syrup',
                'Rest'
            ]
        }
    ]

    return (
        <div className="p-6 lg:p-8 max-w-7xl mx-auto space-y-8">
            {/* Stats Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    title="Pending Reviews"
                    value="5"
                    icon={Clock}
                    iconColor="text-red-500"
                    iconBg="bg-red-50"
                />
                <StatCard
                    title="Approved Cases"
                    value="12"
                    icon={BadgeCheck}
                    iconColor="text-green-500"
                    iconBg="bg-green-50"
                />
                <StatCard
                    title="Completed Cases"
                    value="48"
                    icon={Users}
                    iconColor="text-blue-500"
                    iconBg="bg-blue-50"
                />
                <StatCard
                    title="Active Cases"
                    value="8"
                    icon={Activity}
                    iconColor="text-slate-700"
                    iconBg="bg-slate-100"
                />
            </div>

            {/* Main Content Area */}
            <Card className="border-0 shadow-sm bg-white overflow-hidden">
                {/* Tabs */}
                <div className="border-b border-slate-200 px-6 flex space-x-8">
                    <button
                        onClick={() => setActiveTab('pending')}
                        className={`py-4 text-sm font-medium border-b-2 transition-colors ${activeTab === 'pending'
                            ? 'border-[#2563EB] text-[#2563EB]'
                            : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                            }`}
                    >
                        Pending Reviews (3)
                    </button>
                    <button
                        onClick={() => setActiveTab('approved')}
                        className={`py-4 text-sm font-medium border-b-2 transition-colors ${activeTab === 'approved'
                            ? 'border-[#2563EB] text-[#2563EB]'
                            : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                            }`}
                    >
                        Completed / Approved Cases (5)
                    </button>
                </div>

                <CardContent className="p-6">
                    <div className="relative mb-6">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-5 w-5" />
                        <Input
                            placeholder="Search by patient name"
                            className="pl-10 h-11 bg-white border-slate-200"
                        />
                    </div>

                    <div className="space-y-4">
                        {pendingCases.map((caseItem) => (
                            <div
                                key={caseItem.id}
                                className={`rounded-xl p-5 border ${caseItem.status === 'URGENT'
                                    ? 'bg-red-50/50 border-red-100'
                                    : 'bg-green-50/50 border-green-100'
                                    }`}
                            >
                                <div className="flex flex-col lg:flex-row gap-6">
                                    {/* Patient Info */}
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="h-10 w-10 rounded-full bg-[#2563EB] flex items-center justify-center text-white shrink-0">
                                                <UserCircle2 className="h-6 w-6" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-slate-900">{caseItem.name}</h4>
                                                <p className="text-xs text-slate-500">{caseItem.age} years • {caseItem.gender}</p>
                                            </div>
                                            <div className="ml-auto text-right">
                                                <Badge variant={caseItem.status === 'URGENT' ? 'danger' : 'success'}>
                                                    {caseItem.status}
                                                </Badge>
                                                <p className="text-xs text-slate-500 mt-1">{caseItem.timeAgo}</p>
                                            </div>
                                        </div>

                                        <div className="mb-2 flex items-center gap-2">
                                            <Activity className="h-4 w-4 text-red-500" />
                                            <span className="text-sm font-medium text-slate-700">Symptoms Reported</span>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {caseItem.symptoms.map(sym => (
                                                <Badge key={sym} className="bg-[#38bdf8] text-white hover:bg-[#0ea5e9]">
                                                    {sym}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Divider purely visual */}
                                    <div className="hidden lg:block w-px bg-slate-200/60 my-2"></div>

                                    {/* AI Info & Action */}
                                    <div className="flex-1 flex flex-col">
                                        <div className="flex items-center gap-2 mb-3">
                                            <Activity className="h-5 w-5 text-[#8b5cf6]" />
                                            <span className="text-sm font-medium text-slate-700">AI Diagnosis</span>
                                            <Badge className="bg-[#10b981] text-white hover:bg-[#059669] ml-2">
                                                {caseItem.aiDiagnosis}
                                            </Badge>
                                        </div>

                                        <div className="text-sm text-slate-600 mb-6 flex-1">
                                            <p className="mb-2">AI Recommendations:</p>
                                            <ul className="list-disc pl-5 space-y-1">
                                                {caseItem.aiRecommendations.map((rec, idx) => (
                                                    <li key={idx} className="text-slate-500">{rec}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="flex justify-end mt-auto">
                                            <Button
                                                onClick={() => navigate(`/doctor/patients/${caseItem.id}`)}
                                                className="bg-[#3b82f6] hover:bg-[#2563EB] gap-2 px-6"
                                            >
                                                <FileText className="h-4 w-4" />
                                                Review & Prescribe
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

// Inline fallback for the user circle since it was missing in imports
function UserCircle2({ className }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="10" r="3" />
            <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
        </svg>
    )
}
