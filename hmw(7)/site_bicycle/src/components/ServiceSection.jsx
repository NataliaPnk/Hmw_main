import ServiceItem from "./ServiceItem";

function ServiceSection() {
  return (
    <div className="serviceSectionContainer">
      <p className="serviceSectionText">
        Приехав к нам однажды, многие наши клиенты становятся <br />{" "}
        постоянными, а часть из них даже друзьями. <br /> <br /> А также в нашей
        мастерской можно отремонтировать <br /> электросамокат и
        электровелосипед.
      </p>

      <div className="serviceSectionItems">
        <ServiceItem title="Годовое ТО" backgroundColor={"#22356F"} />
        <ServiceItem
          title={["Выравнивание", "колес"]}
          backgroundColor={"#0052C1"}
        />
        <ServiceItem
          title={["Настройка", "переключателей"]}
          backgroundColor={"#76B58B"}
        />
      </div>
    </div>
  );
}
export default ServiceSection;
