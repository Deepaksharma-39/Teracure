import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

const NavMenu = ({ menuWhiteClass, sidebarMenu }) => {
  const { t } = useTranslation();
  
  return (
    <div
      className={clsx(sidebarMenu
          ? "sidebar-menu"
          : `main-menu ${menuWhiteClass ? menuWhiteClass : ""}`)}
    >
      <nav>
        <ul>
          <li>
            <Link to={ "/"}>
            {"Home"}
            </Link>
           
          </li>
          <li>
            <Link to={"/about"}>
              {"About"}
            </Link>
          </li>
          <li>
            <Link to={"/shop"}>
              {"Shop"}
            </Link>
          </li>
          <li>
            <Link to={"/contact"}>
              {"Contact"}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

NavMenu.propTypes = {
  menuWhiteClass: PropTypes.string,
  sidebarMenu: PropTypes.bool,
};

export default NavMenu;
