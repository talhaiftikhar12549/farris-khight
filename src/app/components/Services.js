export default function Services() {
    const services = [
        "24/7 Support",
        "Housing Management",
        "Personal Care",
        "Community Integration",
        "Life Skills"
    ];

    return (
        <section className="w-full bg-slate-50 py-20 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="md:w-1/3">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            WHAT WE <br /> <span className="text-primary">OFFER</span>
                        </h2>
                        <p className="text-gray-600">
                            Comprehensive support packages tailored to individual needs.
                        </p>
                    </div>

                    <div className="md:w-2/3 flex flex-wrap gap-6 justify-center md:justify-end">
                        {services.map((service, index) => (
                            <div key={index} className="flex flex-col items-center gap-2">
                                <div className="w-24 h-24 rounded-full bg-white border-4 border-primary flex items-center justify-center shadow-sm">
                                    {/* Placeholder Icon */}
                                    <div className="w-10 h-10 bg-primary/20 rounded-full"></div>
                                </div>
                                <span className="font-semibold text-sm text-center max-w-[100px]">{service}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
