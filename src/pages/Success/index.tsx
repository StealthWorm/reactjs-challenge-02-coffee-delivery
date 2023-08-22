import { useContext } from "react";

import { OrderInfo, OrderInfoWrapper, SuccessContainer } from "./styles";
import deliveryLogo from '../../assets/delivery.svg';

import { InfoItem } from "../../components/InfoItem";
import { CoffeesContext } from "../../contexts/CoffeesContext";

export function Success() {
  const { orders } = useContext(CoffeesContext)
  const lastOrder = orders[orders.length - 1]

  return (
    <SuccessContainer>
      <div>
        <header>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </header>

        {lastOrder &&
          <OrderInfoWrapper>
            <OrderInfo>
              <InfoItem
                title="Entrega em"
                subtitle={`Rua ${lastOrder.street}, ${lastOrder.number} ${lastOrder.neighborhood} - ${lastOrder.city}, ${lastOrder.state}`}
                color="purple"
                icon="MapPin"
              />
              <InfoItem
                title="Previsão de entrega"
                subtitle="20 min - 30 min"
                color="yellow"
                icon="ShoppingCart"
              />
              <InfoItem
                title="Pagamento na entrega"
                subtitle={lastOrder.paymentMethod}
                color="yellowDark"
                icon="CurrencyDollar"
              />
            </OrderInfo>
          </OrderInfoWrapper>
        }
      </div>

      <img src={deliveryLogo} alt="Delivery Motocycle" />
    </SuccessContainer>
  )
}