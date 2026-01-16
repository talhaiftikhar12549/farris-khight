export default function Testimonials() {
    return (
        <section className="w-full bg-dark-surface text-white py-20 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-16 uppercase tracking-wider">
                    Success <span className="text-primary">Stories</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 text-left">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-gray-600 rounded-full"></div>
                                <div>
                                    <h4 className="font-bold">John Doe</h4>
                                    <span className="text-xs text-primary">Resident</span>
                                </div>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                "The support I received changed my life. I now live independently and feel clearer about my future goals."
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
