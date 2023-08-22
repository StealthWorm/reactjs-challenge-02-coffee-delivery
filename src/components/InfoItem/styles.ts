import styled from "styled-components";

export const ITEM_COLORS = {
  yellow: 'yellow-500',
  yellowDark: 'yellow-700',
  purple: 'purple-500',
  purpleDark: 'purple-700',
  base: 'gray-700',
} as const

interface IconBoxProps {
  variantColor: keyof typeof ITEM_COLORS
}

export const IconBox = styled.div<IconBoxProps>`
  display: flex;
  align-items: center;
  padding: .5rem;
  background:${(props) => props.theme[ITEM_COLORS[props.variantColor]]};
  border-radius: 50%;
`

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: .75rem;

  svg {
    color: ${(props) => props.theme['gray-100']};
  }

  span {
    font-size: 1rem;
    line-height: 1.3;
    color: ${(props) => props.theme['gray-700']};

    &:nth-of-type(2) {
      font-weight: bold;
    }
  }
`