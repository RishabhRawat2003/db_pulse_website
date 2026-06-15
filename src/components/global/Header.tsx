"use client";

import {
    Activity
} from "lucide-react";


function Header() {
    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="container-custom py-4 flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                        <Activity className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-bold text-2xl tracking-tight text-dark">DbPulse</span>
                </div>
                <div className="flex items-center gap-4">
                    <a href="#download" className="hidden md:inline-flex items-center gap-1 text-gray-600 hover:text-primary transition">
                        Download
                    </a>
                    <a href="#features" className="hidden md:inline-flex text-gray-600 hover:text-primary transition">
                        Features
                    </a>
                    <a href="#how-it-works" className="hidden md:inline-flex text-gray-600 hover:text-primary transition">
                        How it works
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Header