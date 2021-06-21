import { renderToString } from "react-dom/server";
import styled from "styled-components";
import { MDXProvider } from "@mdx-js/react";

import Footer from "./Footer";
import SEO from "./SEO";
import Toc from "./Toc";
import { COLORS } from "@/styles/constants";
import MDXComponents from "./MDXComponents";
import { getHeadings } from "@/utils/toc";

const PostLayout = ({ meta, children }) => {
  const contentString = renderToString(children);
  const headings = getHeadings(contentString);

  return (
    <Wrapper>
      <SEO title={meta.title} />
      <Header>
        <h1>{meta.title}</h1>
        <Meta>
          {meta.createdAt} - {meta.readTime} minutes read
        </Meta>
      </Header>

      {headings.length > 0 ? <Toc headings={headings} /> : null}

      <MDXProvider components={MDXComponents}>
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
