import type { ComponentProps, ReactNode } from "react";

export interface AppModalType {
  children: ReactNode;
  triggerTitle: string;
  dialogTitle: string;
  triggerClass?: string;
}

export interface AppInputProps extends ComponentProps<"input"> {
  label: string;
}
