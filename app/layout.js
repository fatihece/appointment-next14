import "./globals.css";

import { Inter as FontSans } from "next/font/google";
import { Toaster } from "react-hot-toast";

import { cn } from "@/lib/utils";
import { AppProvider } from "./context/AppContext";
import AppFooter from "@/components/AppFooter";
import AppHeader from "@/components/AppHeader";

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

export const metadata = {
	title: "Randevu Al",
	description: "Randevu almanin kolay ve pratik yolu",
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
