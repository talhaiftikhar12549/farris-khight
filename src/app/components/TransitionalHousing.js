import Image from "next/image";
import Link from "next/link"; // Assuming we use Link for the button

export default function TransitionalHousing() {
    return (
        <section className="w-full bg-white text-black py-24 px-[60px]">
            <div className="w-full flex flex-col md:flex-row gap-12 lg:gap-20 items-stretch">

                {/* Left Image */}
                <div className="flex-1 relative w-full aspect-[4/3] md:aspect-auto md:h-[600px] rounded-[30px] overflow-hidden">
                    <Image
                        src="/images/transitional-housing.png"
                        alt="Modern living room interior"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Right Content */}
                <div className="flex-1 flex flex-col justify-between py-2">
                    <div className="flex flex-col gap-8">
                        <h2
                            className="uppercase"
                            style={{
                                fontFamily: 'var(--font-instrument-sans)',
                                fontWeight: 400,
                                fontSize: '62px',
                                lineHeight: '100%',
                                letterSpacing: '-0.04em',
                                color: '#171717'
                            }}
                        >
                            Transitional<br />
                            Housing
                        </h2>

                        <div className="flex flex-col gap-6 max-w-xl">
                            <h3
                                className="text-xl font-medium"
                                style={{
                                    fontFamily: 'var(--font-geist-sans)',
                                    fontWeight: 500, // SemiBold/Medium look
                                    fontSize: '24px', // Estimated
                                    letterSpacing: '-0.02em',
                                    color: '#171717'
                                }}
                            >
                                A Steady Step Toward Independent Living
                            </h3>

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
                                For those ready to live more independently, our transitional homes
                                offer a safe and well-managed place to settle while preparing for a
                                long-term home. It is a steady step forward, with space to build
                                confidence, routines, and independence.
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 md:mt-0">
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 text-white px-8 py-4 rounded-full font-medium transition-transform hover:scale-105"
                            style={{
                                fontFamily: 'var(--font-geist-sans)',
                                fontSize: '16px',
                                backgroundColor: '#F2792E'
                            }}
                        >
                            Learn More About Transitional Housing
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
}
