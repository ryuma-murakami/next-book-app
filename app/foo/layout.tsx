import type { Metadata } from 'next';
import Link from 'next/link';
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
        <Link href="/foo" prefetch={false}>
          foo
        </Link>
        /
        <Link href="/foo/bar" prefetch={false}>
          bar
        </Link>
      </nav>
      {children}
    </>
  );
};

export default Layout;
