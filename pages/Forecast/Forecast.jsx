import { View } from 'react-native'
import { Txt } from '../../components/Txt/Txt'
import { useRoute } from '@react-navigation/native'
import { Header } from '../../components/Header/Header'
import { ForecastListItems } from '../../components/ForecastListItems/ForecastListItems'
import { getWeatherInterpretation, DAYS } from '../../utils/meteo-utils.js'

export function Forecast() {
  const { params } = useRoute()

  const forecastList = (
    <View style={{ marginTop: 50 }}>
      {params.time.map((time, index) => {
        const weatherCode = params.weathercode[index]
        const image = getWeatherInterpretation(weatherCode).image
        const temperature = params.temperature_2m_max[index]
        const date = new Date(time)
        const dayOfTheWeek = DAYS[date.getDay()]
        const formatedDate = date.toLocaleDateString('default', {
          day: 'numeric',
          month: 'numeric',
        })
        return (
          <ForecastListItems
            key={time}
            image={image}
            day={dayOfTheWeek}
            date={formatedDate}
            temperature={temperature.toFixed(0)}
          />
        )
      })}
    </View>
  )
  return (
    <>
      <Header city={params.city} />
      {forecastList}
    </>
  )
}
