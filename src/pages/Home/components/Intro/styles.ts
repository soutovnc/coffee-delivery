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
  font-size: ${(props) => props.theme.textSizes["title-xl"]};
  color: ${(props) => props.theme.colors["base-title"]};
  line-height: 130%;
  font-weight: 800;
  font-family: ${(props) => props.theme.fonts["title"]};
`;

export const IntroText = styled.p`
  color: ${(props) => props.theme.colors["base-text"]};
  font-size: ${(props) => props.theme.textSizes["text-l"]};
  line-height: 130%;
  font-weight: 400;
`;

export const ItensContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  margin-top: 4.125rem;
`;
