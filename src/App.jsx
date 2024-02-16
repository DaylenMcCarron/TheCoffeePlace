import Cart from "./Cart"
import { MyProvider } from "./context"

import ContactUs from "./ContactUs"
import FAQ from "./FAQ"
import Footer from "./Footer"
import Header from "./Header"
import Home from "./Home"
import Products from "./Products"
function App() {

  return (
    <MyProvider>
      <Header /> 
      <Cart />
      <Home />
      <Products />

      <FAQ />
      <ContactUs />
      <Footer />
      
    </MyProvider>
  )
}

export default App
