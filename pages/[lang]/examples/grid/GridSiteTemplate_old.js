//grod1.js
import Layout from "../../../../components/all/Layout";

const GridSiteTemplate = () => {
  return (
    <Layout title="GridSiteTemplate" description="GridSiteTemplate">
      <section>
        *** GridSiteTemplate***
        <body className="body">
          <header className="pageHeader">Header</header>
          <article className="mainArticle">Article</article>
          <nav className="mainNav">Nav</nav>
          <div className="siteAds">Ads</div>
          <footer className="pageFooter">Footer</footer>
        </body>
      </section>
      <style jsx>{`
        body {
          display: grid;
          grid-template-areas:
            "header header header"
            "nav article ads"
            "footer footer footer";
          grid-template-rows: 80px 1fr 70px;
          grid-template-columns: 20% 1fr 15%;
          grid-gap: 10px;
          height: 100vh;
          margin: 0;
        }
        .pageHeader,
        .mainArticle,
        .mainNav,
        .siteAds,
        .pageFooter {
          padding: 20px;
          background: gold;
        }
        .pageHeader {
          grid-area: header;
        }
        .pageFooter {
          grid-area: footer;
        }
        .mainArticle {
          grid-area: article;
        }
        .mainNav {
          grid-area: nav;
        }
        .siteAds {
          grid-area: ads;
        }
        //Для мобілок
        @media all and (max-width: 600px) {
          body {
            grid-template-areas:
              "header"
              "article"
              "ads"
              "nav"
              "footer";
            grid-template-rows: 80px 1fr 70px 1fr 70px;
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </Layout>
  );
};

export default GridSiteTemplate;
