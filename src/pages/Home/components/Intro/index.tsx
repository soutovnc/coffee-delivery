import { IntroContainer, IntroContent, IntroText, IntroTitle, ItensContainer } from "./styles";
import backgroundHero from '../../../../assets/backgroundHero.png'
import heroImg from '../../../../assets/hero-coffee.svg';
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { IntroItens } from "../../../../components/IntroItens";
import { useTheme } from "styled-components";
// import { useTheme } from "styled-components";


export function Intro() {
  const { colors } = useTheme()

  return (
    <IntroContainer>
      <img src={backgroundHero} alt="" />
      <IntroContent className="container">
        <div>

          <section>
            <IntroTitle>
              Encontre o café perfeito para qualquer hora do dia
            </IntroTitle>
            <IntroText>
              Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
            </IntroText>
          </section>

          <ItensContainer>
            <IntroItens
              iconBg={colors["yellow-dark"]}
              icon={<ShoppingCart weight="fill" />}
              text="Compra simples e segura"
            />
            <IntroItens
              iconBg={colors["base-text"]}
              icon={<Package weight="fill" />}
              text="Embalagem mantém o café intacto"
            />
            <IntroItens
              iconBg={colors["yellow"]}
              icon={<Timer weight="fill" />}
              text="Entrega rápida e rastreada"
            />
            <IntroItens
              iconBg={colors["purple"]}
              icon={<Coffee weight="fill" />}
              text="O café chega fresquinho até você"
            />
          </ItensContainer>
        </div>
        <img src={heroImg} alt="" />
      </IntroContent>
    </IntroContainer>
  )
}
