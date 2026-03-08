import '../styles/globals.css';
import { ThemeProvider } from '@/lib/ThemeContext';
import { ModalProvider } from '@/lib/ModalContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Modal from '@/components/ui/Modal';

export const metadata = {
  title: 'Alphatic Labs — The Operating System for Modern Clinics',
  description: 'Specialty-specific clinic management software for dental, OBGYN, cardiology, and more. Built for Indian healthcare.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <ModalProvider>
            <Navbar />
            <main style={{ paddingTop: 56 }}>{children}</main>
            <Footer />
            <Modal />
          </ModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
