'use client';

import { A, H1, P, Text, TextLink } from 'shared/ui/typography';
import { Row } from 'shared/ui/layout';
import { View } from 'shared/ui/view';

import { MotiLink } from 'solito/moti/app';

export function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center p-3">
      <H1>Sample App</H1>
      <View className="max-w-xl">
        <P className="text-center">
          Here is a sample app to show you how you can navigate from one screen
          to another. This screen uses the same code on Next.js and React
          Native.
        </P>
      </View>
      <View className="h-[32px]" />
      <Row className="space-x-8">
        <TextLink href="/user/user_1" replace>
          Regular Link
        </TextLink>
        <MotiLink
          href="/user/user_1"
          animate={({ hovered, pressed }) => {
            'worklet';

            return {
              scale: pressed ? 0.95 : hovered ? 1.1 : 1,
              rotateZ: pressed ? '0deg' : hovered ? '-3deg' : '0deg',
            };
          }}
          transition={{
            type: 'timing',
            duration: 150,
          }}
        >
          <Text className="text-base font-bold">Moti Link</Text>
        </MotiLink>
      </Row>
    </View>
  );
}
