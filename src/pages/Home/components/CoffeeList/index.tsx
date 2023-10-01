import { coffees } from "../../../../data/coffees";
import { CoffeeCard } from "../CoffeeCard";
import { CoffeeListContainer, ListContainer, Subtitle } from "./styles";

export function CoffeeList() {
  return (
    <CoffeeListContainer className="container">
      <Subtitle>
        Nossos cafés
      </Subtitle>

      <ListContainer>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </ListContainer>
    </CoffeeListContainer>
  )
}
