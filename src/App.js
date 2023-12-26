import React, { useEffect, useState } from "react";
import './reset.css';
import "./main.css";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import Slider from "./compnents/Slider";
import { kelvinToCelsius } from "./utils";

function App({props}) {
  let [data, setData] = useState();
  const [city, setCity] = useState("Ankara");

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  useEffect(() => {
    const fetchData = () => {
      fetch(
        `http://api.openweathermap.org/data/2.5/forecast?id=524901&q=${city}&appid=e74fe27c8816969e6b2b42b94360b611`
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((resData) => {
          setData(resData);

          // console.log(resData);
        })
        .catch((error) => console.log(error));
    };
    fetchData();
  }, [city]);

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

  // console.log(data,"dataaaaaaa");

  let situation = data && data.list[day].weather[0].main;



  return (
    <div className="App">
      <div className={`main ${situation}`}>
        <header>
          <img src={"/assets/img/Vector.png"} alt="lacation" />

          <select name="Sehir" onChange={(e) => setCity(e.target.value)}>
            <option value="Adana">Adana</option>
            <option value="Adıyaman">Adıyaman</option>
            <option value="Afyonkarahisar">Afyonkarahisar</option>
            <option value="Ağrı">Ağrı</option>
            <option value="Amasya">Amasya</option>
            <option value="Ankara" selected>
              Ankara
            </option>
            <option value="Antalya">Antalya</option>
            <option value="Artvin">Artvin</option>
            <option value="Aydın">Aydın</option>
            <option value="Balıkesir">Balıkesir</option>
            <option value="Bilecik">Bilecik</option>
            <option value="Bingöl">Bingöl</option>
            <option value="Bitlis">Bitlis</option>
            <option value="Bolu">Bolu</option>
            <option value="Burdur">Burdur</option>
            <option value="Bursa">Bursa</option>
            <option value="Çanakkale">Çanakkale</option>
            <option value="Çankırı">Çankırı</option>
            <option value="Çorum">Çorum</option>
            <option value="Denizli">Denizli</option>
            <option value="Diyarbakır">Diyarbakır</option>
            <option value="Edirne">Edirne</option>
            <option value="Elazığ">Elazığ</option>
            <option value="Erzincan">Erzincan</option>
            <option value="Erzurum">Erzurum</option>
            <option value="Eskişehir">Eskişehir</option>
            <option value="Gaziantep">Gaziantep</option>
            <option value="Giresun">Giresun</option>
            <option value="Gümüşhane">Gümüşhane</option>
            <option value="Hakkâri">Hakkâri</option>
            <option value="Hatay">Hatay</option>
            <option value="Isparta">Isparta</option>
            <option value="Mersin">Mersin</option>
            <option value="İstanbul">İstanbul</option>
            <option value="İzmir">İzmir</option>
            <option value="Kars">Kars</option>
            <option value="Kastamonu">Kastamonu</option>
            <option value="Kayseri">Kayseri</option>
            <option value="Kırklareli">Kırklareli</option>
            <option value="Kırşehir">Kırşehir</option>
            <option value="Kocaeli">Kocaeli</option>
            <option value="Konya">Konya</option>
            <option value="Kütahya">Kütahya</option>
            <option value="Malatya">Malatya</option>
            <option value="Manisa">Manisa</option>
            <option value="Kahramanmaraş">Kahramanmaraş</option>
            <option value="Mardin">Mardin</option>
            <option value="Muğla">Muğla</option>
            <option value="Muş">Muş</option>
            <option value="Nevşehir">Nevşehir</option>
            <option value="Niğde">Niğde</option>
            <option value="Ordu">Ordu</option>
            <option value="Rize">Rize</option>
            <option value="Sakarya">Sakarya</option>
            <option value="Samsun">Samsun</option>
            <option value="Siirt">Siirt</option>
            <option value="Sinop">Sinop</option>
            <option value="Sivas">Sivas</option>
            <option value="Tekirdağ">Tekirdağ</option>
            <option value="Tokat">Tokat</option>
            <option value="Trabzon">Trabzon</option>
            <option value="Tunceli">Tunceli</option>
            <option value="Şanlıurfa">Şanlıurfa</option>
            <option value="Uşak">Uşak</option>
            <option value="Van">Van</option>
            <option value="Yozgat">Yozgat</option>
            <option value="Zonguldak">Zonguldak</option>
            <option value="Aksaray">Aksaray</option>
            <option value="Bayburt">Bayburt</option>
            <option value="Karaman">Karaman</option>
            <option value="Kırıkkale">Kırıkkale</option>
            <option value="Batman">Batman</option>
            <option value="Şırnak">Şırnak</option>
            <option value="Bartın">Bartın</option>
            <option value="Ardahan">Ardahan</option>
            <option value="Iğdır">Iğdır</option>
            <option value="Yalova">Yalova</option>
            <option value="Karabük">Karabük</option>
            <option value="Kilis">Kilis</option>
            <option value="Osmaniye">Osmaniye</option>
            <option value="Düzce">Düzce</option>
          </select>
        </header>


        <div className="middle">
          <h4>{data && data.list[day].weather[0].main}</h4>
          {/* <img src={image && require(`./${image}.png`)} alt="" /> */}
          <img src={image && `assets/img/${image}.png`} alt="" />
          <span>
            {data &&
              data.list.length > 0 &&
              kelvinToCelsius(data.list[day].main.temp) + "°C"}
          </span>

          <p> {data && data.list[day].dt_txt.slice(0, 10)} </p>
        </div>
        <Slider props={comingValue} data={data}/>
      </div>
    </div>
  );
}

export default App;
