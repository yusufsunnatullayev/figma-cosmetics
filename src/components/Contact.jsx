import React from "react";

const Contact = () => {
  return (
    <div className="mx-[10%]  mt-[150px] py-[75px] shadow-lg flex flex-col items-center w-[1200px] gap-5 justify-center">
      <h1 className="font-semibold text-[30px] text-darkGreen">
        Закажите обратный звонок
      </h1>
      <p className="font-medium text-base text-lightBlack">
        Оставьте заявку в форме и наш менеджер свяжется с вами
      </p>
      <form className="flex flex-col gap-4 mt-[40px] w-[426px]">
        <input
          className="py-5 px-8 border border-darkGreen outline-none "
          type="text"
          placeholder="Ваше имя"
        />
        <input
          className="py-5 px-8 border border-darkGreen outline-none "
          type="tel"
          placeholder="Ваш номер телефона"
        />
        <button className="w-full font-semibold text-xl text-white py-6 bg-darkGreen">
          Отправить
        </button>
      </form>
    </div>
  );
};

export default Contact;
