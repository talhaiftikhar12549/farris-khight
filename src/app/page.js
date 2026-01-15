import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white dark:bg-black">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold text-center w-full mb-10 text-gray-900 dark:text-white">
          Contact Us
        </h1>
      </div>

      <div className="w-full max-w-md">
        <ContactForm />
      </div>
    </main>
  );
}
