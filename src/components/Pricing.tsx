import { useState } from 'react';
import { Check, Sparkles, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    description: 'Perfeito para indivíduos e pequenos projetos.',
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: [
      'Até 3 projetos',
      'Até 5 membros da equipe',
      'Tarefas ilimitadas',
      'Dashboard básico',
      'Suporte por e-mail',
    ],
    highlight: false,
    cta: 'Começar grátis',
  },
  {
    name: 'Pro',
    description: 'Para equipes em crescimento que precisam de mais.',
    monthlyPrice: 49,
    yearlyPrice: 39,
    features: [
      'Projetos ilimitados',
      'Até 25 membros da equipe',
      'Automação inteligente',
      'Analytics avançado',
      'Fluxos visuais',
      'Integrações premium',
      'Suporte prioritário',
    ],
    highlight: true,
    cta: 'Assinar Pro',
  },
  {
    name: 'Enterprise',
    description: 'Para grandes organizações com necessidades avançadas.',
    monthlyPrice: null,
    yearlyPrice: null,
    features: [
      'Membros ilimitados',
      'SSO e SAML',
      'Segurança enterprise',
      'API dedicada',
      'Gerente de conta dedicado',
      'SLA 99.99%',
      'Onboarding personalizado',
    ],
    highlight: false,
    cta: 'Falar com vendas',
  },
];

function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <section id="pricing" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Preços
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 text-balance sm:text-4xl lg:text-5xl">
            Planos que crescem com você
          </h2>
          <p className="mt-6 text-lg text-slate-600">
            Comece grátis e faça upgrade quando precisar. Sem custos escondidos.
          </p>

          <div className="mt-8 inline-flex items-center gap-4">
            <span className={`text-sm font-medium ${!yearly ? 'text-slate-900' : 'text-slate-400'}`}>
              Mensal
            </span>
            <button
              onClick={() => setYearly(!yearly)}
              className="relative h-7 w-12 rounded-full bg-slate-200 transition-colors"
              aria-label="Alternar cobrança"
            >
              <span
                className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow-md transition-all ${
                  yearly ? 'left-6' : 'left-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${yearly ? 'text-slate-900' : 'text-slate-400'}`}>
              Anual
            </span>
            <span className="rounded-full bg-accent-100 px-3 py-1 text-xs font-semibold text-accent-700">
              Economize 20%
            </span>
          </div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-1 ${
                plan.highlight
                  ? 'border-brand-200 bg-gradient-to-b from-brand-50 to-white shadow-xl shadow-brand-200/30 lg:scale-105'
                  : 'border-slate-200 bg-white shadow-sm hover:shadow-lg'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-brand-600 to-brand-500 px-4 py-1.5 text-xs font-semibold text-white shadow-lg">
                    <Sparkles className="h-3.5 w-3.5" />
                    Mais popular
                  </span>
                </div>
              )}

              <div>
                <h3 className="text-lg font-bold text-slate-900">{plan.name}</h3>
                <p className="mt-2 text-sm text-slate-500">{plan.description}</p>
              </div>

              <div className="mt-6">
                {plan.monthlyPrice !== null ? (
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-extrabold text-slate-900">
                      R$ {yearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="mb-1 text-sm text-slate-500">/mês</span>
                  </div>
                ) : (
                  <div>
                    <span className="text-4xl font-extrabold text-slate-900">Sob consulta</span>
                  </div>
                )}
                {yearly && plan.monthlyPrice !== null && plan.monthlyPrice > 0 && (
                  <p className="mt-1 text-xs text-slate-400">
                    Cobrado anualmente
                  </p>
                )}
              </div>

              <a
                href="#"
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all ${
                  plan.highlight
                    ? 'bg-gradient-to-r from-brand-600 to-brand-500 text-white shadow-lg shadow-brand-500/30 hover:shadow-xl hover:shadow-brand-500/40'
                    : 'border border-slate-200 bg-white text-slate-900 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                {plan.cta}
                <ArrowRight className="h-4 w-4" />
              </a>

              <div className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div
                      className={`flex h-5 w-5 items-center justify-center rounded-full ${
                        plan.highlight ? 'bg-brand-100' : 'bg-slate-100'
                      }`}
                    >
                      <Check
                        className={`h-3 w-3 ${plan.highlight ? 'text-brand-600' : 'text-slate-600'}`}
                      />
                    </div>
                    <span className="text-sm text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
