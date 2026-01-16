export default function ContactForm() {
    return (
        <section id="contact" className="w-full bg-white text-black py-20 px-6 md:px-12 lg:px-24">
            <div className="max-w-4xl mx-auto bg-gray-50 p-8 md:p-12 rounded-3xl shadow-xl">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold mb-2">Get in <span className="text-primary">Touch</span></h2>
                    <p className="text-gray-500">We are here to help. Send us a message.</p>
                </div>

                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">Name</label>
                            <input type="text" name="name" id="name" required className="mt-2 block w-full rounded-lg border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 bg-white" placeholder="Your Name" />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900">Phone</label>
                            <input type="tel" name="phone" id="phone" required className="mt-2 block w-full rounded-lg border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 bg-white" placeholder="Your Phone" />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">Email</label>
                        <input type="email" name="email" id="email" required className="mt-2 block w-full rounded-lg border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 bg-white" placeholder="you@example.com" />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">Message</label>
                        <textarea id="message" name="message" rows={4} className="mt-2 block w-full rounded-lg border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 bg-white" placeholder="How can we help?" defaultValue={''} />
                    </div>

                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-full bg-primary px-8 py-4 text-sm font-bold leading-6 text-white shadow-lg hover:bg-orange-600 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                            SEND MESSAGE
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
