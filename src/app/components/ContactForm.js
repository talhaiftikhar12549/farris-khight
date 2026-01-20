"use client";

import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: ""
    });
    const [status, setStatus] = useState({ loading: false, success: false, error: null });
    const form = useRef();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, success: false, error: null });

        try {
            // Send Email via EmailJS
            await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                form.current,
                {
                    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
                }
            );

            setStatus({ loading: false, success: true, error: null });
            setFormData({ firstName: "", lastName: "", phone: "", email: "", message: "" });
        } catch (error) {
            console.error("Error submitting form: ", error);
            setStatus({ loading: false, success: false, error: "Failed to send message. Please try again." });
        }
    };

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
                    <form ref={form} className="flex flex-col gap-6" onSubmit={handleSubmit}>
                        {/* First Row */}
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex-1 flex flex-col gap-2">
                                <label className="font-semibold text-sm">First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
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
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
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
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
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
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
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
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your message here..."
                                    rows={6}
                                    className="w-full p-6 rounded-[24px] border border-gray-300 focus:outline-none focus:border-[#F2792E] resize-none"
                                    style={{
                                        fontFamily: "var(--font-geist-sans)",
                                        fontSize: "16px",
                                    }}
                                />
                                <span className="absolute bottom-4 right-6 text-xs text-gray-400">{formData.message.length}/300</span>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={status.loading}
                            className="w-full py-4 rounded-full text-white font-medium hover:bg-[#d66523] transition-colors mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                            style={{
                                backgroundColor: "#F2792E",
                                fontFamily: "var(--font-geist-sans)",
                                fontSize: "16px",
                            }}
                        >
                            {status.loading ? "Submitting..." : "Submit form"}
                        </button>
                        {status.success && <p className="text-green-600 mt-2 text-center">Message sent successfully!</p>}
                        {status.error && <p className="text-red-600 mt-2 text-center">{status.error}</p>}
                    </form>
                </div>
            </div>
        </section>
    );
}
