import { HeaderContainer, HomeContainer, Intro, Items } from "./styles";
import coffee from '../../assets/coffee-logo.svg'

import { InfoItem } from "../../components/InfoItem";
import { CoffeeList } from "./components/CoffeeList";

export function Home() {
  return (
    <HomeContainer>
      <Intro>
        <div>
          <HeaderContainer>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          </HeaderContainer>

          <Items>
            <InfoItem
              title="Compra simples e segura"
              color="yellowDark"
              icon="ShoppingCart"
            />
            <InfoItem
              title="Embalagem mantém o café intacto"
              color="base"
              icon="Package"
            />
            <InfoItem
              title="Entrega rápida e rastreada"
              color="yellow"
              icon="Timer"
            />
            <InfoItem
              title="O café chega fresquinho até você"
              color="purple"
              icon="Coffee"
            />
          </Items>
        </div>

        <img src={coffee} />
      </Intro>

      <CoffeeList />
    </HomeContainer>
  )
}