import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AddUser from "./components/AddUser";
import ShowUser from "./components/ShowUser";
import Login from "./components/Login";
import Pages from "./pages/Pages";

function App() {
  return (
    <div className="container-fluid">
      <Pages />
      {/* <Router>
        <Link to={`/users`}>Get Users</Link>
        <br />
        <Link to={`/user/add`}> Add User</Link>
        <br />
        <Link to={`/user/login`}> Login User</Link>
        <br />

        <Routes>
          <Route exact path="/" component={ShowUser} />
          <Route exact path="/users" element={<ShowUser />} />
          <Route exact path="/user/add" element={<AddUser />} />
          <Route exact path="/user/login" element={<Login />} /> */}
      {/* <Route
            exact
            path="/employees/update/:empId"
            element={<UpdateEmployee />}
          /> */}
      {/* </Routes>
      </Router> */}
    </div>
  );
}

export default App;
