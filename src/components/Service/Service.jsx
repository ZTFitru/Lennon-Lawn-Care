import './Service.css'
import Fall from '../../assets/fall.jpg'
import Planting from '../../assets/planting.jpg'
import Sod from '../../assets/sod.jpg'

const Service = ()=> {

    return (
        <section className="services-outter">
            <h1>Services</h1>
            <p>Nurturing Gardens, Cultivating Dreams.</p>
            <div className="services-inner">
                <div className="services-container">
                    <img src={Fall} alt="fall leaves"/>
                    <h2>Spring/Fall Clean-Up</h2>
                    <p>
                        As the seasons transition, your lawn requires special attention to ensure its health and
                        vitality.
                        Our Spring/Fall Clean-up services are tailored to prepare your outdoor space for the changing
                        weather conditions.
                    </p>
                </div>
                <div className="services-container">
                    <h2>Tree & Shrub Planting</h2>
                    <p>
                        Enhance the beauty and vitality of your landscape with our expert Tree & Shrub Planting
                        services. At Lennon Landscapes,
                        we understand the importance of thoughtful and strategic planting to create a lush and thriving
                        environment.
                    </p>
                    <img src={Planting} alt="" />
                </div>
                <div className="services-container">
                    <img src={Sod} alt="" />
                    <h2>Sod Installation</h2>
                    <p>
                        Achieve an instantly lush and vibrant lawn with our professional Sod Installation services at
                        Lennon Landscapes.
                        Transforming your outdoor space has never been easier, thanks to our expertise in precision and
                        care.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Service;