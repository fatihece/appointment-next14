import "./globals.css";

import { Inter as FontSans } from "next/font/google";
import { Toaster } from "react-hot-toast";

import { cn } from "@/lib/utils";
import { AppProvider } from "./context/AppContext";
import AppFooter from "@/components/AppFooter";
import AppHeader from "@/components/AppHeader";
import { siteMetadata } from "@/lib/siteMetadata";

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

// export const metadata = {
// 	title: "Randevu Al",
// 	description: "Randevu almanin kolay ve pratik yolu",
// };
export const metadata = {
	metadataBase: new URL(siteMetadata.siteUrl),
	title: {
		template: `%s | ${siteMetadata.title}`,
		default: siteMetadata.title,
	},
	description: siteMetadata.description,
	alternates: {
		canonical: siteMetadata.siteUrl,
	},
	openGraph: {
		title: siteMetadata.title,
		description: siteMetadata.description,
		url: siteMetadata.siteUrl,
		siteName: siteMetadata.title,
		images: [siteMetadata.socialBanner],
		locale: "tr_TR",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	twitter: {
		card: "summary_large_image",
		title: siteMetadata.title,
		images: [siteMetadata.socialBanner],
	},
};

export default function RootLayout({ children, params }) {
	return (
		<html>
			<body
				className={cn(
					"min-h-screen flex flex-col bg-white font-sans antialiased",
					fontSans.variable,
				)}>
				<Toaster
					position="bottom right"
					toastOptions={{
						duration: 3000,
						success: {
							style: {
								background: "#f0fdf4",
								color: "#065f46",
							},
						},
						error: {
							style: {
								background: "red",
							},
						},
					}}
				/>
				<AppProvider>
					<AppHeader />
					{children}
					<AppFooter />
				</AppProvider>
			</body>
		</html>
	);
}
