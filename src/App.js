import React from "react";
import Home from "./Page/Home";
import UseProvider from "./context/userContext";

function App({props}) {

  return (
  <UseProvider>
      <Home></Home>
  </UseProvider>
  )
}

export default App;
