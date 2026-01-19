"use client";
import { useState } from "react";
import Image from "next/image";

export default function EarnWithConfidence() {
    const [activeStep, setActiveStep] = useState(1); // Default to 2nd item (index 1) active

    const steps = [
        {
            title: "Property Assessment",
            description: "We take a friendly look at your property to ensure it meets the standards for supported housing.",
            icon: "/images/earn/assessment-icon.png",
            image: "/images/placeholder-property.png"
        },
        {
            title: "Agreement And Guaranteed Rent",
            description: "Maximize Your Property's with Premium Price",
            icon: "/images/earn/agreement-icon.png",
            image: "/images/placeholder-agreement.png"
        },
        {
            title: "Hassle-Free Management",
            description: "Build Wealth with Exclusive Opportunities",
            icon: "/images/earn/wealth-icon.png",
            image: "/images/placeholder-management.png"
        },
        {
            title: "Ongoing Support And Updates",
            description: "Rent Exclusive and luxury Properties",
            icon: "/images/earn/support-icon.png",
            image: "/images/placeholder-support.png"
        },
    ];

    return (
        <section className="w-full bg-white text-black py-24 px-[60px]">
            <div className="w-full max-w-[1400px] mx-auto">
                {/* Header */}
                <div className="flex flex-col lg:flex-row justify-between items-start mb-24 gap-12">
                    <h2
                        className="uppercase max-w-2xl"
                        style={{
                            fontFamily: "var(--font-instrument-sans)",
                            fontWeight: 400,
                            fontSize: "62px",
                            lineHeight: "100%",
                            letterSpacing: "-0.04em",
                            color: "#171717",
                        }}
                    >
                        EARN WITH
                        <br />
                        CONFIDENCE,
                        <br />
                        SUPPORT WITH CARE
                    </h2>
                    <div className="max-w-md">
                        <p
                            className="mb-4"
                            style={{
                                fontFamily: "var(--font-geist-sans)",
                                fontWeight: 300,
                                fontSize: "18px",
                                lineHeight: "140%",
                                color: "#171717",
                            }}
                        >
                            By partnering with us, your property offers more than a place to live.
                            It becomes a safe, steady home for someone working toward a brighter
                            future. We look after your property with the same care we give to our
                            residents, with guaranteed on-time rent.{" "}
                            <span className="text-[#F2792E] font-medium cursor-pointer">
                                Here how it works
                            </span>
                        </p>
                    </div>
                </div>

                {/* Steps List */}
                <div className="flex flex-col border-t border-gray-200">
                    {steps.map((step, index) => {
                        const isActive = activeStep === index;
                        return (
                            <div
                                key={index}
                                onClick={() => setActiveStep(index)}
                                className={`relative flex flex-col md:flex-row items-center justify-between py-12 border-b border-gray-200 transition-all cursor-pointer ${isActive
                                    ? "bg-[#F2792E] -mx-[60px] px-[60px] text-white my-8 z-10"
                                    : "text-[#888888] hover:bg-gray-50"
                                    }`}
                            >
                                {/* Left: Icon & Title */}
                                <div className="flex items-center gap-6 w-full md:w-1/3">
                                    <div
                                        className={`relative w-8 h-8 ${isActive ? "brightness-0 invert" : "brightness-0 opacity-60"
                                            }`}
                                    >
                                        <Image
                                            src={step.icon}
                                            alt={step.title}
                                            fill
                                            className="object-contain" // Preserves aspect ratio 
                                        />
                                    </div>
                                    <h3
                                        className={`${isActive ? "text-white" : "text-[#888888]"}`}
                                        style={{
                                            fontFamily: "var(--font-geist-sans)",
                                            fontWeight: 600,
                                            fontSize: "20px",
                                            lineHeight: "120%",
                                        }}
                                    >
                                        {step.title}
                                    </h3>
                                </div>

                                {/* Center/Right: Description */}
                                <div className="w-full md:w-1/3 text-right md:text-center mt-4 md:mt-0">
                                    <p
                                        className={`${isActive ? "text-white opacity-90" : "text-[#888888]"
                                            }`}
                                        style={{
                                            fontFamily: "var(--font-geist-sans)",
                                            fontWeight: 400,
                                            fontSize: "16px",
                                            lineHeight: "140%",
                                        }}
                                    >
                                        {step.description}
                                    </p>
                                </div>

                                {/* Right: Arrow for Highlight */}
                                <div className="w-full md:w-1/3 flex justify-end mt-4 md:mt-0">
                                    {isActive && (
                                        <div className="bg-white rounded-full p-3 text-[#F2792E]">
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M5 12H19M19 12L12 5M19 12L12 19"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                    )}
                                </div>

                                {/* Floating Image for Active Section */}
                                {isActive && (
                                    <div className="absolute right-[20%] -top-12 hidden lg:block rotate-6 shadow-xl w-[180px] h-[180px] bg-gray-300 rounded-xl border-4 border-white overflow-hidden">
                                        {/* Replace with step.image when real images are available */}
                                        <div className="w-full h-full bg-gray-400/50 flex items-center justify-center text-gray-500 text-xs text-center p-2">
                                            {step.title} Image
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
