
import './Navbar.css'
import myImage from '../assets/logo-removebg-preview.png'

function Navbar() {
  return (
    <nav className="navbar">
    <div className="logo">
        <img src={myImage} alt="Logo"/>
    </div>
    <div className="search-container">
        <input type="text" placeholder="Search Food Item..." />
        <button type="button">Search</button>
    </div>
</nav>
  )
}

export default Navbar
