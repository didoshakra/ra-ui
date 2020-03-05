// pages/post_batman_list.js//Зі стилями//Отримання шоу Бетмена з віддаленого сервера fetch('https://api.tvmaze.com/search/shows?q=batman');

import Link from "next/link";
import fetch from "isomorphic-unfetch";
import AppFrame from "../../../modules/main/components/AppFrame";

const PostBatmanList = props => (
  <AppFrame>
    <h1>post_batman_list ***Batman TV Shows***</h1>
    <ul>
      {/* //Цикл списку [li] */}
      {props.shows.map(show => (
        <li key={show.id}>
          <Link
            as={`/p/${show.id}`}
            href={`/post-list-batman/post_batman?id=${show.id}`}
          >
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </AppFrame>
);

//Це статична асинхронна функція для отримання даних як реквізити для сторінки. Як ви можете бачити, тепер ми вибираємо телевізійні шоу Бетмена і передаємо їх на нашу сторінку, як «шоу».
PostBatmanList.getInitialProps = async function() {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  const data = await res.json();

  console.log(
    `post_batman_list.js/Show data fetched(Показати отриманідані). Count: ${data.length}`
  );

  return {
    shows: data.map(entry => entry.show)
  };
};

export default PostBatmanList;
