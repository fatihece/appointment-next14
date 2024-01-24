import Link from "next/link";
import { useTranslations } from "next-intl";
import { Link as NavLink } from "../navigation";

export default function Home() {
  const t = useTranslations("Index");

  return (
    <main className="flex space-y-12 flex-col justify-between p-24 ">
      <div className="text-end">
        <NavLink
          href="/"
          locale="en"
          className=" text-slate-800 bg-slate-100  mr-2 text-center hover:underline"
        >
          🇺🇸 EN
        </NavLink>{" "}
        <NavLink
          href="/"
          locale="tr"
          className=" text-slate-800 bg-slate-100  text-center hover:underline"
        >
          🇹🇷 TR
        </NavLink>
      </div>

      <h2 className="text-center text-2xl">{t("welcome")}</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        <Link
          className="  bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100  py-5 px-6 "
          href="/kervansaray"
        >
          Kervansaray Spa
        </Link>
        <Link
          className="  bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100  py-5 px-6 "
          href="/kervan-hamam"
        >
          Kervan Hamam
        </Link>
      </div>
    </main>
  );
}
