const brands = [
  'Acme Corp', 'Globex', 'Stark Industries', 'Wayne Enterprises', 'Umbrella', 'Initech', 'Soylent', 'Hooli',
];

function LogoMarquee() {
  return (
    <section className="border-b border-slate-100 bg-white py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="mb-8 text-center text-sm font-semibold uppercase tracking-widest text-slate-400">
          Empresas que confiam na Nexus
        </p>
        <div className="marquee-container">
          <div className="flex w-max animate-marquee items-center gap-16">
            {[...brands, ...brands].map((brand, i) => (
              <span
                key={i}
                className="whitespace-nowrap text-2xl font-bold text-slate-300 transition-colors hover:text-slate-400"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default LogoMarquee;
