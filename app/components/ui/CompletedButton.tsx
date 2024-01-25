import React from "react";

interface CompletedButtonProps {
  title: string;
  variant: string;
  handleClick: () => void;
}

function CompletedButton({
  title,
  variant,
  handleClick,
}: CompletedButtonProps) {
  return (
    <button
      className={`w-36 rounded-full px-3 py-1 font-bold tracking-wide transition-all hover:text-gray-200 sm:w-auto
    ${variant}`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
}

export default CompletedButton;
