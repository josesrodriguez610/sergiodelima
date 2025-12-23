"use client";

import { IconType } from "react-icons";

type ListenButtonProps = {
  href: string;
  icon: IconType;
  label: string;
  available?: boolean;
  availableText?: string;
};

function ListenButton({
  href,
  icon: Icon,
  label,
  available = true,
  availableText = "Available Jan 16, 2026",
}: ListenButtonProps) {
  return (
    <div className="relative">
      <a
        href={available ? href : undefined}
        target={available ? "_blank" : undefined}
        rel={available ? "noopener noreferrer" : undefined}
        className={`flex items-center justify-center gap-3 rounded-lg py-3 border transition
          ${
            available
              ? "border-white/40 hover:border-white hover:bg-white/5 cursor-pointer"
              : "border-white/20 text-white/40 cursor-not-allowed"
          }
        `}
        onClick={(e) => {
          if (!available) e.preventDefault();
        }}
      >
        <Icon size={20} />
        {label}
      </a>

      {!available && (
        <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs text-white/40">
          {availableText}
        </span>
      )}
    </div>
  );
}

export default ListenButton;
