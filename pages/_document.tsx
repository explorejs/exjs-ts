import React, { ReactElement, Component } from "react";
import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";
import { ServerStyleSheet } from "styled-components";

interface DocumentProps {
  styleTags: ReactElement<
    {},
    | string
    | ((
        props: any
      ) => ReactElement<
        any,
        string | (new (props: any) => Component<any, any, any>)
      >)
    | (new (props: any) => Component<any, any, any>)
  >[];
}

export default class MyDocument extends Document<DocumentProps> {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html>
        <body>
          <Head/>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}