import React from "react";
import logo from "../assets/images/mini-loog.png";
import facebook from "../assets/images/whiteFacebook.png";
import instagram from "../assets/images/whiteInstagram.png";

const Footer = () => {
  return (
    <div className="mt-[150px] flex w-full">
      <div className="w-1/2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.3005862209566!2d69.26595131156715!3d41.30232410114775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84cf0f93df79be43%3A0x7a2e69ecded3ed88!2sFintech%20Innovation%20Hub!5e0!3m2!1sen!2s!4v1731511711508!5m2!1sen!2s"
          width="760"
          height="745"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="bg-lightBlack py-[35px] px-[75px] flex flex-col gap-5 items-start w-1/2">
        <img src={logo} alt="" />
        <div className="flex flex-col items-start gap-3">
          <h1 className="font-bold text-[30px] text-white">0 (800) 508-622</h1>
          <span className="font-medium text-2xl text-white">
            Харьков, Клочковская, д. 3
          </span>
        </div>

        <div className="flex items-start justify-start gap-20 mt-[64px]">
          <div className="flex flex-col items-start gap-5">
            <span className="font-medium text-[18px] text-white opacity-60">
              Курсы обучения
            </span>
            <span className="font-medium text-[18px] text-white opacity-60">
              Вебинары
            </span>
            <span className="font-medium text-[18px] text-white opacity-60">
              Видео-уроки
            </span>
            <span className="font-medium text-[18px] text-white opacity-60">
              Прайс
            </span>
            <span className="font-medium text-[18px] text-white opacity-60">
              Рассписание
            </span>
          </div>
          <div className="flex flex-col items-start gap-5">
            <span className="font-medium text-[18px] text-white opacity-60">
              Акции
            </span>
            <span className="font-medium text-[18px] text-white opacity-60">
              О нас
            </span>
            <span className="font-medium text-[18px] text-white opacity-60">
              Блог
            </span>
            <span className="font-medium text-[18px] text-white opacity-60">
              Магазин
            </span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-5 mt-[64px]">
          <img src={facebook} alt="" />
          <img src={instagram} alt="" />
        </div>
        <span className="font-normal text-[18px] text-white opacity-30">
          Политика конфиденциальности
        </span>
      </div>
    </div>
  );
};

export default Footer;
