
import NewCollectionPageImage_1_big from '../assets/NewCollectionPageImage_1_big.jpg'
import NewCollectionPageImage_2_left from '../assets/NewCollectionPageImage_2_left.jpg'
import NewCollectionPageImage_3_right from '../assets/NewCollectionPageImage_3_right.jpg'


function NewCollectionPage() {

return (
<div className="NewCollectionPageContainer">
<div className="BorderNewCollectionPage"></div>

<div className="NewCollectionPageContainerLeftPart">
<h4>Новинки коллекций</h4>
<h2>Процесс, безупречный в каждой детали</h2>
<div className="ShortLineNewCollectionPage"></div>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat enim tortor in hac id imperdiet adipiscing. Pellentesque nisi, mi sit non sit sed fermentum. Felis adipiscing morbi sodales ac.</p>


<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat enim tortor in hac id imperdiet adipiscing. Pellentesque nisi, mi sit non sit sed fermentum. Felis adipiscing morbi sodales ac.</p>
<button className="BtnNewCollectionPage" >узнать подробнее</button>
</div>


<div className="NewCollectionPageContainerRightPart">
<img src={NewCollectionPageImage_1_big}/>
<img src={NewCollectionPageImage_2_left}/>
<img src={NewCollectionPageImage_3_right}/>
</div>



<div className="BorderNewCollectionPage"></div>
</div>
)
}

export default NewCollectionPage