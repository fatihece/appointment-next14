"use client";
import Link from "next/link";

export default function Error({ error }) {
	return (
		<main className="flex justify-center items-center flex-col gap-6 my-14">
			<h1 className="text-3xl font-semibold">Bir şeyler ters gitti!</h1>

			<p className="text-lg">{error.message}</p>

			<Link
				href="/"
				className="text-white rounded font-semibold no-underline bg-primary px-6 py-3"
				title="Ana Sayfaya Git">
				Ana Sayfaya Git
			</Link>
		</main>
	);
}
