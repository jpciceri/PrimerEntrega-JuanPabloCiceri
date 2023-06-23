import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import HotSale from './components/HotSale';
import Error404 from './components/Error404';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartContextProvider from './components/CartContext';
import Checkout from './components/CheckOut';
import ThankYou from './components/ThankYou';


function App() {
  return (
    <div className='container-fluid'>
      <CartContextProvider>
        <BrowserRouter>
          <Header />
          <HotSale />
          <Routes>
            <Route path={"/"} element={<ItemListContainer />} />
            <Route path={"/category/:id"} element={<ItemListContainer />} />
            <Route path={"/item/:id"} element={<ItemDetailContainer />} />
            <Route path={"/cart"} element={<Cart />} />
            <Route path={"/checkout"} element={<Checkout />} />  
            <Route path={"/thankyou/:orderId"} element={<ThankYou />} /> 
            <Route path={"/*"} element={<Error404 />} />

          </Routes>

          <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
