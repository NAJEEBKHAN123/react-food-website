
import './Navbar.css'
import images from '../assets/vector.jpeg'

function Navbar() {
  return (
    <nav className="navbar">
    <div className="logo">
        <img src={images} alt="Logo"/>
    </div>
    <div className="search-container">
        <input type="text" placeholder="Search Food Item..." />
        <button type="button">Search</button>
    </div>
</nav>
  )
}

export default Navbar
