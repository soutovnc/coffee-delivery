import { CoffeeCard } from "../CoffeeCard";
import { CoffeeListContainer, Subtitle } from "./styles";

export function CoffeeList() {
  return (
    <CoffeeListContainer className="container">
      <Subtitle>
        Nossos cafés
      </Subtitle>

      <CoffeeCard />
    </CoffeeListContainer>
  )
}
