// import Header from './components/Header'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AddCategory from './components/AddCategory';
import ShowCategory from './components/ShowCategory';
import UpdateCategory from './components/UpdateCategory';
import CategoryComponent from './components/CategoryComponent';
import Header from './components/Header';
import CategoryComp from "./components/CategoryComp";
import CategoryComponents from "./pages/CategoryComponents";
import CategoryItems from "./pages/CategoryItems";


function App() {
  return (
    <div className="container">
       <Router>
        {/* <Link to={`/category/show`}>Get Categories</Link>
        <br /> */}
        {/* <CategoryItems/> */}
        {/* <AddCategory/> */}
        {/* <CategoryComp/> */}
        {/* <CategoryComponent/> */}
        <Routes>
          {/* <Route exact path="/" component={ShowCategory} /> */}
          {/* <Route exact path="/categories" element={<ShowCategory />} /> */}
          <Route exact path="/" element={<AddCategory />} /> 
          <Route exact path="/categories" element={<CategoryItems />} /> 
          {/* <Route exact path="/categories" element={<ShowCategory />} /> */}
          {/* <Route exact path="/category/update" element={<UpdateCategory />} />
          <Route exact path="/category/show" element={<CategoryComponent />} /> */}
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
