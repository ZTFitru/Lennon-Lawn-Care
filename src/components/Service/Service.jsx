import './Service.css'
import Fall from '../../assets/fall.jpg'
import Planting from '../../assets/planting.jpg'
import Sod from '../../assets/sod.jpg'
import { useNavigate } from 'react-router-dom';

const servicesData = [
    {
        title: "Spring/Fall Clean-Up",
        description: "As the seasons transition, your lawn requires special attention to ensure its health and vitality. Our Spring/Fall Clean-up services are tailored to prepare your outdoor space for the changing weather conditions.",
        imgSrc: Fall,
        altText: "Fall leaves",
    },
    {
        title: "Tree & Shrub Planting",
        description: "Enhance the beauty and vitality of your landscape with our expert Tree & Shrub Planting services. At Lennon Landscapes, we understand the importance of thoughtful and strategic planting to create a lush and thriving environment.",
        imgSrc: Planting,
        altText: "Tree planting",
    },
    {
        title: "Sod Installation",
        description: "Achieve an instantly lush and vibrant lawn with our professional Sod Installation services at Lennon Landscapes. Transforming your outdoor space has never been easier, thanks to our expertise in precision and care.",
        imgSrc: Sod,
        altText: "Sod installation",
    },
];

const Service = () => {

    const navigate = useNavigate()

    const btnFunction = ()=> {
        navigate(`/contact-us`)
    }
    return (
        <section className="services-outter">
            <h1>Services</h1>
            <p>Nurturing Gardens, Cultivating Dreams.</p>
            <div className="services-inner">
                {servicesData.map((service, index) => (
                    <div className="servies-container" key={index}>
                        <img src={service.imgSrc} alt={service.altText} className="service-image"/>
                        <h2>{service.title}</h2>
                        <p>{service.description}</p>
                        <button className="learn-more-btn" onClick={btnFunction}>Learn More</button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Service;
