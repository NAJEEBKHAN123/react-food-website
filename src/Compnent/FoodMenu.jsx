import pizza from '../assets/pizza.jpeg'
import momos from '../assets/momos.jpeg'
import burger from '../assets/burderr.jpeg'
import vector from '../assets/vector.jpeg'
import great from '../assets/great.jpeg'
import menFood from '../assets/foodWithMan.jpeg'

import './FoodMenu.css'


function FoodMenu() {
  return (
    <main className='foodmenu' >
        <h1>Food Menu</h1>
        <div className='mainContainer'>
         <div className="container">
        <div className="image">
         <img src={pizza} alt="burger" className='images'/>
        </div>
        <div className="food-title">
            <h3>Food Title</h3>
            <h3>$2.3</h3>
            <p>Made with italian sauce, chicken and oraganice vegetable</p>
            <button>Order Now</button>
        </div>
    </div>  
      <div className="container">
        <div className="image">
         <img src={momos} alt="burger" className='images'/>
        </div>
        <div className="food-title">
            <h3>Food Title</h3>
            <h3>$2.3</h3>
            <p>Made with italian sauce, chicken and oraganice vegetable</p>
            <button>Order Now</button>
        </div>     
    </div>
    <div className="container">
        <div className="image">
         <img src={burger} alt="burger" className='images'/>
        </div>
        <div className="food-title">
            <h3>Food Title</h3>
            <h3>$2.4</h3>
            <p>Made with italian sauce, chicken and oraganice vegetable</p>
            <button>Order Now</button>
        </div>     
    </div>
    <div className="container">
        <div className="image">
         <img src={vector} alt="burger" className='images'/>
        </div>
        <div className="food-title">
            <h3>Food Title</h3>
            <h3>$3.4</h3>
            <p>Made with italian sauce, chicken and oraganice vegetable</p>
            <button>Order Now</button>
        </div>     
    </div>
    <div className="container">
        <div className="image">
         <img src={great} alt="burger" className='images'/>
        </div>
        <div className="food-title">
            <h3>Food Title</h3>
            <h3>$2.1</h3>
            <p>Made with italian sauce, chicken and oraganice vegetable</p>
            <button>Order Now</button>
        </div>     
    </div>
    <div className="container">
        <div className="image">
         <img src={menFood} alt="burger" className='images'/>
        </div>
        <div className="food-title">
            <h3>Food Title</h3>
            <h3>$2.0</h3>
            <p>Made with italian sauce, chicken and oraganice vegetable</p>
            <button>Order Now</button>
        </div>    
    </div>
    </div>
    <p href=" " className='seeMore'><a href="">See more</a></p> 
    </main>
  )
}

export default FoodMenu
