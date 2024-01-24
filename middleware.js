import createMiddleware from "next-intl/middleware";
import { locales, localePrefix } from "@/app/navigation";

// export default createMiddleware({
//   // A list of all locales that are supported
//   locales: ["en", "tr"],

//   // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
//   defaultLocale: "tr",
// });
export default createMiddleware({
  defaultLocale: "tr",
  localePrefix,
  locales,
});

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
