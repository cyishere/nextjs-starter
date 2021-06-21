import styled from "styled-components";

const Toc = ({ headings }) => {
  return (
    <Wrapper>
      {headings.map(({ text, link }) => (
        <li key={text}>
          <a href={link}>{text}</a>
        </li>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.ol`
  max-width: 800px;
  margin: 0 auto;
  padding-bottom: 4.2rem;
`;

export default Toc;
