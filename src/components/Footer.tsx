import { Zap, Twitter, Linkedin, Github, Youtube } from 'lucide-react';

const sections = [
  {
    title: 'Produto',
    links: ['Recursos', 'Preços', 'Integrações', 'Mudanças', 'Roadmap'],
  },
  {
    title: 'Empresa',
    links: ['Sobre nós', 'Blog', 'Carreiras', 'Imprensa', 'Contato'],
  },
  {
    title: 'Recursos',
    links: ['Documentação', 'Central de ajuda', 'Guia de automação', 'Webinars', 'API'],
  },
  {
    title: 'Legal',
    links: ['Privacidade', 'Termos de uso', 'LGPD', 'Segurança', 'Status'],
  },
];

function Footer() {
  return (
    <footer className="bg-slate-900 pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-accent-500">
                <Zap className="h-5 w-5 text-white" fill="white" />
              </div>
              <span className="text-xl font-extrabold text-white">Nexus</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              A plataforma all-in-one para equipes modernas gerenciarem projetos com inteligência.
            </p>
            <div className="mt-6 flex gap-3">
              {[Twitter, Linkedin, Github, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 bg-slate-800 text-slate-400 transition-all hover:border-slate-600 hover:bg-slate-700 hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {sections.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                {section.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-slate-400 transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-slate-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-slate-500">
              &copy; {new Date().getFullYear()} Nexus. Todos os direitos reservados.
            </p>
            <p className="text-sm text-slate-500">
              Feito com dedicação no Brasil.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
