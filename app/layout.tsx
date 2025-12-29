import { ReactNode } from 'react';

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
