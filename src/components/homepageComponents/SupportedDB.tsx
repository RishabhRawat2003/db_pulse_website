"use client";

import {
    Database,
    Server
} from "lucide-react";

function SupportedDB() {
    return (
        <section className="py-16 bg-white border-y border-gray-100">
            <div className="container-custom text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-3">Works with your stack</h2>
                <p className="text-gray-500 mb-10">Monitor databases from your Node.js backend — easy integration.</p>
                <div className="flex flex-wrap justify-center gap-10 items-center">
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center"><Database className="w-8 h-8 text-primary" /></div>
                        <span className="font-medium">MongoDB</span>
                        <span className="text-xs bg-green-100 text-primary px-2 py-0.5 rounded-full">Active</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 opacity-50">
                        <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center"><Server className="w-8 h-8 text-gray-400" /></div>
                        <span className="font-medium">PostgreSQL</span>
                        <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">Coming soon</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 opacity-50">
                        <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center"><Database className="w-8 h-8 text-gray-400" /></div>
                        <span className="font-medium">MySQL</span>
                        <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">Coming soon</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SupportedDB