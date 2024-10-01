import './Navbar.css'
import Logo from '../../assets/Lennon_Lawn_Care-removebg-preview.png'
import { NavLink } from 'react-router-dom';
// import Logo from '../../assets/Lennon Lawn Care.png'

const Navbar = ()=> {


    return (
        <header className='nav-outter'>
            <div className='nav-cont'>
                <img src={Logo} alt={`Headshot of ${Logo}`} />
            </div>
            <nav>
                <ul>
                    <li><NavLink to={'/service'}>Service</NavLink></li>
                    <li>About</li>
                    <li className='contact-us'>Contact Us</li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;