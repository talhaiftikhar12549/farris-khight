"use client";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="w-full bg-[#111111] text-white py-[20px] px-[60px] border-t border-white/10">
            <div className="w-full flex flex-col items-center justify-center gap-8">
                {/* Logo */}
                <div className="relative w-[300px] h-[60px]"> {/* Adjust dimensions based on actual logo aspect ratio */}
                    <Image
                        src="/images/logo-white.png"
                        alt="Farris Knight Logo"
                        fill
                        className="object-contain"
                    />
                </div>

                {/* Copyright */}
                <p
                    className="text-center"
                    style={{
                        fontFamily: "var(--font-geist-sans)",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "100%",
                        color: "#888888", // Grey color for copyright text
                    }}
                >
                    Copyright © All rights reserved.
                </p>
            </div>
        </footer>
    );
}
