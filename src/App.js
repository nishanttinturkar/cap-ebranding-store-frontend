// import {Routes, Route} from 'react-router-dom'
import { BrowserRouter as Router, Route, Routes ,Link, Outlet} from 'react-router-dom';
// import { Provider } from 'react-redux'
import AddOrder from '../src/components/AddOrders'
import ShowOrder from './components/ShowOrder'

import ShowShoppingCart from './components/ShowShoppingCart'
import ShowOrderItems from './components/ShowOrderItems'
import ShowOrderItemsById from './components/ShowOrderItemsById'
import ShowShoppingCartItem from './components/ShowShoppingCartItem'
import AddOrderItems from './components/AddOrderItems'
import AddOrders  from '../src/components/AddOrders';
import AddProducts from './components/AddProducts'

import { NavBar } from './components/NavBar'
// import Order from './Pages/Order'
import Pages from './Pages/Pages';
import Header from './components/Header'
import Home from './Pages/Home';
import OrderItems from './model/OrderItems';
import OrderComponent from './Pages/OrderComponent';
import AddShoppingCart from './components/AddShoppingCart';
import AddShoppingCartItem from './components/AddShoppingCartItem';

// import ShowOrder from './components/ShowOrder';
// import Header from './components/Header'
// import Home from '../src/components/Home'
// import store from '../src/redux/store'

// import ViewProduct from './Pages/ViewProduct'
import ShowProduct from './components/ShowProduct'

function App() {

  return (
    <div>
      {/* <ViewProduct /> */}
      <Pages />
      
      {/* <ShowShoppingCartItem /> 
        <AddShoppingCartItem />
       <ShowShoppingCart />
      <AddShoppingCart /> */}
      {/*<Pages />
       <ShowProduct />
      <ShowShoppingCart />
      <AddShoppingCart />
      <ShowOrder />
      <AddOrder /> */}
       {/* <Header /> 
     <OrderComponent />  
       {/* <Home/>   */} 
{/* <Router>
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


</Router> */}

  {/* </div> */}
      {/* <div className='App'>
          <Router> */}
            
          {/* <Header title="React Employee Mangement Application"
                    description="This project is React Single Page Application (SPA). This app will consume REST endpoints using axios module.
        This project will have several component based on user interaction the appropriate component will call and that setting is defined in App.js in the form of Router.
        Router will have sevral Route defined, one Route for one component.
        "/>*/}
         {/* <Link to={'/orders'}>Show Orders</Link> <br>
            </br> 
            <Link to={'/orders/add'}>Add Order</Link> <br>
            </br> 
            <Link to={'/ordersItems'}>Show Order Items</Link> <br>
            </br> 
            <Link to={'/ordersItems/add'}>Add Order Items</Link> <br>
            </br> 
            <Link to = {'/ShoppingCartItem/add'}>Add Cart Items</Link> <br />
          <Routes> 
            <Route exact path ='/' element={<ShowOrder />} />  
            <Route exact path ='/orders' element = {<ShowOrder />} />
            <Route exact path ='/ordersItems' element = {<ShowOrderItems />} />
            <Route exact path ='/orders/add' element = {<AddOrders />} />
            <Route exact path ='/ordersItems/add' element = {<AddOrderItems />} />
            <Route exact path ='/ShoppingCartItem/add' element = {<AddShoppingCartItem />} /> */}

            {/* <Route exact path = '/ordersItems/:orderId' element = {<ShowOrderItemsById />} /> */}
          {/* </Routes>  */}
          {/* </Router>   */}
      {/* </div>  */}
      </div>
      
  )
}

export default App;