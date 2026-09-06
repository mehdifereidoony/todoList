import { Trash2Icon } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const AppAlert = ({
  alertDialogTitle,
  alertDialogCancel,
  alertDialogAction,
  open,
  changeOpen,
  handleDelete,
}: {
  alertDialogTitle: string;
  alertDialogCancel: string;
  alertDialogAction: string;
  open: boolean;
  changeOpen: (open: boolean) => void;
  handleDelete: () => void;
}) => {
  return (
    <AlertDialog open={open} onOpenChange={(open) => changeOpen(open)}>
      <AlertDialogContent size="sm">
        <AlertDialogHeader>
          <AlertDialogMedia className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
            <Trash2Icon />
          </AlertDialogMedia>
          <AlertDialogTitle className="font-bYekan">
            {alertDialogTitle}
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel variant="outline">
            {alertDialogCancel}
          </AlertDialogCancel>
          <AlertDialogAction
            variant="destructive"
            onClick={() => handleDelete()}
          >
            {alertDialogAction}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AppAlert;
