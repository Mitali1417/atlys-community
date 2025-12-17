import type { ReactNode } from "react";
import { Modal } from "../ui/Modal";
import { Card } from "../ui/Card";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  icon?: ReactNode;
  title: string;
  description?: string;
};

export function NotImplementedModal({
  open,
  onClose,
  icon,
  title,
  description,
}: ModalProps) {
  if (!open) return null;

  return (
    <Modal open={open} onClose={onClose}>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={onClose}
        />

        <Card className="relative z-10 w-full max-w-sm p-6 animate-in fade-in zoom-in">
          <div className="flex flex-col items-center text-center gap-3">
            {icon && (
              <div className="flex items-center justify-center text-2xl text-primary bg-primary/10 w-10 h-10 rounded-full">
                {icon}
              </div>
            )}

            <h3 className="text-lg font-semibold">{title}</h3>

            {description && (
              <p className="text-sm text-muted-foreground">{description}</p>
            )}
          </div>
        </Card>
      </div>
    </Modal>
  );
}
