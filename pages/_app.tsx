import { useEffect } from "react";
import Head from "next/head";
import "../src/styles/index.css";

const WEBSITE_URL = "https://aishwarya.design";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    const vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    function handleResize() {
      // We execute the same script as before
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Head>
        <title>Aishwarya Joshi | Product Designer</title>
        <meta
          name="description"
          content="Portfolio website of Aishwarya Joshi. You can find her on behance @aishwaryajoshi"
        />
        <meta name="keywords" content="UI/UX Desginer, Product Designer" />
        <meta
          property="og:title"
          content="Aishwarya Joshi | Product Designer"
        />
        <meta
          property="og:description"
          content="Portfolio website of Aishwarya Joshi. You can find her on behance @aishwaryajoshi"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={`${WEBSITE_URL}/images/og-image.png`}
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />
        <meta property="og:url" content={`${WEBSITE_URL}`} />
        <meta property="og:site_name" content="Aishwarya Joshi" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Aishwarya Joshi | Product Designer"
        />
        <meta
          name="twitter:description"
          content="Portfolio website of Aishwarya Joshi. You can find her on behance @aishwaryajoshi"
        />
        <meta
          name="twitter:image"
          content={`${WEBSITE_URL}/images/og-image.png`}
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <title>Aishwarya Joshi</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
