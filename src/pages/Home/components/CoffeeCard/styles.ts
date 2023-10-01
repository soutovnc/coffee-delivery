import { styled } from "styled-components";

export const CoffeeCardContainer = styled.div`
  width: 100%;
  background: ${(props) => props.theme.colors["base-card"]};
  border-radius: 6px 36px 6px 36px;
  padding: 1.25rem;
  padding-top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.25rem;
  }
`;

export const Tag = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-top: 1rem;
  margin-bottom: 1.25rem;
  flex-wrap: wrap;

  background: ${(props) => props.theme.colors["yellow-light"]};
  color: ${(props) => props.theme.colors["yellow-dark"]};
  font-size: ${(props) => props.theme.textSizes["tag"]};
  text-transform: uppercase;
  padding: 0.25rem 0.5rem;
  border-radius: 999px;
  font-weight: 700;
`;

export const Name = styled.p`
  font-size: ${(props) => props.theme.textSizes["text-s"]};
  color: ${(props) => props.theme.colors["base-subtitle"]};
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

export const Value = styled.p``;

export const Description = styled.p`
  font-size: ${(props) => props.theme.textSizes["text-s"]};
  color: ${(props) => props.theme.colors["base-label"]};
  margin-bottom: 2rem;
`;

export const PriceSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    gap: 3px;

    p {
      line-height: 0.75rem;
    }
  }
`;

export const CartWrapper = styled.div`
  width: 7.5rem;

  > button {
    width: 2.375rem;
    height: 2.375rem;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.theme.colors["purple-dark"]};
    color: ${(props) => props.theme.colors["base-card"]};
    border-radius: 6px;
    margin-left: 0.3rem;
    transition: 0.4s;

    &:hover {
      background: ${(props) => props.theme.colors["purple"]}
    }
  }
`;
