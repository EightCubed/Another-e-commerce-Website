import './items.css'

function Items(){

    const image_info=[{ src : "https://rukminim1.flixcart.com/image/312/312/ku4ezrk0/computer/2/z/l/fx506hcb-hn228t-gaming-laptop-asus-original-imag7bhenhg7nqvh.jpeg?q=70" , rating : 3.5 , reviews : 1500 , name : "ASUS TUF Gaming F15 Core i5 10th Gen - (8 GB/512 GB SSD/Windows 1..." },{ src : "https://rukminim1.flixcart.com/image/312/312/kbqu4cw0/computer/q/x/r/hp-original-imaftyzachgrav8f.jpeg?q=70" , rating : 4.1 , reviews : 1241 , name : "HP Pavilion Gaming Ryzen 7 Octa Core 4800H - (16 GB/1 TB HDD/256 ..."} , { src : "https://rukminim1.flixcart.com/image/312/312/ko0d6kw0/computer/i/h/f/modern-14-b4mw-410in-notebook-msi-original-imag2km2dgzqvju9.jpeg?q=70" , rating : 3.9 , reviews : 8742 , name : "MSI Modern 14 Ryzen 5 Hexa Core 4500U - (8 GB/512 GB SSD/Windows ..."} , { src : "https://rukminim1.flixcart.com/image/312/312/kuvkcy80/computer/n/y/n/na-gaming-laptop-acer-original-imag7whp9urft8mf.jpeg?q=70" , rating : 4.5 , reviews : 912 , name : "acer Nitro 5 Ryzen 5 Hexa Core 4600H - (8 GB/1 TB HDD/256 GB SSD/..."}]
    
    return(
        <p id="itemList">
            {image_info.map( e => 
            <div className="items" key={e.src}>
                <img src={e.src} alt="laptops" width="180" height="150"/>
                {<p className='itemName'>{e.name}</p>}
                <p><span id='rating'>{e.rating}&nbsp;<span id='star'>&#9734;</span></span><span id='reviews'> ({e.reviews}) </span></p>
            </div>)}
        </p>
    );
}

export default Items;