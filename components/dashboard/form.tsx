import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

export function FormHeading({ children }: { children: React.ReactNode }) {
  return <h4 className="text-lg font-semibold">{children}</h4>;
}

export function FormDescription({ children }: { children: React.ReactNode }) {
  return <p className="mt-1 text-sm text-muted-foreground">{children}</p>;
}

export function FormContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "bg-glass border-glass relative space-y-4 rounded-lg border",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function FormContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("space-y-4 p-4", className)}>{children}</div>;
}

export function FormFooter({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-end gap-4 rounded-b-lg p-4">
      {children}
    </div>
  );
}

export function FormSwitch({
  children,
  title,
  description,
}: {
  children: React.ReactNode;
  title: string;
  description?: string;
}) {
  return (
    <div className="border-glass flex flex-col gap-4 rounded-lg border bg-input/50 p-4 backdrop-blur-lg md:flex-row md:items-center md:justify-between">
      <div className="space-y-1">
        <div className="text-sm font-semibold">{title}</div>
        {description && (
          <div className="text-xs text-muted-foreground">{description}</div>
        )}
      </div>
      {children}
    </div>
  );
}

export function FormActions({
  dirty,
  cancel,
  loading,
}: {
  dirty: boolean;
  cancel: () => void;
  loading: boolean;
}) {
  return (
    <div className="flex w-full items-center justify-end gap-4">
      {dirty && (
        <Button
          type="button"
          className="rounded-full"
          variant="secondary"
          onClick={cancel}
        >
          Cancel
        </Button>
      )}
      <Button
        loading={loading}
        disabled={!dirty}
        className="w-full max-w-[150px] rounded-full"
      >
        Save
      </Button>
    </div>
  );
}
