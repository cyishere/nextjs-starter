import styled from "styled-components";

const Player = ({ children }) => <Wrapper>{children}</Wrapper>;

const Wrapper = styled.div`
  margin-top: 4.2rem;

  & > * {
    width: 100%;
  }
`;

export default Player;
