import headerIcon from "../assets/icon-header.png";
import headerImage from "../assets/image-header.png";

function Header() {
  return (
    <div className="header-container">
      <div className="header-wrapper">
        <div className="header-sides">
          <img src={headerIcon} className="header-icon" />
          <button className="header-btn">Связаться</button>
        </div>

        <div className="header-midl">
          <p>О нас</p>
          <p>Услуги</p>
          <p>Аренда</p>
        </div>
      </div>

      <h1 className="header-title">Веломастерская “Велозар”</h1>
      <p className="header-text">
        Мы, мастера веломастерской «Велозар», как раз <br /> те самые счастливые
        люди, которые смогли <br /> превратить свое увлечение и хобби в
        профессию.
        <br /> Мы сами любим кататься и хотим чтобы Ваш
        <br /> двухколесный друг приносил Вам только радость
        <br /> и удовольствие от езды.
      </p>

      <img src={headerImage} className="header-image" />
    </div>
  );
}

export default Header;
