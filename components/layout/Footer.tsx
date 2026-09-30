import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="w-full border-t border-slate-200 bg-white py-8 mt-16">
      <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <p>© {new Date().getFullYear()} SueldoCalco.es - Simulador Fiscal y Laboral.</p>
        <nav className="flex items-center gap-6">
          <Link href="/aviso-legal" className="hover:text-slate-900 transition-colors">
            Aviso Legal
          </Link>
          <Link href="/privacidad" className="hover:text-slate-900 transition-colors">
            Privacidad
          </Link>
          <Link href="/cookies" className="hover:text-slate-900 transition-colors">
            Cookies
          </Link>
        </nav>
      </div>
    </footer>
  );
};