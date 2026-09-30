import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CookieConsentBanner } from '@/components/cookies/CookieConsentBanner';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head />
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased flex flex-col justify-between">
        <Header />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
        <CookieConsentBanner />
      </body>
    </html>
  );
}