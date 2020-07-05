//_document.js
// import Document, { Head, Main, NextScript } from "next/document";
import Document, { Html, Head, Main, NextScript } from "next/document";

//Для створенння метатег всередині голови є компонент Head та спеціальний файл _document.js,
//в якому ми можемо налаштувати загальний html кожнлї сторінки(який надається один раз лише на стороні сервера).
//Ми змінимо його так, щоб він включав фавікон, оновив файл сторінки

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
          {/* 20080425-добавлені шрифти //Amatic SC,Poppins,Lora-https://fonts.googleapis.com/ з шаблону */}
          {/* font-family: 'Poppins', sans-serif; //звичайні без засічок*/}
          <link
            href="https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800&display=swap"
            rel="stylesheet"
          />
          {/* font-family: 'Amatic SC', cursive; //імітують почерк*/}
          <link
            href="https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap"
            rel="stylesheet"
          />
          {/* font-family: 'Tangerine', cursive; //імітують почерк*/}
          <link
            href="https://fonts.googleapis.com/css2?family=Tangerine&display=swap"
            rel="stylesheet"
          />
          {/* font-family: 'Lora', serif //звичайні з засічками */}
          <link
            href="https://fonts.googleapis.com/css?family=Lora:400,400i,700,700i&display=swap"
            rel="stylesheet"
          />
          {/* Для відео */}
          <link
            href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,600,600i"
            rel="stylesheet"
          />
          {/* Для використання Animate.css */}
          <link href="css/animate.min.css" rel="stylesheet" />
          {/* //https://www.youtube.com/watch?v=GfsqFaiaK3A */}
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          {/* Для owl.carousel  Load jQuery(1.7+)*/}
          <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
          {/* Customized Style */}
          <link rel="stylesheet" href="owl-carousel/owl.theme.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
