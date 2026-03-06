import React from 'react'
import { Card, CardContent } from '../../components/ui/Card'
import { Button } from '../../components/ui/Button'
import { Input } from '../../components/ui/Input'
import { Mail, Phone, MapPin, Camera } from 'lucide-react'

export default function ProfilePage({ userRole = "Doctor" }) {
    return (
        <div className="p-6 lg:p-8 max-w-4xl mx-auto space-y-6">
            <h1 className="text-2xl font-bold text-slate-900 mb-6">My Profile</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Profile Card Sidebar */}
                <Card className="border-0 shadow-sm border-slate-100 col-span-1">
                    <CardContent className="p-6 text-center">
                        <div className="relative inline-block mb-4">
                            <div className="h-32 w-32 rounded-full bg-slate-100 flex items-center justify-center text-5xl font-bold text-slate-400 overflow-hidden shadow-inner border-4 border-white">
                                J
                            </div>
                            <button className="absolute bottom-0 right-0 h-10 w-10 bg-[#2563EB] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#1d4ed8] transition-colors border-2 border-white">
                                <Camera className="h-4 w-4" />
                            </button>
                        </div>
                        <h2 className="text-xl font-bold text-slate-900">Dr. John Doe</h2>
                        <p className="text-[#2563EB] font-medium">{userRole}</p>
                        <p className="text-sm text-slate-500 mt-1">Joined Oct 2024</p>
                    </CardContent>
                </Card>

                {/* Edit Details Form */}
                <Card className="border-0 shadow-sm border-slate-100 col-span-1 md:col-span-2">
                    <CardContent className="p-6 lg:p-8 space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">First Name</label>
                                <Input defaultValue="John" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">Last Name</label>
                                <Input defaultValue="Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">Email Address</label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4" />
                                    <Input defaultValue="john.doe@hospital.com" className="pl-10" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">Phone</label>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4" />
                                    <Input defaultValue="+1 (555) 123-4567" className="pl-10" />
                                </div>
                            </div>
                            <div className="space-y-2 sm:col-span-2">
                                <label className="text-sm font-semibold text-slate-700">Location/Address</label>
                                <div className="relative">
                                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4" />
                                    <Input defaultValue="123 Medical Center Blvd, Suite 400" className="pl-10" />
                                </div>
                            </div>
                        </div>

                        <div className="pt-6 border-t border-slate-100 flex justify-end gap-3">
                            <Button variant="outline" className="text-slate-500">Cancel</Button>
                            <Button className="bg-[#2563EB] hover:bg-[#1d4ed8]">Save Changes</Button>
                        </div>
                    </CardContent>
                </Card>
            </div>

        </div>
    )
}
