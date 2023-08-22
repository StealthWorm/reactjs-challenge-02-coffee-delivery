import { CoffeeItem, Order } from "./reducer"

export enum ActionTypes {
  INCREMENT_COFFEE_QUANTITY = 'INCREMENT_COFFEE_QUANTITY',
  DECREMENT_COFFEE_QUANTITY = 'DECREMENT_COFFEE_QUANTITY',
  ADD_COFFEE_TO_CART = 'ADD_COFFEE_TO_CART',
  DELETE_COFFEE_FROM_CART = 'DELETE_COFFEE_FROM_CART',
  CREATE_NEW_ORDER = 'CREATE_NEW_ORDER',
}

export function incrementQuantityAction(coffeeId: number) {
  return {
    type: ActionTypes.INCREMENT_COFFEE_QUANTITY,
    payload: {
      coffeeId,
    },
  }
}

export function decrementQuantityAction(coffeeId: number) {
  return {
    type: ActionTypes.DECREMENT_COFFEE_QUANTITY,
    payload: {
      coffeeId,
    },
  }
}

export function addCoffeeToCartAction(newCoffeeToCart: CoffeeItem) {
  return {
    type: ActionTypes.ADD_COFFEE_TO_CART,
    payload: {
      newCoffeeToCart,
    },
  }
}

export function removeCoffeeFromCartAction(coffeeId: number) {
  return {
    type: ActionTypes.DELETE_COFFEE_FROM_CART,
    payload: {
      coffeeId,
    },
  }
}

export function createNewOrderAction(newOrder: Order) {
  return {
    type: ActionTypes.CREATE_NEW_ORDER,
    payload: {
      newOrder,
    },
  }
}