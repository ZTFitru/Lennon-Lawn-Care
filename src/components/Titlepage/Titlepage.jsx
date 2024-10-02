import './Titlepage.css'
import Fall from '../../assets/fall.jpg'
import Planting from '../../assets/planting.jpg'
import Sod from '../../assets/sod.jpg'
import { Link } from 'react-router-dom';

const services = [
    { title: 'Spring Clean-Up', imgSrc: Fall, altText: 'Leaves during spring' },
    { title: 'Fall Clean-Up', imgSrc: Fall, altText: 'Leaves during fall' },
    { title: 'Tree Planting', imgSrc: Planting, altText: 'Tree planting' },
    { title: 'Sod Installation', imgSrc: Sod, altText: 'Sod installation' },
];

const Titlepage = () => {
    return (
        <div className='title-outter'>
            <div className="title-section">
                <h1>Lennon Lawn Care</h1>
                <p>Transforming Outdoor Spaces with Expertise and Care.</p>
            </div>
            <div className='service-cont'>
                {services.map((service, index) => (
                    <Link to={'/service'} className='service-item' key={index}>
                        <h2>{service.title}</h2>
                        <img src={service.imgSrc} alt={service.altText} />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Titlepage;
