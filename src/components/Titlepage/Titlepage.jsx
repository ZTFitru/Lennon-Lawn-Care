import './Titlepage.css'
import Fall from '../../assets/fall.jpg'
import Planting from '../../assets/planting.jpg'
import Sod from '../../assets/sod.jpg'

const Titlepage = ()=> {

    return (
        <div className='title-outter' >
            <div class="title-section">
                <h1>Lennon Lawn Care</h1>
                <p>Transforming Outdoor spaces with Expertise and Care.</p>
            </div>
            <div className='service-cont'>
                <div className='fall'>
                    <h2>Spring Clean-Up</h2>
                    <img src={Fall} alt={`Leaves`} />
                </div>
                <div className='fall'>
                    <h2>Fall Clean-Up</h2>
                    <img src={Fall} alt={`Leaves`} />
                </div>
                <div className='fall'>
                    <h2>Tree Planting</h2>
                    <img src={Planting} alt={`Afforestation`} />
                </div>
                <div className='fall'>
                    <h2>Sod Installation</h2>
                    <img src={Sod} alt={`Sodding`} />
                </div>
            </div>
        </div>
    )
}

export default Titlepage;