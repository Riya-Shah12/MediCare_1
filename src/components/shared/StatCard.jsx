import React from 'react'

export function StatCard({ title, value, icon: Icon, iconColor, iconBg }) {
    return (
        <div className="bg-white rounded-xl p-6 flex flex-col justify-between shadow-sm border border-slate-100 card-shadow h-32">
            <div className="flex justify-between items-start">
                <p className="text-sm font-medium text-slate-600">{title}</p>
                <div className={`p-2 rounded-full ${iconBg}`}>
                    <Icon className={`w-5 h-5 ${iconColor}`} />
                </div>
            </div>
            <div className="flex items-baseline gap-2 mt-4">
                <h3 className="text-3xl font-bold text-slate-900">{value}</h3>
            </div>
        </div>
    )
}
