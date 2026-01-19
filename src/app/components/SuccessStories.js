"use client";
import { useState } from "react";

export default function SuccessStories() {
    const stories = [
        {
            text: "Lorem ipsum dolor sit amet consectetur. Venenatis facilisis sed id non. Ullamcorper eu viverra ut sit senectus varius. Etiam purus pellentesque eros amet aliquam pellentesque enim. Sed integer aliquam lorem tortor feugiat quis. Sem etiam in nulla risus eget gravida praesent. Tincidunt proin vitae tellus tristique morbi eu lorem ridiculus eros.",
            name: "Emma Leona",
            location: "United Kingdom"
        },
        {
            text: "Another testimonial text example. This demonstrates the carousel functionality. Ideally, this would be real feedback from someone who has benefited from the service.",
            name: "John Doe",
            location: "United States"
        },
        {
            text: "A third testimonial to round out the examples. The design ensures clear readability and a professional appearance.",
            name: "Jane Smith",
            location: "Canada"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextStory = () => {
        setCurrentIndex((prev) => (prev + 1) % stories.length);
    };

    const prevStory = () => {
        setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
    };

    const currentStory = stories[currentIndex];

    return (
        <section className="w-full bg-[#111111] text-white py-24 px-[60px]">
            <div className="w-full flex flex-col gap-12">
                <h2
                    className="uppercase"
                    style={{
                        fontFamily: 'var(--font-instrument-sans)',
                        fontWeight: 400,
                        fontSize: '62px',
                        lineHeight: '100%',
                        letterSpacing: '-0.04em',
                    }}
                >
                    Success Stories
                </h2>

                <div className="bg-[#333333] rounded-[20px] p-12 md:p-16 relative">
                    <p
                        className="mb-12 max-w-4xl"
                        style={{
                            fontFamily: 'var(--font-geist-sans)',
                            fontWeight: 300,
                            fontSize: '24px', // Looks slightly larger in design
                            lineHeight: '140%',
                            letterSpacing: '-0.02em',
                        }}
                    >
                        {currentStory.text}
                    </p>

                    <div className="flex justify-between items-end">
                        {/* User Info */}
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-white rounded-full"></div>
                            <div>
                                <div className="font-medium text-lg">{currentStory.name}</div>
                                <div className="text-white/60 text-sm">{currentStory.location}</div>
                            </div>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="flex gap-4">
                            <button
                                onClick={prevStory}
                                className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <button
                                onClick={nextStory}
                                className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-white/90 transition-colors"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
