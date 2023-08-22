import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.5rem;
    
    a {
      display: flex;
      min-width: 2.375rem;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      border-radius: 8px;
      font-size: 1.125rem;
      padding: .5rem;
    }

    a:first-child {
      background: ${(props) => props.theme['purple-300']};
      color: ${(props) => props.theme['purple-700']};
      gap: 4px;

      svg {
        color: ${(props) => props.theme['purple-500']};
      }
    }

    a:last-child {
      position: relative;
      background: ${(props) => props.theme['yellow-300']};
      color: ${(props) => props.theme['yellow-700']};

      span {
        display: flex;
        position: absolute;
        align-items: center;
        justify-content: center;
        top: -.5rem;
        right: -.5rem;
        width: 1.25rem;
        height: 1.25rem;
        border-radius: 50%;
        background: ${(props) => props.theme['yellow-700']};
        color: ${(props) => props.theme['white']};
        color: var(--base-white, #FFF);
        text-align: center;
        font-size: .75rem;
        font-weight: bold;
        letter-spacing: -0.72px;
      }
    }
  }

  @media (max-width: 768px) {
    font-size: 87.5%;
  }
`
