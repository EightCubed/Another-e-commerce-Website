import { useDispatch } from 'react-redux';
import './navbar.css';

function NavBar(){

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
            <span id='cartarea' onClick={setCartOpen}><img id='cart' alt='cart icon' src='https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png' width='30px'></img></span>
        </div>
    )
}

export default NavBar;