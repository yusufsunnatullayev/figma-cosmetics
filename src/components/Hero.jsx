import React from "react";
import hero from "../assets/images/hero.png";

const Hero = () => {
  return (
    <section className="w-full flex-col items-start gap-5">
      <div className="w-full  flex items-center justify-center gap-[60px] py-6">
        <h1 className="font-medium text-base text-lightBlack">
          Курсы обучения
        </h1>
        <h1 className="font-medium text-base text-lightBlack">Вебинары</h1>
        <h1 className="font-medium text-base text-lightBlack">Видео-уроки</h1>
        <h1 className="font-medium text-base text-lightBlack">Блог</h1>
        <h1 className="font-medium text-base text-lightBlack">О нас</h1>
        <h1 className="font-medium text-base text-lightBlack">Прайс</h1>
        <h1 className="font-medium text-base text-lightBlack">Рассписание</h1>
        <h1 className="font-medium text-base text-lightBlack">Акции</h1>
        <h1 className="font-medium text-base text-lightBlack">Магазин</h1>
      </div>
      <div className="flex items-center justify-start bg-lightGreen2 w-[90%]">
        <div className="flex flex-col items-start gap-5">
          <h1 className="font-bold text-[65px] text-darkGreen">
            ПРОФЕССИЯ <br /> КОСМЕТОЛОГ
          </h1>
          <p className="font-medium text-xl text-lightBlack">
            Приглашаем на бесплатный вебинар для <br /> профессиональных
            косметологов и <br /> интересующихся этой профессией
          </p>
          <div className="flex items-center justify-center gap-5">
            <button className="py-5 px-10 text-[18px] font-semibold text-white bg-darkGreen">
              Зарегистрироваться
            </button>
            <button className="py-5 px-10 text-[18px] font-semibold text-darkGreen border border-darkGreen">
              Узнать подробнее
            </button>
          </div>
        </div>
        <img src={hero} alt="" />
      </div>
    </section>
  );
};

export default Hero;
