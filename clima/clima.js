const axios = require('axios');

const getClima = async(lat, lng) => {
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=cb2d1637724b67c389f0af508883c1d8`);
    return resp.data.main.temp;
}

module.exports = { getClima };