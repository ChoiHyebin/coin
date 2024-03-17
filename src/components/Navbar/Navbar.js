import './Navbar.css';

const Navbar =()=>{
  return (
    <nav className="navbar-container">
        <ul>
            <li><a href="/">Home</a></li> 
            <li><a href="/coinlist">CoinList</a></li>
            <li><a href="/login">Login</a></li>
        </ul>
    </nav>
  );
}

export default Navbar;
