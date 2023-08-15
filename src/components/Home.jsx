import React, { useEffect, useState } from "react";

function Home() {
  const key = "e74fe27c8816969e6b2b42b94360b611";

  const [weatherInfo, setweatherInfo] = useState({})

  const [citys, setCitys ] = useState("Adana");

  const fecthData = async (selectedCitys) => {
    const address = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCitys}&appid=${key}`;
    const response = await fetch(address);
    const data = await response.json();
    setweatherInfo(data);
  }

  useEffect(() => {
    fecthData(citys);
  }, [citys]);

  const handleCitysChange = (e) => {
    setCitys(e.target.value);
  };


  // const getData = async function () {
  //   const res = await fetch(adres);
  //   const data = await res.json();
  //   setweatherInfo(await data);
  //   console.log(data);
  // };

  // useEffect(() => {
  //   getData();
  // }, []);
  return (
    <div className="bg-primary col-12 col-sm-7 text-center pt-4 text-white">
      <select
        className="form-select form-select-lg mb-3"
        aria-label="Large select example"
        onChange={handleCitysChange} 
        value={citys} 
      >
        <option value="Adana">Adana</option>
        <option value="Sakarya">Sakarya</option>
        <option value="Van">Van</option>
        <option value="Eskisehir">Eskişehir</option>
      </select>

      <div className="container">
        <div className="header">
          {weatherInfo.name && <h1>{weatherInfo.name}</h1>}
          {weatherInfo.weather && <span>{weatherInfo.weather[0].main}</span>}
        </div>
        <div className="mt-4">
          {weatherInfo.weather && (
            <img src={weatherInfo.weather[0].icon} alt="sun" />
          )}
        </div>
        <div className="history">
          {weatherInfo.sys && <h3 className="my-2">{weatherInfo.sys.country}</h3>}
          {weatherInfo.coord && <span className="h5">Lon {weatherInfo.coord.lon}</span>}
        </div>
      </div>
    </div>
  );
}

export default Home;
