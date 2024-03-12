import React, { useContext, useEffect, useState } from "react";

import { userContext } from "../context/userContext";

import Slider from "../compnents/Slider";
import { calculateDay, fetchData, kelvinToCelsius } from "../utils";

import "../css/reset.css";
import "../css/main.css";
import CityList from "../compnents/CityList";

function Home() {
  const [data, setData] = useState();
  const value = 1;

  const context = useContext(userContext);

  useEffect(() => {
    fetchData(context.data).then((res) => setData(res));
  }, [context]);

  const image = data && data.list[calculateDay(value)].weather[0].main;

  const situation = data && data.list[calculateDay(value)].weather[0].main;

  const renderWeatherComponent = () => {
    return (
      <div className={`main ${situation}`}>
        <header>
          <img src={"/assets/img/Vector.png"} alt="lacation" />
          <CityList />
        </header>

        <div className="middle">
          <h4>{data.list[calculateDay(value)].weather[0].main} </h4>
          <img src={`assets/img/${image}.png`} alt="" />
          {data.length > 0 && (
            <span>
              {" "}
              {kelvinToCelsius(data.list[calculateDay(value)].main.temp) + "°C"}
            </span>
          )}

          <p>{data.list[calculateDay(value)].dt_txt.slice(0, 10)} </p>
        </div>
        <Slider data={data} />
      </div>
    );
  };
  const renderLoderComponent = () => {
    return <p style={{ color: "black" }}>loding...</p>;
  };
  return (
    <div className="App">
      {data ? renderWeatherComponent() : renderLoderComponent()}
    </div>
  );
}

export default Home;
