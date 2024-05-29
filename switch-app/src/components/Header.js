import React from 'react';
import { useTheme } from '../contexts/ThemeProvider';
import { Sun, Moon } from 'lucide-react';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="flex items-center justify-between p-4 shadow-md bg-gray-800 text-white">
      <h1 className="text-lg font-bold">My App</h1>
      <button onClick={toggleTheme} className="p-2 rounded-full focus:outline-none">
        {theme === 'light' ? <Sun className="w-6 h-6 text-yellow-500" /> : <Moon className="w-6 h-6 text-gray-200" />}
      </button>
    </header>
  );
};

export default Header;
