import React, { useEffect } from 'react';
import OrderService from '../service/OrderService';
import Order from '../model/Order'
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { fetchShoppingCart } from '../redux/shoppingCart/shoppingCartAction';




    const ShowShoppingCart =() => {
   let dispatch = useDispatch();
   const {shoppingCarts} = useSelector((state) => state.shoppingCarts);


   useEffect (()=> {
    dispatch(fetchShoppingCart())
   }, []);

   
        

  
        return (
           <div>
            <div>
                Order List
                <div>
                    {
                    shoppingCarts.length > 0 ? ( 
                        <table className='table table-bordered'>
                            <thead>
                                <tr>
                                    <th>Shopping Cart Id</th>
                                    <th>User id</th>
                                </tr>
                            </thead>
                            <tbody>{
                                shoppingCarts.filter(shopCart  =>  shopCart.userId == 154 ).map((shopCarts) => (
                                    <tr>
                                        <td> {shopCarts.id}</td>
                                        <td> {shopCarts.userId}</td>
                                        {/* <td> <button className = "btn btn-warning" to = {{pathname:`/order_items/${odr.id}`}}>View</button></td> */}
                                        </tr>
                                         ))
                                        } </tbody>
                                </table>
                            ) : <div>No cart present</div>
                                    }   
                        </div>
                    </div>
                    </div>
                   
                );
            }

                                    
                               
export default ShowShoppingCart