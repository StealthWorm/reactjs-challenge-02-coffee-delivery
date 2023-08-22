import styled from "styled-components";

export const CheckoutContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  h2 {
    font-family: 'Baloo 2';
    font-size: 1.125rem;
    line-height: 1.3;
  }

  form {
    display: grid;
    grid-template-columns: 1fr minmax(28rem, auto);
    gap: 2rem;
    padding: 2.5rem 0;
    align-items: flex-start;

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      font-size: 87.5%;
      justify-content: center;
    }
  }
`

export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const BaseInput = styled.input`
  display: flex;
  align-items: center;
  gap: .25rem;
  color: ${(props) => props.theme['gray-700']};

  &::placeholder {
    color: ${(props) => props.theme['gray-600']};
  }
  &:focus {
    color: ${(props) => props.theme['gray-700']};
  }
`

export const Cart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  font-size: .75rem;
  
  main {
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme['gray-200']};
    border-radius: 6px 44px;
    padding: 2.5rem;
    gap: 1.5rem;

    button[type="submit"] {
      width: 100%;
      border: 0;
      border-radius: 6px;
      padding: .75rem .5rem;
      color: ${(props) => props.theme['white']};
      background: ${(props) => props.theme['yellow-500']};
      transition: .5s;
      cursor: pointer;
      font-weight: bold;
      line-height: 1.6;
      font-size: 0.875rem;
      text-transform: uppercase;

      &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
        background: ${(props) => props.theme['gray-500']};
      }
      &:not(:disabled):hover {
        background: ${(props) => props.theme['yellow-700']};
      }
    }
  }
`

export const ItemsList = styled.div`
  display: block;
  min-height: 8rem;
  max-height: 15rem;
  overflow-y: auto;
`

export const Total = styled.div`
  display: flex;
  flex-direction: column;
  gap: .75rem;
  line-height: 1.3;

  div {
    display: flex;
    justify-content: space-between;

    span {
      color: ${(props) => props.theme['gray-700']};
      font-size: .875rem;
    }

    input, strong {
      border: none;
      background: transparent;
      text-align: right;
      font-weight: bold;
      color:  ${(props) => props.theme['gray-800']};
      font-size: 1.25rem;
    }
  }
`