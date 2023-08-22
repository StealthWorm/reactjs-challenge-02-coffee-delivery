import { ReactNode } from "react";
import { CurrencyDollar, MapPinLine, Question } from "@phosphor-icons/react";
import { BASE_COLORS, CoffeeCardContainer } from "./styles";

interface CoffeeCardProps {
  title: string;
  subtitle: string;
  children: ReactNode
  icon: string;
  color?: keyof typeof BASE_COLORS;
}

export function CoffeeCard({ title, subtitle, children, icon, color = 'gray' }: CoffeeCardProps) {
  function renderIcon(icon: string) {
    switch (icon) {
      case "MapPinLine":
        return <MapPinLine size={22} />
      case "CurrencyDollar":
        return <CurrencyDollar size={22} />
      default:
        return <Question size={22} weight="fill"/>
    }
  }
  
  return (
    <CoffeeCardContainer baseColor={color}>
      <header>
        {renderIcon(icon)}
        <div>
          <p>{title}</p>
          <span>{subtitle}</span>
        </div>
      </header>

      {children}
    </CoffeeCardContainer>
  )
}