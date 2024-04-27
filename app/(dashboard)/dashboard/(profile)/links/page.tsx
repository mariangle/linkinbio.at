import { UserLinks } from "./user-links";

async function getLinks() {
  const res = await fetch("https://api.example.com/links");
  const data = await res.json();
  return data;
}

export default function Links() {
  return (
    <div>
      <UserLinks />
    </div>
  );
}
