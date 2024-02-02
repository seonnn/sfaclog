import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Header from '../components/Header';
import 'sfac-design-kit/dist/style.css';
import { UserProvider } from './context/UserContext';

export const metadata: Metadata = {
  title: 'Create Turborepo',
  description: 'Generated by create turbo',
};

const pretendard = localFont({
  src: [
    {
      path: '../../public/fonts/PretendardVariable.woff2',
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang='en'>
      <body className={`${pretendard.className} bg-background-5`}>
        <Header />
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  );
}
