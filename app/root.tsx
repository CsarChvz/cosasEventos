import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "@remix-run/react";
import { MantineProvider, createEmotionCache } from "@mantine/core";
import { StylesPlaceholder } from "@mantine/remix";
import styles from "./styles/app.css";
import { SideBarN } from "./utils/components/NavigationBar";

import WrapperGlobal from "./context/WrapperGlobal";
import { ModalsProvider } from "@mantine/modals";
export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

createEmotionCache({ key: "mantine" });

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

createEmotionCache({ key: "mantine" });
export default function App() {
  return (
    <WrapperGlobal>
      <Document>
        <SideBarN>
          <Outlet />
        </SideBarN>
      </Document>
    </WrapperGlobal>
  );
}

function Document({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <MantineProvider>
      <ModalsProvider>
        <html lang="es" className="bg-gray-100">
          <head>
            <meta charSet="utf-8" />
            <meta
              name="viewport"
              content="width=device-width,initial-scale=1"
            />
            {title ? <title>{title}</title> : null}
            <Meta />
            <Links />
          </head>
          <body className="h-screen dark:bg-gray-700">
            {children}
            <ScrollRestoration />
            <Scripts />
            {process.env.NODE_ENV === "development" && <LiveReload />}
          </body>
        </html>
      </ModalsProvider>
    </MantineProvider>
  );
}

function Layout({ children }: React.PropsWithChildren<{}>) {
  return <article>{children}</article>;
}

export function CatchBoundary() {
  let caught = useCatch();

  let message;
  switch (caught.status) {
    case 404:
      message = <p>This is a custom error message for 404 pages</p>;
      break;
    // You can customize the behavior for other status codes
    default:
      throw new Error(caught.data || caught.statusText);
  }

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <Layout>
        <h1>
          {caught.status}: {caught.statusText}
        </h1>
        {message}
      </Layout>
    </Document>
  );
}
