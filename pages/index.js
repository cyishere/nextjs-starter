import styled from "styled-components";
import Footer from "@/components/Footer";
import PostItem from "@/components/PostItem";
import SEO from "@/components/SEO";
import { posts } from "@/utils/getAllPosts";
import { ExternalLink } from "@/components/Link";

export default function Home() {
  return (
    <Wrapper>
      <SEO title="Home" />

      <Container>
        <Header>
          <h1>Next.js Project Starter</h1>

          <p>
            With{" "}
            <ExternalLink href="https://mdxjs.com/getting-started/next">
              MDX
            </ExternalLink>{" "}
            and{" "}
            <ExternalLink href="https://styled-components.com/docs/basics">
              styled-components
            </ExternalLink>
          </p>
        </Header>
        {posts.map((post) => (
          <PostItem key={post.slug} post={post} />
        ))}
      </Container>

      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Container = styled.main`
  max-width: 800px;
  margin: 0 auto;
`;

const Header = styled.header`
  margin-bottom: 4.2rem;
  text-align: center;
  padding-top: 4.2rem;
`;
