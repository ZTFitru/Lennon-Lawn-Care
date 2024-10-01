import './Titlepage.css'
import Fall from '../../assets/fall.jpg'
import Planting from '../../assets/planting.jpg'
import Sod from '../../assets/sod.jpg'
import { Link } from 'react-router-dom'

const Titlepage = ()=> {

    return (
        <div className='title-outter' >
            <div class="title-section">
                <h1>Lennon Lawn Care</h1>
                <p>Transforming Outdoor spaces with Expertise and Care.</p>
            </div>
            <div className='service-cont'>
                <Link to={'/service'} className='fall'>
                    <h2>Spring Clean-Up</h2>
                    <img src={Fall} alt={`Leaves`} />
                </Link>
                <Link to={'/service'} className='fall'>
                    <h2>Fall Clean-Up</h2>
                    <img src={Fall} alt={`Leaves`} />
                </Link>
                <Link to={'/service'} className='fall'>
                    <h2>Tree Planting</h2>
                    <img src={Planting} alt={`Afforestation`} />
                </Link>
                <Link to={'/service'} className='fall'>
                    <h2>Sod Installation</h2>
                    <img src={Sod} alt={`Sodding`} />
                </Link>
            </div>
        </div>
    )
}

export default Titlepage;