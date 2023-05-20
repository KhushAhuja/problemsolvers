const API_Key = '5b18433c05e6123b8617d0081db2fab3';
const BASE_URL = 'https://api.openweathermap.org/data/3.0'

const getWeatherData = (infoType,searchParams) =>
{
    const url = new URL(BASE_URL+'/'+'/weather')
    url.search = new URLSearchParams({...searchParams,appid:API_Key})

    return fetch(url)
    .then((res)=>res.json)
    .them((data)=>data)
}


export default getWeatherData;