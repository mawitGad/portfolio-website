'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

export const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="p-2 w-9 h-9" />;
    }

    return (
        <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full hover:bg-background-secondary transition-colors duration-200 border border-border-primary"
            aria-label="Toggle Theme"
        >
            {theme === 'dark' ? (
                <FiSun className="w-5 h-5 text-accent-primary" />
            ) : (
                <FiMoon className="w-5 h-5 text-accent-primary" />
            )}
        </button>
    );
};
