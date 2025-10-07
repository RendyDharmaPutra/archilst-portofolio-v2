import {
  json,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import type { LinksFunction, MetaFunction } from "@remix-run/node";

import "./tailwind.css";
import { PageContainer } from "./components/layouts/page-container";
import { ThemeProvider } from "~/context/theme-context";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function loader() {
  const globalSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Archilst",
    url: "https://archilst.my.id",
    creator: {
      "@type": "Person",
      name: "Archilst",
      jobTitle: "Software Engineer",
    },
  };
  return json({ globalSchema });
}

export function Layout({ children }: { children: React.ReactNode }) {
  const { globalSchema } = useLoaderData<typeof loader>();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(globalSchema),
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <PageContainer>{children}</PageContainer>
        </ThemeProvider>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
