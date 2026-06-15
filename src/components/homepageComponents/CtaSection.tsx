"use client";

import {
  ChevronRight
} from "lucide-react";

function CtaSection() {
    return (
        <section className="py-16 border-t border-gray-100">
            <div className="container-custom text-center">
                <div className="bg-primary/5 rounded-3xl p-10 md:p-14 border border-primary/10">
                    <h3 className="text-2xl md:text-3xl font-bold mb-3">Ready to eliminate database blind spots?</h3>
                    <p className="text-gray-500 max-w-xl mx-auto mb-8">Join developers who monitor query performance with zero friction.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button className="bg-primary text-white px-7 py-3 rounded-full font-medium shadow-md hover:shadow-lg flex items-center gap-2">Get started for free <ChevronRight className="w-4 h-4" /></button>
                        <button className="border border-primary text-primary px-7 py-3 rounded-full font-medium hover:bg-primary/5">Contact sales</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CtaSection