import imageRentalSection from "../assets/imageRentalSection.jpg";

function RentalSection() {
  return (
    <div className="RentalSectionContainer">
      <img className="imageRentalSection" src={imageRentalSection} />

      <div className="RentalSectionAllText">
        <h2 className="RentalSectionTitle">Прокат велосипедов</h2>
        <p className="RentalSectionText">
          У нас вы можете взять на прокат <br /> хорошо обслуженные и
          настроенные
          <br /> велосипеды. Как раз мы находимся <br /> в прекрасном парке!
        </p>
      </div>
    </div>
  );
}

export default RentalSection;
