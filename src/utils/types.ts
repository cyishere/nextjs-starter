export type SiteTheme = 'light' | 'dark';

export type PostMetadata = {
  title: string;
  createdAt: Date;
  slug: string;
  description?: string;
  updatedAt?: Date;
};
