// import Header from './components/Header'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AddCategory from './components/AddCategory';
import ShowCategory from './components/ShowCategory';
import UpdateCategory from './components/UpdateCategory';
import CategoryComponent from './components/CategoryComponent';
import Header from './components/Header';
import CategoryComp from "./components/CategoryComp";
import CategoryComponents from "./components/CategoryComponents";
import CategoryItems from "./components/CategoryItems";
import Categories from "./pages/Categories";


function App() {
  return (
    <div className="container">
       <Router>
        {/* <Link to={`/category/show`}>Get Categories</Link>
        <br /> */}
      
        <Routes>
          {/* <Route exact path="/" component={ShowCategory} /> */}
          <Route exact path="/categories/edit-categories" element={<CategoryComponent />} />
          <Route exact path="/" element={<Categories />} />
          <Route exact path="/categories/add-category" element={<AddCategory />} /> 
          {/* <Route exact path="/categories" element={<CategoryItems />} />  */}
          {/* <Route exact path="/categories" element={<ShowCategory />} /> */}
          <Route exact path="/categories/update-category/:id" element={<UpdateCategory />} />
          <Route exact path="/categories/show-categories" element={<CategoryItems />} />
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
