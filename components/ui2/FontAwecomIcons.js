//FontAwecomIcons.js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //fontawesome
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
  faUser
} from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";
// import { faCoffee } from "@fortawesome/free-regular-svg-icons";

const FontAwecomIcons = () => {
  return (
    <div className="FontAwecomIcons">
      {/* <div> */}
      <i>
        <FontAwesomeIcon icon={faList} />
        faList
      </i>
      <i>
        <FontAwesomeIcon icon={faChevronRight} />
      </i>
      <i>
        <FontAwesomeIcon icon={faChevronLeft} />
      </i>
      <i>
        <FontAwesomeIcon icon={faCog} />
      </i>
      <i>
        <FontAwesomeIcon icon={faSun} />
      </i>
      <i>
        <FontAwesomeIcon icon={faGlobe} />
      </i>
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
        <FontAwesomeIcon icon={faTwitter} /> faTwitter
      </p>
      <p>
        <FontAwesomeIcon icon={faFacebook} /> faFacebook
      </p>
      <style jsx>{`
        //Статичні стилі
        .FontAwecomIcons {
          display: flex;
          text-align: center;
          // margin-top: 10px;
          // margin: 10px;
          // padding: 20px 30px;
          // bottom: 20px;
        }
        .FontAwecomIcons p {
          margin: 10px;
          // padding: 20px 30px;
        }
      `}</style>
    </div>
  );
};
export default FontAwecomIcons;
