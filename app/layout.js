import './globals.css';
import { outfit } from './fonts';

export const metadata = {
  title: 'Pupster - Pup Calorie Calculator',
  description:
    'Pup calorie calculator to track your furry friends daily nutrient intake',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
