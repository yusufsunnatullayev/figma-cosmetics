import React from "react";
import bird from "../assets/images/bird.svg";
import person1 from "../assets/images/person1.png";
import person2 from "../assets/images/person2.png";

const Course = () => {
  return (
    <div className="w-full flex flex-col items-center gap-[77px] px-[10%] mt-[150px]">
      <h1 className="font-semibold text-[35px] text-lightBlack">
        Курсы обучения
      </h1>
      <div className="flex items-center justify-center gap-[55px]">
        {/* 1 🚩 */}
        <div className="shadow flex flex-col gap-2 items-start w-[360px] h-auto">
          <div className="w-full flex items-center justify-between pt-4 px-4">
            <span className="font-semibold text-[18px] text-lightBlack">
              Курс для медиков
            </span>
            <img src={bird} alt="" />
          </div>
          <div className="flex flex-col gap-2 items-start px-4">
            <h1 className="text-[30px] font-semibold text-darkBlue">
              Канюльные <br /> техники
            </h1>
            <button className="py-2 px-7 rounded-md text-xl font-semibold bg-darkBlue text-white">
              Оффлайн
            </button>
            <span className="text-xl font-semibold text-lightBlack">
              1 - 4 мая
            </span>
          </div>
          <div className="flex items-end justify-center gap-4 px-4">
            <div className="flex items-end justify-center gap-2">
              <div className="w-[6px] h-[104px] bg-darkBlue"></div>
              <p>
                Краткое описание Что-то о курсе Пару фактов Краткое описание
              </p>
            </div>
            <img src={person1} alt="" />
          </div>
          <div className="flex flex-col w-full items-start mt-[30px]">
            <span className="text-lightBlack font-normal text-base ms-4 mb-2">
              Свободно 2 из 15 мест
            </span>
            <button className="text-xl font-semibold w-full py-4 bg-darkBlue text-white">
              Зарегистрироваться
            </button>
            <button className="text-xl font-semibold w-full py-4 bg-blueBg text-darkBlue">
              Подробнее
            </button>
          </div>
        </div>
        {/* 2 🚩 */}
        <div className="shadow flex flex-col gap-2 items-start w-[360px] h-auto">
          <div className="w-full flex items-center justify-between pt-4 px-4">
            <span className="font-semibold text-[18px] text-lightBlack">
              Курс для медиков
            </span>
            <img src={bird} alt="" />
          </div>
          <div className="flex flex-col gap-2 items-start px-4">
            <h1 className="text-[30px] font-semibold text-darkGreen">
              Мезотерапияи <br /> биоревителизация
            </h1>
            <button className="py-2 px-7 rounded-md text-xl font-semibold bg-darkGreen text-white">
              Онлайн
            </button>
            <span className="text-xl font-semibold text-lightBlack">
              15 - 20 мая
            </span>
          </div>
          <div className="flex items-end justify-center gap-4 px-4">
            <div className="flex items-end justify-center gap-2">
              <div className="w-[6px] h-[104px] bg-darkGreen"></div>
              <p>
                Краткое описание Что-то о курсе Пару фактов Краткое описание
              </p>
            </div>
            <img src={person1} alt="" />
          </div>
          <div className="flex flex-col w-full items-start mt-[30px]">
            <span className="text-lightBlack font-normal text-base ms-4 mb-2">
              Свободно 2 из 15 мест
            </span>
            <button className="text-xl font-semibold w-full py-4 bg-darkGreen text-white">
              Зарегистрироваться
            </button>
            <button className="text-xl font-semibold w-full py-4 bg-lightGreen2 text-darkGreen">
              Подробнее
            </button>
          </div>
        </div>
        {/* 3 🚩 */}
        <div className="shadow flex flex-col gap-2 items-start w-[360px] h-auto">
          <div className="w-full flex items-center justify-between pt-4 px-4">
            <span className="font-semibold text-[18px] text-lightBlack">
              Курс для медиков
            </span>
            <img src={bird} alt="" />
          </div>
          <div className="flex flex-col gap-2 items-start px-4">
            <h1 className="text-[30px] font-semibold text-lightGreen1">
              Биогель - новое <br /> в косметологии
            </h1>
            <button className="py-2 px-7 rounded-md text-xl font-semibold bg-lightGreen1 text-white">
              Мастер-класс
            </button>
            <span className="text-xl font-semibold text-lightBlack">
              2 - 5 августа
            </span>
          </div>
          <div className="flex items-end justify-center gap-4 px-4">
            <div className="flex items-end justify-center gap-2">
              <div className="w-[6px] h-[104px] bg-lightGreen1"></div>
              <p>
                Краткое описание Что-то о курсе Пару фактов Краткое описание
              </p>
            </div>
            <img src={person2} alt="" />
          </div>
          <div className="flex flex-col w-full items-start mt-[30px]">
            <span className="text-lightBlack font-normal text-base ms-4 mb-2">
              Свободно 2 из 15 мест
            </span>
            <button className="text-xl font-semibold w-full py-4 bg-lightGreen1 text-white">
              Зарегистрироваться
            </button>
            <button className="text-xl font-semibold w-full py-4 bg-greenBg text-lightGreen1">
              Подробнее
            </button>
          </div>
        </div>
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

export default Course;
