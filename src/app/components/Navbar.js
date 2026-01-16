import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="absolute top-0 left-0 w-full z-50 flex items-center justify-between pointer-events-none">
            {/* Pointer events none on container so it doesn't block hero interactions, enable on children */}
            <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-8 flex justify-between items-start pointer-events-auto">
                {/* Brand / Logo */}
                <Link href="/">
                    <div className="relative h-12 w-48"> {/* Slightly larger for visibility */}
                        <Image
                            src="/images/logo.png"
                            alt="Farris Knight Logo"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>
                </Link>
            </div>
        </nav>
    );
}
