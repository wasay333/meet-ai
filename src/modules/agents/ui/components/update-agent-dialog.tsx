import { ResponsiveDialog } from "@/components/responsive-dialog";
import { AgentForm } from "./agents-form";
import { AgentGetOne } from "../../types";

interface UpdateAgentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initailValues: AgentGetOne;
}
export const UpdateAgentDialog = ({
  open,
  onOpenChange,
  initailValues,
}: UpdateAgentDialogProps) => {
  return (
    <ResponsiveDialog
      open={open}
      title="Edit Agent"
      description="Edit the agent details"
      onOpenChange={onOpenChange}
    >
      <AgentForm
        onSuccess={() => onOpenChange(false)}
        onCancel={() => onOpenChange(false)}
        initialValues={initailValues}
      />
    </ResponsiveDialog>
  );
};
