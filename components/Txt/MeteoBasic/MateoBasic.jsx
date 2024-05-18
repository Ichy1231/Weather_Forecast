import { Image, View } from 'react-native'
import { s } from './MateoBasic.style'
import { Txt } from '../../Txt/Txt'
import { Clock } from '../../Clock/Clock'

export function MateoBasic({ temperature, interpretation, city }) {
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
        <Txt style={s.temp}>{temperature}°</Txt>
        <Image style={s.image} source={interpretation.image} />
      </View>
    </>
  )
}
