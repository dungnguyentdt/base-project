import { ROUTERS } from "@/constants/routers";
import { redirect } from "next/navigation";

export default function HomePage() {
  redirect(ROUTERS.DASHBOARD.INDEX);
}
