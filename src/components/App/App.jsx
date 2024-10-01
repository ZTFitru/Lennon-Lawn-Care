import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Titlepage from "../Titlepage/Titlepage";
import './App.css'

const App = ()=> {

    return (
        <main className="app-cont">
            <Navbar />
            <Titlepage />
            <Footer />
        </main>
    )
}

export default App;