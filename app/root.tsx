import { LiveReload, Outlet, Links } from "@remix-run/react";
import type { LinksFunction } from '@remix-run/node'

import globalStylesUrl from "./styles/global.css";
import globalMediumStylesUrl from "./styles/global-medium.css";
import globalLargeStylesUrl from "./styles/global-large.css";

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: globalStylesUrl },
    { rel: 'stylesheet', href: globalMediumStylesUrl, media: "print,(min-width: 640px)" },
    {rel: 'stylesheet', href: globalLargeStylesUrl, media: "screen and (min-width: 1024px)"}
  ]
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <Links />
        <title>Remix funny!</title>
      </head>
      <body>
        <Outlet />
        <LiveReload />
      </body>
    </html>
  );
}
