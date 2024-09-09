const searchInput = document.querySelector('.search-input');
const locationButton = document.querySelector('.location-button');
const currentWeatherDiv = document.querySelector('.current-weather');
const hourlyWeather = document.querySelector('.hourly-weather .weather-list');

const API_KEY = 'YOUR-API-KEY-HERE' // <---------------- API KEY

// weather codes for mapping custom icons:
const weatherCodes = {
    clear: [1000],
    clouds: [1003, 1006, 1009],
    mist: [1030, 1135, 1147],
    rain: [1063, 1150, 1153, 1168, 1171, 1180, 1183, 1198, 1201, 1240, 1243, 1246, 1273, 1276],
    moderate_heavy_rain: [1186, 1189, 1192, 1195, 1243, 1246],
    snow: [1066, 1069, 1072, 1114, 1117, 1204, 1207, 1210, 1213, 1216, 1219, 1222, 1225, 1237, 1249, 1252, 1255, 1258, 1261, 1264, 1279, 1282],
    thunder: [1087, 1279, 1282],
    thunder_rain: [1273, 1276]
}