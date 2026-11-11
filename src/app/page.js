import ThemeToggle from './components/ThemeToggle';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-10 transition-colors duration-300">
      <h1 className="text-5xl font-bold text-pink-metallic dark:text-rosegold mb-4 text-center">
        Natalie Mkara Owuor
      </h1>
      <h2 className="text-2xl font-medium text-black dark:text-white mb-8 tracking-wide text-center">
        Software Engineering Developer
      </h2>
      <ThemeToggle />
    </main>
  );
}