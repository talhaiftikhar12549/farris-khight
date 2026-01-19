import Link from "next/link";

export default function HowItWorks() {
    const steps = [
        {
            number: "01.",
            title: "Apply Online",
            description: "Share a little about yourself through a simple form. It helps us understand your needs to feel settled and supported."
        },
        {
            number: "02.",
            title: "Assessment and Eligibility",
            description: "You'll have a warm, relaxed conversation with us where we try to get to know you better and make sure your new home feels like a good fit."
        },
        {
            number: "03.",
            title: "Move-In and Settle",
            description: "When everything is ready, you can ease into your new space in your own time. Our team stays close with quiet, steady support for you to begin your next chapter."
        }
    ];

    return (
        <section className="w-full bg-white text-black py-24 px-[60px]">
            <div className="w-full flex flex-col gap-16">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-8">
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
                        How It Works
                    </h2>

                    <p
                        className="max-w-md text-right md:pt-4"
                        style={{
                            fontFamily: 'var(--font-geist-sans)',
                            fontWeight: 300,
                            fontSize: '18px',
                            lineHeight: '130%',
                            letterSpacing: '-0.02em',
                            color: '#171717'
                        }}
                    >
                        We guide each step gently, giving you a clear and comforting path into a safe place you can call home.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="bg-[#1A1A1A] text-white p-12 rounded-[20px] flex flex-col gap-8 min-h-[400px]"
                        >
                            {/* Number Pill */}
                            <div className="w-fit px-4 py-2 border border-white/30 rounded-full text-sm font-medium">
                                {step.number}
                            </div>

                            <div className="mt-auto flex flex-col gap-4">
                                <h3
                                    className="font-bold text-xl"
                                    style={{
                                        fontFamily: 'var(--font-instrument-sans)', // Assuming
                                        fontSize: '24px'
                                    }}
                                >
                                    {step.title}
                                </h3>
                                <p
                                    className="text-white/80"
                                    style={{
                                        fontFamily: 'var(--font-geist-sans)',
                                        fontWeight: 300,
                                        fontSize: '16px',
                                        lineHeight: '140%',
                                    }}
                                >
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Button */}
                <div className="flex justify-center mt-8">
                    <Link
                        href="/apply"
                        className="inline-flex items-center gap-2 text-white px-8 py-4 rounded-full font-medium transition-transform hover:scale-105"
                        style={{
                            fontFamily: 'var(--font-geist-sans)',
                            fontSize: '16px',
                            backgroundColor: '#F2792E'
                        }}
                    >
                        Start Your Application
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </div>

            </div>
        </section>
    );
}
