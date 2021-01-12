import { colors, Color } from '@saxo/types/Color'

export const getColor = (): Color => {
  return colors[Math.floor(Math.random() * colors.length)]
}
