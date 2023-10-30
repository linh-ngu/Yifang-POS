import axios from 'axios';

const getWeather = async() => {
    const response = await axios.get('http://dataservice.accuweather.com/forecasts/v1/daily/1day/349727?apikey=HcryAg0n4399F1jL3yA6doiG5zxallKP');
    return response.data.Headline.Text;
}



export default getWeather;