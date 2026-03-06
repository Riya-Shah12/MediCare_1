import React from 'react'
import { StatCard } from '../../components/shared/StatCard'
import { Activity, Calendar, FileText, HeartPulse } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/Card'
import { Badge } from '../../components/ui/Badge'
import { Button } from '../../components/ui/Button'
import { useNavigate } from 'react-router-dom'

export default function PatientDashboard() {
    const navigate = useNavigate()

    return (
        <div className="p-6 lg:p-8 max-w-7xl mx-auto space-y-8">
            {/* Welcome Banner */}
            <div className="bg-gradient-to-r from-[#2563EB] to-[#14B8A6] rounded-2xl p-8 text-white shadow-md">
                <h1 className="text-3xl font-bold mb-2">Hello, John! 👋</h1>
                <p className="text-blue-50 max-w-xl text-lg">Your health is our priority. Use our AI symptom checker for instant health analysis or manage your upcoming appointments.</p>
                <Button
                    onClick={() => navigate('/patient/ai-checker')}
                    className="mt-6 bg-white text-[#2563EB] hover:bg-slate-50 border-none px-6 py-2.5 rounded-full font-semibold font-sans shadow-sm"
                >
                    Check Symptoms with AI
                </Button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard title="Upcoming Appointments" value="1" icon={Calendar} iconColor="text-[#2563EB]" iconBg="bg-blue-50" />
                <StatCard title="AI Predictions" value="4" icon={Activity} iconColor="text-[#14B8A6]" iconBg="bg-teal-50" />
                <StatCard title="Medical Reports" value="12" icon={FileText} iconColor="text-purple-500" iconBg="bg-purple-50" />
                <StatCard title="Health Score" value="98%" icon={HeartPulse} iconColor="text-red-500" iconBg="bg-red-50" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Recent Activity */}
                <Card className="border-0 shadow-sm border-slate-100">
                    <CardHeader>
                        <CardTitle>Recent AI Predictions</CardTitle>
                        <CardDescription>Your last 3 symptom analyses</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[
                                { disease: 'Mild Migraine', date: 'Oct 12, 2024', status: 'Resolved' },
                                { disease: 'Seasonal Allergies', date: 'Sep 05, 2024', status: 'Prescribed' },
                                { disease: 'Viral Infection', date: 'Jul 22, 2024', status: 'Resolved' }
                            ].map((item, i) => (
                                <div key={i} className="flex justify-between items-center p-4 rounded-lg border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className="p-2 rounded-full bg-blue-100 text-[#2563EB]">
                                            <Activity className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-slate-900">{item.disease}</p>
                                            <p className="text-sm text-slate-500">{item.date}</p>
                                        </div>
                                    </div>
                                    <Badge variant={item.status === 'Resolved' ? 'success' : 'primary'}>{item.status}</Badge>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Upcoming Appointments */}
                <Card className="border-0 shadow-sm border-slate-100">
                    <CardHeader>
                        <CardTitle>Upcoming Appointments</CardTitle>
                        <CardDescription>Your scheduled doctor visits</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="p-5 rounded-xl border border-[#2563EB]/20 bg-[#E0F2FE]/50 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#2563EB]/5 rounded-full -translate-y-8 translate-x-8 blur-2xl"></div>

                            <div className="flex justify-between items-start relative z-10">
                                <div className="flex items-start gap-4">
                                    <div className="bg-white p-3 rounded-xl shadow-sm border border-blue-100 flex flex-col items-center justify-center min-w-[70px]">
                                        <span className="text-sm font-bold text-red-500">OCT</span>
                                        <span className="text-2xl font-bold text-slate-800">24</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg">Dr. Aditya Joshi</h4>
                                        <p className="text-slate-600 font-medium">MD Physician</p>
                                        <div className="flex items-center gap-2 mt-2 text-sm text-slate-500">
                                            <Calendar className="h-4 w-4" />
                                            10:30 AM - Online Video Consult
                                        </div>
                                    </div>
                                </div>
                                <Badge variant="primary" className="bg-[#2563EB] text-white">Confirmed</Badge>
                            </div>

                            <div className="mt-6 flex gap-3 relative z-10">
                                <Button className="flex-1 bg-white text-slate-700 hover:bg-slate-50 shadow-sm border border-slate-200">Reschedule</Button>
                                <Button className="flex-1 bg-[#2563EB] hover:bg-[#1d4ed8]">Join Call</Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
