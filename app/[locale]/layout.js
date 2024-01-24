import { Open_Sans } from "next/font/google";
import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
import "../globals.css";
import { Toaster } from "react-hot-toast";
import { AppProvider } from "../context/AppContext";
import { NextIntlClientProvider, useMessages } from "next-intl";

const open = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Randevu Al",
  description: "Randevu almanin kolay ve pratik yolu",
};

export default function RootLayout({ children, params }) {
  const locale = useLocale();

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }

  const messages = useMessages();
  return (
    <html lang={locale}>
      <body className="max-w-screen-md mx-auto">
        <Toaster position="bottom right" toastOptions={{ duration: 3000 }} />
        <AppProvider>
          {" "}
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
          </NextIntlClientProvider>
        </AppProvider>
      </body>
    </html>
  );
}
