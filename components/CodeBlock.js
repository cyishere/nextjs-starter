import styled from "styled-components";
import Highlight, { defaultProps } from "prism-react-renderer";
import nightOwlLight from "prism-react-renderer/themes/nightOwlLight";

const CodeBlock = ({ children, className }) => {
  const language = className.replace(/language-/, "");

  return (
    <Highlight
      {...defaultProps}
      code={children.trim()}
      language={language}
      theme={nightOwlLight}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={style}>
          {tokens.map((line, i) => (
            <Line key={i} {...getLineProps({ line, key: i })}>
              <LineNo>{i + 1}</LineNo>
              <LineContent>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </LineContent>
            </Line>
          ))}
        </Pre>
      )}
    </Highlight>
  );
};

const Pre = styled.pre`
  font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir,
    helvetica neue, helvetica, Ubuntu, roboto, noto, segoe ui, arial, sans-serif;
  margin-top: 4.2rem;
  padding: 1em;
  font-size: 18px;
`;

const Line = styled.div`
  display: table-row;
`;

const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`;

const LineContent = styled.span`
  display: table-cell;
`;

export default CodeBlock;
