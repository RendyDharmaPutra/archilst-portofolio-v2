// app/utils/seo.ts
type OGType =
  | "website"
  | "article"
  | "profile"
  | "product"
  | "video.other"
  | "event";

interface MetaOptions {
  /** Judul untuk <title> dan meta tag */
  title: string;
  /** Deskripsi singkat halaman */
  description: string;
  /** Gambar preview OG (gunakan URL absolut) */
  image?: string;
  /** Jenis halaman (website, article, dll) */
  type?: OGType;
  /** URL kanonik halaman */
  url?: string;
  /** Nama brand / situs */
  siteName?: string;
  /** Apakah halaman ini adalah home page */
  isHome?: boolean;
}

/**
 * Helper untuk membuat meta tags SEO + Open Graph + Twitter Card.
 * Digunakan di Remix export `meta`.
 */
export function createMeta({
  title,
  description,
  image = "https://archilst.my.id/public/logo.png",
  type = "website",
  url = "https://archilst.my.id",
  siteName = "Archilst",
  isHome = false,
}: MetaOptions) {
  // Title SEO (untuk <title>)
  const seoTitle = isHome
    ? `${siteName} | Software Developer & Engineer`
    : `${title} | ${siteName}`;

  // Title OG (lebih human-friendly)
  const ogTitle = isHome
    ? `${siteName} – Software Developer & Engineer`
    : `${title} – ${siteName}`;

  return [
    // SEO umum
    { title: seoTitle },
    { name: "description", content: description },

    // Open Graph
    { property: "og:title", content: ogTitle },
    { property: "og:description", content: description },
    { property: "og:image", content: image },
    { property: "og:type", content: type },
    { property: "og:url", content: url },
    { property: "og:site_name", content: siteName },

    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: ogTitle },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
  ];
}
