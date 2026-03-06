import React, { useState, useRef, useEffect } from 'react'
import { Card, CardContent } from '../../components/ui/Card'
import { Button } from '../../components/ui/Button'
import { Input } from '../../components/ui/Input'
import { Loader2, Activity, Send, AlertCircle, CalendarClock, BrainCircuit } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function AiSymptomCheckerChat() {
    const [messages, setMessages] = useState([
        { id: 1, sender: 'AI', text: "Hello! I am your AI Health Assistant. To help me understand what's wrong, please describe how you're feeling today, including any specific symptoms like fever, cough, or pain." }
    ])
    const [input, setInput] = useState('')
    const [isTyping, setIsTyping] = useState(false)
    const [showResults, setShowResults] = useState(false)

    const chatEndRef = useRef(null)
    const navigate = useNavigate()

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages, isTyping])

    const handleSend = (e) => {
        e.preventDefault()
        if (!input.trim()) return

        const userMsg = input.trim()
        setMessages(prev => [...prev, { id: Date.now(), sender: 'You', text: userMsg }])
        setInput('')
        setIsTyping(true)

        // Simulate AI processing the symptoms
        setTimeout(() => {
            setIsTyping(false)
            if (messages.length < 3) {
                // Ask for more details
                setMessages(prev => [...prev, {
                    id: Date.now(),
                    sender: 'AI',
                    text: "I see. How long have you been experiencing these symptoms? And do you have any other issues like a headache or fatigue?"
                }])
            } else {
                // Final diagnosis
                setMessages(prev => [...prev, {
                    id: Date.now(),
                    sender: 'AI',
                    text: "Thank you for the information. I have analyzed your symptoms and generated a preliminary report. Please review the results below."
                }])
                setShowResults(true)
            }
        }, 1500)
    }

    const result = {
        disease: 'Viral Infection',
        confidence: 85,
        specialist: 'General Physician',
        precautions: [
            'Stay hydrated with plenty of fluids',
            'Get 8 hours of sleep',
            'Avoid sudden temperature changes'
        ]
    }

    return (
        <div className="h-[calc(100vh-4rem)] lg:h-[calc(100vh-5rem)] p-4 lg:p-6 max-w-5xl mx-auto flex flex-col lg:flex-row gap-6">

            {/* Chat Interface */}
            <Card className="flex-1 flex flex-col border-0 shadow-sm overflow-hidden h-full">
                <div className="bg-[#2563EB] p-4 text-white flex items-center gap-3">
                    <BrainCircuit className="h-6 w-6" />
                    <div>
                        <h3 className="font-bold">AI Health Assistant</h3>
                        <p className="text-xs text-blue-100">Analyzing your symptoms in real-time</p>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
                    {messages.map(msg => {
                        const isAI = msg.sender === 'AI'
                        return (
                            <div key={msg.id} className={`flex ${isAI ? 'justify-start' : 'justify-end'}`}>
                                <div className={`max-w-[80%] rounded-2xl p-4 shadow-sm text-sm ${isAI
                                        ? 'bg-white text-slate-800 border-l-4 border-[#2563EB] rounded-tl-sm'
                                        : 'bg-[#14B8A6] text-white rounded-tr-sm'
                                    }`}>
                                    <p className="whitespace-pre-wrap leading-relaxed">{msg.text}</p>
                                </div>
                            </div>
                        )
                    })}

                    {isTyping && (
                        <div className="flex justify-start">
                            <div className="bg-white rounded-2xl rounded-tl-sm p-4 shadow-sm border-l-4 border-[#2563EB]">
                                <div className="flex gap-1.5 items-center">
                                    <div className="w-2 h-2 rounded-full bg-slate-400 animate-bounce"></div>
                                    <div className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                    <div className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                                </div>
                            </div>
                        </div>
                    )}
                    <div ref={chatEndRef} />
                </div>

                <div className="p-4 bg-white border-t border-slate-100 shrink-0">
                    <form onSubmit={handleSend} className="flex gap-2">
                        <Input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            disabled={showResults || isTyping}
                            placeholder="Type your symptoms here..."
                            className="flex-1 bg-slate-50 focus:bg-white rounded-full h-12"
                        />
                        <Button
                            type="submit"
                            disabled={showResults || isTyping || !input.trim()}
                            className="h-12 w-12 rounded-full p-0 bg-[#2563EB] hover:bg-[#1d4ed8]"
                        >
                            <Send className="h-5 w-5" />
                        </Button>
                    </form>
                </div>
            </Card>

            {/* AI Analysis Results Panel */}
            {showResults && (
                <Card className="flex-1 lg:max-w-sm border-0 shadow-lg border-l-4 border-t-0 border-r-0 border-b-0 border-[#14B8A6] animate-in slide-in-from-right-8 duration-500 overflow-y-auto">
                    <CardContent className="p-6 space-y-6">
                        <div className="text-center pb-4 border-b border-slate-100">
                            <div className="inline-flex h-16 w-16 bg-[#E0F2FE] text-[#2563EB] rounded-full items-center justify-center mb-4">
                                <Activity className="h-8 w-8" />
                            </div>
                            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">AI Diagnosis</h3>
                            <h2 className="text-2xl font-black text-slate-900">{result.disease}</h2>
                            <div className="mt-2 inline-flex items-center gap-1 bg-green-100 text-green-700 font-bold px-2.5 py-1 rounded border border-green-200 text-xs">
                                {result.confidence}% Confidence Match
                            </div>
                        </div>

                        <div>
                            <h4 className="flex items-center gap-2 font-bold text-slate-800 mb-3 text-sm">
                                <AlertCircle className="text-amber-500 h-4 w-4" />
                                Precautions to take
                            </h4>
                            <ul className="space-y-2">
                                {result.precautions.map((item, idx) => (
                                    <li key={idx} className="flex flex-start gap-2 text-slate-600 text-sm">
                                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#14B8A6] shrink-0"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 text-center mt-6">
                            <div className="flex justify-center mb-3 text-[#2563EB]">
                                <CalendarClock className="h-8 w-8" />
                            </div>
                            <h4 className="font-bold text-slate-900 mb-1 text-sm">Consult a {result.specialist}</h4>
                            <p className="text-xs text-slate-500 mb-4">A doctor needs to verify this and provide a prescription.</p>

                            <Button
                                onClick={() => navigate('/patient/doctors')}
                                className="w-full bg-[#2563EB] hover:bg-[#1d4ed8]"
                            >
                                Find Doctors
                            </Button>
                        </div>

                        <Button
                            variant="outline"
                            onClick={() => {
                                setShowResults(false);
                                setMessages([{ id: 1, sender: 'AI', text: "Hello! Please describe your symptoms again." }]);
                            }}
                            className="w-full text-sm text-slate-500"
                        >
                            Start New Session
                        </Button>
                    </CardContent>
                </Card>
            )}

        </div>
    )
}
