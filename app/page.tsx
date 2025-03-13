import { notFound } from "next/navigation";
import { getToggle } from "../actions";

/** Add your relevant code here for the issue to reproduce */
export default async function Home() {
  const toggle = await getToggle()
  console.log ("rendering home, toggle is", toggle)

  if (!toggle) return notFound()
  
  return "Home";
}
