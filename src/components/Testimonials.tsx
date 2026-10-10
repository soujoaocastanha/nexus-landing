import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Ana Martins',
    role: 'CEO, Lumen Studio',
    avatar: 'https://images.pexels.com/photos/7717254/pexels-photo-7717254.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
    quote: 'A Nexus transformou a forma como nossa equipe trabalha. Reduzimos o tempo de entrega em 40% e a comunicação nunca foi tão fluida.',
    rating: 5,
  },
  {
    name: 'Carlos Mendes',
    role: 'CTO, TechFlow',
    avatar: 'https://images.pexels.com/photos/5308640/pexels-photo-5308640.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
    quote: 'A automação inteligente é impressionante. Tarefas que levavam horas agora são feitas em minutos. Não imagino mais trabalhar sem a Nexus.',
    rating: 5,
  },
  {
    name: 'Juliana Reis',
    role: 'Product Manager, Nimbus',
    avatar: 'https://images.pexels.com/photos/34930167/pexels-photo-34930167.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
    quote: 'Os dashboards em tempo real mudaram nossa tomada de decisão. Finalmente temos visibilidade completa sobre todos os projetos.',
    rating: 5,
  },
  {
    name: 'Rafael Souza',
    role: 'Founder, ByteLab',
    avatar: 'https://images.pexels.com/photos/35681211/pexels-photo-35681211.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
    quote: 'Migrar para a Nexus foi a melhor decisão do ano. A interface é intuitiva e a equipe adotou a ferramenta em poucos dias.',
    rating: 5,
  },
  {
    name: 'Beatriz Lima',
    role: 'Head de Ops, Cresta',
    avatar: 'https://images.pexels.com/photos/14950779/pexels-photo-14950779.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
    quote: 'A segurança enterprise foi o que nos convenceu. Compliance, auditoria e controle de acesso em uma plataforma só.',
    rating: 5,
  },
  {
    name: 'Diego Alvarez',
    role: 'VP Engenharia, Codex',
    avatar: 'https://images.pexels.com/photos/35490803/pexels-photo-35490803.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
    quote: 'Os fluxos visuais economizaram semanas de trabalho manual. Configuramos todo o pipeline de aprovação em uma tarde.',
    rating: 5,
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="bg-slate-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Depoimentos
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 text-balance sm:text-4xl lg:text-5xl">
            Amado por equipes em todo o mundo
          </h2>
          <p className="mt-6 text-lg text-slate-600">
            Mais de 10.000 equipes confiam na Nexus para gerenciar seus projetos
            e entregar resultados excepcionais.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="group relative flex flex-col rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50"
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-slate-100 transition-colors group-hover:text-brand-100" />

              <div className="mb-4 flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-amber-400" fill="currentColor" />
                ))}
              </div>

              <p className="flex-1 text-sm leading-relaxed text-slate-700">
                "{t.quote}"
              </p>

              <div className="mt-6 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-slate-100"
                />
                <div>
                  <p className="text-sm font-bold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
