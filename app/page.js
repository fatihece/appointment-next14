import Link from "next/link";

export default function Home() {
  return (
    <main className="flex space-y-12 flex-col justify-between p-24 ">
      <h2 className="text-center text-2xl">HOS GELDINIZ</h2>
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
