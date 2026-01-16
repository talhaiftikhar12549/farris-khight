import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative w-full h-screen bg-black text-white overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-bg.jpg" // Assuming this is the path, will verify
                    alt="Modern house at night"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Main Layout Container - Padding 80px 60px */}
            <div className="relative z-10 w-full h-full flex flex-col justify-between px-[60px] py-[80px]">

                {/* Container 1: Icon (Logo) and H1 */}
                <div className="flex flex-col flex-grow">
                    {/* Logo (Top Left) */}
                    <div className="relative h-12 w-48 mb-auto">
                        <Image
                            src="/images/logo.png"
                            alt="Farris Knight Logo"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>

                    {/* H1 (Vertically Centered in remaining space) */}
                    <div className="flex flex-col justify-center flex-grow">
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

                {/* Container 2: Line and P tag content */}
                <div className="w-full">
                    {/* Horizontal Divider Line */}
                    <div className="w-full h-[1px] bg-white/40 mb-6"></div>

                    {/* Subtext aligned to the right */}
                    <div className="flex justify-end w-full">
                        <p
                            className="text-white text-right max-w-sm"
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
            </div>

            {/* Note: Removed the thin outer border as the padding constraints likely define the visual bounds now, 
                 but if the user wants the border *inside* the padding, it would go here. 
                 Previous design had it. I will leave it out unless requested to avoid cluttering the specific padding request. 
             */}
        </section>
    );
}
