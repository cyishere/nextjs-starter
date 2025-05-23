import type { AppImageProps } from './AppImage';

import { Code } from 'bright';

import AppImage from './AppImage';
import TextLink from './TextLink';
import YouTube from './YouTube';

Code.theme = 'dracula';

export const COMPONENTS_MAP = {
  a: (props: { children: React.ReactNode; href: string }) =>
    typeof props.children === 'string' ? (
      <TextLink {...props}>{props.children}</TextLink>
    ) : (
      <a {...props} />
    ),
  img: (props: AppImageProps) => <AppImage {...props} />,
  pre: Code,
  YouTube
};
