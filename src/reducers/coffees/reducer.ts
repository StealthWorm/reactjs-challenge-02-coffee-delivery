import { COFFEES } from "../../utils/data";
import { ActionTypes } from "./actions";

enum CoffeeTags {
  TRADICIONAL = 'TRADICIONAL',
  COM_LEITE = 'COM LEITE',
  GELADO = 'GELADO',
  ESPECIAL = 'ESPECIAL',
  ALCOOLICO = 'ALCOÓLICO'
}

export interface CreateNewOrderData {
  cep: string,
  street: string,
  number: string,
  complement?: string,
  neighborhood: string,
  city: string,
  state: string,
  paymentMethod: "DEBIT" | "CREDIT" | "MONEY",
}

export interface CoffeeItem {
  id: number;
  slug: string;
  tags: CoffeeTags[];
  title: string;
  description: string;
  price: number;
  quantity: number;
  inCart: boolean;
}

interface CoffeeIteMapped {
  title: string;
  price: number;
  quantity: number;
}

export interface Order {
  id: string
  cep: string,
  street: string,
  number: string,
  complement?: string,
  neighborhood: string,
  city: string,
  state: string,
  paymentMethod: string,
  orderItems: CoffeeIteMapped[],
  orderTotalCost: number,
  createdDate?: Date
}

interface CoffeesState {
  coffees: CoffeeItem[],
  orders: Order[],
  // totalCost: 0,
}

export function coffeesReducer(state: CoffeesState, action: any) {
  switch (action.type) {
    case ActionTypes.INCREMENT_COFFEE_QUANTITY:{
      return {
        ...state,
        coffees: state.coffees.map((coffee) => {
          if (coffee.id === action.payload.coffeeId) {
            return { ...coffee, quantity: coffee.quantity + 1 }
          } else {
            return coffee
          }
        }),
      }}

    case ActionTypes.DECREMENT_COFFEE_QUANTITY:
      return {
        ...state,
        coffees: state.coffees.map((coffee) => {
          if (coffee.id === action.payload.coffeeId && coffee.quantity === 0) {
            return { ...coffee, inCart: false };
          }

          if (coffee.id === action.payload.coffeeId && coffee.quantity > 0) {
            return { ...coffee, quantity: coffee.quantity - 1 };
          }

          return coffee;
        }),
      }

    case ActionTypes.ADD_COFFEE_TO_CART: {
      return {
        ...state,
        coffees: state.coffees.map((coffee) => {
          if (coffee.id === action.payload.newCoffeeToCart.id) {
            return {
              ...coffee,
              quantity: action.payload.newCoffeeToCart.quantity,
              inCart: true,
            }
          } else {
            return coffee
          }
        }),
      }
    }

    case ActionTypes.DELETE_COFFEE_FROM_CART: return {
      ...state,
      coffees: state.coffees.filter((coffee) =>
        coffee.id !== action.payload.coffeeId
      ),
    }

    case ActionTypes.CREATE_NEW_ORDER: {
      return {
        ...state,
        coffees: COFFEES,
        orders: [...state.orders, action.payload.newOrder]
      }
    }

    default:
      return state
  }
}