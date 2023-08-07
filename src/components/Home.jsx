import React from "react";
import sun from "../assets/image/Group.png";
import sunTwo from "../assets/image/sun-2.png";
function Home() {
  return (
    <div className="bg-primary col-12 col-sm-7 text-center pt-5 text-white">
      <div>
        <div className="container">
          <div className="header">
            <h1>San Frenciso</h1>
            <span>clear</span>
          </div>
          <div className="mt-4">
            <img src={sun} alt="sun" />
          </div>
          <div className="history">
            <h3 className="my-2">11</h3>
            <span className="h5">May xx 20xx</span>
          </div>
          <div></div>
        </div>
      </div>

      <div className="d-flex justify-content-around border py-1">
        <span>Monday</span>
        <img src={sunTwo} alt="sun" />
        <div>
          <span>10</span>
          <span className="mx-2 text-secondary">10</span>
        </div>
      </div>
      <div className="d-flex justify-content-around border py-1" >
        <span>Monday</span>
        <img src={sunTwo} alt="sun" />
        <div>
          <span>10</span>
          <span className="mx-2 text-secondary">10</span>
        </div>
      </div>
      <div className="d-flex justify-content-around border py-1" >
        <span>Monday</span>
        <img src={sunTwo} alt="sun" />
        <div>
          <span>10</span>
          <span className="mx-2 text-secondary">10</span>
        </div>
      </div>
      <div className="d-flex justify-content-around border py-1" >
        <span>Monday</span>
        <img src={sunTwo} alt="sun" />
        <div>
          <span>10</span>
          <span className="mx-2 text-secondary">10</span>
        </div>
      </div>    
      
    </div>
  );
}

export default Home;
