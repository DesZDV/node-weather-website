const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=307e67fbfd159402e2d4cb6ff1a4ff33&query=' + latitude + ',' + longitude + '&units=m';
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions + '. It is currently '
                + body.current.temperature + ' degress out. It feel like ' + body.current.feelslike
                + ' degrees out. The humidity is ' + body.current.humidity + '%.' );
        }
    })
}

module.exports = forecast