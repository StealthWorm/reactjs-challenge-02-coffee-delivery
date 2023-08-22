import { useContext } from "react";

import { CoffeesContext } from "../../../../contexts/CoffeesContext";

import { CoffeeListContainer, List } from "./styles";
import { CoffeeCard } from "../CoffeeCard";

export function CoffeeList() {
  const { coffees } = useContext(CoffeesContext)

  return (
    <CoffeeListContainer>
      <h3>Nossos cafés</h3>

      <List>
        {coffees.map((coffee) => {
          return (
            <CoffeeCard key={coffee.id} data={coffee} />
          )
        })}
      </List>
    </CoffeeListContainer>
  )
}