import axios from 'axios'

export class MeteoAPI {
  static async fetchWeatherByCoords(coords) {
    console.log('fetchWeatherByCoords', coords)
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

  static async fetchCityByCoords(coords) {
    try {
      console.log('fetchCityByCoords > ', coords)
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${coords.lat}&lon=${coords.lng}`
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

  static async fetchCoordsByCity(city) {
    try {
      const response = await axios.get(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`
      )

      console.log(
        'fetchCoordsByCity response',
        response.data.results[0].latitude,
        response.data.results[0].longitude
      )
      return {
        lat: response.data.results[0].latitude,
        lng: response.data.results[0].longitude,
      }
    } catch (err) {
      throw 'invalid city name'
    }
  }
}
