import { ReactNode } from "react"
import { SectionSubtitleText, SectionTitleContainer, SectionTitleText } from "./styles";

interface SectionTitleProps {
  title: string;
  subtitle: string;
  icon: ReactNode;
}

export function SectionTitle({ icon, subtitle, title }: SectionTitleProps) {
  return (
    <SectionTitleContainer>
      {icon}
      <div>
        <SectionTitleText>{title}</SectionTitleText>
        <SectionSubtitleText>{subtitle}</SectionSubtitleText>
      </div>
    </SectionTitleContainer>
  )
}
