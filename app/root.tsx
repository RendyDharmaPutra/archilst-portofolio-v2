import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction, MetaFunction } from "@remix-run/node";

import "./tailwind.css";
import { PageContainter } from "./components/layouts/page-container";
import { ThemeProvider } from "context/theme-context";

export const meta: MetaFunction = () => {
  return [
    { title: "Archilst Portofolio" },
    {
      name: "description",
      content:
        "Software Developer yang berkembang ke arah Software Engineer dan Engineer secara menyeluruh. Membangun solusi melalui teknologi, desain sistem, dan eksplorasi kreatif dalam software maupun perangkat keras. Software Developer yang berkembang ke arah Software Engineer dan Engineer secara menyeluruh. Membangun solusi melalui teknologi, desain sistem, dan eksplorasi kreatif dalam software maupun perangkat keras.",
    },
  ];
};

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

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <ThemeProvider>
          <PageContainter>{children}</PageContainter>
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
