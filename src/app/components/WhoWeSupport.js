import Image from "next/image";

export default function WhoWeSupport() {
    return (
        <section className="w-full bg-white text-black py-20 px-[60px]">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">

                {/* Left Content */}
                <div className="flex-1 flex flex-col justify-start">
                    <h2
                        className="mb-12 uppercase"
                        style={{
                            fontFamily: 'var(--font-instrument-sans)',
                            fontWeight: 400, // Regular
                            fontSize: '62px',
                            lineHeight: '100%',
                            letterSpacing: '-0.04em', // -4%
                            fontStyle: 'normal',
                        }}
                    >
                        Who<br />
                        We Support
                    </h2>

                    <div className="flex flex-col gap-8 text-[#171717]">
                        <p
                            style={{
                                fontFamily: 'var(--font-geist-sans)',
                                fontWeight: 300, // Light
                                fontSize: '18px',
                                lineHeight: '130%',
                                letterSpacing: '-0.02em', // -2%
                                fontStyle: 'normal',
                            }}
                        >
                            At Farris Knight, we welcome adults who need a safe, steady place
                            to regain stability and move forward with confidence. Our homes
                            support individuals aged 18 and over, including those navigating
                            daily life struggles, going through a post-traumatic phase, seeking a
                            supportive environment to find their footing again, and asylum
                            seekers adjusting to life in a new country.
                        </p>

                        <p
                            style={{
                                fontFamily: 'var(--font-geist-sans)',
                                fontWeight: 300,
                                fontSize: '18px',
                                lineHeight: '130%', // Matching above for consistency
                                letterSpacing: '-0.02em',
                                fontStyle: 'normal',
                            }}
                        >
                            We provide calm, dignified spaces where residents can settle, feel
                            supported, and begin shaping their next steps. Whoever you are and
                            whatever your journey looks like, our aim is the same: to offer a
                            secure foundation where you can grow at your own pace.
                        </p>
                    </div>
                </div>

                {/* Right Image */}
                <div className="w-full relative min-h-[500px] rounded-[30px] overflow-hidden">
                    <Image
                        src="/images/who-we-support.jpg"
                        alt="Comfortable living room with plants and sunlight"
                        fill
                        className="object-cover w-full"
                    />
                </div>

            </div>
        </section>
    );
}
