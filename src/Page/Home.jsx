import React, { useContext, useEffect, useState } from "react";

import { userContext } from "../context/userContext";

import Slider from "../compnents/Slider";
import { fetchData, kelvinToCelsius } from "../utils";
import City from "../compnents/City";

import "../reset.css";
import "../main.css";

function Home({ props }) {
  let [data, setData] = useState();
  const context = useContext(userContext);

  useEffect(() => {
    fetchData(context.data).then((res) => setData(res));
  }, [context]);

  const [value, setValue] = useState();

  const comingValue = (sliderValue) => {
    setValue(sliderValue);
  };

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
  const image = data && data.list[day].weather[0].main;

  let situation = data && data.list[day].weather[0].main;

  return (
    <div className="App">
      <div className={`main ${situation}`}>
        <header>
          <img src={"/assets/img/Vector.png"} alt="lacation" />
          <City />
        </header>

        <div className="middle">
          <h4>{data && data.list[day].weather[0].main}</h4>
          <img src={image && `assets/img/${image}.png`} alt="" />
          <span>
            {data &&
              data.list.length > 0 &&
              kelvinToCelsius(data.list[day].main.temp) + "°C"}
          </span>

          <p> {data && data.list[day].dt_txt.slice(0, 10)} </p>
        </div>
        <Slider props={comingValue} data={data} />
      </div>
    </div>
  );
}

export default Home;
