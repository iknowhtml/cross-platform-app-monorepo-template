import type { ComponentProps } from 'react';
import { View } from 'react-native';

export const Row = (props: ComponentProps<typeof View>) => (
  <View {...props} className="flex-row" />
);
