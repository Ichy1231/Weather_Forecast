import { View, Image } from 'react-native'
import { s } from '../../components/ForecastListItems/ForecastListItems.style'
import { Txt } from '../Txt/Txt'

export function ForecastListItems({ image, day, date, temperature }) {
  return (
    <View style={s.container}>
      <Image style={s.image} source={image} />
      <Txt style={s.day}>{day}</Txt>
      <Txt style={s.date}>{date}</Txt>
      <Txt style={s.temperature}>{temperature}°</Txt>
    </View>
  )
}
