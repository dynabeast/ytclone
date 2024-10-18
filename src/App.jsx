import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import { updateWidth } from "./context/updateWidth.js";

function App() {
  const [width, setwidth] = useState();
  const [smWidth, setSmWidth] = useState(false);
  const [updateWidthhandle, setUpdateWidthHandle] = useState(15);

  const onClickHandler = () => {
    setwidth((prevWidth) => (prevWidth === 5 ? 15 : 5));
  };
  return (
    <updateWidth.Provider value={{ updateWidthhandle, setUpdateWidthHandle }}>
      <div className="flex flex-col w-full h-[70rem]">
        <Header />
        {/* <button className="w-[2rem] border" onClick={onClickHandler}>
        on click
      </button> */}

        <div className={`flex `}>
          <div className={`w-[${width}rem] h-full border`}>
            <Sidebar />
            {/* <Sidebar width={width} /> */}
          </div>
          <div className={`ml-[${width}] w-full h-full`}>
            <Content />
          </div>
        </div>
      </div>
      {/* jai shree ram */}
    </updateWidth.Provider>
  );
}

export default App;
