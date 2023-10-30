import axios from 'axios';

const getWeather = async() => {
    const response = await axios.get('http://dataservice.accuweather.com/forecasts/v1/daily/1day/346069?apikey=HcryAg0n4399F1jL3yA6doiG5zxallKP');
    // return response.data.DailyForecasts[0].Day.IconPhrase;
    return response.data;
}



export default getWeather;