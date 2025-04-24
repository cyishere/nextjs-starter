import RSS from 'rss';

import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from '@/utils/constants';
import { getBlogPostList } from '@/utils/file-helpers';

export async function GET() {
  const feed = new RSS({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    feed_url: `${SITE_URL}/feed.xml`,
    site_url: SITE_URL // NOTE: please change SITE_URL to a real one
  });

  const blogPosts = await getBlogPostList();

  blogPosts.forEach((post) => {
    feed.item({
      title: post.title,
      description: post.description || '',
      date: post.createdAt,
      url: `${SITE_URL}/blog/${post.slug}`
    });
  });

  return new Response(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
}
