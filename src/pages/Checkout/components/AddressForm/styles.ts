import styled from "styled-components";
import { BaseInput } from "../../styles";

export const FormContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;

  flex-wrap: wrap;
  align-items: flex-start;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    font-size: 87.5%;
    justify-content: center;
  }
`

export const AddressInput = styled(BaseInput)`
  flex: 1;
  background: ${(props) => props.theme['gray-300']};
  border: 1px solid ${(props) => props.theme['gray-400']};
  border-radius: 4px;
  padding: .75rem;
  font-size: 0.875rem;

  &:nth-child(2) {
    grid-column: 1 / span 7;
  }
  &:nth-child(4) {
    grid-column: 2 / span 6;
  }
  &:nth-child(6) {
    grid-column: 2 / span 5;
  }
  &:nth-child(7) {
    max-width: 4rem;
  }

  @media (max-width: 768px) {
    display: flex;
    font-size: 87.5%;
    width: 100%;
  }
`