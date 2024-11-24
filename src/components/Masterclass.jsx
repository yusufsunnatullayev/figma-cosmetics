import React from "react";
import masterclass1 from "../assets/images/masterclass1.png";
import masterclass2 from "../assets/images/masterclass2.png";
import miniArrowRight from "../assets/images/miniArrowRight.png";

const Masterclass = () => {
  return (
    <div className="w-full mt-[150px] px-[10%] flex flex-col items-center gap-[75px]">
      <div className="flex flex-col items-center text-center gap-5">
        <h1 className="font-semibold text-[35px] text-lightBlack">
          Мастер-классы
        </h1>
        <p className="font-semibold text-2xl text-lightBlack">
          Мероприятия для повышения квалификации косметологов
        </p>
      </div>

      <div className="flex items-center justify-center gap-[153px]">
        {/* 1🚩 */}
        <div className="flex flex-col items-start w-[520px] shadow">
          <img src={masterclass1} alt="" />
          <div className="flex items-start justify-between w-full">
            <div className="flex flex-col gap-2 p-5">
              <span className="text-base font-semibold text-lightBlack">
                3 ноября, 10:00-12:00
              </span>
              <p className="font-semibold text-[18px]">
                10 возможностей <br /> неодимового лазера.Лазерный <br />{" "}
                пилинг, удаление тату/татуажа
              </p>
              <span className="font-normal text-[18px]">
                Тренер: Юлия Щукина
              </span>
            </div>
            <div className="flex flex-col">
              <div className="w-[153px] h-[120px] flex items-center justify-center bg-lightGreen2">
                <span className="font-semibold text-xl text-lightBlack">
                  2000 грн
                </span>
              </div>
              <div className="w-[153px] h-[120px] flex items-center justify-center bg-darkGreen">
                <img src={miniArrowRight} alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* 2🚩 */}
        <div className="flex flex-col items-start w-[520px] shadow">
          <img src={masterclass2} alt="" />
          <div className="flex items-start justify-between w-full">
            <div className="flex flex-col gap-2 p-5">
              <span className="text-base font-semibold text-lightBlack">
                20 ноября, 12:00-17:00
              </span>
              <p className="font-semibold text-[18px]">
                Профессия косметолог. Семинар для новичкови профессионалов
              </p>
              <span className="font-normal text-[18px]">
                Спикеры: Марина Спивак, Алина Ядчишина, Елена Белогурова, Юлия
                Щукина
              </span>
            </div>
            <div className="flex flex-col">
              <div className="w-[153px] h-[120px] flex items-center justify-center bg-lightGreen2">
                <span className="font-semibold text-xl text-lightBlack">
                  Бесплатно
                </span>
              </div>
              <div className="w-[153px] h-[120px] flex items-center justify-center bg-darkGreen">
                <img src={miniArrowRight} alt="" />
              </div>
            </div>
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

export default Masterclass;
