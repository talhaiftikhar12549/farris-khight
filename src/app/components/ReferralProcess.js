"use client";
import Image from "next/image";

export default function ReferralProcess() {
    const steps = [
        {
            title: "Send a Referral Form",
            description: "Share the person's details and any key information that will help us understand their needs.",
            icon: "/images/referral/form-icon.png",
            theme: "orange", // For conditional styling
        },
        {
            title: "We Review and Respond",
            description: "Our team looks over the referral with care and gets in touch promptly to discuss the next steps.",
            icon: "/images/referral/review-icon.png",
            theme: "dark",
        },
        {
            title: "Plan the Move-In Together",
            description: "If the placement feels right, we coordinate with you to ensure a smooth transition into their new home.",
            icon: "/images/referral/home-icon.png",
            theme: "dark",
        },
    ];

    return (
        <section className="w-full bg-[#111111] text-white py-24 px-[60px]">
            <div className="w-full flex flex-col lg:flex-row gap-20">
                {/* Left: Heading & Description */}
                <div className="flex-1 flex flex-col justify-between">
                    <div>
                        <h2
                            className="uppercase mb-12"
                            style={{
                                fontFamily: "var(--font-instrument-sans)",
                                fontWeight: 400,
                                fontSize: "62px",
                                lineHeight: "100%",
                                letterSpacing: "-0.04em",
                            }}
                        >
                            HELP SOMEONE
                            <br />
                            START THEIR
                            <br />
                            NEXT STEP
                        </h2>

                        <p
                            className="max-w-lg mb-12"
                            style={{
                                fontFamily: "var(--font-geist-sans)",
                                fontWeight: 300,
                                fontSize: "18px",
                                lineHeight: "140%",
                                letterSpacing: "-0.02em",
                                color: "#CCCCCC",
                            }}
                        >
                            You can refer someone to us through a simple, caring process that
                            puts their needs first. Share a few details, and we will take it
                            from there.
                        </p>
                    </div>

                    <button
                        className="w-fit flex items-center gap-2 px-8 py-4 rounded-full transition-colors hover:bg-[#d66523]"
                        style={{
                            backgroundColor: "#F2792E",
                            fontFamily: "var(--font-geist-sans)",
                            fontWeight: 500,
                            fontSize: "16px",
                        }}
                    >
                        Make a Referral
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5 12H19M19 12L12 5M19 12L12 19"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>

                {/* Right: Steps Cards */}
                <div className="flex-1 flex flex-col gap-6">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`p-8 rounded-[24px] flex items-start gap-6 transition-all`}
                            style={{
                                backgroundColor: step.theme === "orange" ? "#F2792E" : "#333333", // Dark grey for others
                            }}
                        >
                            {/* Icon Container */}
                            <div className="flex-shrink-0 w-12 h-12 relative">
                                <Image
                                    src={step.icon}
                                    alt={step.title}
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            {/* Text Content */}
                            <div>
                                <h3
                                    className="mb-2"
                                    style={{
                                        fontFamily: "var(--font-geist-sans)",
                                        fontWeight: 500, // Medium weight for card titles? Or Light 300? Image looks clean sans, maybe 400. Let's try 400. User typo usually says fonts.
                                        fontSize: "24px",
                                        lineHeight: "130%",
                                    }}
                                >
                                    {step.title}
                                </h3>
                                <p
                                    style={{
                                        fontFamily: "var(--font-geist-sans)",
                                        fontWeight: 300,
                                        fontSize: "16px",
                                        lineHeight: "140%",
                                        color: step.theme === "orange" ? "rgba(255,255,255,0.9)" : "#CCCCCC",
                                    }}
                                >
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
