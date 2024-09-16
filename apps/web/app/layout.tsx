/** @jsxImportSource react */

import 'shared/tailwind/global.css';
import '../global.css';

import { StylesProvider } from './providers';

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <StylesProvider>{children}</StylesProvider>
      </body>
    </html>
  );
}
