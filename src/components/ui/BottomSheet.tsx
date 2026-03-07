"use client";

import { ReactNode, useEffect, useState } from "react";
import { X } from "lucide-react";

type BottomSheetProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
};

const BottomSheet = ({ open, onClose, title, children }: BottomSheetProps) => {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let enterTimer: ReturnType<typeof setTimeout> | null = null;
    let exitTimer: ReturnType<typeof setTimeout> | null = null;

    if (open) {
      setMounted(true);
      document.body.style.overflow = "hidden";

      enterTimer = setTimeout(() => {
        setVisible(true);
      }, 20);
    } else {
      setVisible(false);
      document.body.style.overflow = "";

      exitTimer = setTimeout(() => {
        setMounted(false);
      }, 300);
    }

    return () => {
      if (enterTimer) clearTimeout(enterTimer);
      if (exitTimer) clearTimeout(exitTimer);
    };
  }, [open]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end">
      <button
        type="button"
        aria-label="Close overlay"
        onClick={onClose}
        className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        className={`relative w-full rounded-t-[28px] bg-white shadow-[0_-12px_40px_rgba(0,0,0,0.22)] transition-all duration-300 ease-out ${
          visible
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-100"
        }`}
      >
        <div className="mx-auto max-w-[640px]">
          {/* remove this if you don't want the handle */}
          <div className="flex justify-center pt-3 pb-1">
            <div className="h-1.5 w-12 rounded-full bg-neutral-300" />
          </div>

          <div className="flex items-center justify-between px-4 pb-3 pt-2">
            <h2 className="text-base font-semibold text-neutral-900">
              {title}
            </h2>

            <button
              type="button"
              onClick={onClose}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-neutral-700"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="max-h-[75vh] overflow-y-auto px-4 pb-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomSheet;