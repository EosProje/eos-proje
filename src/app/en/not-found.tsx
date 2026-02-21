import { redirect } from "next/navigation";

export default function NotFoundEn() {
    redirect("/en");
    return null;
}
