import { AppRegistry } from 'react-native';

import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import type { DocumentContext } from 'next/document';
import { Children } from 'react';

class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    AppRegistry.registerComponent('Main', () => Main);
    // @ts-ignore
    const { getStyleElement } = AppRegistry.getApplication('Main');
    const styles = [getStyleElement()];

    const initialProps = await NextDocument.getInitialProps(ctx);
    return { ...initialProps, styles: Children.toArray(styles) };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
