import React from 'react'
import { Card, CardContent } from '../../components/ui/Card'
import { Badge } from '../../components/ui/Badge'
import { Button } from '../../components/ui/Button'
import { Calendar, Clock, Video, X, Check } from 'lucide-react'

export default function Appointments() {
    const appointments = [
        { id: 'APT-101', patientName: 'John Doe', time: '10:30 AM', duration: '30 Min', type: 'Online', status: 'Scheduled' },
        { id: 'APT-102', patientName: 'Rajesh Kumar', time: '11:15 AM', duration: '45 Min', type: 'In-Person', status: 'Scheduled' },
        { id: 'APT-103', patientName: 'Priya Singh', time: '02:00 PM', duration: '30 Min', type: 'Online', status: 'Canceled' },
        { id: 'APT-104', patientName: 'Anita Patel', time: '03:30 PM', duration: '60 Min', type: 'In-Person', status: 'Completed' },
    ]

    return (
        <div className="p-6 lg:p-8 max-w-7xl mx-auto space-y-6">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Today's Appointments</h1>
                    <p className="text-slate-500">Manage your daily schedule and upcoming consultations.</p>
                </div>
                <Button className="bg-[#2563EB] hover:bg-[#1d4ed8] gap-2">
                    <Calendar className="h-4 w-4" /> View Full Calendar
                </Button>
            </div>

            <div className="grid grid-cols-1 gap-4">
                {appointments.map((apt) => (
                    <Card key={apt.id} className="border-0 shadow-sm border-slate-100 hover:border-blue-100 transition-colors">
                        <CardContent className="p-4 sm:p-6 flex flex-col sm:flex-row items-start justify-between gap-4">

                            <div className="flex gap-4 items-center">
                                <div className="h-14 w-14 bg-slate-50 border border-slate-100 rounded-xl flex flex-col items-center justify-center shrink-0">
                                    <span className="text-[10px] uppercase font-bold text-slate-400">Time</span>
                                    <span className="font-bold text-slate-800 text-sm whitespace-nowrap">{apt.time.split(' ')[0]}</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 text-lg">{apt.patientName}</h3>
                                    <div className="flex items-center gap-3 mt-1 text-sm text-slate-500 font-medium whitespace-nowrap">
                                        <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {apt.duration}</span>
                                        <span className="flex items-center gap-1">
                                            {apt.type === 'Online' ? <Video className="h-3 w-3" /> : null}
                                            {apt.type}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                                <Badge variant={
                                    apt.status === 'Scheduled' ? 'primary' :
                                        apt.status === 'Completed' ? 'success' : 'danger'
                                }>{apt.status}</Badge>

                                {apt.status === 'Scheduled' && (
                                    <div className="flex gap-2">
                                        <Button variant="ghost" size="sm" className="text-red-500 hover:bg-red-50 hover:text-red-600 px-2 border border-slate-200">
                                            <X className="h-4 w-4" />
                                        </Button>
                                        <Button size="sm" className="bg-[#2563EB] hover:bg-[#1d4ed8] gap-2 px-4 shadow-sm">
                                            {apt.type === 'Online' ? <><Video className="h-4 w-4" /> Join Call</> : <><Check className="h-4 w-4" /> Check-in</>}
                                        </Button>
                                    </div>
                                )}
                            </div>

                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
