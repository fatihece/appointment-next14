import { getFooterData } from "@/lib/data-service";
import Link from "next/link";

async function AppFooter() {
	const data = await getFooterData();
	const { copyright, url, firm, all_rights } = data?.output || {};

	return (
		data && (
			<footer className="bg-neutral-50 border-t border-neutral-100 py-4 mt-auto">
				<div className="container">
					<div className="text-center">
						<p className="text-xs text-neutral-400">
							{copyright}{" "}
							<Link
								href={url}
								className="hover:underline hover:text-neutral-600"
								target="_blank">
								{firm}
							</Link>{" "}
							{all_rights}
						</p>
					</div>
				</div>
			</footer>
		)
	);
}

export default AppFooter;
