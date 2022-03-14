import "./NavBar.css";
import { Link } from "react-router-dom";
import HomeOutlined from "@material-ui/icons/HomeOutlined";

function NavBar() {
  return (
    <div className='navBarWrapper'>
      <Link to='/'>
        <span className=' py-1 rounded-full text-white  font-semibold text-sm text-justify flex  w-max '>
          <HomeOutlined /><p className='mt-1'>Homelike</p>
        </span>
      </Link>
    </div>
  );
}

export default NavBar;
