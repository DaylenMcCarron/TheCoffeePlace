import { createContext, useState } from "react";

const MyContext = createContext();
const MyProvider = (props) => {

    const [items,setItems] = useState(0)
    const [totalPrice,setTotalPrice] = useState(0)

    const [products, setProducts] = useState([
        { id: 1, name: 'Espresso', price: 199, description: 'A strong and concentrated coffee made by forcing hot water through finely-ground coffee beans.' , amt: 0},
        { id: 2, name: 'Cappuccino', price: 299, description: 'An espresso-based coffee with equal parts of steamed milk and milk foam, known for its creamy texture.' , amt: 0},
        { id: 3, name: 'Latte', price: 249, description: 'A coffee drink made with espresso and steamed milk, usually topped with a small amount of foam.' , amt: 0},
        { id: 4, name: 'Americano', price: 249, description: 'A diluted espresso with added hot water, resulting in a coffee that resembles traditional American drip coffee.' , amt: 0},
        { id: 5, name: 'Macchiato', price: 349, description: 'An espresso with a small amount of milk, providing a bolder coffee flavor with a touch of creaminess.' , amt: 0},
      ]);

      const incAmt = (productId, productPrice) => {
        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product.id === productId ? { ...product, amt: product.amt + 1 } : product
          )
        );
        incItems();
        incTotalPrice(productPrice);
      };
      
      const decAmt = (productId, productPrice) => {
        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product.id === productId && product.amt > 0
              ? { ...product, amt: product.amt - 1 }
              : product
          )
        );
        decItems();
        decTotalPrice(productPrice);
      };
      
      const incItems = () => {
        setItems((items) => items + 1);
      };
      
      const decItems = () => {
        setItems((items) => (items > 0 ? items - 1 : 0));
      };
      
      const incTotalPrice = (productPrice) => {
        setTotalPrice((totalPrice) => totalPrice + productPrice);
      };
      
      const decTotalPrice = (productPrice) => {
        setTotalPrice((totalPrice) => (totalPrice > 0 ? totalPrice - productPrice : 0));
      };
      


    return (
        <MyContext.Provider value={
            {
                items:items,
                incItems:incItems,
                decItems:decItems,
                products:products,
                incAmt:incAmt,
                decAmt:decAmt,
                totalPrice:totalPrice,
            
            }

        }>
            {props.children}
        </MyContext.Provider>
    )
}

export {MyContext, MyProvider}