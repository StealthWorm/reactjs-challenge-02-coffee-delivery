import styled from "styled-components";

export const CounterContainer = styled.div`
  display: flex;
  padding:  .5rem;
  gap: 0.25rem;
  border-radius: 6px;
  align-items: center;

  background: ${(props) => props.theme['gray-400']};

  input {
    text-align: center;
    background: transparent;
    border: 0;
    font-weight: bold;
    padding: 0 .25rem;
    font-size: 1rem;
    color: ${(props) => props.theme['gray-900']};
    max-width: 28px;

    &::-webkit-inner-spin-button, 
    &::-webkit-outer-spin-button { 
      -webkit-appearance: none;
    }
  }

  button {
    border: 0;
    border-radius: 8px;
    color: ${(props) => props.theme['purple-500']};
    background: transparent;
    cursor: pointer;
    line-height: 0;

    &:hover {
      color: ${(props) => props.theme['purple-700']};
    }
    &:focus {
      box-shadow: none;
    }
  }
`