import { CustomizeHeader } from "./customize-header";

export const metadata = {
  title: "Customize",
};

export default function CustomizeLayout(props: { children: React.ReactNode }) {
  return (
    <div>
      <CustomizeHeader />
      {props.children}
    </div>
  );
}
