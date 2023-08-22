import styled from "styled-components";


export const SuccessContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 6.375rem;
  padding: 5rem 0;

  align-items: center;

  header {
    display: flex;
    flex-direction: column;
    gap: .25rem;
    line-height: 1.3;

    h1 {
      color: ${(props) => props.theme['yellow-700']};
      font-family: 'Baloo 2';
      font-size: 2rem;
    }

    p {
      color: ${(props) => props.theme['gray-800']};
      font-size: 1.25rem;
    }

  }

  img {
    height: 100%;
    width: 100%;
  }
`

export const OrderInfoWrapper = styled.div`
  display: flex;
  flex: 1;
  border-radius: 6px 44px;
  overflow: hidden;
  padding: 2px 2px;

  margin-top: 2.5rem;
  background: linear-gradient(-200deg, ${(props) => props.theme['yellow-500']} 0%, ${(props) => props.theme['purple-500']} 100%);
`

export const OrderInfo = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  flex-direction: column;
  padding:  2.5rem;
  gap: 2rem;
  border-radius: 4px 42px;

  background: ${(props) => props.theme['gray-100']};
`