import axios from 'axios'

export class MeteoAPI {
  static async fetchWeatherByCoords(coords) {
    try {
      const response = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lng}&daily=weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max&timezone=auto&current_weather=true`
      )
      return response.data
    } catch (error) {
      console.error('Error fetching weather data:', error)
      throw error
    }
  }

  static async fetchCityByCoords({ lat, lng }) {
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
      )
      const address = response.data.address
      if (!address) {
        throw new Error('No address found in the response')
      }
      const { city, village, town } = address
      return city || village || town || 'Unknown location'
    } catch (error) {
      console.error('Error fetching city data:', error)
      throw error
    }
  }
}
