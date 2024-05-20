import { TouchableOpacity, View } from 'react-native'
import { Txt } from '../Txt/Txt'
import { useNavigation } from '@react-navigation/native'
import { s } from '../../components/Header/Header.style'

export function Header({ city }) {
  const nav = useNavigation()
  return (
    <View style={s.container}>
      <TouchableOpacity style={s.back_btn} onPress={nav.goBack}>
        <Txt>{'<'}</Txt>
      </TouchableOpacity>
      <View style={s.header_txts}>
        <Txt>{city}</Txt>
        <Txt style={s.subtitle}>7 days to forecast</Txt>
      </View>
      <View />
    </View>
  )
}
