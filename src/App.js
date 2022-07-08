// import {Routes, Route} from 'react-router-dom'
import { BrowserRouter as Router, Route, Routes ,Link, Outlet} from 'react-router-dom';
// import { Provider } from 'react-redux'
import AddOrder from '../src/Components/AddOrders'
import ShowOrder from './Components/ShowOrder'
import ShowProduct from './Components/ShowProduct'
import ShowOrderItems from './Components/ShowOrderItems'
import ShowOrderItemsById from './Components/ShowOrderItemsById'
import AddOrderItems from './Components/AddOrderItems'
import AddProducts from './Components/AddProducts'

import { NavBar } from './Components/NavBar'
// import Order from './Pages/Order'
import Pages from './Pages/Pages';
import Header from './Components/Header'
import OrderItems from './Model/OrderItems';
import OrderComponent from './Pages/OrderComponent';
// import ShowOrder from './Components/ShowOrder';
// import Header from './Components/Header'
// import Home from '../src/Components/Home'
// import store from '../src/redux/store'



function App() {

  return (
    <div>
      {/* <ShowOrder />
      <AddOrder /> */}
      {/* <Header />
      <OrderComponent /> */}
      {/* <Home/> */}
<Router>
<Link to={'/orders'}>Show Orders</Link> <br/>
<Link to={'/orders/items'}>Show Order Items</Link> <br/>
<Link to={'/products'}>Show Products</Link> <br/>

<Link to={'/orders/add'}>Add Orders</Link> <br/>
<Link to={'/orders/items/add'}>Add Order Items</Link> <br/>
<Link to={'/products/add'}>Add Product</Link> <br/>


<Routes>
      <Route exact path ='/' element={<ShowOrder />} />  
      <Route exact path ='/orders' element = {<ShowOrder />} />
      <Route exact path ='/orders/add' element = {<AddOrder />} />
      <Route exact path ='/orders/items' element = {<ShowOrderItems />} />
      <Route exact path ='/orders/items/add' element = {<AddOrderItems />} />
      <Route exact path ='/products' element = {<ShowProduct />} />
      <Route exact path ='/products/add' element = {<AddProducts />} />

</Routes>


</Router>

  </div>
      // <div className='App'>
      //     <Router>
            
      //     {/* <Header title="React Employee Mangement Application"
      //               description="This project is React Single Page Application (SPA). This app will consume REST endpoints using axios module.
      //   This project will have several component based on user interaction the appropriate component will call and that setting is defined in App.js in the form of Router.
      //   Router will have sevral Route defined, one Route for one component.
      //   "/>*/}
      //    <Link to={'/orders'}>Show Orders</Link> <br>
      //       </br> 
      //       <Link to={'/orders/add'}>Add Order</Link> <br>
      //       </br> 
      //       <Link to={'/ordersItems'}>Show Order Items</Link> <br>
      //       </br> 
      //       <Link to={'/ordersItems/add'}>Add Order Items</Link> <br>
      //       </br> 
      //     <Routes> 
      //       <Route exact path ='/' element={<ShowOrder />} />  
      //       <Route exact path ='/orders' element = {<ShowOrder />} />
      //       <Route exact path ='/ordersItems' element = {<ShowOrderItems />} />
      //       <Route exact path ='/orders/add' element = {<AddOrders />} />
      //       <Route exact path ='/ordersItems/add' element = {<AddOrderItems />} />
      //       {/* <Route exact path = '/ordersItems/:orderId' element = {<ShowOrderItemsById />} /> */}
      //     </Routes> 
      //     </Router>  
      // </div> 
      
  )
}

export default App;