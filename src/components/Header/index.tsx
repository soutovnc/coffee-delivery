
import logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from "phosphor-react";
import { ButtonsContainer, CartButton, HeaderContainer, LocaleButton } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <img src={logo} alt="" />

        <ButtonsContainer>
          <LocaleButton>
            <MapPin size={20} weight="fill" />
            Florianópolis, SC
          </LocaleButton>

          <CartButton>
            <span>3</span>
            <ShoppingCart size={20} weight="fill" />
          </CartButton>
        </ButtonsContainer>
      </div>
    </HeaderContainer>
  )
}
