//footer.js
import { useContext } from "react";
import { ComponentContext } from "../../context/ComponentContext";

const Footer = () => {
  const { state } = useContext(ComponentContext);
  const theme = state.theme;
  return (
    <div className="footer-wrapper">
      <div className="copyright">© {new Date().getFullYear()} stan.if.ua.</div>
      <style jsx>{`
      //Статичні стилі
      .footer-wrapper {
          text-align: center;
          margin-top: 80px;
          padding: 80px 30px;
        }
        .copyright {
          margin-bottom: 20px;
      `}</style>
      <style jsx>{`
      //Динамічні стилі (Окремо, щоб при зміні були перераховані лише динамічні)
      .footer-wrapper {
          background: ${theme.colors.background1};
          color: ${theme.colors.text};
          font-family: ${theme.fontFamily.sansSerif};
      `}</style>
    </div>
  );
};
export default Footer;
