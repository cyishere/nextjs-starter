import { cookies } from 'next/headers';

import { THEME_NAME } from '@/utils/constants';
import { SiteTheme } from '@/utils/types';

export const getTheme = async (): Promise<SiteTheme> => {
  const cookieStore = await cookies();
  const savedTheme = cookieStore.get(THEME_NAME);
  const theme = (savedTheme?.value || '') as SiteTheme;

  return theme;
};
