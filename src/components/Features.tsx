import { Zap, Shield, BarChart3, Workflow, Globe, Bell } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Automação inteligente',
    description: 'Crie fluxos automatizados que eliminam tarefas repetitivas. A IA aprende com sua equipe e sugere otimizações.',
    color: 'from-amber-400 to-orange-500',
    bg: 'bg-amber-50',
  },
  {
    icon: BarChart3,
    title: 'Analytics em tempo real',
    description: 'Dashboards interativos com métricas atualizadas em tempo real. Tome decisões baseadas em dados, não em achismos.',
    color: 'from-brand-400 to-brand-600',
    bg: 'bg-brand-50',
  },
  {
    icon: Shield,
    title: 'Segurança de ponta a ponta',
    description: 'Criptografia AES-256, conformidade com LGPD e auditoria completa. Seus dados protegidos no nível enterprise.',
    color: 'from-emerald-400 to-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    icon: Workflow,
    title: 'Fluxos visuais',
    description: 'Arraste e solte para criar pipelines visuais. Configure aprovações, dependências e gatilhos sem escrever código.',
    color: 'from-purple-400 to-purple-600',
    bg: 'bg-purple-50',
  },
  {
    icon: Globe,
    title: 'Colaboração global',
    description: 'Comentários em tempo real, menções e notificações inteligentes. Sua equipe conectada, não importa onde esteja.',
    color: 'from-cyan-400 to-blue-500',
    bg: 'bg-cyan-50',
  },
  {
    icon: Bell,
    title: 'Notificações inteligentes',
    description: 'Receba alertas contextuais no momento certo. Priorize pelo que importa e silencie o restante.',
    color: 'from-rose-400 to-pink-500',
    bg: 'bg-rose-50',
  },
];

function Features() {
  return (
    <section id="features" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Recursos
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 text-balance sm:text-4xl lg:text-5xl">
            Tudo que sua equipe precisa em um só lugar
          </h2>
          <p className="mt-6 text-lg text-slate-600">
            Da gestão de tarefas à análise de dados, Nexus reúne as ferramentas essenciais
            para acelerar a entrega do seu time.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-200 hover:shadow-xl hover:shadow-slate-200/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${feature.bg} transition-transform duration-300 group-hover:scale-110`}>
                <div className={`rounded-xl bg-gradient-to-br ${feature.color} p-2.5`}>
                  <feature.icon className="h-5 w-5 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {feature.description}
              </p>

              <div className="absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-br from-brand-50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
