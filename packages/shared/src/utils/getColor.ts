const colors = ['red', 'brown', 'gray', 'black', 'white', 'beige'] as const

type Color = typeof colors[number]

export const getColor = (): Color => {
  return colors[Math.floor(Math.random() * colors.length)]
}
