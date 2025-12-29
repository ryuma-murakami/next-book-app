import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: {
    template: '%s | Next Book App',
    default: 'Next Book App',
  },
  description: 'これは書籍のサンプルサイトです',
  openGraph: {
    siteName: 'Next Book App',
    title: {
      template: '%s | Next Book App(OGP)',
      default: 'Next Book App(OGP)',
    },
    description: 'これは書籍のサンプルサイトです(OGP)',
    type: 'article',
    images: [
      {
        url: 'https://.../opg.png',
      },
    ],
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="ja">
      <body>
        <header>
          <h1>Next Book App</h1>
        </header>
        {children}
        <footer>copyright Next Book App 2025</footer>
      </body>
    </html>
  );
};

export default RootLayout;
