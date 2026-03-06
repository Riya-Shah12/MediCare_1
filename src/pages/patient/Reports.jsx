import React from 'react'
import { Card, CardContent } from '../../components/ui/Card'
import { Badge } from '../../components/ui/Badge'
import { FileText, Download, Eye } from 'lucide-react'

export default function PatientReports() {
    const reports = [
        { id: 'REP-001', date: 'Oct 12, 2024', title: 'Complete Blood Count (CBC)', doctor: 'Dr. Aditya Joshi', type: 'Lab Result' },
        { id: 'REP-002', date: 'Sep 05, 2024', title: 'Chest X-Ray', doctor: 'Dr. Rahul Verma', type: 'Imaging' },
        { id: 'REP-003', date: 'Jul 22, 2024', title: 'AI Symptom Analysis: Viral Infection', doctor: 'AI Assistant', type: 'AI Report' },
    ]

    return (
        <div className="p-6 lg:p-8 max-w-7xl mx-auto space-y-6">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">My Medical Reports</h1>
                    <p className="text-slate-500">View and download all your lab results and AI diagnosis reports.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
                {reports.map((report) => (
                    <Card key={report.id} className="border-0 shadow-sm border-slate-100 hover:shadow-md transition-shadow">
                        <CardContent className="p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                            <div className="flex items-start sm:items-center gap-4">
                                <div className={`p-3 rounded-xl ${report.type === 'AI Report' ? 'bg-purple-100 text-purple-600' : 'bg-blue-100 text-blue-600'}`}>
                                    <FileText className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900">{report.title}</h3>
                                    <div className="flex items-center gap-3 mt-1 text-sm text-slate-500">
                                        <span>{report.date}</span> • <span>{report.doctor}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 w-full sm:w-auto">
                                <Badge variant="neutral" className="mr-2 hidden sm:flex">{report.type}</Badge>
                                <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors font-medium text-sm">
                                    <Eye className="h-4 w-4" /> View
                                </button>
                                <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-[#2563EB] text-white rounded-lg hover:bg-[#1d4ed8] transition-colors font-medium text-sm">
                                    <Download className="h-4 w-4" /> Download
                                </button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
