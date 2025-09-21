"use client";

import Portal from "../common/Portal";

interface Props {
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal(props: Props) {
  const { onClose, children } = props;

  return (
    <Portal>
      <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
        <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-xl w-[90%] max-w-md">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white text-xl hover:scale-110 transition"
          >
            ✕
          </button>

          {children}
        </div>
      </div>
    </Portal>
  );
}
