import React from "react";
import { IoClose } from "react-icons/io5";

interface CloseButtonProps {
  clickHandler: () => void;
}

function CloseButton({ clickHandler }: CloseButtonProps) {
  return (
    <button onClick={clickHandler}>
      <IoClose className="text-3xl font-extrabold" />
    </button>
  );
}

export default CloseButton;
