import React from "react";
import discount1 from "../assets/images/discount1.png";
import discount2 from "../assets/images/discount2.png";
import discount3 from "../assets/images/discount3.png";

const Discount = () => {
  return (
    <div className="w-full mt-[150px] px-[10%] flex flex-col items-center gap-[75px]">
      <h1 className="font-semibold text-[35px] text-lightBlack">
        Специальные предложения
      </h1>
      <div className="flex items-center justify-center gap-[30px]">
        <img src={discount1} alt="" />
        <img src={discount2} alt="" />
        <img src={discount3} alt="" />
      </div>
      <div className="flex items-center justify-center gap-4">
        <div className="w-[15px] h-[15px] rounded-full bg-darkGreen"></div>
        <div className="w-[15px] h-[15px] rounded-full bg-darkGreen opacity-40"></div>
        <div className="w-[15px] h-[15px] rounded-full bg-darkGreen opacity-40"></div>
        <div className="w-[15px] h-[15px] rounded-full bg-darkGreen opacity-40"></div>
        <div className="w-[15px] h-[15px] rounded-full bg-darkGreen opacity-40"></div>
      </div>
    </div>
  );
};

export default Discount;
