import './Footer.css'
import Logo from '../../assets/Lennon_Lawn_Care-removebg-preview.png'

const Footer = ()=> {

    return (
        <footer>
            <div className='footer-cont'>
                <img src={Logo} alt={`Trademark`} />
            </div>
            <div className='footer-text'>
                <p>Elevate Your Surroundings with Lennon Lawn Care.</p>
            </div>
        </footer>
    )
}

export default Footer;