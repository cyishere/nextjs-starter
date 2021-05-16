import styled from "styled-components";
import Link from "next/link";
import { COLORS, FONT } from "@/styles/constants";

const PostItem = ({ post }) => {
  const {
    slug,
    module: { meta },
  } = post;

  return (
    <Wrapper>
      <h2>
        <Link href={`/posts/${slug}`}>{meta.title}</Link>
      </h2>
      <Meta>
        {meta.createdAt} - {meta.readTime} minutes read
      </Meta>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  margin-bottom: 3.15rem;
`;

const Meta = styled.p`
  color: ${COLORS.textSecondary};
`;

export default PostItem;
