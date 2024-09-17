'use client';

import { useServerInsertedHTML } from 'next/navigation';
import { StyleSheet } from 'react-native';

export const StylesProvider = ({ children }: React.PropsWithChildren) => {
  useServerInsertedHTML(() => {
    // @ts-ignore -- Need below for Solito: https://solito.dev/app-directory/overview#appstyles-providertsx
    const sheet = StyleSheet.getSheet();
    return (
      //
      <style
        // biome-ignore lint/security/noDangerouslySetInnerHtml: Required for Solito Router set up: https://solito.dev/app-directory/overview#appstyles-providertsx
        dangerouslySetInnerHTML={{ __html: sheet.textContent }}
        id={sheet.id}
      />
    );
  });

  return <>{children}</>;
};
