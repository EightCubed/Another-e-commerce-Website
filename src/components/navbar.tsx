import { useDispatch , useSelector} from 'react-redux';
import { cartDetails } from '../store/reducer';
import './navbar.css';

function NavBar(){

    const itemNum=useSelector<cartDetails,number>( (state:any) => (state.itemNum) )
    const dispatch=useDispatch();

    function setCartOpen(){
        console.log('Toggling Cart');
        dispatch({type:"TOGGLE_STATE"});
    }

    return(
        <div id="navbar">
            <div id='navbarFiller1'></div>
            <img id="logo" alt="logo" src="https://pbs.twimg.com/media/BzPcHxXCMAEwge2?format=jpg&name=large"></img>
            <input id='searchBar'placeholder='Search for Products, Brands and More' width="10rem"></input>
            <div id='navbarFiller2'></div>
            <span id='cartarea' onClick={setCartOpen}><span id='numOfItems'>{itemNum}</span><img id='cart' alt='cart icon' src='https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png' width='30px'></img></span>
        </div>
    )
}

export default NavBar;