import React from "react";
import model from "../assets/images/model.png";

const Modul = () => {
  return (
    <div className="mt-[150px] px-[10%] w-full flex items-start justify-center gap-[74px]">
      <div className="flex flex-col items-start gap-[40px]">
        <h1 className="font-bold text-[40px] text-darkGreen mb-6">
          ВЕДЕМ НАБОР МОДЕЛЕЙ
        </h1>
        <p className="font-medium text-2xl text-lightBlack">
          Мы предлагаем свои услуги для моделей.
        </p>
        <p className="font-medium text-2xl text-lightBlack">
          Выберите процедуру или несколько процедур и наш менеджер
          проконсультирует васи назовет ближайшую дату, когда вы сможете
          получить эту процедуру.
        </p>
        <button className="text-2xl font-semibold py-6 px-[96px] bg-darkGreen text-white mt-6">
          Стать моделью
        </button>
      </div>
      <img src={model} alt="" />
    </div>
  );
};

export default Modul;
