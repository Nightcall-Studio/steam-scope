"use client";

import Portal from "../common/Portal";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: Props) {
  if (!isOpen) return null;

  return (
    <Portal>
      <div
        className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center"
        onClick={onClose}
      >
        <div
          className="w-[290px] relative bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white text-xl hover:scale-110 transition cursor-pointer"
          >
            ✕
          </button>

          {children}
        </div>
      </div>
    </Portal>
  );
}
