import { useContext } from "react";

import { ButtonDelete, CartItemContainer, Details, Info } from "./styles";
import { Trash } from "@phosphor-icons/react";

import { Counter } from "../../../../components/Counter";

import { CoffeesContext } from "../../../../contexts/CoffeesContext";
import { CoffeeItem } from "../../../../reducers/coffees/reducer";

interface CartItemProps {
  data: CoffeeItem
}

export function CartItem({ data }: CartItemProps) {
  const { removeCoffeeFromCart } = useContext(CoffeesContext)

  function handleDeleteCoffee(itemId: number) {
    removeCoffeeFromCart(itemId)
  }

  return (
    <CartItemContainer>
      <Info>
        <img src={data.slug} alt="café" />

        <div>
          <p>{data.title}</p>
          <Details>
            <Counter
              currentCoffeeId={data.id}
              counterValue={data.quantity}
            />
            <ButtonDelete onClick={() => handleDeleteCoffee(data.id)}>
              <Trash size={16} />
              <span>remover</span>
            </ButtonDelete>
          </Details>
        </div>
      </Info>

      <strong>R$ {data.price.toFixed(2)}</strong>
    </CartItemContainer>
  )
}