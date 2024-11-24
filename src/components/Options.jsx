import React from "react";
import service1 from "../assets/images/service1.png";
import service2 from "../assets/images/service2.png";
import service3 from "../assets/images/service3.png";
import service4 from "../assets/images/service4.png";
import service5 from "../assets/images/service5.png";

const Options = () => {
  return (
    <div className="w-full mt-[150px] px-[10%] flex flex-col items-center gap-[70px]">
      <h1 className="font-semibold text-[35px] text-lightBlack">
        Обучение косметологов
      </h1>
      <div className="flex flex-col gap-[55px]">
        <div className="w-full flex items-center justify-center gap-[60px]">
          <img src={service1} alt="" />
          <img src={service2} alt="" />
        </div>
        <div className="w-full flex items-center justify-center gap-[55px]">
          <img src={service3} alt="" />
          <img src={service4} alt="" />
          <img src={service5} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Options;
