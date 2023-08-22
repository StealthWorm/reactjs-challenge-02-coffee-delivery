import { Bank, CreditCard, Money } from "@phosphor-icons/react";
import { PaymentLabel, PaymentMethodsContainer, RadioInput } from "./styles";
import { useFormContext } from "react-hook-form";

export function PaymentMethods() {
  const { register } = useFormContext()

  return (
    <PaymentMethodsContainer>
      <RadioInput
        type="radio"
        id="credit-card"
        value="CREDIT"
        {...register('paymentMethod')}
      />
      <PaymentLabel htmlFor="credit-card">
        <CreditCard size={16} />
        Cartão de Crédito
      </PaymentLabel>

      <RadioInput
        type="radio"
        id="debit-card"
        value="DEBIT"
        {...register('paymentMethod')}
      />
      <PaymentLabel htmlFor="debit-card">
        <Bank size={16} />
        Cartão de Débito
      </PaymentLabel>

      <RadioInput
        type="radio"
        id="money"
        value="MONEY"
        {...register('paymentMethod')}
      />
      <PaymentLabel htmlFor="money">
        <Money size={16} />
        Dinheiro
      </PaymentLabel>
    </PaymentMethodsContainer>
  )
}