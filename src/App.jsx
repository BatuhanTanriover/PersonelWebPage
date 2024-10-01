
import './App.css'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {Routes,Route} from "react-router-dom"
import Home from "./components/Home"

function App() {


  return (
   <div>
    <div className='background'>
    <Navbar/>
      <Routes>
      
      <Route path='/' element={<Home/>} />
     
      
      </Routes>
      <Footer/>
    </div>
    
   </div>
  )
}

export default App
