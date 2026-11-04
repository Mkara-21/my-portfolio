import ThemeToggle from './components/ThemeToggle';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-10 bg-pink-light dark:bg-black transition-colors duration-300">
      <h1 className="text-5xl font-bold text-pink-metallic dark:text-rosegold mb-8">
        Welcome to MK Agency
      </h1>
      <ThemeToggle />
    </main>
  );
}