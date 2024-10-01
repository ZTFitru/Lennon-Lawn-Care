import Footer from "../Footer/Footer";
import Home from "../Home/Home";
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
            </Routes>
            <Footer />
        </main>
    )
}

export default App;