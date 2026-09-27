import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope', display: 'swap' });

export const metadata: Metadata = {
  title: 'LOVINU | Länger gut leben.',
  description: 'Persönliche Gesundheitsmedizin: früh verstehen, gezielt handeln – für mehr Energie, Klarheit und Lebensfreude.',
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="de" className={manrope.variable}><body>{children}</body></html>;
}
