import styled from "styled-components";
import { COLORS } from "@/styles/constants";

const Blockquote = ({ children }) => <Wrapper>{children}</Wrapper>;

const Wrapper = styled.blockquote`
  margin-top: 4.2rem;
  padding: 1rem 1.77rem;
  border-left: 5px solid ${COLORS.primary};
  background-color: ${COLORS.light};
  font-style: italic;
`;

export default Blockquote;
