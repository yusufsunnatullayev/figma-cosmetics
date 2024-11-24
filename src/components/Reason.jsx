import React from "react";

const Reason = () => {
  return (
    <div className="w-full mt-[150px] px-[10%] flex flex-col items-center gap-[75px]">
      <h1 className="font-semibold text-[35px] text-lightBlack">Почему мы</h1>
      <div className="flex items-center justify-center gap-[30px]">
        {/* 1🚩 */}
        <div className="relative flex flex-col items-start p-5 shadow w-[380px] h-[315px] gap-[33px]">
          <h1 className="font-semibold text-2xl text-lightBlack">
            Преподаватели
          </h1>
          <p className="text-xl font-normal">
            Наши преподаватели имеют многолетний опыт в сфере косметологии и
            совмещают преподовательскую деятельность с практической работой в
            салонах красотыи других специализированных центрах.
          </p>
          <span className="text-[120px] text-darkGreen opacity-30 font-bold absolute -z-10 bottom-3 right-3">
            01
          </span>
        </div>
        {/* 2🚩 */}
        <div className="relative flex bg-darkGreen opacity-30 flex-col items-start p-5 shadow w-[380px] h-[315px] gap-[33px]">
          <h1 className="font-semibold text-2xl text-lightBlack">
            Сертификаты
          </h1>
          <p className="text-xl font-normal">
            Удостоверение, сертификати свидетельство полученные у нас по
            окончанию курсов, работают как лучшая "рекомендация" при приеме на
            работу
          </p>
          <span className="text-[120px] text-white opacity-30 font-bold absolute -z-10 top-1 right-3">
            02
          </span>
        </div>
        {/* 3🚩 */}
        <div className="relative flex flex-col items-start p-5 shadow w-[380px] h-[315px] gap-[33px]">
          <h1 className="font-semibold text-2xl text-lightBlack">
            Повышение <br /> квалификации
          </h1>
          <p className="text-xl font-normal">
            Ежегодно, больше 2000 косметологов повышают квалификацию и уровень
            профессионализмав просторных кабинетах нашего центра.
          </p>
          <span className="text-[120px] text-darkGreen opacity-30 font-bold absolute -z-10 bottom-3 right-3">
            03
          </span>
        </div>
      </div>
    </div>
  );
};

export default Reason;
