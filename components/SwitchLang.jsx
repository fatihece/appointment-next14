import { useLocale, useTranslations } from "next-intl";
import { Link } from "../app/navigation";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");

  const locale = useLocale();
  const otherLocale = locale === "tr" ? "en" : "tr";

  return (
    <Link href="/" locale={otherLocale}>
      {t("switchLocale", { locale: otherLocale })}
    </Link>
  );
}
