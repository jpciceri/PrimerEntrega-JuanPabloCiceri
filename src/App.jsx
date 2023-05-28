import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import HotSale from './components/HotSale';

function App() {
  return (
    <div className='container-fluid'>
      <Header />
      <HotSale />
      <ItemListContainer />
      <Footer />
    </div>
  );
}

export default App;
