import styled from "styled-components"

export const CoffeeCartContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.colors["base-button"]};
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;

  > div {
    display: flex;
    align-items: center;
    gap: 1.25rem;

    img {
      width: 4rem;
      height: 4rem;
    }
  }

  > p {
    align-self: flex-start;
    font-weight: 700;
  }
`;

export const NameText = styled.p`
  color: ${(props) => props.theme.colors["base-subtitle"]};
  font-size: ${(props) => props.theme.textSizes["text-m"]};
  line-height: 130%;
  font-weight: 400;
`;

export const ActionContainer = styled.div`
  margin-top: .5rem;
  height: 2rem;
  display: flex;
  align-items: center;
  gap: .5rem;

  > div {
    max-width: 4.5rem;
    height: 100%;
  }
`;

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  gap: .25rem;
  color: ${(props) => props.theme.colors["base-text"]};
  font-size: .75rem;
  height: 100%;
  border: none;
  background: ${(props) => props.theme.colors["base-button"]};
  padding: 0 .5rem;
  border-radius: 6px;
  transition: .4s;

  svg {
    color: ${(props) => props.theme.colors["purple"]};
  }

  &:hover {
    background: ${(props) => props.theme.colors["base-hover"]};
  }
`;
