import { createContext, useState } from "react";

const userContext = createContext();

const UseProvider = ({ children }) => {
  const [data, setData] = useState("Ankara");

  return (
    <userContext.Provider
      value={{
        data,
        setData,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export { userContext };
export default UseProvider;
