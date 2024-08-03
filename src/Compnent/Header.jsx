import './Header.css'
import apple from '../assets/apple.jpeg'

function Header() {
  return (
    <header >
       <div className="headerLogo">
        <img src={apple} alt="logo" />
        <span>WoW Food</span>
       </div>
       <div className="headerContainer">
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Foods</li>
            <li>Contact</li>
        </ul>
       </div>
      
    </header>
  )
}

export default Header
