import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import 'photoswipe/dist/photoswipe.css';

export const metadata = {
  title: 'Perfect Rental',
  description: 'For rent in Nepal',
  keywords: 'Home, Apartment, Flat, Villa',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='bg-custom1 text-white'>
        <Header />
        <main className='container mx-auto text-black'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
