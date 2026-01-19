"use client";
import { useState } from "react";
import Image from "next/image";

export default function AccommodationStandards() {
    const images = [
        "/images/accommodation/acc-1.png",
        "/images/accommodation/acc-2.png",
        "/images/accommodation/acc-3.png",
        "/images/accommodation/acc-4.png",
        "/images/accommodation/acc-5.png",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <section className="w-full bg-white text-black py-24 border-b border-gray-100 overflow-hidden">
            <div className="w-full px-[60px] mb-12">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
                    <h2
                        className="uppercase max-w-2xl"
                        style={{
                            fontFamily: 'var(--font-instrument-sans)',
                            fontWeight: 400,
                            fontSize: '62px',
                            lineHeight: '100%',
                            letterSpacing: '-0.04em',
                            color: '#171717'
                        }}
                    >
                        Accommodation Standards
                    </h2>

                    <div className="flex flex-col gap-8 max-w-xl text-right lg:text-left">
                        <p
                            style={{
                                fontFamily: 'var(--font-geist-sans)',
                                fontWeight: 300,
                                fontSize: '18px',
                                lineHeight: '140%',
                                letterSpacing: '-0.02em',
                                color: '#171717'
                            }}
                        >
                            We work alongside the people who have walked beside our residents long
                            before they arrive at our door. These relationships help us create a gentle, familiar
                            bridge into a home where each person feels welcomed, understood and
                            supported from the very first day.
                        </p>
                    </div>
                </div>
            </div>

            {/* Center Mode Carousel */}
            <div className="relative w-full h-[600px] flex items-center justify-center mt-10">
                {/* Navigation Buttons */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 md:left-12 z-40 w-12 h-12 rounded-full border border-black/10 hover:bg-black/5 flex items-center justify-center transition-colors bg-white/80 backdrop-blur-sm"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 md:right-12 z-40 w-12 h-12 rounded-full border border-black/10 hover:bg-black/5 flex items-center justify-center transition-colors bg-white/80 backdrop-blur-sm"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
                </button>

                {/* Slides Container */}
                <div className="relative w-full h-full flex items-center justify-center perspective-1000">
                    {images.map((src, index) => {
                        // Calculate position relative to center
                        let position = index - currentIndex;

                        const total = images.length;
                        // Adjust position to be within -total/2 to +total/2
                        // For 5 items: range is -2, -1, 0, 1, 2
                        if (position > total / 2) position -= total;
                        if (position < -total / 2) position += total;

                        const isActive = position === 0;

                        // Determine styles
                        // Base spacing unit
                        const spacing = 450;
                        let xOffset = position * spacing;
                        let scale = 1;
                        let opacity = 1;
                        let zIndex = 0;

                        if (isActive) {
                            xOffset = 0;
                            scale = 1.15; // Largest
                            zIndex = 30;
                        } else if (Math.abs(position) === 1) {
                            scale = 0.9;
                            zIndex = 20;
                            // Pull them slightly closer than linear spacing if desired, but linear looks good for "strip"
                            xOffset = position * 400;
                        } else if (Math.abs(position) === 2) {
                            scale = 0.9; // Keep same size as neighbors to form the "strip"
                            zIndex = 10;
                            xOffset = position * 400; // Consistent spacing
                        } else {
                            // Hidden
                            opacity = 0;
                        }

                        // Mobile adjustments
                        const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
                        if (isMobile) {
                            if (Math.abs(position) === 1) xOffset = position * 300;
                            if (Math.abs(position) === 2) xOffset = position * 300; // Overlap more on mobile
                        }

                        return (
                            <div
                                key={index}
                                className="absolute transition-all duration-500 ease-in-out shadow-xl overflow-hidden bg-gray-100"
                                style={{
                                    width: '350px', // Base width
                                    height: '500px', // Base height
                                    transform: `translateX(${xOffset}px) scale(${scale})`,
                                    opacity: opacity,
                                    zIndex: zIndex,
                                    visibility: Math.abs(position) > 2 ? 'hidden' : 'visible'
                                }}
                            >
                                <Image
                                    src={src}
                                    alt={`Slide ${index}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
