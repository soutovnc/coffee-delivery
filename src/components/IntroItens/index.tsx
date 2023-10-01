import { ReactNode } from "react"
import { IconContainer, IntroItensContainer } from "./styles";

interface ItensContainerProps {
  iconBg: string;
  icon: ReactNode;
  text: string | ReactNode;
}

export function IntroItens({ iconBg, icon, text }: ItensContainerProps) {
  return (
    <IntroItensContainer>
      <IconContainer iconBg={iconBg}>{icon}</IconContainer>
      {typeof text === "string" ? <p>{text}</p> : text}
    </IntroItensContainer>
  )
}
