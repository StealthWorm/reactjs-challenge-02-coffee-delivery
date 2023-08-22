import { Coffee, CurrencyDollar, MapPin, Package, Question, ShoppingCart, Timer } from "@phosphor-icons/react";
import { ITEM_COLORS, IconBox, ItemContainer } from "./styles";

interface ItemProps {
  title: string;
  subtitle?: string;
  icon: string;
  color?: keyof typeof ITEM_COLORS;
}

export function InfoItem({ title, subtitle, icon, color = 'base' }: ItemProps) {

  function renderIcon(icon: string) {
    switch (icon) {
      case "ShoppingCart":
        return <ShoppingCart size={16} weight="fill" />
      case "Timer":
        return <Timer size={16} weight="fill" />
      case "Package":
        return <Package size={16} weight="fill" />
      case "Coffee":
        return <Coffee size={16} weight="fill" />
      case "CurrencyDollar":
        return <CurrencyDollar size={16} weight="fill" />
      case "MapPin":
        return <MapPin size={16} weight="fill" />
      default:
        return <Question size={22} weight="fill"/>
    }
  }

  return (
    <ItemContainer>
      <IconBox variantColor={color}>
        {renderIcon(icon)}
      </IconBox>
      <header>
        <span>{title}</span>
        {subtitle &&
          <span>{subtitle}</span>
        }
      </header>
    </ItemContainer >
  )
}