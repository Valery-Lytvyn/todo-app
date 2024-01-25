import React from "react";

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="flex flex-col">
      <h2 className="text-xl font-extrabold md:text-3xl">{title}</h2>
      <div className="h-1 w-10 rounded-full bg-green-400" />
    </div>
  );
}

export default SectionTitle;
