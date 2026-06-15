import type { Metadata } from 'next';
import './globals.css';
import PageWrapper from './components/PageWrapper';

export const metadata: Metadata = {
  title: 'AETHER FITNESS — Forge Your Edge',
  description:
    'Premium gym in London. Expert coaching, elite programming, and a community that pushes you further.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <PageWrapper>{children}</PageWrapper>
      </body>
    </html>
  );
}
