
import DescriptionPageImage from '../assets/DescriptionPageImage.svg'


function DescriptionPage() {


  return ( 
    <div className="DescriptionPageContainer">

      <div className='BorderDescriptionPage'>

      <h2 className="TitleDescriptionPage">Легендарные коньяки в новом дизайне</h2>
      <div className="ShortLineDescriptionPage"></div>
      <p className="TextDescriptionPage">Каждый из коньяков ARARAT обладает оригинальным букетом. Он формируется на <br/> виноградниках Армении, проявляет характер в процессе дистиляции, зреет во время <br/> выдержки в бочках из кавказского дуба, обретает объем с добавлением родниковой <br/> воды и раскрывается в полную силу в бокале. <br/> <br/> <br/>Солнечные фрукты и медово-ореховые сочетания, сладкие ноты карамели и слегка <br/> терпкий кофе — разнообразие вкусовой палитры хорошо известно ценителям во <br/> многих странах. Познакомьтесь с широким выбором коньяков бренда на нашем сайте<br/> и выберите свой ARARAT.</p>


      <img className="ImageDescriptionPage" src={DescriptionPageImage}/>


      </div>
    </div>
  )
}

export default DescriptionPage