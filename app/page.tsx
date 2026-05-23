export default function Home() {
  const navItems = [
    { label: "Services", href: "#services" },
    { label: "Who we help", href: "#who-we-help" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">

      {/* Navbar */}
      <nav className="w-full border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-5 sm:px-6">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            <h1 className="text-2xl font-semibold tracking-[0.2em]">
              AARYX
            </h1>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm sm:justify-end">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="whitespace-nowrap hover:text-blue-600 transition"
                >
                  {item.label}
                </a>
              ))}

              <a
                href="#contact"
                className="bg-[#0F172A] text-white px-5 py-2 rounded-xl hover:opacity-90 transition"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 py-20 sm:px-6 sm:py-32">

        <div className="max-w-4xl">

          <p className="text-sm uppercase tracking-[0.3em] text-blue-600 mb-6">
            Technical Procurement & Supply Solutions
          </p>

          <h2 className="text-4xl font-semibold leading-tight mb-8 sm:text-6xl">
            Connecting Europe and Asia through reliable technical procurement.
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mb-10 sm:text-xl">
            We connect businesses with reliable technical products, suppliers
            and procurement solutions across Europe and Asia.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">

            <a
              href="#contact"
              className="bg-[#0F172A] text-center text-white px-7 py-4 rounded-2xl hover:opacity-90 transition"
            >
              Contact Us
            </a>

            <a
              href="#services"
              className="border border-gray-300 bg-white px-7 py-4 text-center rounded-2xl hover:bg-gray-50 transition"
            >
              Our Services
            </a>

          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-7xl mx-auto px-4 pb-24 sm:px-6 sm:pb-32">

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white border border-gray-200 rounded-3xl p-8">
            <h3 className="text-2xl font-semibold mb-4">
              Technical Procurement
            </h3>

            <p className="text-slate-600 leading-relaxed">
              Industrial sourcing and supplier management for technical products and components.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-3xl p-8">
            <h3 className="text-2xl font-semibold mb-4">
              Supply Chain Support
            </h3>

            <p className="text-slate-600 leading-relaxed">
              Reliable coordination between European and Asian business partners.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-3xl p-8">
            <h3 className="text-2xl font-semibold mb-4">
              Industrial Solutions
            </h3>

            <p className="text-slate-600 leading-relaxed">
              Tailored sourcing and procurement solutions for industrial and technical sectors.
            </p>
          </div>

        </div>
      </section>

      {/* Who we help */}
      <section id="who-we-help" className="max-w-7xl mx-auto px-4 pb-24 sm:px-6 sm:pb-32">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold mb-4 sm:text-4xl">
            Who we help
          </h2>

          <p className="text-slate-600 leading-relaxed">
            We support industrial buyers, technical teams and international companies that need reliable sourcing across Europe and Asia.
          </p>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="max-w-7xl mx-auto px-4 pb-24 sm:px-6 sm:pb-32">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold mb-4 sm:text-4xl">
            Process
          </h2>

          <p className="text-slate-600 leading-relaxed">
            We clarify requirements, identify qualified suppliers, coordinate communication and support the procurement flow from first inquiry to delivery.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-7xl mx-auto px-4 pb-24 sm:px-6 sm:pb-32">
        <div className="bg-white border border-gray-200 rounded-3xl p-8">
          <h2 className="text-3xl font-semibold mb-4 sm:text-4xl">
            Contact
          </h2>

          <p className="text-slate-600 leading-relaxed">
            Get in touch to discuss technical procurement, supplier coordination or supply chain support.
          </p>
        </div>
      </section>

    </main>
  );
}
