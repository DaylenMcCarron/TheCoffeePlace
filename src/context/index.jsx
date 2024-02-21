import { createContext, useState } from "react";

const MyContext = createContext();
const MyProvider = (props) => {

    const [items,setItems] = useState(0)
    const [totalPrice,setTotalPrice] = useState(0)

    const [products, setProducts] = useState([
        { id: 1, name: 'Espresso', price: 199, description: 'A strong and concentrated coffee made by forcing hot water through finely-ground coffee beans.' , amt: 0, image: 'esp.jpg'},
        { id: 2, name: 'Cappuccino', price: 299, description: 'An espresso-based coffee with equal parts of steamed milk and milk foam, known for its creamy texture.' , amt: 0, image: 'cap.jpg'},
        { id: 3, name: 'Latte', price: 249, description: 'A coffee drink made with espresso and steamed milk, usually topped with a small amount of foam.' , amt: 0, image: 'lat.jpg'},
        { id: 4, name: 'Americano', price: 249, description: 'A diluted espresso with added hot water, resulting in a coffee that resembles traditional American drip coffee.' , amt: 0, image: 'ame.jpeg'},
        { id: 5, name: 'Macchiato', price: 349, description: 'An espresso with a small amount of milk, providing a bolder coffee flavor with a touch of creaminess.' , amt: 0, image: 'mac.webp'},
      ]);

      const [FAQ, setFAQ] = useState([
        {
          id: 1,
          question: ' What types of coffee beans do you use?',
          answer: 'We source our coffee beans from reputable growers around the world, ensuring the finest quality and diverse flavor profiles.'
        },
        {
          id: 2,
          question: ' How is your coffee roasted?',
          answer: 'Our coffee is carefully roasted to perfection, capturing the unique characteristics of each bean. We prioritize freshness and flavor in every batch.'
        },
        {
          id: 3,
          question: ' Can I customize the grind size of my coffee?',
          answer: 'Yes, you can! We offer various grind sizes to suit different brewing methods, including espresso, drip, and French press. Simply specify your preference during the order process.'
        },
        {
          id: 4,
          question: ' Are your coffee products organic and sustainably sourced?',
          answer: 'We are committed to sustainability. Many of our coffee products are organic, and we prioritize partnerships with farmers who follow environmentally friendly practices.'
        },
        {
          id: 5,
          question: ' How do I store coffee beans for freshness?',
          answer: 'To maintain freshness, store your coffee beans in an airtight container in a cool, dark place. Avoid exposure to heat, moisture, and direct sunlight to preserve the flavors.'
        },
        {
          id: 6,
          question: ' Do you offer decaffeinated coffee options?',
          answer: 'Yes, we have a selection of decaffeinated coffee options for those who prefer to enjoy the taste of coffee without the caffeine. Check our product listings for decaf choices.'
        },
        {
          id: 7,
          question: ' How can I track my order?',
          answer: 'Once your order is shipped, you will receive a tracking number via email. Use this number to track your package and get real-time updates on its delivery status.'
        },
        {
          id: 8,
          question: ' What is your return policy?',
          answer: 'We want you to be satisfied with your purchase. Check our return policy for details on returns and exchanges. If you have any issues, feel free to contact our customer support team.'
        },
        {
          id: 9,
          question: ' Are there any discounts or promotions available?',
          answer: 'Stay updated on our website and subscribe to our newsletter for the latest discounts and promotions. We frequently offer special deals on our coffee products.'
        },
        {
          id: 10,
          question: ' Can I purchase gift cards for your coffee store?',
          answer: 'Absolutely! Gift cards are available for purchase and make excellent presents for coffee enthusiasts. Choose the desired amount, and the recipient can use it to explore our diverse coffee offerings.'
        },
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
                FAQ:FAQ,
            
            }

        }>
            {props.children}
        </MyContext.Provider>
    )
}

export {MyContext, MyProvider}