import styled from "styled-components";
import { ExternalLink } from "./Link";
import { COLORS } from "@/styles/constants";

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <p>
          A project start made by{" "}
          <ExternalLink href="https://cyishere.dev">CY</ExternalLink>.
        </p>
        <ExternalLink href="https://github.com/cyishere/nextjs-starter">
          Code on GitHub
        </ExternalLink>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  background-color: ${COLORS.light};
  padding: 2rem 1rem;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export default Footer;
