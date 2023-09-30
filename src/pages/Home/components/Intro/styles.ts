import { styled } from "styled-components";


export const IntroContainer = styled.div`
  width: 100%;
  height: 34rem;

  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    z-index: -5;
    position: absolute;
    width: 100%
  }
`;

export const IntroContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.5rem;
`;

export const IntroTitle = styled.h1`
  margin-bottom: 1rem;
  color: ${(props) => props.theme.colors["base-title"]};
  font-size: ${(props) => props.theme.textSizes["title-m"]};
  line-height: 130%;
  font-weight: 800;
`;

export const IntroText = styled.p`
  color: ${(props) => props.theme.colors["base-text"]};
  font-size: ${(props) => props.theme.textSizes["text-m"]};
  line-height: 130%;
  font-weight: 400;
`;
