import { cn } from "@/lib/utils";

export function FormHeading({ children }: { children: React.ReactNode }) {
  return <h4 className="text-lg font-semibold">{children}</h4>;
}

export function FormDescription({ children }: { children: React.ReactNode }) {
  return <p className="mt-1 text-sm text-muted-foreground">{children}</p>;
}

export function FormContainer({ children }: { children: React.ReactNode }) {
  return <div className="space-y-4 rounded-lg border">{children}</div>;
}

export function FormContent({ children }: { children: React.ReactNode }) {
  return <div className="space-y-4 p-4">{children}</div>;
}

export function FormFooter({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-end gap-4 border-t bg-secondary p-4">
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
    <div className="flex flex-col gap-4 rounded-lg border bg-secondary p-4 md:flex-row md:items-center md:justify-between">
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
