export const colors = [
  'red',
  'brown',
  'gray',
  'black',
  'white',
  'beige',
] as const

export type Color = typeof colors[number]
