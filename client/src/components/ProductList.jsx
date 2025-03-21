// import React from 'react';
import React, { useState } from 'react';
import Product from './Product'; 
import iphone16 from './image/iphone.jpg';  
import iphone16Pro from './image/iphone16promax.jpg'; 
import iphone15 from './image/iphone 15.jpg'
import earpods from './image/earpods.jpg'
// import Cart from './Cart';

const ProductList = () => {
    const [cart, setCart] = useState([]);
  
    const handleAddToCart = (product) => {
      setCart((prevCart) => {
        const existingProduct = prevCart.find((item) => item.id === product.id);
        if (existingProduct) {
          return prevCart.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + product.quantity } : item
          );
        }
        return [...prevCart, product];
      });
    };
  
    return (
      <div>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', padding: '20px' }}>
          <Product
            id={1}
            name="iPhone 16"
            description="iPhone 16. Built for Apple Intelligence. Featuring Camera Control, A18 chip, and more."
            price={1000}
            image={iphone16}
            onAddToCart={handleAddToCart}
          />
          <Product
            id={2}
            name="iPhone 16 Pro Max"
            description="iPhone 16 Pro Max. Built for Apple Intelligence. Featuring a stunning design, A18 Pro chip, and more."
            price={1200}
            image={iphone16Pro}
            onAddToCart={handleAddToCart}
          />
          <Product
            id={3}
            name="iPhone 15"
            description="iPhone 15. Dynamic Island bubbles up alerts and Live Activities — so you don’t miss them while you’re doing something else."
            price={800}
            image={iphone15}
            onAddToCart={handleAddToCart}
          />
          <Product
            id={4}
            name="Apple Earpods"
            description="H2 Apple silicon, amazing sound quality with Adaptive EQ."
            price={300}
            image={earpods}
            onAddToCart={handleAddToCart}
          />

        </div>
      </div>
    );
  };
  
  export default ProductList;
