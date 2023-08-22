import styled from "styled-components";

export const CoffeeListContainer = styled.div`
  display: block;
  width: 100%;
  padding: 2rem 0;

  h3 {
    font-family: 'Baloo 2';
    font-size: 2rem;
    font-weight: bold;
    line-height: 1.3;
    color: ${(props) => props.theme['gray-800']};
  }
`

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 2rem;

  margin-top: 3.375rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 2rem;
  }
`

