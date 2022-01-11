import './items.css'
import {nanoid} from 'nanoid';
import { useDispatch } from 'react-redux';

export const item_info=[{id : nanoid(), src : "https://rukminim1.flixcart.com/image/312/312/ku4ezrk0/computer/2/z/l/fx506hcb-hn228t-gaming-laptop-asus-original-imag7bhenhg7nqvh.jpeg?q=70" , rating : 3.5 , reviews : 1500 , price : 71999 ,  discount : false , discount_perc : 0 , quantity : 0, name : "ASUS TUF Gaming F15 Core i5 10th Gen - (8 GB/512 GB SSD/Windows " },{id : nanoid(), src : "https://rukminim1.flixcart.com/image/312/312/kbqu4cw0/computer/q/x/r/hp-original-imaftyzachgrav8f.jpeg?q=70" , rating : 4.1 , reviews : 1241 , price : 72990 , discount : true , discount_perc : .20 , quantity : 0, name : "HP Pavilion Gaming Ryzen 7 Octa Core 4800H - (16 GB/1 TB HDD/256 ..."} , {id : nanoid(), src : "https://rukminim1.flixcart.com/image/312/312/ko0d6kw0/computer/i/h/f/modern-14-b4mw-410in-notebook-msi-original-imag2km2dgzqvju9.jpeg?q=70" , rating : 3.9 , reviews : 8742 , price : 52499,  discount : true , discount_perc : .20 , quantity : 0, name : "MSI Modern 14 Ryzen 5 Hexa Core 4500U - (8 GB/512 GB SSD/Windows."} , {id : nanoid(), src : "https://rukminim1.flixcart.com/image/312/312/kuvkcy80/computer/n/y/n/na-gaming-laptop-acer-original-imag7whp9urft8mf.jpeg?q=70" , rating : 4.5 , reviews : 912 , discount : true , discount_perc : .39 , price : 99999 , quantity : 0, name : "acer Nitro 5 Ryzen 5 Hexa Core 4600H - (8 GB/1 TB HDD/256 GB SSD/..."}]

function Items(){    

    const dispatch=useDispatch();

    function addToCart(e:any){
        dispatch({type : "ADD_TO_CART" , item : e})
    }

    return(
        <div>
        <h1 id='title'>Laptops</h1>
        <div id="itemList">
            {item_info.map( e => 
            <span className="items" key={e.id}>
                <img id='itemImg' src={e.src} alt="laptops"/>
                <br/><br/>{<span className='itemName'>{e.name}</span>}
                <span id='reviews'><br/><span id='rating'>{e.rating}&nbsp;<span id='star'>&#9734;</span>&nbsp;</span><span id='ratingNum'> ({e.reviews}) </span></span>
                <span id='price'>{e.discount ? 
                <strong> ₹{ (e.price*(1-e.discount_perc)).toFixed(2) } &nbsp; <del id='discounted'>₹{e.price}</del></strong>: <strong>₹{e.price}</strong> }</span>
                <span id='buttons'>
                <button id='addToCart' onClick={()=>addToCart(e)}>Add to Cart</button>
                <button id='addToWishlist'>Add to Wishlist</button></span>
            </span>)}
        </div>
        </div>
    );
}

export default Items;