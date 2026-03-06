import React from 'react'
import { Card, CardContent } from '../../components/ui/Card'
import { Button } from '../../components/ui/Button'
import { Input } from '../../components/ui/Input'
import { Badge } from '../../components/ui/Badge'
import { Search, MapPin, Star, Calendar } from 'lucide-react'

export default function DoctorConsultation() {
    const doctors = [
        {
            id: 1,
            name: 'Dr. Aditya Joshi',
            specialty: 'MD Physician',
            experience: '12 Years',
            rating: 4.8,
            reviews: 124,
            availability: 'Available Today',
            imageRef: 'A'
        },
        {
            id: 2,
            name: 'Dr. Priya Sharma',
            specialty: 'Cardiologist',
            experience: '8 Years',
            rating: 4.9,
            reviews: 89,
            availability: 'Available Tomorrow',
            imageRef: 'P'
        },
        {
            id: 3,
            name: 'Dr. Rahul Verma',
            specialty: 'Pulmonologist',
            experience: '15 Years',
            rating: 4.7,
            reviews: 210,
            availability: 'Next Available: Friday',
            imageRef: 'R'
        }
    ]

    return (
        <div className="p-6 lg:p-8 max-w-7xl mx-auto space-y-6">

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Find a Doctor</h1>
                    <p className="text-slate-500">Book consultations with top-rated medical specialists.</p>
                </div>
                <div className="relative w-full md:w-80">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-5 w-5" />
                    <Input className="pl-10" placeholder="Search doctors, specialties..." />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {doctors.map(doctor => (
                    <Card key={doctor.id} className="border-0 shadow-sm border-slate-100 overflow-hidden hover:-translate-y-1 transition-transform duration-300">
                        <div className="h-24 bg-gradient-to-r from-blue-50 to-teal-50"></div>
                        <CardContent className="pt-0 relative px-6 pb-6">
                            <div className="absolute -top-10 left-6">
                                <div className="h-20 w-20 rounded-2xl bg-[#2563EB] text-white flex items-center justify-center text-3xl font-bold shadow-md border-4 border-white">
                                    {doctor.imageRef}
                                </div>
                            </div>

                            <div className="flex justify-end pt-3">
                                <Badge variant="success" className="bg-green-100/50 text-green-700">{doctor.availability}</Badge>
                            </div>

                            <div className="mt-6 space-y-1">
                                <h3 className="text-xl font-bold text-slate-900">{doctor.name}</h3>
                                <p className="text-[#2563EB] font-medium">{doctor.specialty}</p>
                            </div>

                            <div className="grid grid-cols-2 gap-4 my-6 text-sm">
                                <div>
                                    <p className="text-slate-500 mb-1">Experience</p>
                                    <p className="font-semibold text-slate-700">{doctor.experience}</p>
                                </div>
                                <div>
                                    <p className="text-slate-500 mb-1">Ratings</p>
                                    <div className="flex items-center gap-1 font-semibold text-slate-700">
                                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                        {doctor.rating} ({doctor.reviews})
                                    </div>
                                </div>
                            </div>

                            <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white gap-2">
                                <Calendar className="h-4 w-4" />
                                Book Appointment
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>

        </div>
    )
}
