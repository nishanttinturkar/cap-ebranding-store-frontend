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

  const redirect = () => {
    dispatch(selectOrders());
    navigate("/orders");
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
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a
                className={navSelector.home ? "nav-link active" : "nav-link"}
                onClick={() => dispatch(selectHome())}
                aria-current="page"
                href="/"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className={
                  navSelector.categories ? "nav-link active" : "nav-link"
                }
                onClick={() => dispatch(selectCategories())}
                href="/categories"
              >
                Categories
              </a>
            </li>
            <li className="nav-item">
              <a
                className={navSelector.orders ? "nav-link active" : "nav-link"}
                onClick={redirect}
              >
                Orders
              </a>
            </li>
            <li className="nav-item">
              <a
                className={navSelector.cart ? "nav-link active" : "nav-link"}
                onClick={() => dispatch(selectCart())}
                href="/cart"
              >
                Cart
              </a>
            </li>

            <li className="nav-item">
              <a
                className={navSelector.profile ? "nav-link active" : "nav-link"}
                onClick={() => dispatch(selectProfile())}
                href="/profile"
              >
                Profile
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;
