import { Text, useWindowDimensions } from 'react-native'
import { s } from './Txt.style'
import { Children } from 'react'
const REALME = 0.001553867403314917

export function Txt({ children, style }) {
  const fontSize = style?.fontSize || s.txt.fontSize
  const { height } = useWindowDimensions()
  return (
    <Text
      style={[
        s.txt,
        style,
        {
          fontSize: Math.round(fontSize * REALME * height),
        },
      ]}
    >
      {' '}
      {children}
    </Text>
  )
}
