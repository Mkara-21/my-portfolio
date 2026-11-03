'use client';

import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensures the component only renders after the client has loaded to prevent hydration mismatches
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-3 rounded-full bg-pink-metallic dark:bg-maroon-dark text-white shadow-lg transition-transform hover:scale-110"
      aria-label="Toggle Dark Mode"
    >
      {theme === 'dark' ? (
        <Sun size={24} className="text-rosegold" />
      ) : (
        <Moon size={24} className="text-white" />
      )}
    </button>
  );
}