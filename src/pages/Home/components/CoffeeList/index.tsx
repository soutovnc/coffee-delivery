import { CoffeeCard } from "../CoffeeCard";
import { CoffeeListContainer, ListContainer, Subtitle } from "./styles";

export function CoffeeList() {
  return (
    <CoffeeListContainer className="container">
      <Subtitle>
        Nossos cafés
      </Subtitle>

      <ListContainer>

        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
      </ListContainer>
    </CoffeeListContainer>
  )
}
