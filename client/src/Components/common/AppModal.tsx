import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { AppModalType } from "@/types/components.types";
import { type ReactNode } from "react";

const AppModal = ({
  children,
  triggerTitle,
  dialogTitle,
  triggerClass,
}: AppModalType) => {
  return (
    <Dialog>
      <DialogTrigger
        className={`cursor-pointer rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700 ${triggerClass}`}
      >
        {triggerTitle}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{dialogTitle}</DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default AppModal;
