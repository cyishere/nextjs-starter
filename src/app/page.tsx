import Hero from '@/components/Hero';
import Info from '@/components/Info';
import PostCard from '@/components/PostCard';
import { CONTENT_ROOT } from '@/utils/constants';
import { getBlogPostList, getSingleFile } from '@/utils/file-helpers';

const Home = async () => {
  const heroContent = await getSingleFile(`${CONTENT_ROOT}/home-hero.mdx`);
  const statementContent = await getSingleFile(
    `${CONTENT_ROOT}/home-statement.mdx`
  );
  const posts = await getBlogPostList(3);

  return (
    <>
      <Hero
        title={heroContent?.frontmatter?.title}
        content={heroContent?.content}
      />
      <div className="container region flow">
        <Info content={statementContent?.content} />
        <h2>Latest Posts</h2>
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </>
  );
};

export default Home;
