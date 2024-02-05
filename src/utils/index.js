function kelvinToCelsius(value) {
  var result = (value - 273.15).toFixed(0);
  return result;
}

const fetchData = (cityName) => {
  let data = fetch(
    `http://api.openweathermap.org/data/2.5/forecast?id=524901&q=${cityName}&appid=e74fe27c8816969e6b2b42b94360b611`
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((resData) => {
      return resData;
    })
    .catch((error) => console.log(error));
    console.log(cityName);
  return data;
};

export { kelvinToCelsius , fetchData };
