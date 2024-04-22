export interface ContainerOptions {
  opacity: number;
  radius: number;
  blur: number;
  color: "#000000" | "#FFFFFF";
}

export function Container({
  children,
  options,
}: {
  children: React.ReactNode;
  options?: ContainerOptions;
}) {
  if (options) {
    return <div>{children}</div>;
  }
  return <div>container</div>;
}
