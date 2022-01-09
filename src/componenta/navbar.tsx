import './navbar.css'
function NavBar(){
    return(
        <div id="navbar">
        <img id="logo" alt="logo" src="https://pbs.twimg.com/media/BzPcHxXCMAEwge2?format=jpg&name=large"></img>
        <input id='searchBar'placeholder='Search for Products, Brands and More' width="10rem"></input>
        </div>
    )
}

export default NavBar;