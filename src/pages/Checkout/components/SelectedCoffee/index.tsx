import { useCart } from "../../../../hooks/useCart"
import { CoffeeCart } from "../CoffeeCart";
import { ConfirmationSection } from "./ConfirmationSection";
import { CoffeeCartCardContainer, SelectedCoffeeContainer, TitleText } from "./styles";

export function SelectedCoffee() {
  const { cartItems } = useCart();

  return (
    <SelectedCoffeeContainer>
      <TitleText>
        Cafés selecionados
      </TitleText>
      <div>

        <CoffeeCartCardContainer>
          {cartItems.map((item) => (
            <CoffeeCart key={item.id} coffee={item}/>
          ))}
          <ConfirmationSection />
        </CoffeeCartCardContainer>

      </div>
    </SelectedCoffeeContainer>
  )
}
