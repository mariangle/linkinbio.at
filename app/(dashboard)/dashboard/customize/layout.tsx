import { CustomizeHeader } from "./customize-header";

export const metadata = {
  title: "Customize",
};

export default function CustomizeLayout(props: { children: React.ReactNode }) {
  return (
    <div className="space-y-4">
      <CustomizeHeader />
      {props.children}
    </div>
  );
}
