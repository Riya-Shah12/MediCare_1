import React from 'react'
import { Card, CardContent } from '../../components/ui/Card'
import { Badge } from '../../components/ui/Badge'
import { Button } from '../../components/ui/Button'
import { User, Activity, MoreHorizontal } from 'lucide-react'

export default function ManagePatients() {
    const patients = [
        { id: 'PT-1001', name: 'Alok Singh', age: 45, gender: 'Male', lastVisit: '10 Oct 2024', status: 'Active' },
        { id: 'PT-1002', name: 'Priya Sharma', age: 28, gender: 'Female', lastVisit: '05 Sep 2024', status: 'Inactive' },
        { id: 'PT-1003', name: 'Rahul Desai', age: 62, gender: 'Male', lastVisit: '12 Oct 2024', status: 'Active' },
    ]

    return (
        <div className="p-6 lg:p-8 max-w-7xl mx-auto space-y-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-slate-900">Manage Patients</h1>
            </div>

            <Card className="border-0 shadow-sm border-slate-100">
                <CardContent className="p-0">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm text-slate-600">
                            <thead className="bg-slate-50 text-slate-700 font-medium border-b border-slate-200">
                                <tr>
                                    <th className="px-6 py-4">Patient ID</th>
                                    <th className="px-6 py-4">Patient Details</th>
                                    <th className="px-6 py-4">Age/Gender</th>
                                    <th className="px-6 py-4">Status</th>
                                    <th className="px-6 py-4 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {patients.map(p => (
                                    <tr key={p.id} className="hover:bg-slate-50/50">
                                        <td className="px-6 py-4 font-mono text-xs font-semibold text-slate-500">{p.id}</td>
                                        <td className="px-6 py-4 flex items-center gap-3">
                                            <div className="h-10 w-10 bg-blue-100 text-[#2563EB] rounded-full flex items-center justify-center">
                                                <User className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-slate-900">{p.name}</p>
                                                <p className="text-xs text-slate-500">Last seen: {p.lastVisit}</p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">{p.age} y/o • {p.gender}</td>
                                        <td className="px-6 py-4">
                                            <Badge variant={p.status === 'Active' ? 'success' : 'neutral'}>
                                                {p.status}
                                            </Badge>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <Button variant="ghost" size="sm" className="text-slate-400 hover:text-slate-900">
                                                <MoreHorizontal className="h-5 w-5" />
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
