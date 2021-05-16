// import { useEffect } from "react";
import { MDXProvider } from "@mdx-js/react";
import styled from "styled-components";
// import Prism from "prismjs";
import Footer from "./Footer";
import SEO from "./SEO";
import Blockquote from "./Blockquote";
import { COLORS } from "@/styles/constants";
import Text from "./Text";
import CodeBlock from "./CodeBlock";

const components = {
  blockquote: Blockquote,
  p: Text,
  code: CodeBlock,
};

const PostLayout = ({ meta, children }) => {
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     Prism.highlightAll();
  //   }
  // }, []);

  return (
    <Wrapper>
      <SEO title={meta.title} />
      <Header>
        <h1>{meta.title}</h1>
        <Meta>
          {meta.createdAt} - {meta.readTime} minutes read
        </Meta>
      </Header>
      <MDXProvider components={components}>
        <Container>{children}</Container>
      </MDXProvider>

      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const Container = styled.main`
  max-width: 800px;
  margin: 0 auto;
  padding-bottom: 4.2rem;
`;

const Header = styled.header`
  margin-bottom: 4.2rem;
  text-align: center;
  padding-top: 4.2rem;
`;

const Meta = styled.p`
  color: ${COLORS.textSecondary};
`;

export default PostLayout;