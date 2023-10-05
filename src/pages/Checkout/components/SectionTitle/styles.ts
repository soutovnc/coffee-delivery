import { styled } from "styled-components";

export const SectionTitleContainer = styled.div`
  display: flex;
  gap: 0.5;
`;

export const SectionTitleText = styled.h1`
  color: ${(props) => props.theme.colors["base-subtitle"]};
  font-size: ${(props) => props.theme.textSizes["title-m"]};
  font-family: ${(props) => props.theme.fonts["title"]};
  line-height: 130%;
  font-weight: 800;
`;

export const SectionSubtitleText = styled.p`
  color: ${(props) => props.theme.colors["base-text"]};
  font-size: ${(props) => props.theme.textSizes["text-s"]};
  line-height: 130%;
  font-weight: 400;
`;
