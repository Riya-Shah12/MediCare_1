import React from 'react'
import { Card, CardContent } from '../../components/ui/Card'
import { Badge } from '../../components/ui/Badge'
import { Terminal } from 'lucide-react'

export default function SystemLogs() {
    const logs = [
        { id: 1, time: '10:45:22 AM', level: 'INFO', message: 'User PT-1002 logged in successfully', source: 'AuthService' },
        { id: 2, time: '10:42:05 AM', level: 'WARN', message: 'High latency detected in AI prediction model', source: 'AIService' },
        { id: 3, time: '10:30:00 AM', level: 'ERROR', message: 'Failed to send verification email to doc_99', source: 'EmailService' },
        { id: 4, time: '10:15:12 AM', level: 'INFO', message: 'New symptom report generated for PT-1001', source: 'HealthCore' },
        { id: 5, time: '09:55:40 AM', level: 'INFO', message: 'Admin session started', source: 'AuthService' },
    ]

    const getLevelColor = (level) => {
        switch (level) {
            case 'INFO': return 'bg-blue-100 text-blue-700'
            case 'WARN': return 'bg-amber-100 text-amber-700'
            case 'ERROR': return 'bg-red-100 text-red-700'
            default: return 'bg-slate-100 text-slate-700'
        }
    }

    return (
        <div className="p-6 lg:p-8 max-w-7xl mx-auto space-y-6 flex flex-col h-[calc(100vh-6rem)]">
            <div className="flex justify-between items-center mb-2 shrink-0">
                <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                    <Terminal className="h-6 w-6 text-slate-400" /> System Logs
                </h1>
            </div>

            <Card className="border-0 shadow-sm border-slate-800 bg-slate-900 flex-1 overflow-hidden flex flex-col">
                <CardContent className="p-0 flex flex-col h-full font-mono text-xs sm:text-sm">
                    {/* Fake terminal header */}
                    <div className="bg-slate-950 px-4 py-3 flex gap-2 shrink-0">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>

                    <div className="p-6 overflow-y-auto flex-1 space-y-3">
                        {logs.map(log => (
                            <div key={log.id} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 border-b border-slate-800 pb-3 hover:bg-slate-800/50 p-2 rounded transition-colors text-slate-300">
                                <div className="flex items-center gap-3 w-48 shrink-0">
                                    <span className="text-slate-500">{log.time}</span>
                                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${getLevelColor(log.level)}`}>
                                        {log.level}
                                    </span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-purple-400 font-semibold">[{log.source}]</span>
                                    <span className="text-slate-200">{log.message}</span>
                                </div>
                            </div>
                        ))}
                        <div className="flex items-center gap-2 text-slate-500 animate-pulse pt-4">
                            <span>▶</span>
                            <span>Waiting for system events...</span>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
