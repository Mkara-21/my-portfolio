import './globals.css';
import ThemeProvider from '../components/ThemeProvider';

export const metadata = {
  title: 'MK Agency | Portfolio',
  description: 'Digital portfolio and interactive web development',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-black dark:bg-black dark:text-white transition-colors duration-300 ease-in-out">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}