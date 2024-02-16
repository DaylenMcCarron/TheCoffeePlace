import Cart from "./Cart"
import { MyProvider } from "./context"

import { BrowserRouter , Route , Routes } from "react-router-dom"

import ContactUs from "./ContactUs"
import FAQ from "./FAQ"
import Footer from "./Footer"
import Header from "./Header"
import Home from "./Home"
import Products from "./Products"
import About from "./About"
import Profile from "./Profile"
function App() {

  return (
    <MyProvider>
      <BrowserRouter>
      <Header /> 
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="profile" element={<Profile/>}/>
          
        </Routes>
      <Cart />
      <Footer />
      
      </BrowserRouter>
    </MyProvider>
  )
}

export default App
