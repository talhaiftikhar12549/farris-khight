"use client";
import Image from "next/image";

export default function WhoWeWorkWith() {
    const partners = [
        { name: "Foster carers", image: "/images/whoweworkwith/foster-carers.png" },
        { name: "Local authorities", image: "/images/whoweworkwith/local-authorities.png" },
        { name: "Social workers", image: "/images/whoweworkwith/social-workers.png" },
        { name: "Care leaver services", image: "/images/whoweworkwith/care-leaver.png" },
    ];

    return (
        <section className="w-full bg-white text-black py-24 px-[60px]">
            <div className="w-full">
                {/* Top Section: Split Layout */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-12 mb-20">
                    {/* Left: Text Content */}
                    <div className="flex-1 flex flex-col justify-between">
                        <div>
                            <h2
                                className="uppercase mb-8"
                                style={{
                                    fontFamily: "var(--font-instrument-sans)",
                                    fontWeight: 400,
                                    fontSize: "62px",
                                    lineHeight: "100%",
                                    letterSpacing: "-0.04em",
                                    color: "#171717",
                                }}
                            >
                                WHO WE
                                <br />
                                WORK WITH
                            </h2>

                            <p
                                className="max-w-lg mb-12"
                                style={{
                                    fontFamily: "var(--font-geist-sans)",
                                    fontWeight: 300,
                                    fontSize: "18px",
                                    lineHeight: "140%",
                                    letterSpacing: "-0.02em",
                                    color: "#171717",
                                }}
                            >
                                We work alongside the people who have walked beside our residents
                                long before they arrive at our door. These relationships help us
                                create a gentle, familiar bridge into a home where each person
                                feels welcomed, understood and supported from the very first day.
                            </p>
                        </div>

                        <h4
                            className="mt-auto"
                            style={{
                                fontFamily: "var(--font-geist-sans)",
                                fontWeight: 600, // Slightly bolder for subhead
                                fontSize: "24px",
                                lineHeight: "130%",
                                color: "#F2792E", // Orange color
                            }}
                        >
                            Our collaborators include:
                        </h4>
                    </div>

                    {/* Right: Images Grid */}
                    <div className="flex-[1.5] w-full grid grid-cols-2 md:grid-cols-4 gap-4">
                        {partners.map((partner, index) => (
                            <div
                                key={index}
                                className="relative w-full aspect-[2/5] md:aspect-[3/8] rounded-[24px] overflow-hidden"
                            >
                                <Image
                                    src={partner.image}
                                    alt={partner.name}
                                    fill
                                    className="object-cover"
                                />
                                {/* Overlay Gradient & Label */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-center pb-6">
                                    <span
                                        className="text-white text-center px-2"
                                        style={{
                                            fontFamily: "var(--font-geist-sans)",
                                            fontWeight: 500,
                                            fontSize: "16px",
                                            lineHeight: "120%",
                                        }}
                                    >
                                        {partner.name}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Section: Full Width Text */}
                <div className="w-full border-t border-black/10 pt-12">
                    <p
                        className="w-full max-w-[1400px]"
                        style={{
                            fontFamily: "var(--font-geist-sans)",
                            fontWeight: 300,
                            fontSize: "18px",
                            lineHeight: "140%",
                            letterSpacing: "-0.02em",
                            color: "#171717",
                        }}
                    >
                        Together, we form a circle of care that moves with each resident. When someone joins Farris Knight, they are never starting again alone. They arrive with a team already cheering them on and a home ready to help them take their steps with confidence and calm.
                    </p>
                </div>
            </div>
        </section>
    );
}
