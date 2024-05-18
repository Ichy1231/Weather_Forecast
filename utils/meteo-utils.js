export const WEATHER_INTERPRATIONS = [
  {
    codes: [0],
    label: 'Sunny',
    image: require('../assests/sun.png'),
  },
  {
    codes: [1, 2, 3, 45, 48],
    label: 'Cloudy',
    image: require('../assests/clouds.png'),
  },
  {
    codes: [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82, 85, 86],
    label: 'Rainy',
    image: require('../assests/rain.png'),
  },
  {
    codes: [71, 73, 75, 77],
    label: 'Snowy',
    image: require('../assests/snow.png'),
  },
  {
    codes: [95, 96, 99],
    label: 'Thunderous',
    image: require('../assests/thunder.png'),
  },
]

export function getWeatherInterpretation(code) {
  return WEATHER_INTERPRATIONS.find((interpretation) =>
    interpretation.codes.includes(code)
  )
}
