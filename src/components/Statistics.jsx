import React from "react";

const Statistics = () => {
  return (
    <div className="flex items-center justify-center gap-[100px] p-[53px] mt-[74px] mx-[120px] shadow rounded-[4px] h-[212px]">
      <div className="flex flex-col items-center gap-5">
        <h1 className="font-bold text-[45px] text-darkGreen">4000+</h1>
        <p className="text-2xl text-center font-normal text-lightBlack">
          Сертификатов мы выдали
        </p>
      </div>
      <div className="flex flex-col items-center gap-5">
        <h1 className="font-bold text-[45px] text-darkGreen">3500+</h1>
        <p className="text-2xl text-center font-normal text-lightBlack">
          Моделейв нашей базе
        </p>
      </div>
      <div className="flex flex-col items-center gap-5">
        <h1 className="font-bold text-[45px] text-darkGreen">1500+</h1>
        <p className="text-2xl text-center font-normal text-lightBlack">
          Специалистов мы обучили
        </p>
      </div>
      <div className="flex flex-col items-center gap-5">
        <h1 className="font-bold text-[45px] text-darkGreen">5500+</h1>
        <p className="text-2xl text-center font-normal text-lightBlack">
          Довольных клиентов
        </p>
      </div>
    </div>
  );
};

export default Statistics;
