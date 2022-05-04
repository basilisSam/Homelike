import "./NavBar.css";
import {Link} from "react-router-dom";
import HomeOutlined from "@material-ui/icons/HomeOutlined";

function NavBar() {
    return (
        <div className='navBarWrapper'>
            <Link to='/'>
                <span className='navBarBrand'>
                    <HomeOutlined/>
                    <p>Github-Issues</p>
                </span>
            </Link>
        </div>
    );
}

export default NavBar;
