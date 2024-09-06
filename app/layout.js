import { Open_Sans } from "next/font/google";

import "./globals.css";
import { Toaster } from "react-hot-toast";
import { AppProvider } from "./context/AppContext";

const open = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Randevu Al",
  description: "Randevu almanin kolay ve pratik yolu",
};

export default function RootLayout({ children, params }) {
  return (
    <html>
      <body className="max-w-screen-md mx-auto">
        <Toaster position="bottom right" toastOptions={{ duration: 3000 }} />
        <AppProvider> {children}</AppProvider>
      </body>
    </html>
  );
}
