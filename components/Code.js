import styled from "styled-components";
import { COLORS } from "@/styles/constants";

const Code = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.code`
  font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir,
    helvetica neue, helvetica, Ubuntu, roboto, noto, segoe ui, arial, sans-serif;
  font-size: 18px;
  padding: 2px 6px;
  background-color: ${COLORS.light};
  color: ${COLORS.primary};
`;

export default Code;
