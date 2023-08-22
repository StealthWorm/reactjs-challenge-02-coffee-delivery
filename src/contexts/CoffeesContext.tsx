import { ReactNode, createContext, useEffect, useReducer } from "react";

import { COFFEES } from "../utils/data";
import { CoffeeItem, CreateNewOrderData, Order, coffeesReducer } from "../reducers/coffees/reducer";
import { addCoffeeToCartAction, createNewOrderAction, decrementQuantityAction, incrementQuantityAction, removeCoffeeFromCartAction } from "../reducers/coffees/actions";

enum PaymentMethodsTypes {
  CREDIT = 'Cartão de Crédito',
  DEBIT = 'Cartão de Débito',
  MONEY = 'Dinheiro',
}

interface CoffeesContextType {
  coffees: CoffeeItem[]
  itemsTotalCost: number
  deliveryValue: number
  orders: Order[]
  coffeesInCart: CoffeeItem[]
  addCoffeeToCart: (coffeeItem: CoffeeItem) => void
  incrementQuantity: (coffeeItem: number) => void
  decrementQuantity: (coffeeItem: number) => void
  removeCoffeeFromCart: (coffeeItem: number) => void
  createNewOrder: (data: CreateNewOrderData) => void
}

interface CoffeesContextProviderProps {
  children: ReactNode
}

export const CoffeesContext = createContext({} as CoffeesContextType)

export function CoffeesContextProvider({ children }: CoffeesContextProviderProps) {
  const [coffeesState, dispatch] = useReducer(coffeesReducer,
    {
      coffees: COFFEES,
      orders: [],
    },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:coffee-state-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return initialState
    }
  )
  const { coffees, orders } = coffeesState

  const deliveryValue = 3.50
  const coffeesInCart = coffees.filter(coffee => coffee.inCart)
  const itemsTotalCost = coffeesInCart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  useEffect(() => {
    const stateJSON = JSON.stringify(coffeesState)

    localStorage.setItem('@coffee-delivery:coffee-state-1.0.0', stateJSON)
  }, [coffeesState])

  // Method to increment quantity
  function incrementQuantity(coffeeId: number) {
    dispatch(incrementQuantityAction(coffeeId))
  }

  // Method to decrement quantity
  function decrementQuantity(coffeeId: number) {
    dispatch(decrementQuantityAction(coffeeId))
  }

  function addCoffeeToCart(coffeeItem: CoffeeItem) {
    dispatch(addCoffeeToCartAction(coffeeItem))
  }

  function removeCoffeeFromCart(coffeeItemId: number) {
    dispatch(removeCoffeeFromCartAction(coffeeItemId))
  }

  function createNewOrder(data: CreateNewOrderData) {
    const id = String(new Date().getTime())

    const MappedList = coffeesInCart.map(({ title, price, quantity }) => ({
      title,
      price,
      quantity
    }));

    const newOrder: Order = {
      id,
      cep: data.cep,
      city: data.city,
      neighborhood: data.neighborhood,
      number: data.number,
      state: data.state,
      street: data.street,
      complement: data.complement,
      paymentMethod: PaymentMethodsTypes[data.paymentMethod],
      orderTotalCost: itemsTotalCost + deliveryValue,
      orderItems: MappedList,
      createdDate: new Date(),
    }

    dispatch(createNewOrderAction(newOrder))
  }

  useEffect(() => {
    console.log(orders)
  }, [orders])

  return (
    <CoffeesContext.Provider
      value={{
        coffees,
        itemsTotalCost,
        deliveryValue,
        addCoffeeToCart,
        incrementQuantity,
        decrementQuantity,
        removeCoffeeFromCart,
        createNewOrder,
        orders,
        coffeesInCart,
      }}>
      {children}
    </CoffeesContext.Provider>
  )
}