import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/core/styles";
import theme from "../helpers/ui/theme";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charset="utf-8" />
          <meta name="theme-color" content={theme.palette.primary.main} />
          <meta
            name="keywords"
            content="educational institute, coaching, physics, chemistry, maths, biology, social studies, political science, history, iit, social science, humanities, accounts, economics, jee, neet, Sanjeev Sinha, Deepika karan, sinha education point"
          />
          <meta property="og:locale" content="en_GB" />
          <meta property="og:type" content="website " />
          <meta
            property="og:title"
            content="Coaching Institute | Sinha Education Point"
          />
          <meta
            property="og:description"
            content="Sinha Education Point | Best coaching institute for all students wanting to learn any subjects."
          />
          <meta property="og:url" content="https://sinhaeducationpoint.in" />
          <meta property="og:site_name" content="Sinha Education Point" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};

export default MyDocument;
