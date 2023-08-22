import styled from "styled-components"

const BaseCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme['gray-200']};
  border-radius: 6px;
  padding: 2.5rem;

  gap: 2rem;

  p {
    font-size: 1rem;
    line-height: 1.3;
    color: ${(props) => props.theme['gray-800']};
  }

  span {
    font-size: 0.875rem;
    line-height: 1.3;
    color: ${(props) => props.theme['gray-800']};
    margin-top: 2px;
  }

  header {
    display: flex;
    gap: .5rem;
  }
`

export const BASE_COLORS = {
  yellow: 'yellow-500',
  purple: 'purple-500',
  gray: 'gray-500',
} as const

interface BaseColorProps {
  baseColor: keyof typeof BASE_COLORS
}

export const CoffeeCardContainer = styled(BaseCard) <BaseColorProps>`
  header svg {
    color: ${(props) => props.theme[BASE_COLORS[props.baseColor]]};
  }
`