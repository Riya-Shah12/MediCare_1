import React, { useState, useRef, useEffect } from 'react'
import { Input } from '../../components/ui/Input'
import { Button } from '../../components/ui/Button'
import { Send, Paperclip, MoreVertical, Phone, Video } from 'lucide-react'

export default function ChatInterface() {
    const [message, setMessage] = useState('')

    // Use state instead of strict hardcode so we can push to it
    const [chatHistory, setChatHistory] = useState([
        { id: 1, sender: 'Doctor', time: '10:30 AM', text: "Hello John, I've reviewed your AI diagnosis. How are you feeling today?" },
        { id: 2, sender: 'You', time: '10:32 AM', text: "Hi Dr. Joshi. My fever seems to have gone down slightly, but the body ache is still quite bad." },
        { id: 3, sender: 'Doctor', time: '10:35 AM', text: "I understand. Did you start the Paracetamol as prescribed?" },
        { id: 4, sender: 'You', time: '10:36 AM', text: "Yes, I took the first dose an hour ago." },
    ])

    const chatEndRef = useRef(null)

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [chatHistory])

    const handleSend = (e) => {
        e.preventDefault()
        if (!message.trim()) return

        const newMsg = {
            id: Date.now(),
            sender: 'You',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            text: message.trim()
        }

        setChatHistory([...chatHistory, newMsg])
        setMessage('')

        // Simulate doctor reply
        setTimeout(() => {
            setChatHistory(prev => [...prev, {
                id: Date.now() + 1,
                sender: 'Doctor',
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                text: "I see. Please continue with the medication and rest. We can hop on a quick call if it gets worse."
            }])
        }, 2000)
    }

    return (
        <div className="h-[calc(100vh-4rem)] flex flex-col bg-slate-50 overflow-hidden relative">
            <div className="max-w-4xl mx-auto w-full h-full flex flex-col shadow-sm border-x border-slate-200 bg-white">

                {/* Chat Header */}
                <div className="h-16 border-b border-slate-100 flex items-center justify-between px-6 bg-white shrink-0">
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 bg-[#2563EB] rounded-full flex items-center justify-center text-white font-bold">
                            D
                        </div>
                        <div>
                            <h3 className="font-semibold text-slate-900 leading-tight">Dr. Aditya Joshi</h3>
                            <span className="text-xs text-green-500 font-medium">Online</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 text-slate-500">
                        <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors"><Phone className="h-5 w-5" /></button>
                        <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors"><Video className="h-5 w-5" /></button>
                        <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors"><MoreVertical className="h-5 w-5" /></button>
                    </div>
                </div>

                {/* Chat Messages */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    <div className="text-center">
                        <span className="bg-slate-100 text-slate-500 text-xs px-3 py-1 rounded-full">Today</span>
                    </div>

                    {chatHistory.map(msg => {
                        const isMe = msg.sender === 'You'
                        return (
                            <div key={msg.id} className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[75%] ${isMe ? 'order-1' : 'order-2'}`}>
                                    <div className={`p-4 rounded-2xl shadow-sm ${isMe
                                            ? 'bg-[#2563EB] text-white rounded-tr-sm'
                                            : 'bg-slate-100 text-slate-800 rounded-tl-sm'
                                        }`}>
                                        <p>{msg.text}</p>
                                    </div>
                                    <span className={`text-xs text-slate-400 mt-1 block ${isMe ? 'text-right' : 'text-left'}`}>
                                        {msg.time}
                                    </span>
                                </div>
                            </div>
                        )
                    })}
                    <div ref={chatEndRef} />
                </div>

                {/* Chat Input */}
                <div className="p-4 bg-white border-t border-slate-100 mt-auto shrink-0">
                    <form onSubmit={handleSend} className="flex items-center gap-2">
                        <button type="button" className="p-3 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors">
                            <Paperclip className="h-5 w-5" />
                        </button>
                        <Input
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Type a message..."
                            className="flex-1 bg-slate-50 border-transparent focus:bg-white rounded-full px-6 h-12"
                        />
                        <Button
                            type="submit"
                            disabled={!message.trim()}
                            className="h-12 w-12 rounded-full p-0 bg-[#2563EB] hover:bg-[#1d4ed8]"
                        >
                            <Send className="h-5 w-5" />
                        </Button>
                    </form>
                </div>

            </div>
        </div>
    )
}
