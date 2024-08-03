import burger from '../assets/burderr.jpeg'
import pizza from '../assets/pizza.jpeg'
import momos from '../assets/momos.jpeg'
import './ExploreFood.css'

function ExploreFood() {
  return (
    <main>
      <h1 className='main'>Explore Food</h1>
    <div className="Explorecontainer">
        {/* <div className="images"> */}
            <div className="image-wrapper">
            <img src={burger} alt="Image 1"/>
            <div className="overlay-text">Burger</div>
            </div>
            <div className="image-wrapper">
            <img src={pizza} alt="logo" />
            <div className="overlay-text">Pizza</div>
            </div>
            <div className="image-wrapper">
            <img src={momos} alt="logo" />
            <div className="overlay-text">Momos</div>
            </div>
        
            
           
        </div>   
    {/* </div> */}
    </main>
  )
}

export default ExploreFood
