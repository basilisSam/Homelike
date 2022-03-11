import "./NavBar.css";
import {Link} from "react-router-dom";

function NavBar() {
    return (
        <Link to="/">
        <div className='navBarWrapper'>
          Homelike
      </div>
        </Link>
    );
  }
  
  export default NavBar;
  