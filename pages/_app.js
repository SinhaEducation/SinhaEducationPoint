import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";

import Layout from "../components/layout/layout";
import "../styles/globals.css";
import theme from "../helpers/ui/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
