import { ArrowRight, Zap } from 'lucide-react';

function CTA() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="gradient-mesh relative overflow-hidden rounded-3xl px-8 py-16 text-center lg:px-16 lg:py-24">
          <div className="pointer-events-none absolute -left-10 -top-10 h-64 w-64 rounded-full bg-brand-500/20 blur-3xl animate-pulse-slow" />
          <div className="pointer-events-none absolute -bottom-10 -right-10 h-64 w-64 rounded-full bg-accent-500/15 blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

          <div className="relative">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-accent-500 shadow-xl shadow-brand-500/30">
              <Zap className="h-8 w-8 text-white" fill="white" />
            </div>

            <h2 className="mx-auto mt-8 max-w-2xl text-3xl font-extrabold tracking-tight text-white text-balance sm:text-4xl lg:text-5xl">
              Pronto para transformar sua produtividade?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/70">
              Junte-se a mais de 10.000 equipes que já aceleraram suas entregas com a Nexus.
              Comece grátis hoje, sem cartão de crédito.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#"
                className="group inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-bold text-brand-700 shadow-xl transition-all hover:shadow-2xl hover:-translate-y-0.5"
              >
                Criar conta gratuita
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10"
              >
                Agendar uma demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
