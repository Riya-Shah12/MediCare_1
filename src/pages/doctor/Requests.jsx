import React from 'react'
import { Card, CardContent } from '../../components/ui/Card'
import { Badge } from '../../components/ui/Badge'
import { Button } from '../../components/ui/Button'
import { FileText, CheckCircle2, Clock, AlertTriangle } from 'lucide-react'

export default function PatientRequests() {
    const requests = [
        { id: 'REQ-501', patient: 'Rahul Verma', type: 'Prescription Refill', urgency: 'Low', date: 'Just now', description: 'Requesting refill for Atorvastatin 20mg.' },
        { id: 'REQ-502', patient: 'Samir Patel', type: 'Lab Review', urgency: 'High', date: '2 hrs ago', description: 'Uploaded recent blood work following AI diagnosis. Needs review ASAP.' },
        { id: 'REQ-503', patient: 'Kavita Das', type: 'General Query', urgency: 'Medium', date: 'Yesterday', description: 'Experiencing slight nausea after starting new medication.' },
    ]

    return (
        <div className="p-6 lg:p-8 max-w-7xl mx-auto space-y-6">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Patient Requests</h1>
                    <p className="text-slate-500">Inbox for prescription refills, lab reviews, and follow-up queries.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {requests.map((req) => (
                    <Card key={req.id} className="border-0 shadow-sm border-t-4 border-t-[#2563EB] hover:-translate-y-1 transition-transform relative pr-0">
                        {req.urgency === 'High' && (
                            <div className="absolute top-4 right-4 text-red-500 animate-pulse">
                                <AlertTriangle className="h-5 w-5 fill-red-100" />
                            </div>
                        )}
                        <CardContent className="p-6">
                            <div className="flex items-center gap-2 mb-4">
                                <Badge variant={req.urgency === 'High' ? 'danger' : req.urgency === 'Low' ? 'success' : 'warning'}>
                                    {req.urgency} Urgency
                                </Badge>
                                <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                                    <Clock className="h-3 w-3" /> {req.date}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-1">{req.patient}</h3>
                            <p className="font-semibold text-[#2563EB] text-sm mb-4">{req.type}</p>

                            <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 mb-6 min-h-[80px]">
                                <p className="text-sm text-slate-600 italic">"{req.description}"</p>
                            </div>

                            <div className="grid grid-cols-2 gap-2">
                                <Button variant="outline" className="text-slate-600 border-slate-200">
                                    <FileText className="h-4 w-4 mr-2" /> Details
                                </Button>
                                <Button className="bg-[#2563EB] hover:bg-[#1d4ed8]">
                                    <CheckCircle2 className="h-4 w-4 mr-2" /> Resolve
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
