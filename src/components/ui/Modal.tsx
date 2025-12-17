import type { ReactNode } from "react";
import { cn } from "./utils";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
};

export function Modal({ open, onClose, children }: ModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-background/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        className={cn(
          "relative z-10 w-[420px] max-w-[90vw]",
          "rounded-(--radius) border border-border bg-card shadow-lg"
        )}
      >
        {children}
      </div>
    </div>
  );
}
