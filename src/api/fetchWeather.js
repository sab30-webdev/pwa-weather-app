import axios from "axios";

const API_KEY = "fcc1f007d018498a40309f8e3301e3e5";
const URL = "https://api.openweathermap.org/data/2.5/weather";

export const fetchWeather = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      appid: API_KEY,
      units: "metric",
    },
  });
  return data;
};
