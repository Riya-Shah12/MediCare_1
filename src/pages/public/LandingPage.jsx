import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../components/ui/Button'
import { Brain, Activity, Shield, Users, ArrowRight, Play, Star, CheckCircle2 } from 'lucide-react'

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col font-sans">

            {/* Header/Navbar */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50 transition-all">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#2563EB] to-[#14B8A6] rounded-xl flex items-center justify-center shadow-md">
                            <Activity className="text-white h-6 w-6" />
                        </div>
                        <span className="text-2xl font-black tracking-tight text-slate-900">Medicare<span className="text-[#2563EB]">.AI</span></span>
                    </div>

                    <nav className="hidden md:flex items-center gap-8 font-medium text-slate-600">
                        <a href="#features" className="hover:text-[#2563EB] transition-colors">Features</a>
                        <a href="#how-it-works" className="hover:text-[#2563EB] transition-colors">How it works</a>
                        <a href="#testimonials" className="hover:text-[#2563EB] transition-colors">Testimonials</a>
                    </nav>

                    <div className="flex items-center gap-4">
                        <Link to="/login" className="hidden md:block font-semibold text-slate-700 hover:text-[#2563EB] transition-colors">Log in</Link>
                        <Link to="/register">
                            <Button className="bg-[#2563EB] hover:bg-[#1d4ed8] shadow-md shadow-blue-500/20 px-6 rounded-full">Get Started</Button>
                        </Link>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 relative overflow-hidden">
                {/* Background glow effects */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-teal-400/10 rounded-full blur-[80px] pointer-events-none" />

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                    <div className="space-y-8 animate-in slide-in-from-bottom-8 duration-700">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#2563EB] text-sm font-semibold">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            New: Advanced AI Diagnosis Model
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[1.1]">
                            The Future of <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#14B8A6]">Smart Healthcare</span>
                        </h1>
                        <p className="text-lg lg:text-xl text-slate-600 max-w-lg leading-relaxed">
                            Get instant disease prediction using state-of-the-art AI, and seamlessly connect with certified doctors for verifiable prescriptions.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/register">
                                <Button className="h-14 px-8 text-lg font-semibold bg-[#2563EB] hover:bg-[#1d4ed8] shadow-xl shadow-blue-500/25 rounded-full w-full sm:w-auto overflow-hidden group">
                                    <span className="relative z-10 flex items-center gap-2">
                                        Check Symptoms Now <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </Button>
                            </Link>
                            <Button variant="outline" className="h-14 px-8 text-lg font-semibold rounded-full w-full sm:w-auto border-slate-200 hover:border-slate-300 hover:bg-slate-50 gap-2">
                                <Play className="h-5 w-5 fill-slate-700" /> Watch Demo
                            </Button>
                        </div>

                        <div className="pt-4 flex items-center gap-4 text-sm font-medium text-slate-500">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map(i => (
                                    <img key={i} className="w-10 h-10 rounded-full border-2 border-white" src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="avatar" />
                                ))}
                            </div>
                            <div>
                                <div className="flex text-yellow-400 mb-1">
                                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="h-4 w-4 fill-current" />)}
                                </div>
                                <span>Loved by 10,000+ patients</span>
                            </div>
                        </div>
                    </div>

                    {/* Visual Mockup Right side */}
                    <div className="relative mx-auto w-full max-w-lg lg:max-w-none animate-in fade-in zoom-in-95 duration-1000 delay-150">
                        <div className="relative rounded-2xl bg-white shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500">
                            <div className="h-12 bg-slate-50 border-b border-slate-100 flex items-center px-4 gap-2">
                                <div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-red-400" /><div className="w-3 h-3 rounded-full bg-amber-400" /><div className="w-3 h-3 rounded-full bg-green-400" /></div>
                            </div>
                            <div className="p-8 pb-0">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-blue-100 text-[#2563EB] rounded-xl"><Brain className="h-6 w-6" /></div>
                                    <div>
                                        <div className="h-4 w-32 bg-slate-200 rounded animate-pulse mb-2"></div>
                                        <div className="h-3 w-48 bg-slate-100 rounded animate-pulse"></div>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="h-24 w-full bg-slate-50 border border-slate-100 rounded-xl animate-pulse"></div>
                                    <div className="h-12 w-[60%] bg-[#2563EB]/10 rounded-xl mb-4 self-end ml-auto animate-pulse"></div>
                                </div>
                                <div className="mt-8 relative -bottom-2 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
                            </div>
                        </div>

                        {/* Floating elements */}
                        <div className="absolute -left-12 top-20 bg-white p-4 rounded-xl shadow-xl border border-slate-100 animate-bounce" style={{ animationDuration: '3s' }}>
                            <div className="flex gap-3 items-center">
                                <CheckCircle2 className="text-green-500 h-6 w-6" />
                                <div><p className="font-bold text-slate-800 text-sm">Diagnosis Ready</p><p className="text-xs text-slate-500">98% Accuracy</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section id="features" className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Everything you need for better health</h2>
                        <p className="text-lg text-slate-600">Our platform combines artificial intelligence with certified medical professionals to provide end-to-end care.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Brain, title: 'AI Analysis', desc: 'Describe symptoms naturally and get instant, accurate preliminary predictions.', color: 'text-purple-600', bg: 'bg-purple-100' },
                            { icon: Activity, title: 'Smart Dashboard', desc: 'Track your health history, predictions, and upcoming appointments easily.', color: 'text-[#2563EB]', bg: 'bg-blue-100' },
                            { icon: Users, title: 'Expert Doctors', desc: 'Connect with verified specialists to review AI findings and get treated.', color: 'text-[#14B8A6]', bg: 'bg-teal-100' },
                            { icon: Shield, title: 'Secure Records', desc: 'Your medical data is encrypted and completely private at all times.', color: 'text-amber-500', bg: 'bg-amber-100' }
                        ].map((feat, i) => (
                            <div key={i} className="bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-slate-100 group">
                                <div className={`w-14 h-14 rounded-xl ${feat.bg} ${feat.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <feat.icon className="h-7 w-7" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{feat.title}</h3>
                                <p className="text-slate-600">{feat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-900 py-12 px-6 text-slate-400 mt-auto">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 border-b border-slate-800 pb-8">
                    <div className="col-span-1 md:col-span-2 space-y-4">
                        <div className="flex items-center gap-2">
                            <Activity className="text-[#2563EB] h-6 w-6" />
                            <span className="text-2xl font-black text-white">Medicare<span className="text-[#2563EB]">.AI</span></span>
                        </div>
                        <p className="max-w-xs">Building the intelligent healthcare infrastructure of tomorrow.</p>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-4 text-lg">Platform</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white transition-colors">AI Checker</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">For Doctors</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-4 text-lg">Legal</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
                    <p>© 2024 Medicare AI. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}
