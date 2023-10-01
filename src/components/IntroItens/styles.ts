import { styled } from "styled-components";

interface IconsContainerProps {
  iconBg: string;
}

export const IntroItensContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const IconContainer = styled.div<IconsContainerProps>`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: ${({ iconBg }) => iconBg};
  color: ${(props) => props.theme.colors["white"]};
  display: flex;
  align-items: center;
  justify-content: center;
`;
