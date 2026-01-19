"use client";

export default function ContactForm() {
    return (
        <section className="w-full bg-white text-black py-24 px-[60px]">
            <div className="w-full flex flex-col lg:flex-row gap-20">
                {/* Left: Heading & Description */}
                <div className="flex-1">
                    <h2
                        className="uppercase mb-12"
                        style={{
                            fontFamily: "var(--font-instrument-sans)",
                            fontWeight: 400,
                            fontSize: "62px",
                            lineHeight: "100%",
                            letterSpacing: "-0.04em",
                            color: "#171717",
                        }}
                    >
                        WE’RE ONLY A
                        <br />
                        MESSAGE AWAY
                    </h2>

                    <p
                        className="max-w-md"
                        style={{
                            fontFamily: "var(--font-geist-sans)",
                            fontWeight: 300,
                            fontSize: "18px",
                            lineHeight: "140%",
                            letterSpacing: "-0.02em",
                            color: "#171717",
                        }}
                    >
                        If you feel our homes offer the calm and care you are looking for, we
                        would love to hear from you. Reach out whenever it feels right and
                        our team will respond with kindness and support.
                    </p>
                </div>

                {/* Right: Form */}
                <div className="flex-1">
                    <form className="flex flex-col gap-6">
                        {/* First Row */}
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex-1 flex flex-col gap-2">
                                <label className="font-semibold text-sm">First Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your first name"
                                    className="w-full p-4 rounded-full border border-gray-300 focus:outline-none focus:border-[#F2792E]"
                                    style={{
                                        fontFamily: "var(--font-geist-sans)",
                                        fontSize: "16px",
                                    }}
                                />
                            </div>
                            <div className="flex-1 flex flex-col gap-2">
                                <label className="font-semibold text-sm">Last Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your last name"
                                    className="w-full p-4 rounded-full border border-gray-300 focus:outline-none focus:border-[#F2792E]"
                                    style={{
                                        fontFamily: "var(--font-geist-sans)",
                                        fontSize: "16px",
                                    }}
                                />
                            </div>
                        </div>

                        {/* Second Row */}
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex-1 flex flex-col gap-2">
                                <label className="font-semibold text-sm">Phone Number</label>
                                <input
                                    type="tel"
                                    placeholder="Enter your phone number"
                                    className="w-full p-4 rounded-full border border-gray-300 focus:outline-none focus:border-[#F2792E]"
                                    style={{
                                        fontFamily: "var(--font-geist-sans)",
                                        fontSize: "16px",
                                    }}
                                />
                            </div>
                            <div className="flex-1 flex flex-col gap-2">
                                <label className="font-semibold text-sm">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="w-full p-4 rounded-full border border-gray-300 focus:outline-none focus:border-[#F2792E]"
                                    style={{
                                        fontFamily: "var(--font-geist-sans)",
                                        fontSize: "16px",
                                    }}
                                />
                            </div>
                        </div>

                        {/* Message */}
                        <div className="flex flex-col gap-2">
                            <label className="font-semibold text-sm">Message</label> {/* Typo in design says "Massage", correcting to "Message" unless user asks otherwise. Design likely typo. */}
                            <div className="relative">
                                <textarea
                                    placeholder="Enter your message here..."
                                    rows={6}
                                    className="w-full p-6 rounded-[24px] border border-gray-300 focus:outline-none focus:border-[#F2792E] resize-none"
                                    style={{
                                        fontFamily: "var(--font-geist-sans)",
                                        fontSize: "16px",
                                    }}
                                />
                                <span className="absolute bottom-4 right-6 text-xs text-gray-400">0/300</span>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full py-4 rounded-full text-white font-medium hover:bg-[#d66523] transition-colors mt-4"
                            style={{
                                backgroundColor: "#F2792E",
                                fontFamily: "var(--font-geist-sans)",
                                fontSize: "16px",
                            }}
                        >
                            Submit form
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
