import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Service from "../Service/Service";
import Titlepage from "../Titlepage/Titlepage";
import './App.css'
import { Route, Routes } from 'react-router-dom'


const App = ()=> {

    return (
        <main className="app-cont">
            <Navbar />
            <Routes>
                <Route path='/' element={<Titlepage />} />
                <Route path='/service' element={<Service />} />
                <Route path='/about-us' element={<About />} />
                <Route path='/contact-us' element={<Contact />} />
            </Routes>
            <Footer />
        </main>
    )
}

export default App;