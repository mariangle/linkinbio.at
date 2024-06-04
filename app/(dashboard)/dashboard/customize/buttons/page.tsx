import { getCachedBiolink } from "@/server/actions/get-biolink";
import { ButtonsForm } from "./buttons-form";

export default async function Buttons() {
  const biolink = await getCachedBiolink();

  if (!biolink) return null;

  return <ButtonsForm data={biolink.config?.buttons} />;
}
