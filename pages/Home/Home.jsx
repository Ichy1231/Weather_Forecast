import { View } from 'react-native'
import { s } from './Home.style'
import { Txt } from '../../components/Txt/Txt'
import { MateoBasic } from '../../components/Txt/MeteoBasic/MateoBasic'
import { getWeatherInterpretation } from '../../utils/meteo-utils'
import { MeteoAdvanced } from '../../components/MeteoAdvanced/MeteoAdvanced'

export function Home({ weather, city }) {
  const currentWeather = weather.current_weather
  const currentInterpretation = getWeatherInterpretation(
    currentWeather.weathercode
  )
  return (
    <>
      <View style={s.mateo_basic}>
        <MateoBasic
          city={city}
          interpretation={currentInterpretation}
          temperature={Math.round(currentWeather.temperature)}
        />
      </View>
      <View style={s.searchbar_container}>
        <Txt style={s.txt}>SearchBar</Txt>
      </View>
      <View style={s.meteo_advanced}>
        <MeteoAdvanced
          sunrise={weather.daily.sunrise[0].split('T')[1]}
          sunset={weather.daily.sunset[0].split('T')[1]}
          windspeed={currentWeather.windspeed}
        />
      </View>
    </>
  )
}
