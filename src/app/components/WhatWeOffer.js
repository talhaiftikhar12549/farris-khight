import Image from "next/image";

export default function WhatWeOffer() {
    const offers = [
        {
            title: "Safe and quality accommodation",
            icon: "/images/icons/icon-shield.png", // Shield
            active: true
        },
        {
            title: "Daily guidance from trained support staff",
            icon: "/images/icons/icon-group.png", // Group
            active: false
        },
        {
            title: "Life-skills development like cooking, budgeting, and communication",
            icon: "/images/icons/icon-network.png", // Network (Placeholder for life skills if different)
            active: false
        },
        {
            title: "Counselling for education, training and employment",
            icon: "/images/icons/icon-teacher.png", // Teacher/Board
            active: false
        },
        {
            title: "Community integration and wellbeing support",
            icon: "/images/icons/icon-support.png", // Newly uploaded icon
            active: false
        }
    ];

    return (
        <section className="w-full bg-[#111111] text-white py-24 px-[60px]">
            <div className="w-full flex flex-col gap-20">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-12">
                    <h2
                        className="uppercase max-w-sm"
                        style={{
                            fontFamily: 'var(--font-instrument-sans)',
                            fontWeight: 400,
                            fontSize: '62px',
                            lineHeight: '100%',
                            letterSpacing: '-0.04em',
                        }}
                    >
                        What We<br />
                        Offer
                    </h2>

                    <div className="max-w-xl flex flex-col gap-8">
                        <div className="flex flex-col gap-6 text-gray-300">
                            <p
                                style={{
                                    fontFamily: 'var(--font-geist-sans)',
                                    fontWeight: 300,
                                    fontSize: '18px',
                                    lineHeight: '140%',
                                    letterSpacing: '-0.02em',
                                }}
                            >
                                At Farris Knight, we welcome adults who need a safe, steady place to regain stability and move forward
                                with confidence. Our homes support individuals aged 18 and over, including those navigating daily life
                                struggles, going through a post-traumatic phase, seeking a supportive environment to find their footing
                                again, and asylum seekers adjusting to life in a new country.
                            </p>
                        </div>
                        <p className="font-medium text-white text-lg">Our support includes:</p>
                    </div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {offers.map((offer, index) => (
                        <div
                            key={index}
                            className={`
                                relative flex flex-col items-center text-center p-8 rounded-[20px] aspect-[4/5] justify-center gap-6 transition-all duration-300 hover:scale-[1.02]
                                ${offer.active ? 'bg-[#FF6B00] text-white' : 'bg-[#1A1A1A] text-white'}
                            `}
                        >
                            {/* Icon Circle */}
                            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 shrink-0">
                                <div className="relative w-10 h-10">
                                    <Image
                                        src={offer.icon}
                                        alt={offer.title}
                                        fill
                                        className="object-contain"
                                        style={{
                                            // If active (Orange Card), make icon match the card color (Orange) if it's black.
                                            // If inactive (Grey Card), make icon match Black/Dark if it's black.
                                            // Assuming icons are black PNGs.
                                            // We usually want the icon inside the white circle to be colored or black.
                                            // Design reference: Orange Card -> Icon is Orange inside White Circle.
                                            // Grey Card -> Icon is Black? Or Grey?
                                            // I'll apply a filter if possible, or opacity.
                                            filter: offer.active
                                                ? 'invert(49%) sepia(82%) saturate(2250%) hue-rotate(1deg) brightness(101%) contrast(106%)' // Approximate Orange filter
                                                : 'none' // Default black
                                        }}
                                    />
                                </div>
                            </div>

                            <p
                                className="font-medium leading-tight"
                                style={{
                                    fontFamily: 'var(--font-geist-sans)',
                                    fontSize: '16px', // Slightly smaller for cards
                                }}
                            >
                                {offer.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
