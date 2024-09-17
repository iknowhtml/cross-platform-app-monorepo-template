import { type ComponentProps, forwardRef } from 'react';
import {
  Text as ReactNativeText,
  Platform,
  Linking,
  type TextStyle,
} from 'react-native';
import { TextLink as SolitoTextLink } from 'solito/link';

export const Text = ReactNativeText;

/**
 * You can use this pattern to create components with default styles
 */
export const P = (props: ComponentProps<typeof Text>) => (
  <Text {...props} className="text-base text-black my-4" />
);

/**
 * Components can have defaultProps and styles
 */
export const H1 = (props: ComponentProps<typeof Text>) => (
  <Text {...props} className="text-3xl font-extrabold my-4" />
);

/**
 * This is a more advanced component with custom styles and per-platform functionality
 */
export interface AProps extends ComponentProps<typeof Text> {
  href?: string;
  target?: '_blank';
}

export const A = forwardRef<ReactNativeText, AProps>(function A(
  { className = '', href, target, onPress, ...restOfProps },
  ref,
) {
  const nativeAProps = Platform.select<Partial<AProps>>({
    web: {
      href,
      target,
      hrefAttrs: {
        rel: 'noreferrer',
        target,
      },
    },
    default: {
      onPress: (event) => {
        if (onPress) {
          onPress(event);
        }
        if (Platform.OS !== 'web' && href !== undefined) {
          Linking.openURL(href);
        }
      },
    },
  });

  return (
    <Text
      accessibilityRole="link"
      className={`text-blue-500 hover:underline ${className}`}
      {...restOfProps}
      {...nativeAProps}
      ref={ref}
    />
  );
});

type TextLinkProps = ComponentProps<typeof SolitoTextLink> & {
  style?: TextStyle;
};

export const TextLink = ({
  style,
  textProps,
  ...restOfProps
}: TextLinkProps) => (
  <SolitoTextLink
    {...restOfProps}
    textProps={{
      ...textProps,
      style: [style, textProps?.style],
    }}
    className="text-base font-bold hover:underline text-blue-500"
  />
);
