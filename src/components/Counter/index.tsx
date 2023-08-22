import { Minus, Plus } from "@phosphor-icons/react";
import { CounterContainer } from "./styles";
import { FormEvent, useContext } from "react";
import { CoffeesContext } from "../../contexts/CoffeesContext";

interface CounterProps {
  currentCoffeeId: number
  counterValue: number
}

export function Counter({ currentCoffeeId, counterValue }: CounterProps) {
  const { incrementQuantity, decrementQuantity } = useContext(CoffeesContext)

  function handleIncrementValue(event: FormEvent) {
    event.preventDefault()
    incrementQuantity(currentCoffeeId)
  }

  function handleDecrementValue(event: FormEvent) {
    event.preventDefault()
    decrementQuantity(currentCoffeeId)
  }

  return (
    <CounterContainer>
      <button onClick={handleDecrementValue}>
        <Minus size={14} weight="bold" />
      </button>
      <input
        placeholder="0"
        readOnly
        value={counterValue}
      />
      <button onClick={handleIncrementValue}>
        <Plus size={14} weight="bold" />
      </button>
    </CounterContainer>
  )
}