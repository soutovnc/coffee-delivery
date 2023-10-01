import { ShoppingCart } from "phosphor-react";
import { CartWrapper, CoffeeCardContainer, Description, Name, PriceSection, Tag, Value } from "./styles";

import expressoImg from "../../../../assets/images/expresso.png";
import { QuantityInput } from "../../../../components/QuantityInput";
import { useState } from "react";

export function CoffeeCard() {
  const [quantity, setQuantity] = useState(0);

  function handleIncrease() {
    setQuantity((state) => state + 1)
  }

  function handleDecrease() {
    setQuantity((state) => state - 1)
  }

  return (
    <CoffeeCardContainer>
      <img src={expressoImg} />
      <Tag>Tradicional</Tag>
      <Name>Expresso Tradicional</Name>
      <Description>O tradicional café feito com água quente e grãos moídos</Description>

      <PriceSection>
        <div>
          <p>R$</p>
          <Value>9,90</Value>
        </div>

        <CartWrapper>
          <QuantityInput onDecrease={handleDecrease} onIncrease={handleIncrease} quantity={quantity} />
          <button>
            <ShoppingCart weight="fill" size={22} />
          </button>
        </CartWrapper>
      </PriceSection>
    </CoffeeCardContainer>
  )
}
