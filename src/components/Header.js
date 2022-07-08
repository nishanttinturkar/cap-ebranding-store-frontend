import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import {
  selectHome,
  selectCategories,
  selectCart,
  selectOrders,
  selectProfile,
} from "../redux/common/CommonActions";

const Header = () => {
  let dispatch = useDispatch();
  const navigate = useNavigate();
  const navSelector = useSelector((state) => state.navSelector);

  const redirect = (navFunc, here) => {
    dispatch(navFunc);
    navigate(here);
  };

  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container">
        <a className="navbar-brand" href="#">
          Cap Store
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a
                className={navSelector.home ? "nav-link active" : "nav-link"}
                onClick={() => redirect(selectHome(), "/")}
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className={
                  navSelector.categories ? "nav-link active" : "nav-link"
                }
                onClick={() => redirect(selectCategories(), "/categories")}
              >
                Categories
              </a>
            </li>
            <li className="nav-item">
              <a
                className={navSelector.orders ? "nav-link active" : "nav-link"}
                onClick={() => redirect(selectOrders(), "/orders")}
              >
                Orders
              </a>
            </li>
            <li className="nav-item">
              <a
                className={navSelector.cart ? "nav-link active" : "nav-link"}
                onClick={() => redirect(selectCart(), "/cart")}
              >
                Cart
              </a>
            </li>

            <li class="nav-item dropdown">
              <a
                className={
                  navSelector.profile
                    ? "nav-link dropdown-toggle active"
                    : "nav-link dropdown-toggle"
                }
                id="navbarDarkDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Profile
              </a>
              <ul
                class="dropdown-menu dropdown-menu-dark"
                aria-labelledby="navbarDarkDropdownMenuLink"
              >
                <li>
                  <a
                    class="dropdown-item"
                    onClick={() => redirect(selectProfile(), "/profile")}
                  >
                    View Profile
                  </a>
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    onClick={() => redirect(selectProfile(), "/Admin")}
                  >
                    Admin Panal
                  </a>
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    onClick={() => redirect(selectProfile(), "/")}
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;
