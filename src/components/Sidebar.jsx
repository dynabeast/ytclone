import React, { useContext, useState } from "react";
import { general, Subscriptions, you } from "../constant/sidebarItems.js";
import { ChevronRight } from "lucide-react";
import { updateWidth } from "../context/updateWidth.js";
const Sidebar = () => {
  const { updateWidthhandle, setUpdateWidthHandle } = useContext(updateWidth);
// const Sidebar = ({ width }) => {
  return (
    <div
      className={`fixed top-[5rem] bottom-0 left-0 right-0  ${updateWidthhandle >=15 ? "block" :"hidden" } bg-white text-black  lg:flex lg:static lg:[${updateWidthhandle}rem] h-full`}
    >
      <div className="w-full">
        <div className="mt-2">
          <ul className="">
            {general.map((item) => (
              <div
                className="flex items-center  gap-2 px-4 py-2 cursor-pointer"
                key={item.id}
              >
                {updateWidthhandle > 5 ? (
                  <>
                    <img src={item.icon} updateWidthhandle={18} />
                    <li className="text-[1rem] ml-3">{item.item}</li>
                  </>
                ) : (
                  <div className="flex flex-col justify-center items-center w-[2rem] h-[5rem]">
                    <img src={item.icon} className="w-full h-full" />
                    <li className="text-[0.6rem] font-semibold   ">
                      {item.item}
                    </li>
                  </div>
                )}{" "}
              </div>
            ))}
          </ul>
        </div>
        <div className={` ${updateWidthhandle > 5 ? "border-t" : ""} w-full`}>
          <div className="flex items-center p-[0.8rem]">
            {updateWidthhandle > 5 ? (
              <>
                <h3 className="text-[15px] font-semibold ">You</h3>
                <ChevronRight updateWidthhandle={15} />
              </>
            ) : (
              <></>
            )}
          </div>
          <div className="">
            <ul>
              {you.map((item) => (
                <div
                  className="flex px-4 py-2 gap-2  cursor-pointer"
                  key={item.id}
                >
                  {updateWidthhandle > 5 ? (
                    <>
                      {" "}
                      <img src={item.icon} width={20} />
                      <li className="text-[1rem] ml-3">{item.item}</li>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              ))}
            </ul>
          </div>
        </div>
        <div className={` ${updateWidthhandle > 5 ? "border-t" : ""} w-full`}>
          <div className="flex flex-col ">
            {updateWidthhandle > 5 ? (
              <h3 className="text-[15px] font-semibold p-[0.8rem]">
                Subscriptions
              </h3>
            ) : (
              <></>
            )}
            <ul>
              {Subscriptions.map((item, index) => (
                <div
                  className="flex px-4 py-2 gap-2  cursor-pointer"
                  key={index}
                >
                  {updateWidthhandle > 5 ? (
                    <>
                      {" "}
                      <div className="flex items-center justify-center p-[0.8rem] bg-[#7c57c1] w-[1.5rem] h-[1.5rem] rounded-full">
                        <h1 className="text-[0.8rem] text-gray-50 ">
                          {item[0]}
                        </h1>
                      </div>
                      <li className="text-[1rem] ml-2">{item}</li>{" "}
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
