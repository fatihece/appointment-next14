import { getTennantData } from "@/lib/data-service";

export async function generateMetadata({ params }, parent) {
  const { slug } = params;
  const tennants = await getTennantData();
  const data = tennants?.output?.find((s) => s.url_alias === slug);
  const seoObject = data?.seo;

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    metadataBase: new URL("https://randevual.online"),
    description: seoObject?.description,
    title: {
      template: `%s | ${seoObject?.title}`,
      default: seoObject?.title,
    },
    alternates: {
      canonical: `https://randevual.online/${slug}`,
    },
    openGraph: {
      title: seoObject?.header_title,
      description: seoObject?.description,
      url: seoObject?.siteUrl,
      siteName: seoObject?.title,
      images: ["/opengraph-image.jpg", ...previousImages],
      locale: "tr_TR",
      type: "website",
    },
    keywords: seoObject?.keywords,
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
      title: seoObject?.title,
      images: ["/opengraph-image.jpg"],
    },
  };
}

export default async function TennantLayout({ children, params }) {
  const { slug } = params;
  const tennants = await getTennantData();
  const data = tennants?.output?.find((s) => s.url_alias === slug);

  return <section>{children}</section>;
}
