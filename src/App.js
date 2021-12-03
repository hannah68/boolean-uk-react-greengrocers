import './styles/reset.css'
import './styles/index.css'
import data from './db.json'
import {useState} from 'react';
import StoreItems from './StoreItems';
import CartItems from './CartItems'
console.log(data);



// What should a cart item look like? 🤔
// */



export default function App() {

  const initialStoreItems = data.items;
  const [storeItems, setStoreItems] = useState(initialStoreItems);

  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <StoreItems storeItems={storeItems}/>
      </header>
      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          {/* <CartItems/> */}
        </div>
        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span className="total-number">£0.00</span>
          </div>
        </div>
      </main>
      <div>
        Icons made by
        <a
          href="https://www.flaticon.com/authors/icongeek26"
          title="Icongeek26"
        >
          Icongeek26
        </a>
        from
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </>
  )
}
