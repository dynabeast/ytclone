import React, { useContext } from "react";
import ytlogo from "../assets/ytlogo.svg";
import ythamburgerIcon from "../assets/ythamburgerIcon.svg";
import { Bell, Mic, Search } from "lucide-react";
import createIcon from "../assets/createIcon.svg";
import { updateWidth } from "../context/updateWidth";

const Header = () => {
  const {updateWidthhandle, setUpdateWidthHandle} = useContext(updateWidth);
  const ontoggleHandler = () => {
    // setUpdateWidthHandle(!updateWidthhandle);
      setUpdateWidthHandle((prevWidth) => (prevWidth === 5 ? 15 : 5));
  };
  return (
    <div className="flex w-full h-[4rem] border justify-between items-center">
      {/* logo sections  */}
      <div className="flex justify-center items-center">
        <div
          className="h-5 flex justify-center items-center px-4 cursor-pointer "
          onClick={ontoggleHandler}
        >
          <img src={ythamburgerIcon} alt="ythamburgerIcon" className="h-full" />
        </div>
        <div className="w-20 h-20 flex justify-center items-center  ">
          <img src={ytlogo} alt="ytlogo" />
        </div>
      </div>

      {/* search bar components */}
      <div className="hidden lg:flex items-center justify-center gap-3">
        <div className="flex w-[35rem] h-[2.5rem] justify-between items-center border rounded-full">
          <div className="px-2  w-full text-[1rem]">Search</div>
          <div className="flex  items-center  justify-end px-2 py-3 w-[4rem] h-full bg-gray-100 rounded-r-full border">
            <Search width={20} />
          </div>
        </div>
        <div className="rounded-full bg-gray-100 w-[2.5rem] h-[2.5rem] flex items-center justify-center p-2">
          <Mic />
        </div>
      </div>

      {/* notification sections */}
      <div className="flex items-center justify-center gap-4  mx-5">
        <div className="w-[1.5rem] h-[1.5rem]">
          <img src={createIcon} className="w-full h-full" />
        </div>

        <div className="">
          <Bell width={20} />
        </div>

        <div className="flex items-center justify-center bg-[#7c57c1] w-[2rem] h-[2rem] rounded-full">
          <h1 className="text-[1.2rem] text-gray-50">V</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
