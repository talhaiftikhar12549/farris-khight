"use client";
import { useState } from "react";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "Who is eligible to apply?",
            answer:
                "Our homes support adults aged 18 and over who would benefit from a safe and steady place to live. We welcome individuals in life transitions, those building independence and asylum seekers who need a calm space to settle.",
        },
        {
            question: "How are costs covered?",
            answer:
                "Information about how costs are covered goes here. Typically, this involves housing benefit, local authority funding, or personal contribution depending on circumstances.",
        },
        {
            question: "How long can someone stay?",
            answer:
                "Residents can stay as long as they need to build their independence. We offer flexible tenancy agreements that support each individual's journey towards moving into their own permanent home.",
        },
        {
            question: "How do you ensure safety and quality?",
            answer:
                "We have strict safety protocols, regular inspections, and a dedicated team available 24/7. Our accommodation standards are maintained to the highest level to ensure a comfortable and secure environment.",
        },
        {
            question: "What are residents' rights and responsibilities?",
            answer:
                "Residents have the right to privacy, respect, and a safe home. Responsibilities include respecting others, keeping the property in good condition, and following the house rules designed to keep everyone safe.",
        },
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="w-full bg-[#111111] text-white py-24 px-[60px]">
            <div className="w-full max-w-[1400px] mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-start mb-24">
                    <h2
                        className="uppercase max-w-2xl"
                        style={{
                            fontFamily: "var(--font-instrument-sans)",
                            fontWeight: 400,
                            fontSize: "62px",
                            lineHeight: "100%",
                            letterSpacing: "-0.04em",
                        }}
                    >
                        FREQUENTLY ASKED
                        <br />
                        QUESTIONS
                    </h2>
                    <p
                        className="max-w-md mt-8 lg:mt-0"
                        style={{
                            fontFamily: "var(--font-geist-sans)",
                            fontWeight: 300,
                            fontSize: "18px",
                            lineHeight: "140%",
                            letterSpacing: "-0.02em",
                            color: "#CCCCCC",
                        }}
                    >
                        We know choosing the right place to live is an important decision, and
                        it’s natural to have questions along the way. These answers are here
                        to help you feel informed, comfortable and supported as you explore
                        your options.
                    </p>
                </div>

                <div className="w-full flex flex-col">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border-b border-[#333333] last:border-b-0"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center py-8 text-left focus:outline-none group"
                            >
                                <span
                                    style={{
                                        fontFamily: "var(--font-geist-sans)",
                                        fontWeight: 400,
                                        fontSize: "24px",
                                        lineHeight: "130%",
                                        color: "white",
                                    }}
                                >
                                    {faq.question}
                                </span>
                                <span className="text-2xl font-light">
                                    {openIndex === index ? "−" : "+"}
                                </span>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-40 opacity-100 mb-8" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <p
                                    className="max-w-3xl"
                                    style={{
                                        fontFamily: "var(--font-geist-sans)",
                                        fontWeight: 300,
                                        fontSize: "18px",
                                        lineHeight: "140%",
                                        color: "#CCCCCC",
                                    }}
                                >
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
