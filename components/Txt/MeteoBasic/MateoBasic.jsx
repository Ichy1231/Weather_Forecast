import { Image, TouchableOpacity, View } from 'react-native'
import { s } from './MateoBasic.style'
import { Txt } from '../../Txt/Txt'
import { Clock } from '../../Clock/Clock'
import { useNavigation } from '@react-navigation/native'

export function MateoBasic({
  temperature,
  interpretation,
  city,
  dailyWeather,
}) {
  const nav = useNavigation()
  return (
    <>
      <View style={s.clock}>
        <Clock />
      </View>
      <View style={s.city}>
        <Txt>{city}</Txt>
      </View>
      <View style={s.interpretation}>
        <Txt style={s.interpretation_txt}>Sunny</Txt>
      </View>
      <View style={s.tempBox}>
        <TouchableOpacity
          onPress={() => nav.navigate('Forecast', { city, ...dailyWeather })}
        >
          <Txt style={s.temp}>{temperature}°</Txt>
        </TouchableOpacity>
        <Image style={s.image} source={interpretation.image} />
      </View>
    </>
  )
}
