import './globals.css';
import { Outfit } from 'next/font/google';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata = {
  title: 'Pup Food Calculator',
  description:
    'Pup food calculator to track your furry friends daily calorie intake',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
