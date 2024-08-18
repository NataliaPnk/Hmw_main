import imageOfferSection from "../assets/imageOfferSection.jpg";

function OfferSection() {
  return (
    <div className="containerOfferSection">
      <div className="textContentOfferSection">
        <h2 className="titleOfferSection">Что мы предлагаем</h2>
        <p className="textOfferSection">
          В нашей мастерской можно выполнить <br /> комплексное техническое
          обслуживание
          <br /> велосипеда, ремонт и настройку всех его узлов,
          <br /> шиномонтажные работы. Вовремя проведенное
          <br /> ТО велосипеда помогает избежать многих
          <br /> проблем и дорогого ремонта. Все работы
          <br /> выполняем качественно и с душой.{" "}
        </p>
      </div>

      <img className="imageOfferSection" src={imageOfferSection} />
    </div>
  );
}

export default OfferSection;
