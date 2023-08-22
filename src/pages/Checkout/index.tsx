import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { CheckoutContainer, Total, OrderInfo, Cart, ItemsList } from "./styles";

import { PaymentMethods } from "./components/PaymentMethods";
import { AddressForm } from "./components/AddressForm";
import { CoffeeCard } from "./components/CoffeeCard";
import { CoffeesContext } from "../../contexts/CoffeesContext";
import { CartItem } from "./components/CartItem";

import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

const newOrderFormValidationSchema = zod.object({
  cep: zod.string().regex(/^\d{8}$/, 'Digite um CEP válido'),
  street: zod.string().min(1, 'Informe a Rua'),
  number: zod.string().min(1, 'O número da casa deve ser informado'),
  complement: zod.string().optional(),
  neighborhood: zod.string().min(1, 'Informe o Bairro'),
  city: zod.string().min(1, 'Informe a Cidade'),
  state: zod.string().min(1, 'Informe o Estado'),
  paymentMethod: zod.enum(['DEBIT', 'CREDIT', 'MONEY']).default('CREDIT'),
})

type NewOrderFormData = zod.infer<typeof newOrderFormValidationSchema>

export function Checkout() {
  const {
    itemsTotalCost,
    deliveryValue,
    createNewOrder,
    orders,
    coffeesInCart
  } = useContext(CoffeesContext)
  const navigate = useNavigate();

  const NewOrderForm = useForm<NewOrderFormData>({
    resolver: zodResolver(newOrderFormValidationSchema),
    defaultValues: {
      cep: '',
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      state: '',
      paymentMethod: 'CREDIT',
    },
  })

  const { handleSubmit, reset, watch } = NewOrderForm

  function handleCreateOrder(data: NewOrderFormData) {
    createNewOrder(data)
    reset()

    navigate('/checkout/success');
  }

  const formData = watch()
  const isSubmitDisabled = !formData || itemsTotalCost === 0

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit(handleCreateOrder)}>
        <OrderInfo>
          <h2>Complete seu pedido</h2>

          <FormProvider {...NewOrderForm}>
            <CoffeeCard
              title="Endereço de Entrega"
              subtitle="Informe o endereço onde deseja receber seu pedido"
              children={<AddressForm />}
              icon="MapPinLine"
              color="yellow"
            />
            <CoffeeCard
              title="Pagamento"
              subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
              children={<PaymentMethods />}
              icon="CurrencyDollar"
              color="purple"
            />
          </FormProvider>
        </OrderInfo>

        <Cart>
          <h2>Cafés selecionados</h2>

          <main>
            <ItemsList>
              {coffeesInCart.length > 0
                ? (coffeesInCart.map((item) => {
                  return (
                    <CartItem data={item} key={item.id} />
                  )
                }))
                : (
                  <h2>Não há items no carrinho ☕</h2>
                )
              }
            </ItemsList>

            <Total>
              <div>
                <span>Total de itens</span>
                <span>R$ {itemsTotalCost.toFixed(2)}</span>
              </div>
              <div>
                <span>Entrega</span>
                <span>R$ {deliveryValue.toFixed(2)}</span>
              </div>
              <div>
                <strong>Total</strong>
                <strong>R$ {(itemsTotalCost + deliveryValue).toFixed(2)}</strong>
              </div>
            </Total>

            <button type="submit" disabled={isSubmitDisabled}>confirmar pedido</button>
          </main>
        </Cart>
      </form>
    </CheckoutContainer >
  )
}