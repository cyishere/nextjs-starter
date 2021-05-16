import styled from "styled-components";
import { COLORS, FONT } from "@/styles/constants";

const Figure = ({ src, alt }) => {
  return (
    <Wrapper>
      <Img src={src} alt={alt} />
      <Caption>{alt}</Caption>
    </Wrapper>
  );
};

const Wrapper = styled.figure`
  margin-top: 4.2rem;
`;

const Img = styled.img`
  width: 100%;
`;

const Caption = styled.figcaption`
  font-style: italic;
  color: ${COLORS.textSecondary};
  margin-top: 0.75rem;
`;

export default Figure;
