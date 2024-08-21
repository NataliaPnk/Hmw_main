import OfferPageImageLeft from '../assets/OfferPageImageLeft.jpg'
import OfferPageImageRight from '../assets/OfferPageImageRight.jpg'

function OfferPage() {

  return (
<div>
  <img className="OfferPageImageLeft" src={OfferPageImageLeft}/>
  <h2 className="OfferPageTitle">Запись на дегустацию</h2>
  <div className='ShortLineOfferPage'></div>
  <img className="OfferPageImageRight" src={OfferPageImageRight}/>


  <p className='TextOfferPage'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat enim tortor in hac id imperdiet adipiscing. Pellentesque nisi, mi sit non sit sed fermentum. </p>


  <div className='InputsOfferPage'>
    <input type='text'></input>
    <input type='number'></input>
  </div>

  <p className='AddressOfferPage'>Бутик на Невском 103</p>
    <button className='BtnOfferPage'>записаться</button>
</div>
  )
}

export default OfferPage