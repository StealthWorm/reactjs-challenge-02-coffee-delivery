import styled from "styled-components";

export const HomeContainer = styled.header`
  flex: 1;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
`

export const Intro = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  align-items: center;
  justify-content: center;
  gap: 3.5rem;
  padding: 5.75rem 0;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    font-size: 87.5%;
    justify-content: center;

    img {
      position: absolute;
      opacity: 0.2;
      z-index: -1;
    }
  }
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  line-height: 1.3;

  h1 {
    color: ${(props) => props.theme['gray-900']};
    font-family: 'Baloo 2';
    font-size: 3rem;
  }

  p {
    font-size: 1.25rem;
  }

  @media (max-width: 768px) {
    font-size: 87.5%;

    h1 {
      font-size: 2rem;
    }
  }
`

export const Items = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  margin-top: 4.125rem;
`