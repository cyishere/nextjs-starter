import type { PostMetadata } from './types';

import fs from 'fs/promises';
import matter from 'gray-matter';
import path from 'path';

import { CONTENT_ROOT } from './constants';

function readFile(localPath: string) {
  return fs.readFile(path.join(process.cwd(), localPath), 'utf8');
}

function readDirectory(localPath: string) {
  return fs.readdir(path.join(process.cwd(), localPath));
}

const BLOG_DIRECTORY = `${CONTENT_ROOT}/blog`;

export async function getBlogPostList(postsNum?: number) {
  const fileNames = await readDirectory(BLOG_DIRECTORY);

  const blogPosts: PostMetadata[] = [];

  for (const fileName of fileNames) {
    const rawContent = await readFile(`${BLOG_DIRECTORY}/${fileName}`);

    const { data: frontmatter } = matter(rawContent);

    blogPosts.push({
      slug: fileName.replace('.mdx', ''),
      ...(frontmatter as Omit<PostMetadata, 'slug'>)
    });
  }

  const sortedBlogPosts = blogPosts.sort(
    (p1, p2) => +new Date(p2.createdAt) - +new Date(p1.createdAt)
  );

  return postsNum ? sortedBlogPosts.slice(0, postsNum) : sortedBlogPosts;
}

export async function getBlogPostBySlug(slug: string) {
  try {
    const rawContent = await readFile(`${BLOG_DIRECTORY}/${slug}.mdx`);

    const { data: frontmatter, content } = matter(rawContent);

    const enhancedFrontmatter: PostMetadata = {
      ...(frontmatter as Omit<PostMetadata, 'slug'>),
      slug
    };

    return { frontmatter: enhancedFrontmatter, content };
  } catch (error: unknown) {
    // Such as there's no such a file
    if (error instanceof Error) {
      console.error(error.message);
    }

    console.error('An unknown error occurred');

    return { frontmatter: null, content: null };
  }
}

export const getBlogPostsByPage = async (pageNum: number) => {
  const allPosts = await getBlogPostList();
  const postsPerPage = 10;
  const startIndex = (pageNum - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const posts = allPosts.slice(startIndex, endIndex);
  const totalPageNumber = Math.ceil(allPosts.length / postsPerPage);

  return {
    posts,
    totalPageNumber
  };
};

export async function getSingleFile(filePath: string) {
  try {
    const rawContent = await readFile(filePath);

    const { data: frontmatter, content } = matter(rawContent);

    return { frontmatter, content };
  } catch (error) {
    console.error(`Error reading file: ${filePath}`, error);
    return null;
  }
}
