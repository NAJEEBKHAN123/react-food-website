import './Header.css'
import removebg from '../assets/logo-removebg-preview.png'



function Header() {
  return (
    <header >
       <div className="headerLogo">
        <img src={removebg} alt="logo" />
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
