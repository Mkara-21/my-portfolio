import './globals.css';
import ThemeProvider from './components/ThemeProvider';
import Background3D from './components/Background3D';

export const metadata = {
  title: 'Natalie Mkara Owuor | Software Engineer',
  description: 'Software Engineering Developer Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-black dark:bg-black dark:text-white transition-colors duration-300 ease-in-out relative min-h-screen">
        <ThemeProvider>
          <Background3D />
          {/* This wrapper ensures your text and buttons sit safely above the 3D canvas */}
          <div className="relative z-10">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}