import { useContext } from "react";

import { Actions, ButtonCart, Buy, CoffeeCardContainer, Tags } from "./styles"
import { ShoppingCart } from "@phosphor-icons/react"

import { Counter } from "../../../../components/Counter"
import { CoffeesContext } from "../../../../contexts/CoffeesContext";
import { CoffeeItem } from "../../../../reducers/coffees/reducer";

interface CoffeeCardProps {
  data: CoffeeItem
}

export function CoffeeCard({ data }: CoffeeCardProps) {
  const { addCoffeeToCart } = useContext(CoffeesContext)

  function handleAddCoffeeToCart() {
    addCoffeeToCart(data)
  }

  return (
    <CoffeeCardContainer>
      <img src={data.slug} alt={data.title} />
      <Tags>
        {data.tags.map((tag, index) => {
          return (
            <strong key={index}>{tag}</strong>
          )
        })}
      </Tags>

      <h3>{data.title}</h3>
      <p>{data.description}</p>

      <Buy>
        <div>
          <span>R$</span>
          <strong>{data.price.toFixed(2)}</strong>
        </div>

        <Actions>
          <Counter
            currentCoffeeId={data.id}
            counterValue={data.quantity}
          />

          <ButtonCart onClick={handleAddCoffeeToCart} disabled={data.quantity == 0}>
            <ShoppingCart size={22} weight="fill" />
          </ButtonCart>
        </Actions>
      </Buy>
    </CoffeeCardContainer>
  )
}