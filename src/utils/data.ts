import Expresso from '../assets/Expresso.svg'
import Americano from '../assets/Americano.svg'
import ExpressoCremoso from '../assets/Expresso_Cremoso.svg'
import CafeGelado from '../assets/Cafe_Gelado.svg'
import CafeComLeite from '../assets/Cafe_Com_Leite.svg'
import Latte from '../assets/Latte.svg'
import Capuccino from '../assets/Capuccino.svg'
import Macchiato from '../assets/Macchiato.svg'
import Mocaccino from '../assets/Mocaccino.svg'
import ChocolateQuente from '../assets/Chocolate_Quente.svg'
import Cubano from '../assets/Cubano.svg'
import Havaiano from '../assets/Havaiano.svg'
import Arabe from '../assets/Arabe.svg'
import Irlandes from '../assets/Irlandes.svg'

enum CoffeeTags {
  TRADICIONAL = 'TRADICIONAL',
  COM_LEITE = 'COM LEITE',
  GELADO = 'GELADO',
  ESPECIAL = 'ESPECIAL',
  ALCOOLICO = 'ALCOÓLICO'
}

export const COFFEES = [
  {
    "id": 1,
    "slug": Expresso,
    "tags": [CoffeeTags.TRADICIONAL],
    "title": "Expresso Tradicional",
    "description": "O tradicional café feito com água quente e grãos moídos",
    "price": 9.90,
    "quantity": 0,
    "inCart": false,
  },
  {
    "id": 2,
    "slug": Americano,
    "tags": [CoffeeTags.TRADICIONAL],
    "title": "Expresso Americano",
    "description": "Expresso diluído, menos intenso que o tradicional",
    "price": 9.90,
    "quantity": 0,
    "inCart": false,
  },
  {
    "id": 3,
    "slug": ExpressoCremoso,
    "tags": [CoffeeTags.TRADICIONAL],
    "title": "Expresso Cremoso",
    "description": "Café expresso tradicional com espuma cremosa",
    "price": 9.90,
    "quantity": 0,
    "inCart": false,
  },
  {
    "id": 4,
    "slug": CafeGelado,
    "tags": [CoffeeTags.TRADICIONAL, CoffeeTags.GELADO],
    "title": "Expresso Gelado",
    "description": "Bebida preparada com café expresso e cubos de gelo",
    "price": 9.90,
    "quantity": 0,
    "inCart": false,
  },
  {
    "id": 5,
    "slug": CafeComLeite,
    "tags": [CoffeeTags.TRADICIONAL, CoffeeTags.COM_LEITE],
    "title": "Café com Leite",
    "description": "Meio a meio de expresso tradicional com leite vaporizado",
    "price": 9.90,
    "quantity": 0,
    "inCart": false,
  },
  {
    "id": 6,
    "slug": Latte,
    "tags": [CoffeeTags.TRADICIONAL, CoffeeTags.COM_LEITE],
    "title": "Latte",
    "description": "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    "price": 9.90,
    "quantity": 0,
    "inCart": false,
  },
  {
    "id": 7,
    "slug": Capuccino,
    "tags": [CoffeeTags.TRADICIONAL, CoffeeTags.COM_LEITE],
    "title": "Capuccino",
    "description": "Bebida com canela feita de doses iguais de café, leite e espuma",
    "price": 9.90,
    "quantity": 0,
    "inCart": false,
  },
  {
    "id": 8,
    "slug": Macchiato,
    "tags": [CoffeeTags.TRADICIONAL, CoffeeTags.COM_LEITE],
    "title": "Macchiato",
    "description": "Café expresso misturado com um pouco de leite quente e espuma",
    "price": 9.90,
    "quantity": 0,
    "inCart": false,
  },
  {
    "id": 9,
    "slug": Mocaccino,
    "tags": [CoffeeTags.TRADICIONAL, CoffeeTags.COM_LEITE],
    "title": "Mocaccino",
    "description": "Café expresso com calda de chocolate, pouco leite e espuma",
    "price": 9.90,
    "quantity": 0,
    "inCart": false,
  },
  {
    "id": 10,
    "slug": ChocolateQuente,
    "tags": [CoffeeTags.ESPECIAL, CoffeeTags.COM_LEITE],
    "title": "Chocolate Quente",
    "description": "Bebida feita com chocolate dissolvido no leite quente e café",
    "price": 9.90,
    "quantity": 0,
    "inCart": false,
  },
  {
    "id": 11,
    "slug": Cubano,
    "tags": [CoffeeTags.ESPECIAL, CoffeeTags.ALCOOLICO, CoffeeTags.GELADO],
    "title": "Cubano",
    "description": "Drink gelado de café expresso com rum, creme de leite e hortelã",
    "price": 9.90,
    "quantity": 0,
    "inCart": false,
  },
  {
    "id": 12,
    "slug": Havaiano,
    "tags": [CoffeeTags.ESPECIAL],
    "title": "Havaiano",
    "description": "Bebida adocicada preparada com café e leite de coco",
    "price": 9.90,
    "quantity": 0,
    "inCart": false,
  },
  {
    "id": 13,
    "slug": Arabe,
    "tags": [CoffeeTags.ESPECIAL],
    "title": "Árabe",
    "description": "Bebida preparada com grãos de café árabe e especiarias",
    "price": 9.90,
    "quantity": 0,
    "inCart": false,
  },
  {
    "id": 14,
    "slug": Irlandes,
    "tags": [CoffeeTags.ESPECIAL, CoffeeTags.ALCOOLICO],
    "title": "Irlandês",
    "description": "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    "price": 9.90,
    "quantity": 0,
    "inCart": false,
  },
]
