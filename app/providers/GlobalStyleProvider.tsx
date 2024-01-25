"use client";
import React from "react";

interface GlobalStyleProviderProps {
  children: React.ReactNode;
}

function GlobalStyleProvider({ children }: GlobalStyleProviderProps) {
  return (
    <div className="top-0 h-full w-full gap-10 bg-light-bg p-2 text-light-text dark:bg-dark-bg dark:text-dark-text md:flex md:p-10">
      {children}
    </div>
  );
}

export default GlobalStyleProvider;
