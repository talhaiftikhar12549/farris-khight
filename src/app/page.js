import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhoWeSupport from "./components/WhoWeSupport";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* <Navbar /> Moved to Hero for strict layout requirements */}
      <Hero />
      <WhoWeSupport />
      <Services />
      <Testimonials />
      <ContactForm />

      <footer className="w-full bg-black py-8 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
      </footer>
    </main>
  );
}
