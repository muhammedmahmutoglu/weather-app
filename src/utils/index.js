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
  return data;
};

const calculateDay = (value) => {
  let day = 0;
  if (value < 1) {
    day = 5;
  } else if (value < 2) {
    day = 17;
  } else if (value < 3) {
    day = 20;
  } else if (value < 4) {
    day = 30;
  } else if (value < 5) {
    day = 35;
  }
  return day;
};

export { kelvinToCelsius, fetchData, calculateDay };
