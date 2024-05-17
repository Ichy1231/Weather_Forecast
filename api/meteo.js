import axios from 'axios'

export const MeteoAPI = {
  fetchWeatherByCoords: async ({ lat, lng }) => {
    const response = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&daily=weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max&timezone=auto&current_weather=true`
    )
    return response.data
  },
}
