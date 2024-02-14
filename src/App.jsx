import Cart from "./Cart"

import ContactUs from "./ContactUs"
import FAQ from "./FAQ"
import Footer from "./Footer"
import Header from "./Header"
import Home from "./Home"
import Products from "./Products"
function App() {

  return (
    <>
      <Cart />
      {/* <CartWindow /> */}
      <Header /> 
      <Home />
      <Products />

      <FAQ />
      <ContactUs />
      <Footer />
    </>
  )
}

export default App
