import Image from "next/image";

export default function OurMission() {
    return (
        <section className="relative w-full py-[90px] flex items-center justify-center text-white text-center px-6">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/our-mission-bg.png"
                    alt="Cozy living room interior"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50" /> {/* Overlay for readability */}
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl flex flex-col items-center gap-8">
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
                    Our Mission
                </h2>

                <p
                    style={{
                        fontFamily: 'var(--font-geist-sans)',
                        fontWeight: 300,
                        fontSize: '18px',
                        lineHeight: '100%', // User explicitly requested 100%
                        letterSpacing: '-0.02em',
                    }}
                >
                    Our mission is to provide a safe and supportive place where adults can regain stability and grow with confidence. We help residents
                    learn essential skills, build genuine connections and explore new opportunities in education and training. Everything we do is shaped
                    to encourage independence and open doors toward a stronger, more secure future.
                </p>
            </div>
        </section>
    );
}
