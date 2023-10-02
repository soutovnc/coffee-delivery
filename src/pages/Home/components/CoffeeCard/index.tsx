import { ShoppingCart } from "phosphor-react";
import { CartWrapper, CoffeeCardContainer, Description, Name, PriceSection, Tag, Value } from "./styles";

import { QuantityInput } from "../../../../components/QuantityInput";
import { useState } from "react";
import { useCart } from "../../../../hooks/useCart";

export interface Coffee {
  id: number;
  tag: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
}

interface CoffeeProps {
  coffee: Coffee;
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  const [quantity, setQuantity] = useState(0);
  const { addCoffeeToCart } = useCart();

  const formattedPrice = coffee.price.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
  })

  function handleIncrease() {
    setQuantity((state) => state + 1)
  }

  function handleDecrease() {
    setQuantity((state) => state - 1)
  }

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    };
    addCoffeeToCart(coffeeToAdd);
  }

  return (
    <CoffeeCardContainer>
      <img src={`/assets/coffees/${coffee.photo}`} />
      <section>
        <Tag>
          {coffee.tag.map((tag) => (
            <span key={`${coffee.id}${tag}`}>{tag}</span>
          ))}
        </Tag>

      </section>
      <Name>{coffee.name}</Name>
      <Description>{coffee.description}</Description>

      <PriceSection>
        <div>
          <p>R$</p>
          <Value>{formattedPrice}</Value>
        </div>

        <CartWrapper>
          <QuantityInput
            onDecrease={handleDecrease}
            onIncrease={handleIncrease}
            quantity={quantity}
          />
          <button onClick={handleAddToCart} >
            <ShoppingCart weight="fill" size={22} />
          </button>
        </CartWrapper>
      </PriceSection>
    </CoffeeCardContainer>
  )
}
