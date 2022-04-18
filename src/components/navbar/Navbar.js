import './navbar.css';
import logo from "./../../assets/images/logo.png";

function Navbar() {
    return (
            <nav className="navbar container">
                <img src={logo} className="logo logoplus"></img>
                <input type="checkbox" id="toggler"></input>
                    <label for="toggler"><i className="ri-menu-line"></i></label>
                    <div className="menu">
                        <ul className="list">
                            <li><a href="#">About</a></li>
                            <li><a href="#">Rules</a></li>
                        </ul>
                    </div>
            </nav>
    );

}
export default Navbar;