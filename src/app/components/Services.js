"use client";

export default function Services() {
    const services = [
        {
            title: "Steady Progress",
            description:
                "We help residents build skills and explore new opportunities so they can move toward independence with confidence and steady support.",
        },
        {
            title: "Education",
            description:
                "Residents can access courses and learning programs that match their interests and goals. We offer guidance on finding the right options and getting started.",
        },
        {
            title: "Skills Development",
            description:
                "We support everyday skills such as communication, organisation and self-management. These small steps help residents feel more prepared for their next stage.",
        },
        {
            title: "Employment Support",
            description:
                "When someone feels ready, we help with job applications and prepare for work. Our team offers constant support and practical guidance throughout the process.",
        },
    ];

    return (
        <section className="w-full bg-white text-black py-32 px-[60px]">
            <div className="w-full">
                <h2
                    className="text-center uppercase mb-24"
                    style={{
                        fontFamily: "var(--font-instrument-sans)",
                        fontWeight: 400,
                        fontSize: "62px",
                        lineHeight: "100%",
                        letterSpacing: "-0.04em",
                        color: "#171717",
                        // Matches the slight shadow/bold look in image if any, but clean text is standard
                        textShadow: "0px 1px 2px rgba(0,0,0,0.1)"
                    }}
                >
                    DISCOVER WHAT YOU’RE
                    <br />
                    READY FOR NEXT
                </h2>

                <div className="flex flex-col border-t border-black/10">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="flex flex-col md:flex-row justify-between items-start py-12 border-b border-black/10 transition-colors hover:bg-gray-50"
                        >
                            <h3
                                className="w-full md:w-1/3 mb-4 md:mb-0"
                                style={{
                                    fontFamily: "var(--font-geist-sans)",
                                    fontWeight: 600,
                                    fontSize: "24px",
                                    lineHeight: "130%",
                                    color: "#171717",
                                }}
                            >
                                {service.title}
                            </h3>
                            <p
                                className="w-full md:w-1/2"
                                style={{
                                    fontFamily: "var(--font-geist-sans)",
                                    fontWeight: 400,
                                    fontSize: "18px",
                                    lineHeight: "160%",
                                    color: "#171717",
                                }}
                            >
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
