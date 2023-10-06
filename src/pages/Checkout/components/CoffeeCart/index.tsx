import { Trash } from "phosphor-react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { CartItem } from "../../../../contexts/CartContext";
import { useCart } from "../../../../hooks/useCart";
import { ActionContainer, CoffeeCartContainer, NameText, RemoveButton } from "./styles";
import { formatMoney } from "../../../../utils/formatMoney";

interface CoffeeCartProps {
  coffee: CartItem;
}

export function CoffeeCart({ coffee }: CoffeeCartProps) {
  const { changeCartItemQuantity, removeCartItem } = useCart();

  function handleIncrease() {
    changeCartItemQuantity(coffee.id, "increase");
  }

  function handleDecrease() {
    changeCartItemQuantity(coffee.id, "decrease");
  }

  function handleRemove() {
    removeCartItem(coffee.id)
  }

  const coffeeTotal = coffee.price * coffee.quantity;

  const formattedPrice = formatMoney(coffeeTotal);

  return (
    <CoffeeCartContainer>
      <div>
        <img src={`/assets/coffees/${coffee.photo}`} />
        <div>
          <NameText>{coffee.name}</NameText>
          <ActionContainer>
            <QuantityInput
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              quantity={coffee.quantity}
              size="small"
            />
            <RemoveButton type="button" onClick={handleRemove}>
              <Trash size={16} />
              Remover
            </RemoveButton>
          </ActionContainer>
        </div>
      </div>

      <p>R$ {formattedPrice}</p>
    </CoffeeCartContainer>
  )
}
