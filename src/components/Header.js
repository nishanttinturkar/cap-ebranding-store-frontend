import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { useState } from "react";
import { isInvalidLogin } from "../redux/User/UserActions";
import {
  selectHome,
  selectCategories,
  selectCart,
  selectOrders,
  selectProfile,
  selectLogin,
} from "../redux/common/CommonActions";

const Header = () => {
  let dispatch = useDispatch();
  const navigate = useNavigate();
  let [isAdmin, setAdmin] = useState(false);
  const userRedux = useSelector((state) => state.users);
  const navSelector = useSelector((state) => state.navSelector);
  const role = localStorage.getItem("role");
  console.log(role == "admin");

  const redirect = (navFunc, here) => {
    dispatch(navFunc);
    navigate(here);
    if (here === "/") {
      localStorage.clear();
      dispatch(isInvalidLogin());
    }
  };

  console.log(userRedux);

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
            {userRedux.login ? (
              <li className="nav-item">
                <a
                  className={navSelector.home ? "nav-link active" : "nav-link"}
                  onClick={() => redirect(selectHome(), "/home")}
                  aria-current="page"
                >
                  Home
                </a>
              </li>
            ) : (
              <div></div>
            )}

            {userRedux.login ? (
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
            ) : (
              <div></div>
            )}

            {userRedux.login ? (
              <li className="nav-item">
                <a
                  className={
                    navSelector.orders ? "nav-link active" : "nav-link"
                  }
                  onClick={() => redirect(selectOrders(), "/orders")}
                >
                  Orders
                </a>
              </li>
            ) : (
              <div></div>
            )}

            {userRedux.login ? (
              <li className="nav-item">
                <a
                  className={navSelector.cart ? "nav-link active" : "nav-link"}
                  onClick={() => redirect(selectCart(), "/cart")}
                >
                  Cart
                </a>
              </li>
            ) : (
              <div></div>
            )}

            {userRedux.login ? (
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
                  {userRedux.admin ? (
                    <li>
                      <a
                        class="dropdown-item"
                        onClick={() => redirect(selectProfile(), "/Admin")}
                      >
                        Admin Panel
                      </a>
                    </li>
                  ) : (
                    <div></div>
                  )}
                  {userRedux.vendor ? (
                    <li>
                      <a
                        class="dropdown-item"
                        onClick={() => redirect(selectProfile(), "/Admin")}
                      >
                        Vendor Panel
                      </a>
                    </li>
                  ) : (
                    <div></div>
                  )}
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
            ) : (
              <div></div>
            )}

            {userRedux.login ? (
              <div></div>
            ) : (
              <li className="nav-item">
                <a
                  className={navSelector.login ? "nav-link active" : "nav-link"}
                  onClick={() => redirect(selectLogin(), "/")}
                >
                  Login/Register
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;
