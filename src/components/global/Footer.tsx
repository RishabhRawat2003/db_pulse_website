"use client";

import {
  Activity
} from "lucide-react";

function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 py-12">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2">
                        <Activity className="w-5 h-5 text-primary" />
                        <span className="font-bold text-dark">DbPulse</span>
                        <span className="text-gray-400 text-sm ml-2">© 2026</span>
                    </div>
                    <div className="flex gap-8 text-sm text-gray-500">
                        <a href="#" className="hover:text-primary">Privacy</a>
                        <a href="#" className="hover:text-primary">Terms</a>
                        <a href="#" className="hover:text-primary">GitHub</a>
                        <a href="#" className="hover:text-primary">Contact</a>
                    </div>
                </div>
                <div className="text-center text-xs text-gray-400 mt-8">
                    Track queries from MongoDB, PostgreSQL, MySQL — Desktop application + agent. Currently MongoDB fully implemented.
                </div>
            </div>
        </footer>
    )
}

export default Footer