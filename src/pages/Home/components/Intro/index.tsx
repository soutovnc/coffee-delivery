import { IntroContainer, IntroContent, IntroText, IntroTitle } from "./styles";
import backgroundHero from '../../../../assets/backgroundHero.png'


export function Intro() {
  return (
    <IntroContainer>
      <img src={backgroundHero} alt="" />
      <IntroContent className="container">
        <IntroTitle>
          Encontre o café perfeito para qualquer hora do dia
        </IntroTitle>
        <IntroText>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
        </IntroText>
      </IntroContent>
    </IntroContainer>
  )
}
