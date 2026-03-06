import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Card, CardContent } from '../../components/ui/Card'
import { Button } from '../../components/ui/Button'
import { Input } from '../../components/ui/Input'
import { Label } from '../../components/ui/Label'
import { FileText } from 'lucide-react'

export default function DoctorPatientDetail() {
    const { id } = useParams()
    const navigate = useNavigate()

    return (
        <div className="p-6 lg:p-8 max-w-7xl mx-auto space-y-6">

            {/* Top Banner mapping to screenshot */}
            <div className="bg-[#bfdbfe] rounded-xl p-6 shadow-sm border border-[#93c5fd]">
                <div className="flex justify-between items-start mb-4">
                    <h2 className="text-xl font-bold text-slate-800">
                        Patient Name: <span className="font-semibold text-slate-900">Rajesh Kumar</span>
                    </h2>
                    <span className="text-sm text-slate-600 font-medium">27 year Male</span>
                </div>
                <h3 className="text-lg font-bold text-slate-800">
                    AI Diagnosis: <span className="font-semibold text-slate-900">Viral Fever</span>
                </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Left Column - Prescription Form */}
                <div className="lg:col-span-2">
                    <Card className="shadow-sm border-slate-200">
                        <CardContent className="p-6 lg:p-8">
                            <h3 className="text-xl font-bold text-center mb-8">Doctor's Prescription</h3>

                            <form className="space-y-6 max-w-2xl mx-auto">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="disease" className="text-right font-semibold">Disease name:</Label>
                                    <Input id="disease" defaultValue="Viral Fever" className="col-span-3" />
                                </div>

                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="medicines" className="text-right font-semibold">Medicines:</Label>
                                    <Input
                                        id="medicines"
                                        placeholder="Medicines Names - How many times a day - Duration"
                                        className="col-span-3"
                                    />
                                </div>

                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="precautions" className="text-right font-semibold">Precautions:</Label>
                                    <Input
                                        id="precautions"
                                        placeholder="Take more Water intake"
                                        className="col-span-3"
                                    />
                                </div>

                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="notes" className="text-right font-semibold">Extra Notes:</Label>
                                    <Input
                                        id="notes"
                                        placeholder="Notes"
                                        className="col-span-3"
                                    />
                                </div>

                                <div className="grid grid-cols-4 mt-8">
                                    <div className="col-start-2 col-span-3">
                                        <Button
                                            type="button"
                                            onClick={() => {
                                                alert("Prescription Submitted!")
                                                navigate("/doctor/dashboard")
                                            }}
                                            className="bg-[#3b82f6] hover:bg-[#2563EB] text-white px-8 py-6 text-lg rounded-xl shadow-md gap-2"
                                        >
                                            <FileText className="h-5 w-5" />
                                            Submit
                                        </Button>
                                    </div>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>

                {/* Right Column - AI Data & History */}
                <div className="space-y-6">
                    <Card className="shadow-sm border-slate-200">
                        <CardContent className="p-6">
                            <div className="space-y-4">
                                <div>
                                    <span className="font-bold text-slate-800">AI Diagnosis:</span>{' '}
                                    <span className="text-slate-700">Viral Fever</span>
                                </div>

                                <div>
                                    <span className="font-bold text-slate-800 block">Symptoms Listed:</span>
                                    <ul className="pl-4 mt-1 text-slate-700 space-y-1">
                                        <li>high Fever</li>
                                        <li>Head Ace</li>
                                        <li>Body Ace</li>
                                    </ul>
                                </div>

                                <div>
                                    <span className="font-bold text-slate-800">Duration:</span>{' '}
                                    <span className="text-slate-700">2 days</span>
                                </div>

                                <div>
                                    <span className="font-bold text-slate-800 block">AI Prescription:</span>
                                    <ul className="list-disc pl-5 mt-2 space-y-1 text-slate-600">
                                        <li>Stay hydrated</li>
                                        <li>Rest for 3-4 days</li>
                                        <li>Paracetamol 500mg (3x daily)</li>
                                        <li>Monitor temperature</li>
                                    </ul>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="shadow-sm border-slate-200">
                        <CardContent className="p-6">
                            <h4 className="font-bold text-red-600 mb-4 text-lg border-b border-red-100 pb-2">
                                Special Notes / Medical History
                            </h4>
                            <div className="space-y-4 font-semibold text-slate-800">
                                <p>Allergies : NA</p>
                                <p>Surgeries: NA</p>
                                <p>Medications : NA</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>

            </div>
        </div>
    )
}
