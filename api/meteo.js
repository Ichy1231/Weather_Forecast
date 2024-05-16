import axios from 'axios'

export const MeteoAPI = {
  fetchWeatherByCoords: async (coords) => {
    const response = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lng}&daily=weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max&timezone=auto&current_weather=true`
    )
    return response.data
  },
}
