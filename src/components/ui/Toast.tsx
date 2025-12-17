import { useEffect } from "react";
import { cn } from "./utils";

type ToastProps = {
  message: string;
  onClose: () => void;
};

export function Toast({ message, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, 2500);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={cn(
        "fixed bottom-6 left-1/2 -translate-x-1/2 z-50",
        "rounded-(--radius) bg-card text-foreground",
        "border border-border px-4 py-2 text-sm shadow-md"
      )}
    >
      {message}
    </div>
  );
}
