//home_mui.js / Muiv4.5.1
//Добавлено animat
import React, { useContext } from "react";
import Link from "next/link";
import Head from "next/head";

import Layout from "../../components/main/Layout";
import useTranslation from "../../translations/useTranslation";
import { ComponentContext } from "../../context/ComponentContext";

export default function HomePage() {
  const { locale, t } = useTranslation();
  const { state } = useContext(ComponentContext);
  const theme = state.theme;

  return (
    // <AppFrame classes={{ drawer: className.drawer }}>
    <Layout>
      <Head>
        <title>{t("header-titleSite")}</title>
        {/* <title>Ra-test</title> */}
      </Head>
      {/* <div className="root"> */}
      <div className="cover">
        <div className="hero">
          {/* <Container maxWidth="md" className={className.content}> */}
          <div className="content">
            <img src="/SunMan.jpg" alt="Logo" />
            <div className="title">
              <h1>{t("pageHome_Welcome")}👋</h1>
              <h2>{t("pageHome_aboutPage")}</h2>
              <h2>{t("pageHome_thenkYou")}</h2>
              <Link href="/[lang]/about" as={`/${locale}/about`}>
                <a className="button">{t("pageHome_buttonAboutMe")}</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        /* .root {
          flex: 1 0 100%;
          max-height: 480px; //Висота */
        .cover {
          position: relative;
          overflow: hidden; //Обрізає все що виходить за межі елементу
          //
          background: transparent url(/photo/Everest.jpg) no-repeat;
          background-size: cover; //Маштабує зображення.
          animation-duration: 10s;
          animation-name: cover;
          animation-iteration-count: 1; //infinite для нескінченного повтору
          animation-fill-mode: forwards; //Залишається в кінцевому стані
        }
        .hero {
          padding-top: 44px;
          /*color: theme.palette.primary.main;*/
          color: rgba(0, 0, 0, 0.5);
        }
        .content {
          display: flex;
          max-width: 960px;
          flex-direction: row; /*(напрямок)в рядок /Напрямок, в якому укладаються рядки тексту*/
          align-items: center; /*вирівнює з початку елементи по перпендикулярній Y*/
          text-align: left; /*вирівнює зміст(текст) в блоці!!!(не контролює елементи блоку)*/
          padding-top: 40px; //spacing(10)
          padding-bottom: 160px; //spacing(20)знизу
        }
        /*mui-breakpoints.u("md"):960px)*/
        @media (max-width: 960px) {
          .content {
            flex-direction: column; /*(напрямок)в колонку/Напрямок, в якому укладаються рядки тексту*/
            align-items: center; /*вирівнює елементи по осі"column"(текучій)перпендикулярно justify-content. */
            //justify-content: center;
            text-align: center; /*вирівнює зміст(текст) в блоці!!!(не контролює елементи блоку)*/
            padding-top: 40px; /*відступ зверху(поле) spacing(10)*/
            padding-bottom: 80px; /*відступ знизу(поле) spacing(10)*/
          }
        }
        .content h1 {
          font-size: 50;
          font-family: ${theme.fontFamily.serif};
          font-weight: 900; /*normal/lighter/100/900/.. Грубина шрифта */
          font-style: italic;
          margin-left: -12; /*зовнішній відступ зліва від даного елементу.+збільшує значення (-)зменшує */
          white-space: nowrap; /*Об'єднує послідовності прогалин в один пробіл, як значення normal, але не переносить рядки (обертання тексту) у тексті.*/
          letter-spacing: 0.7rem; /*Контролює відстань між текстовими символами, в доповненні до будь-якого відстані атрибута kerning. */
          text-indent: 0.7rem; /*Визначає розмір відступу (порожнього місця) перед рядком в текстовому блоці. */
          animation-duration: 3s;
          animation-name: welcom;
          animation-iteration-count: 2; //infinite для нескінченного повтору
          animation-direction: alternate; //Анімація туда і назад
          color: #0000ff;
        }
        /*.breakpoints.only("xs")-sm: 600px */
        @media (max-width: 600px) {
          .welcom {
            font-size: 20;
          }
        }
        .content h2 {
          font-size: 20;
          font-family: ${theme.fontFamily.mimicHand};
          font-weight: bold; /*normal/lighter/100/900/.. Грубина шрифта */
          font-style: italic;
        }
        /*перед className ставимо(.), а перед <teg>-нічого не ставимо */
        .content img {
          flex-shrink: 0; /*0-елемент не стискається (фактор стиснення flex-елемента) */
          margin-bottom: 16px; //pacing(2*8px)
          margin-right: 64px; //spacing(8*8px)
          margin-left: 160px; //spacing(8*8px)
          width: 220px;
          height: 200px;
        }
        /*mui-breakpoints.up("md"):960px)*/
        @media (max-width: 960px) {
          .content img {
            width: 120px;
            height: 120px;
          }
        }
        @keyframes cover {
          from {
            transform: scale(1.2);
          }
          to {
            transform: scale(1);
          }
        }
        @keyframes welcom {
          from {
            transform: scale(1);
            color: #0000ff;
          }
          to {
            transform: scale(2);
            color: #ffcccc;
          }
        }
        ////////////////////////////////////////////
        button {
          margintop: 4px;
        }

        .social {
          padding: 2, 0;
          display: flex;
          justify-content: center; /*вирівнює елементи по головній осі X */
          align-items: "center"; /*вирівнює елементів по центру  */
          min-height: 21;
          box-sizing: content-box; /*width і height обчислюються виключно по контенту,не включаючи margin, padding і border./ margin, padding і border будуть за межами блоку. */
        }
        .social span {
          display: flex;
          margin-right: 1px;
        }
        .social a {
          /*color: theme.palette.background.paper*/
          color: #333;
        }
      `}</style>
    </Layout>
  );
}
