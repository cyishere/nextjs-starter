import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import CustomMDXRemote from '@/components/CustomMDXRemote';
import { getBlogPostBySlug } from '@/utils/file-helpers';
import { getFormattedDate } from '@/utils/format';
import { PostMetadata } from '@/utils/types';
import styles from './Page.module.css';

type BlogPostProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const generateMetadata = async ({
  params
}: BlogPostProps): Promise<Metadata> => {
  const { slug } = await params;
  const { frontmatter } = await getBlogPostBySlug(slug);

  if (!frontmatter) {
    return {};
  }

  return {
    title: frontmatter.title,
    description: frontmatter.description
  };
};

const BlogPost = async ({ params }: BlogPostProps) => {
  const { slug } = await params;
  const { frontmatter, content } = await getBlogPostBySlug(slug);

  if (!frontmatter || !content) {
    return notFound();
  }

  const { title, createdAt, updatedAt } = frontmatter as PostMetadata;
  const PublishedAt = (
    <time dateTime={createdAt.toString()}>{getFormattedDate(createdAt)}</time>
  );

  return (
    <article className="region">
      <header className={`container flow ${styles.header}`}>
        <h1>{title}</h1>
        <p className="text-light text-sm text-italic">
          {updatedAt ? (
            <>
              Published on {PublishedAt}, last updated on{' '}
              <time dateTime={updatedAt.toString()}>
                {getFormattedDate(updatedAt)}
              </time>
            </>
          ) : (
            <>Published on {PublishedAt}</>
          )}
        </p>
      </header>
      <div className={`container region flow ${styles.content} article`}>
        {content && <CustomMDXRemote content={content} />}
      </div>
    </article>
  );
};

export default BlogPost;
