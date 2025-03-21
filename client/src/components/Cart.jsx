// import React from 'react';
// import { useCart } from './CartContext'; // Import the CartContext

// const Cart = () => {
//   const { cart, handleRemoveFromCart } = useCart(); // Access the cart state and function from context

//   return (
//     <div>
//       <h3>Cart</h3>
//       {cart.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <ul>
//           {cart.map((item) => (
//             <li key={item.id}>
//               {item.name} - Quantity: {item.quantity} - Total: ${item.price * item.quantity}
//               <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Cart;

import React from 'react';
import { useCart } from './CartContext'; // Assuming you're using CartContext to manage cart data

const Cart = () => {
  const { cart, handleRemoveFromCart } = useCart(); // Access the cart data from CartContext

  return (
    <div style={{ padding: '20px' }}>
      <h3>Shopping Cart</h3>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                border: '1px solid #ddd',
                borderRadius: '8px',
                width: '250px',
                padding: '15px',
                textAlign: 'center',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: '100%',
                  height: '350px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
              <h4>{item.name}</h4>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Total: ${item.price * item.quantity}</p>
              <button
                onClick={() => handleRemoveFromCart(item.id)}
                style={{
                  backgroundColor: '#ff0000',
                  color: '#fff',
                  padding: '5px 10px',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;

