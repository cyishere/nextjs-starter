import { COLORS } from "@/styles/constants";
import styled from "styled-components";
import { ExternalLinkIcon } from "./Icons";

export const ExternalLink = ({ href, children }) => (
  <ExternalWrapper href={href} target="_blank" rel="noreferrer">
    {children} <ExternalLinkIcon />
  </ExternalWrapper>
);

const ExternalWrapper = styled.a`
  color: ${COLORS.primary};

  & svg {
    color: ${COLORS.textSecondary};
    margin-bottom: -2px;
  }
`;
