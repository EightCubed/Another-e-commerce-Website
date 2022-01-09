import { useSelector } from 'react-redux';
import './App.css';
import Items from './componenta/items';
import NavBar from './componenta/navbar';
import { cartDetails } from './store/reducer';
import Cart from './componenta/cart';

function App() {
  const cartOpen=useSelector<cartDetails>((state)=>state.cartOpen);

  return (
    <div className='container'>
      <div className="App">
        <NavBar/>
        <Items/>
      </div>
      {cartOpen ? <div className='cartOnOpen'><Cart/></div> : null }
    </div>
  );
}

export default App;
