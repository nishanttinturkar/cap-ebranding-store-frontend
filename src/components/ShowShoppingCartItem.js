import React, { useEffect } from 'react';
import ShoppingCartService from '../service/ShoppingCartService';
import Order from '../model/Order'
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { fetchShoppingCartItem } from '../redux/shoppingCartItem/shoppingCartItemActions';




    const ShowShoppingCartItem =() => {
   let dispatch = useDispatch();
   const {shoppingCartItems} = useSelector((state) => state.shoppingCartItems);

   useEffect (()=> {
    dispatch(fetchShoppingCartItem())
   }, );
        
   

  
        return (
           <div>
            <div>
                Order List
                <div>
                    {
                    shoppingCartItems.length > 0 ? ( 
                        <table className='table table-bordered'>
                            <thead>
                                <tr>
                                    <th>Cart Item Id</th>
                                    <th>Created At</th>
                                    <th>Modified At</th>
                                    <th>Quantity</th>
                                    <th>Cart Id</th>
                                    <th>Product Id</th>
                                </tr>
                            </thead>
                            <tbody>
                                {shoppingCartItems.map((item) => (
                                    <tr key = {item.id}>
                                        <td > {item.id}</td>
                                        <td> {item.createdAt}</td>
                                        <td> {item.modifiedAt}</td>
                                        <td> {item.quantity}</td>
                                        <td> {item.cartId}</td>
                                        <td> {item.productId}</td>
                                        </tr>
                                         ))}
                                        </tbody>
                                </table>
                            ) : <div>No Item present</div>
                                    }   
                        </div>
                    </div>
                    </div>
                   
                );
            }

                                    
                               
export default ShowShoppingCartItem