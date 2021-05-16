const importAllPosts = (files) => {
  return files.keys().map((file) => ({
    slug: file.split("/")[1],
    module: files(file),
  }));
};

export const posts = importAllPosts(
  require.context("../pages/posts/", true, /\.mdx$/)
);
