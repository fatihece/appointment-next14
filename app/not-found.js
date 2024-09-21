import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFound = () => {
	return (
		<div className="flex items-center justify-center ">
			<div className="px-4 py-4">
				<div className="lg:gap-4 lg:flex">
					<div className="flex flex-col items-center justify-center">
						<div className="mt-4">
							<Image
								src="/404.png"
								alt="Aradiginiz sayfaya erisilemedi"
								className="object-cover w-[600px] "
								width={700}
								height={600}
							/>
						</div>
						<p className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
							<span className="text-red-500">Hay aksi</span> Sayfa Bulunamadı
						</p>
						<p className="mb-8 text-center text-gray-500 md:text-lg">
							Aradığınız sayfa mevcut değil.
						</p>

						<Link
							href="/"
							className="text-white rounded font-semibold no-underline bg-primary px-8 py-4"
							title="Go Home Link">
							Ana Sayfaya Git
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
