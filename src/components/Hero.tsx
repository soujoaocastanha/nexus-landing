import { ArrowRight, Play, Sparkles, CheckCircle2, Clock, Users, TrendingUp } from 'lucide-react';

function Hero() {
  return (
    <section className="gradient-mesh relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl animate-pulse-slow" />
      <div className="pointer-events-none absolute right-0 top-40 h-96 w-96 rounded-full bg-accent-500/15 blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium text-white/80 opacity-0-init animate-fade-in-up">
              <Sparkles className="h-4 w-4 text-accent-400" />
              Novo: IA integrada para automação de tarefas
            </div>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-white text-balance opacity-0-init animate-fade-in-up animate-delay-100 sm:text-5xl lg:text-6xl">
              Gerencie seus projetos com{' '}
              <span className="gradient-text">inteligência</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70 opacity-0-init animate-fade-in-up animate-delay-200">
              Nexus é a plataforma all-in-one que une gestão de tarefas, automação
              de fluxos e analytics em tempo real. Sua equipe entrega mais em menos tempo.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 opacity-0-init animate-fade-in-up animate-delay-300">
              <a
                href="#pricing"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 px-7 py-3.5 text-base font-semibold text-white shadow-xl shadow-brand-500/30 transition-all hover:shadow-2xl hover:shadow-brand-500/40 hover:-translate-y-0.5"
              >
                Começar gratuitamente
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#features"
                className="group inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10"
              >
                <Play className="h-5 w-5 text-accent-400" fill="currentColor" />
                Ver demonstração
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 opacity-0-init animate-fade-in-up animate-delay-400">
              <div className="flex items-center gap-2 text-sm text-white/60">
                <CheckCircle2 className="h-5 w-5 text-accent-400" />
                Sem cartão de crédito
              </div>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <CheckCircle2 className="h-5 w-5 text-accent-400" />
                Configuração em 2 minutos
              </div>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <CheckCircle2 className="h-5 w-5 text-accent-400" />
                Cancele quando quiser
              </div>
            </div>
          </div>

          <div className="relative opacity-0-init animate-scale-in animate-delay-300">
            <div className="animate-float">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-2 shadow-2xl backdrop-blur-md">
                <div className="rounded-xl bg-slate-900 overflow-hidden">
                  <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                    <div className="h-3 w-3 rounded-full bg-red-400/80" />
                    <div className="h-3 w-3 rounded-full bg-yellow-400/80" />
                    <div className="h-3 w-3 rounded-full bg-green-400/80" />
                    <span className="ml-3 text-xs font-medium text-white/40">nexus.app/dashboard</span>
                  </div>

                  <div className="p-5">
                    <div className="mb-5 flex items-center justify-between">
                      <div>
                        <p className="text-xs text-white/40">Bem-vindo de volta</p>
                        <p className="text-lg font-bold text-white">Dashboard</p>
                      </div>
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-500/20">
                        <TrendingUp className="h-4 w-4 text-brand-400" />
                      </div>
                    </div>

                    <div className="mb-5 grid grid-cols-3 gap-3">
                      {[
                        { icon: CheckCircle2, label: 'Concluídas', value: '127', color: 'text-accent-400', bg: 'bg-accent-500/15' },
                        { icon: Clock, label: 'Em andamento', value: '34', color: 'text-brand-400', bg: 'bg-brand-500/15' },
                        { icon: Users, label: 'Equipe', value: '12', color: 'text-purple-400', bg: 'bg-purple-500/15' },
                      ].map((stat) => (
                        <div key={stat.label} className="rounded-lg border border-white/10 bg-white/5 p-3">
                          <div className={`mb-2 flex h-7 w-7 items-center justify-center rounded-md ${stat.bg}`}>
                            <stat.icon className={`h-4 w-4 ${stat.color}`} />
                          </div>
                          <p className="text-xl font-bold text-white">{stat.value}</p>
                          <p className="text-[10px] text-white/40">{stat.label}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mb-5 rounded-lg border border-white/10 bg-white/5 p-4">
                      <div className="mb-3 flex items-center justify-between">
                        <p className="text-xs font-medium text-white/60">Progresso semanal</p>
                        <span className="rounded-full bg-accent-500/15 px-2 py-0.5 text-[10px] font-semibold text-accent-400">
                          +24%
                        </span>
                      </div>
                      <div className="flex items-end justify-between gap-2 h-24">
                        {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                          <div key={i} className="flex-1">
                            <div
                              className="w-full rounded-t bg-gradient-to-t from-brand-600 to-brand-400 transition-all"
                              style={{ height: `${h}%` }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      {[
                        { title: 'Revisar design do app', done: true },
                        { title: 'Atualizar documentação', done: false },
                        { title: 'Deploy da v2.0', done: false },
                      ].map((task) => (
                        <div
                          key={task.title}
                          className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-3 py-2.5"
                        >
                          <div
                            className={`flex h-5 w-5 items-center justify-center rounded-md border ${
                              task.done
                                ? 'border-accent-500 bg-accent-500'
                                : 'border-white/20'
                            }`}
                          >
                            {task.done && <CheckCircle2 className="h-3.5 w-3.5 text-white" />}
                          </div>
                          <span
                            className={`text-xs ${
                              task.done ? 'text-white/40 line-through' : 'text-white/80'
                            }`}
                          >
                            {task.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -right-4 -top-4 animate-float-delayed">
              <div className="glass rounded-xl px-4 py-3 shadow-xl">
                <p className="text-[10px] font-medium text-white/50">Produtividade</p>
                <p className="text-lg font-bold text-white">+47%</p>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 animate-float-delayed" style={{ animationDelay: '1s' }}>
              <div className="glass rounded-xl px-4 py-3 shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-500/20">
                    <CheckCircle2 className="h-4 w-4 text-accent-400" />
                  </div>
                  <div>
                    <p className="text-[10px] font-medium text-white/50">Tarefas</p>
                    <p className="text-sm font-bold text-white">161 concluídas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 100L60 88C120 77 240 53 360 48.7C480 44 600 59 720 64C840 69 960 64 1080 56C1200 48 1320 37 1380 32L1440 27V100H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}

export default Hero;
