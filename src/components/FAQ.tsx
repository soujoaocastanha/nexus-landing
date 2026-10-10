import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Posso testar a Nexus antes de pagar?',
    answer: 'Sim! O plano Starter é gratuito para sempre, sem necessidade de cartão de crédito. Você pode usar todos os recursos básicos sem prazo de expiração. Para testar os recursos Pro, oferecemos 14 dias de trial gratuito.',
  },
  {
    question: 'Como funciona a migração de outras ferramentas?',
    answer: 'Oferecemos importadores nativos para as principais ferramentas do mercado (Trello, Asana, Jira, Monday). A migração é automatizada e sua equipe mantém todo o histórico de projetos e tarefas.',
  },
  {
    question: 'Meus dados estão seguros na Nexus?',
    answer: 'Absolutamente. Usamos criptografia AES-256 em repouso e TLS 1.3 em trânsito. Somos conformes com LGPD e GDPR, com auditorias regulares e certificação SOC 2 Tipo II. Você mantém total propriedade dos seus dados.',
  },
  {
    question: 'Posso cancelar minha assinatura a qualquer momento?',
    answer: 'Sim. Não há fidelidade nem taxas de cancelamento. Você pode cancelar a qualquer momento diretamente no painel. Ao cancelar, sua conta reverte para o plano gratuito e seus dados são preservados.',
  },
  {
    question: 'A Nexus tem integração com outras ferramentas?',
    answer: 'Sim. Integramos nativamente com Slack, Google Workspace, GitHub, GitLab, Figma, Notion e mais de 50 outras ferramentas. No plano Enterprise, oferecemos uma API completa para integrações customizadas.',
  },
  {
    question: 'Como funciona o suporte ao cliente?',
    answer: 'O plano Starter inclui suporte por e-mail com resposta em até 48h. O plano Pro oferece suporte prioritário com resposta em até 4h durante o horário comercial. O Enterprise inclui um gerente de conta dedicado e SLA garantido.',
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-slate-50 py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            FAQ
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 text-balance sm:text-4xl lg:text-5xl">
            Perguntas frequentes
          </h2>
          <p className="mt-6 text-lg text-slate-600">
            Não encontrou o que procurava?{' '}
            <a href="#" className="font-semibold text-brand-600 hover:text-brand-700">
              Fale com nosso time
            </a>
            .
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="text-base font-semibold text-slate-900">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 flex-shrink-0 text-slate-400 transition-transform duration-300 ${
                    open === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  open === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 text-sm leading-relaxed text-slate-600">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
