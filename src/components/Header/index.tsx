
import logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from "phosphor-react";
import { ButtonsContainer, CartButton, HeaderContainer, LocaleButton } from "./styles";
import { useCart } from '../../hooks/useCart';
import { NavLink } from 'react-router-dom';

export function Header() {
  const { cartQuantity } = useCart();

  return (
    <HeaderContainer>
      <div className='container'>
        <img src={logo} alt="" />

        <ButtonsContainer>
          <LocaleButton>
            <MapPin size={20} weight="fill" />
            Florianópolis, SC
          </LocaleButton>

          <NavLink to="/checkout">
            <CartButton>
              {cartQuantity >= 1 && <span>{cartQuantity}</span> }
              <ShoppingCart size={20} weight="fill" />
            </CartButton>
          </NavLink>
        </ButtonsContainer>
      </div>
    </HeaderContainer>
  )
}
