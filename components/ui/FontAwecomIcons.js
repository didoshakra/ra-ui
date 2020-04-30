//FontAwecomIcons.js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //fontawesome
//fas-
import {
  faList,
  faChevronRight,
  faChevronLeft,
  faCog,
  faSun,
  faGlobe,
  faTimes,
  faCoffee,
  faThumbsUp,
  faBars,
  faUser,
  faGripHorizontal,
  faTh,
} from "@fortawesome/free-solid-svg-icons";
//fab-
import {
  faApple,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
// import { faCoffee } from "@fortawesome/free-regular-svg-icons";

const FontAwecomIcons = () => {
  return (
    <section className="font-awecom-icons">
      {/* <div> */}
      {/* free-solid-svg-icons */}
      <p>
        <FontAwesomeIcon icon={faList} />
        *solid*/faList
      </p>
      <p>
        <FontAwesomeIcon icon={faChevronRight} />
        faChevronRight
      </p>
      <p>
        <FontAwesomeIcon icon={faChevronLeft} />
        faChevronLeft
      </p>
      <p>
        <FontAwesomeIcon icon={faCog} />
        faCog
      </p>
      <p>
        <FontAwesomeIcon icon={faSun} />
        faSun
      </p>
      <p>
        <FontAwesomeIcon icon={faGlobe} />
        faGlobe
      </p>
      {/* <p>
        <FontAwesomeIcon icon={faBuromobelexperte} />
      </p> */}
      <p>
        <FontAwesomeIcon icon={faGripHorizontal} />
      </p>
      <p>
        <FontAwesomeIcon icon={faCoffee} /> faCoffee
      </p>
      <p>
        <FontAwesomeIcon icon={faThumbsUp} /> faThumbsUp
      </p>
      <p>
        <FontAwesomeIcon icon={faTimes} /> faTimes
      </p>
      <p>
        <FontAwesomeIcon icon={faBars} /> faBars
      </p>
      <p>
        <FontAwesomeIcon icon={faUser} /> faUser
      </p>
      <p>
        <FontAwesomeIcon icon={faTh} /> faTh
      </p>
      {/* free-brands-svg-icons */}
      <p>
        <FontAwesomeIcon icon={faApple} />
        *brands*/faApple
      </p>

      <p>
        <FontAwesomeIcon icon={faTwitter} /> faTwitter
      </p>
      <p>
        <FontAwesomeIcon icon={faFacebook} /> faFacebook
      </p>

      <style jsx>{`
        //Статичні стилі
        .font-awecom-icons {
          display: flex;
          //flex-wrap: wrap;
          flex-flow: row wrap; //В рядок + переносити */
          text-align: center;
          max-width: 1000%;
          // margin-top: 10px;
          // margin: 10px;
          // padding: 20px 30px;
          // bottom: 20px;
        }
        .font-awecom-icons p {
          margin: 10px;
          // padding: 20px 30px;
        }
      `}</style>
    </section>
  );
};
export default FontAwecomIcons;
