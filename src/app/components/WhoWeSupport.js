export default function WhoWeSupport() {
    const supports = [
        { title: "Mental Health", description: "Supporting individuals with mental health needs to live independently." },
        { title: "Learning Disabilities", description: "Tailored support for those with learning disabilities." },
        { title: "Autism", description: "Specialized care and environments for autistic individuals." },
    ];

    return (
        <section className="w-full bg-white text-black py-20 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <h2
                    className="text-3xl md:text-5xl font-bold mb-16 text-center md:text-left"
                    style={{ fontFamily: 'var(--font-instrument-sans)', textTransform: 'uppercase' }}
                >
                    WHO WE <span className="text-primary">SUPPORT</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {supports.map((item, index) => (
                        <div key={index} className="group flex flex-col gap-6 p-8 border border-gray-100 shadow-lg rounded-2xl hover:shadow-2xl transition-all duration-300 bg-white">
                            <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold shadow-md group-hover:scale-110 transition-transform">
                                {index + 1}
                            </div>
                            <h3
                                className="text-2xl font-bold"
                                style={{ fontFamily: 'var(--font-instrument-sans)' }}
                            >
                                {item.title}
                            </h3>
                            <p
                                className="text-gray-600 leading-relaxed"
                                style={{
                                    fontFamily: 'var(--font-geist-sans)',
                                    fontSize: '18px',
                                    lineHeight: '1.5'
                                }}
                            >
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
