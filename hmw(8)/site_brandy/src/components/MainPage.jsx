import MainPageImage from '../assets/MainPageImage.jpg';



function MainPage({color}) {

  // const style = {
  //   color: color
  // };




return (
<div className="MainPageContainer"
style={{ backgroundImage: `url(${MainPageImage})` }}
>

<div className="InformationMainPage">
<p className="MainPageAddress">Цовакал Исакови пр., 2 дом</p>
<p className="MainPageNumber">8 (812) 123-45-67</p>
</div>

<div className="MainMenuMainPage">
<p>Каталог</p>
<p>Доставка</p>
<p>Коллекции</p>
<p>Контакты</p>
</div>

<div className="ButtonsMainPage"  >
<button className="BtnDegustation" >дегустация</button>
<button className="BtnCatalog">Каталог</button>
</div>





</div>
)
}

export default MainPage