import { LinksHeader } from "./links-header";

export const metadata = {
  title: "Links",
};

export default function LinksLayout(props: { children: React.ReactNode }) {
  return (
    <div>
      <LinksHeader />
      {props.children}
    </div>
  );
}
