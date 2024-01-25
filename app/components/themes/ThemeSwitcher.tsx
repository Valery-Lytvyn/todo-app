"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { IoMdSunny as SunIcon } from "react-icons/io";
import { FaMoon as MoonIcon } from "react-icons/fa";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex h-6 w-6 items-center justify-center">
      {theme === "dark" ? (
        <MoonIcon onClick={() => setTheme("light")} className="text-sm" />
      ) : (
        <SunIcon onClick={() => setTheme("dark")} className="text-xl" />
      )}
    </div>
  );
};

export default ThemeSwitcher;
