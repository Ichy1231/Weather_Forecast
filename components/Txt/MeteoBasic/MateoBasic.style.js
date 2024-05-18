import { StyleSheet } from 'react-native'

export const s = StyleSheet.create({
  image: {
    height: 50,
    width: 50,
  },

  clock: {
    alignItems: 'flex-end',
  },

  city: {},
  interpretation: {
    alignSelf: 'flex-end',
    transform: [{ rotate: '-90deg' }],
  },
  interpretation_txt: { fontSize: 20 },
  tempBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  temp: { fontSize: 100 },
})
