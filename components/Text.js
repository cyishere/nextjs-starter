import styled from "styled-components";

const Text = ({ children }) => <Wrapper>{children}</Wrapper>;

const Wrapper = styled.p`
  margin-top: 1rem;
`;

export default Text;
