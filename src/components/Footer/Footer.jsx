import './Footer.css'
import Logo from '../../assets/Lennon_Lawn_Care-removebg-preview.png'

const Footer = ()=> {

    return (
        <footer>
            <div className='footer-cont'>
                <img src={Logo} alt={`Headshot of ${Logo}`} />
            </div>
        </footer>
    )
}

export default Footer;