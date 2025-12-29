import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Fooページ',
  openGraph: {
    title: 'Fooページ',
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: RootLayoutProps) => {
  return (
    <>
      <nav>
        <a href="/foo">foo</a>/<a href="/foo/bar">bar</a>
      </nav>
      {children}
    </>
  );
};

export default Layout;
