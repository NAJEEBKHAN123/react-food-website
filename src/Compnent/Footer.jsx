// import facebook from '../assets/facebook.jpeg'
import facebook from '../assets/faceBook.jpeg'
import github from '../assets/github.jpeg'
import linkedin from '../assets/linkedin.jpeg'



 import "./Footer.css"
function Footer() {
  return (
    <>
    <footer>
    <div className="containerr">
        {/* <div className="images"> */}
            <img src={facebook}  className='footerImg' alt="logo" />
            <img src={linkedin} className='footerImg' alt="logo" />
            <img src={github} className='footerImg' alt="logo" />
        </div>
    {/* </div> */}
    </footer>
        <p style={{textAlign: 'center'}}>All rights reserved. Design by <span className='span'>Najeeb Khan</span></p>
    </>
  )
}

export default Footer
