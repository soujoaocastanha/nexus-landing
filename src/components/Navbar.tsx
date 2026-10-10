import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const links = [
  { label: 'Recursos', href: '#features' },
  { label: 'Depoimentos', href: '#testimonials' },
  { label: 'Preços', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-light shadow-lg shadow-slate-200/50' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-accent-500 shadow-lg shadow-brand-500/30">
            <Zap className="h-5 w-5 text-white" fill="white" />
          </div>
          <span className={`text-xl font-extrabold tracking-tight ${scrolled ? 'text-slate-900' : 'text-white'}`}>
            Nexus
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                scrolled ? 'text-slate-600 hover:text-brand-600' : 'text-white/80 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="#"
            className={`text-sm font-semibold transition-colors ${
              scrolled ? 'text-slate-700 hover:text-brand-600' : 'text-white/90 hover:text-white'
            }`}
          >
            Entrar
          </a>
          <a
            href="#pricing"
            className="rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition-all hover:shadow-xl hover:shadow-brand-500/40 hover:-translate-y-0.5"
          >
            Começar grátis
          </a>
        </div>

        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? (
            <X className={`h-6 w-6 ${scrolled ? 'text-slate-900' : 'text-white'}`} />
          ) : (
            <Menu className={`h-6 w-6 ${scrolled ? 'text-slate-900' : 'text-white'}`} />
          )}
        </button>
      </nav>

      {menuOpen && (
        <div className="glass-light mx-4 mb-4 rounded-2xl p-6 shadow-xl md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-slate-700 hover:text-brand-600"
              >
                {link.label}
              </a>
            ))}
            <div className="my-2 h-px bg-slate-200" />
            <a href="#" className="text-sm font-semibold text-slate-700">
              Entrar
            </a>
            <a
              href="#pricing"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 px-5 py-2.5 text-center text-sm font-semibold text-white shadow-lg"
            >
              Começar grátis
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
