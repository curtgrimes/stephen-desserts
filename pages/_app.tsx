import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";
import "styles/app.scss";

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  const router = useRouter();
  useEffect(() => storePathValues, [router.asPath]);

  const handleRouteChange = (url) => {
    window.gtag("config", "[Tracking ID]", {
      page_path: url,
    });
  };

  useEffect(() => {
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  function storePathValues() {
    const storage = globalThis?.sessionStorage;
    if (!storage) return;
    // Set the previous path as the value of the current path.
    const prevPath = storage.getItem("currentPath");
    storage.setItem("previousPath", prevPath);
    // Set the current path value by looking at the browser's location object.
    storage.setItem("currentPath", globalThis.location.pathname);
  }

  return (
    <>
      <Head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍪</text></svg>"
        />
        <title>Stephen&apos;s Desserts - December 2021</title>
        <meta
          name="description"
          content="Learn more about the desserts Stephen has made for you this Christmas season. And if you really like one of them, feel free to grab the recipe!"
        />

        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-EEFY64ZHCR"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-EEFY64ZHCR', { page_path: window.location.pathname });
            `,
          }}
        />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}
