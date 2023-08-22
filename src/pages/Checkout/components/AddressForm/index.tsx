import { useFormContext } from "react-hook-form";
import { AddressInput, FormContainer } from "./styles";

export function AddressForm() {
  const { register } = useFormContext()

  return (
    <FormContainer>
      <AddressInput
        id="cep"
        placeholder="CEP"
        maxLength={8}
        {...register('cep')}
      />
      <AddressInput
        id="street"
        placeholder="Rua"
        {...register('street')}
      />
      <AddressInput
        id="number"
        placeholder="Número"
        {...register('number')}
      />
      <AddressInput
        id="complement"
        placeholder="Complemento"
        {...register('complement')}
      />
      <AddressInput
        id="neighborhood"
        placeholder="Bairro"
        {...register('neighborhood')}
      />
      <AddressInput
        id="city"
        placeholder="Cidade"
        {...register('city')}
      />
      <AddressInput
        id="state"
        list="states"
        placeholder="UF"
        type="select"
        {...register('state')}
      />

      <datalist id="states">
        <option value="AC" />
        <option value="AL" />
        <option value="AM" />
        <option value="AP" />
        <option value="BA" />
        <option value="CE" />
        <option value="DF" />
        <option value="ES" />
        <option value="GO" />
        <option value="MA" />
        <option value="MG" />
        <option value="MS" />
        <option value="MT" />
        <option value="PA" />
        <option value="PB" />
        <option value="PE" />
        <option value="PI" />
        <option value="PR" />
        <option value="RJ" />
        <option value="RN" />
        <option value="RO" />
        <option value="RR" />
        <option value="RS" />
        <option value="SC" />
        <option value="SE" />
        <option value="SP" />
        <option value="TO" />
      </datalist>

    </FormContainer>
  )
}