'use client';

import { useParams } from 'solito/navigation';
import { TextLink } from 'solito/link';
import { Text } from 'shared/ui/typography';
import { View } from 'shared/ui/view';

export function UserDetailScreen() {
  const { id } = useParams<{ id: string }>();

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="mb-4 text-center font-bold">{`User ID: ${id}`}</Text>
      <TextLink href="/">👈 Go Home</TextLink>
    </View>
  );
}
