import './navbar.css';
import logo from "./../../assets/images/logo.png";

function Navbar() {
    return (
        <nav className="navbar container">
            <a href="/"><img src={logo} className="logo logoplus" ></img></a>
            <input type="checkbox" id="toggler"></input>
            <label for="toggler"><i className="ri-menu-line"></i></label>
        </nav>
    );

}
export default Navbar;