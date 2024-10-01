import './About.css'
import AboutUs from '../../assets/about-us.jpg'

const About = ()=> {

    return (
        <section className="about-us" >
            <h1>Welcome to ED Lennon's Green Haven!</h1>
            <div className="about-us-container">
                <img src={AboutUs} alt="" />
                <h2>About Us</h2>
                <div className='about-text'>
                    <p>
                        At ED Lennon's Green Haven, we believe a beautiful lawn is the heart of a welcoming home.
                        With years of experience and a passion for perfection, we provide top-notch lawn care services
                        tailored to meet
                        the unique needs of each client. Our team is dedicated to transforming your outdoor space into a
                        lush, green oasis you can enjoy all year round.
                        Whether it's regular maintenance, landscaping, or specialized treatments, we use the best tools and
                        eco-friendly products to ensure your lawn
                        stays healthy and vibrant. Our commitment to quality and customer satisfaction is unmatched, and we
                        take pride in delivering results that exceed expectations.
                        Let us help you create the lawn of your dreams. Contact us today for a free consultation!
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About;