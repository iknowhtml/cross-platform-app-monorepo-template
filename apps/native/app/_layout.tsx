import 'shared/tailwind/global.css';

import { Provider } from 'shared/providers';
import { Slot } from 'expo-router';

export default function Root() {
  return (
    <Provider>
      <Slot />
    </Provider>
  );
}
