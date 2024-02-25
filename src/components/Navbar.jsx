import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="flex navbar">
      <div className="logo">
        {" "}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Youtube_shorts_icon.svg/120px-Youtube_shorts_icon.svg.png"
          alt="logo"
          style={{ width: "22px", height: "22px" }}
        />{" "}
        YTShorts
      </div>
      <div className="flex right-nav">
        <CiSearch className="nav-icons" />
        <IoIosNotificationsOutline className="nav-icons" />
        <CiUser className="nav-icons" />
      </div>
    </div>
  );
};

export default Navbar;
