import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative w-full h-screen bg-black text-white overflow-hidden">

            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-bg.jpg"
                    alt="Modern house at night"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Main Layout Container - Padding 80px 60px */}
            <div className="relative z-10 w-full h-full flex flex-col justify-between px-[60px] pt-[20px] pb-[80px]">

                {/* Container 1: Icon (Logo) and H1 */}
                <div className="flex flex-col flex-grow">
                    {/* Logo (Top Left) */}
                    {/* Logo (Top Left) */}
                    <div className="relative h-12 w-48 mb-[118px]">
                        <Image
                            src="/images/logo.png"
                            alt="Farris Knight Logo"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>

                    {/* H1 (Fixed distance from logo) */}
                    <div className="flex flex-col">
                        <h1
                            className="text-white uppercase leading-[100%] tracking-[-0.04em]"
                            style={{
                                fontFamily: 'var(--font-instrument-sans)',
                                fontWeight: 400,
                                fontSize: '64px',
                            }}
                        >
                            Housing That<br />
                            Supports Your<br />
                            Next Step
                        </h1>
                    </div>
                </div>

                {/* Container 2: Flex Row with Line and Text */}
                <div className="w-full flex flex-row items-center gap-6">
                    {/* Horizontal Divider Line */}
                    <div className="flex-grow h-[1px] bg-white/40"></div>

                    {/* Subtext */}
                    <p
                        className="text-white text-left max-w-sm"
                        style={{
                            fontFamily: 'var(--font-geist-sans)',
                            fontWeight: 400,
                            fontSize: '18px',
                            lineHeight: '120%',
                            letterSpacing: '-0.02em',
                        }}
                    >
                        A welcoming place to live, grow, and access the guidance you need to move forward with confidence
                    </p>
                </div>
            </div>

        </section>
    );
}
