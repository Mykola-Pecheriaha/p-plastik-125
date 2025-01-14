import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import ContactsBar from '../components/ContactsBar/ContactsBar';
import HeaderMenu from '../components/HeaderMenu/HeaderMenu';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import ConsultationButton from '../components/ConsultationButton/ConsultationButton';
import Footer from '../components/Footer/Footer';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'P-plastik-125',
  description: 'Професійні послуги з пластичної хірургії',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ContactsBar />
        <HeaderMenu />
        <Breadcrumb />
        <main>{children}</main>
        <ConsultationButton />
        <Footer />
      </body>
    </html>
  );
}
