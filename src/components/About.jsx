import React from "react";
import about from "../assets/images/about-bg.png";
import arrowRight from "../assets/images/arrowRight.png";

const About = () => {
  return (
    <div className="mt-[150px] w-full px-[10%] flex items-start justify-center gap-[121px]">
      <img src={about} alt="" />
      <div className="flex flex-col items-start gap-[30px]">
        <span className="font-medium text-2xl text-lightGray">О нас</span>
        <h1 className="font-bold text-[35px]">
          {" "}
          <span className="text-darkGreen">VALMARI</span> <br />
          ВЕДУЩИЙ УЧЕБНЫЙ <br /> ЦЕНТР ЭСТЕТИЧЕСКОЙ КОСМЕТОЛОГИИ{" "}
        </h1>
        <div className="flex flex-col items-start">
          <p className="font-medium text-2xl text-lightBlack">
            Описание может быть любое. Ведущий учебный центр эстетической
          </p>

          <br />
          <p className="font-medium text-2xl text-lightBlack">
            косметологии. Более 5 лет мы проводим курсы сертифицированные курсы
          </p>
          <br />
          <p className="font-medium text-2xl text-lightBlack">
            {" "}
            профессионального образованияв области косметологиии индустрии
            красоты, здоровьяи молодости
          </p>
        </div>

        <div className="flex items-end justify-end gap-10 self-end">
          <span className="font-medium text-2xl text-darkGreen">Подробнее</span>
          <img src={arrowRight} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
