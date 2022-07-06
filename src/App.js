import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AddUser from "./components/AddUser";
import ShowUser from "./components/ShowUser";

function App() {
  return (
    <div className="container">
      <Router>
        <Header
          title="Cap eBranding Store"
          description="This is a online store website for cap employees"
        />
        <Link to={`/users`}>Get Users</Link>
        <br />
        <Link to={`/user/add`}> Add User</Link>
        <br></br>

        <Routes>
          <Route exact path="/" component={ShowUser} />
          <Route exact path="/users" element={<ShowUser />} />
          <Route exact path="/user/add" element={<AddUser />} />
          {/* <Route
            exact
            path="/employees/update/:empId"
            element={<UpdateEmployee />}
          /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
