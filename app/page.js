import { getTennantData } from "@/lib/data-service";

import Link from "next/link";

export default async function Home() {
  const data = await getTennantData();
  const tennants = data?.output;

  return (
    <section className="flex-1">
      <div className="container">
        <h2 className="text-center text-2xl mt-16 mb-5 font-bold">
          Hoş Geldiniz
        </h2>
        <div className="container mx-auto flex gap-4 flex-wrap justify-center">
          {tennants?.map((t, index) => (
            <div
              className="flex items-center justify-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 w-[250px] transition-colors"
              key={index}
            >
              <Link
                href={t?.url_alias}
                className=" rounded-sm  border border-transparent px-5 py-4 transition-colors  cursor-pointer font-semibold text-lg text-center"
              >
                {t.application_alias}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
