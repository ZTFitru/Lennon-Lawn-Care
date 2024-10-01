import './Navbar.css'
import Logo from '../../assets/Lennon_Lawn_Care-removebg-preview.png'
import { Link, NavLink } from 'react-router-dom';

const Navbar = ()=> {


    return (
        <header className='nav-outter'>
            <Link to={'/'} className='nav-cont'>
                <img src={Logo} alt={`Trademark`} />
            </Link>
            <nav>
                <ul>
                    <li><NavLink to={'/service'}>Service</NavLink></li>
                    <li><NavLink to={'/about-us'}>About-Us</NavLink></li>
                    <li className='contact-us'>Contact Us</li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;