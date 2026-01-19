"use client";
import Image from "next/image";

export default function TrustedPartnerships() {
    return (
        <section className="w-full bg-[#111111] text-white py-24 px-[60px]">
            <div className="w-full flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">
                {/* Text Content */}
                <div className="flex-1 flex flex-col items-start">
                    <div>
                        <h2
                            className="uppercase mb-8"
                            style={{
                                fontFamily: "var(--font-instrument-sans)",
                                fontWeight: 400,
                                fontSize: "62px",
                                lineHeight: "100%",
                                letterSpacing: "-0.04em",
                            }}
                        >
                            TRUSTED
                            <br />
                            EDUCATION
                            <br />
                            PARTNERSHIPS
                        </h2>

                        <p
                            className="max-w-xl"
                            style={{
                                fontFamily: "var(--font-geist-sans)",
                                fontWeight: 300,
                                fontSize: "18px",
                                lineHeight: "140%",
                                letterSpacing: "-0.02em",
                                color: "#CCCCCC"
                            }}
                        >
                            We work alongside Education Owl to support residents who wish to return to learning. Together, we help open doors to education with clear guidance, encouragement, and practical support from first conversation to enrolment.
                        </p>
                    </div>

                    <button
                        className="flex items-center gap-2 px-8 py-4 rounded-full transition-colors hover:bg-[#d66523] mt-[135px]"
                        style={{
                            backgroundColor: "#F2792E",
                            fontFamily: "var(--font-geist-sans)",
                            fontWeight: 500,
                            fontSize: "16px",
                        }}
                    >
                        Learn About Our Education Partners
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

                {/* Image Content */}
                <div className="flex-1 w-full relative">
                    <div className="relative w-full h-full min-h-[400px] rounded-[24px] overflow-hidden">
                        <Image
                            src="/images/education-partnerships.png"
                            alt="Education Partnerships"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
