import styled from "styled-components";
import { COLORS } from "@/styles/constants";

import CodeBlock from "./CodeBlock";

const Blockquote = (props) => <BlockquoteWrapper {...props} />;
const Code = (props) => <CodeWrapper {...props} />;

const MDXComponents = {
  p: (props) => <Text {...props} />,
  blockquote: Blockquote,
  inlineCode: Code,
  code: CodeBlock,
};

const BlockquoteWrapper = styled.blockquote`
  margin-top: 4.2rem;
  padding: 1rem 1.77rem;
  border-left: 5px solid ${COLORS.primary};
  background-color: ${COLORS.light};
  font-style: italic;
`;

const Text = styled.p`
  margin-top: 1rem;
`;

const CodeWrapper = styled.code`
  font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir,
    helvetica neue, helvetica, Ubuntu, roboto, noto, segoe ui, arial, sans-serif;
  font-size: 18px;
  padding: 2px 6px;
  background-color: ${COLORS.light};
  color: ${COLORS.primary};
`;

export default MDXComponents;
