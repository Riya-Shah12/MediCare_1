import React, { useState } from 'react'
import { Card, CardContent } from '../../components/ui/Card'
import { Button } from '../../components/ui/Button'
import { Badge } from '../../components/ui/Badge'
import { Check, X, User, FileText, AlertCircle, XCircle } from 'lucide-react'

export default function ManageDoctors() {
    const [doctors, setDoctors] = useState([
        { id: 1, name: 'Dr. Sarah Jenkins', specialty: 'Neurologist', email: 'sarah.j@example.com', status: 'pending', experience: '8 Years', licenseNo: 'MCI-89321', location: 'New York', documents: 'verified_md.pdf' },
        { id: 2, name: 'Dr. Michael Chen', specialty: 'Dermatologist', email: 'm.chen@example.com', status: 'pending', experience: '12 Years', licenseNo: 'MCI-10293', location: 'San Francisco', documents: 'mbbs_certificate.pdf' },
        { id: 3, name: 'Dr. Emily Brown', specialty: 'Pediatrician', email: 'emily.b@example.com', status: 'approved', experience: '5 Years', licenseNo: 'MCI-03816', location: 'Chicago', documents: 'md_pediatrics.pdf' },
    ])

    const [selectedDoc, setSelectedDoc] = useState(null)

    const handleStatusChange = (id, newStatus) => {
        setDoctors(doctors.map(doc => doc.id === id ? { ...doc, status: newStatus } : doc))
        setSelectedDoc(null)
    }

    return (
        <div className="p-6 lg:p-8 max-w-7xl mx-auto space-y-6 relative">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-slate-900">Manage Doctors</h1>
            </div>

            <Card className="border-0 shadow-sm border-slate-100">
                <CardContent className="p-0">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm text-slate-600">
                            <thead className="bg-slate-50 text-slate-700 font-medium border-b border-slate-200">
                                <tr>
                                    <th className="px-6 py-4">Doctor Info</th>
                                    <th className="px-6 py-4">Specialty</th>
                                    <th className="px-6 py-4">Status</th>
                                    <th className="px-6 py-4 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {doctors.map(doc => (
                                    <tr key={doc.id} className="hover:bg-slate-50/50">
                                        <td className="px-6 py-4 flex items-center gap-3">
                                            <div className="h-10 w-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500">
                                                <User className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-slate-900">{doc.name}</p>
                                                <p className="text-xs text-slate-500">{doc.email}</p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">{doc.specialty}</td>
                                        <td className="px-6 py-4">
                                            <Badge variant={doc.status === 'approved' ? 'success' : doc.status === 'rejected' ? 'danger' : 'warning'}>
                                                {doc.status.toUpperCase()}
                                            </Badge>
                                        </td>
                                        <td className="px-6 py-4 text-right space-x-2">
                                            {doc.status === 'pending' ? (
                                                <Button size="sm" onClick={() => setSelectedDoc(doc)} className="bg-blue-600 hover:bg-blue-700 text-white gap-1 px-3">
                                                    <FileText className="h-4 w-4" /> Review Details
                                                </Button>
                                            ) : (
                                                <span className="text-slate-400 text-xs italic">Reviewed</span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>

            {/* Review Modal */}
            {selectedDoc && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
                    <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl overflow-hidden animate-in zoom-in-95 duration-200">

                        <div className="flex justify-between items-center p-6 border-b border-slate-100 bg-slate-50">
                            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                                <AlertCircle className="h-5 w-5 text-blue-500" />
                                Review Doctor Application
                            </h3>
                            <button onClick={() => setSelectedDoc(null)} className="text-slate-400 hover:text-slate-600">
                                <XCircle className="h-6 w-6" />
                            </button>
                        </div>

                        <div className="p-6 space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="h-16 w-16 bg-[#2563EB] text-white rounded-full flex items-center justify-center text-2xl font-bold">
                                    {selectedDoc.name.charAt(4)}
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-slate-900">{selectedDoc.name}</h2>
                                    <p className="text-slate-500">{selectedDoc.specialty} • {selectedDoc.location}</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
                                <div>
                                    <p className="text-sm text-slate-500 mb-1">Email</p>
                                    <p className="font-semibold text-slate-900">{selectedDoc.email}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 mb-1">Experience</p>
                                    <p className="font-semibold text-slate-900">{selectedDoc.experience}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 mb-1">Medical License Number</p>
                                    <p className="font-semibold font-mono text-slate-900">{selectedDoc.licenseNo}</p>
                                </div>
                            </div>

                            <div>
                                <p className="text-sm font-bold text-slate-900 mb-2">Attached Certificates</p>
                                <div className="flex items-center justify-between p-3 border border-slate-200 rounded-lg hover:border-blue-300 transition-colors bg-white">
                                    <div className="flex items-center gap-3">
                                        <FileText className="h-8 w-8 text-red-400" />
                                        <div>
                                            <p className="font-medium text-slate-900">{selectedDoc.documents}</p>
                                            <p className="text-xs text-slate-500">2.4 MB • PDF</p>
                                        </div>
                                    </div>
                                    <Button variant="outline" size="sm">View PDF</Button>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-50 p-6 border-t border-slate-100 flex gap-3 justify-end">
                            <Button variant="danger" onClick={() => handleStatusChange(selectedDoc.id, 'rejected')} className="gap-2">
                                <X className="h-4 w-4" /> Reject Application
                            </Button>
                            <Button onClick={() => handleStatusChange(selectedDoc.id, 'approved')} className="bg-green-600 hover:bg-green-700 gap-2">
                                <Check className="h-4 w-4" /> Approve & Verify Doctor
                            </Button>
                        </div>

                    </div>
                </div>
            )}

        </div>
    )
}
