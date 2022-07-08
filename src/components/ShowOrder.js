import React, { useEffect } from 'react';
import OrderService from '../Service/OrderService';
import Order from '../Model/Order'
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { fetchOrders } from '../redux/order/orderActions';




    const ShowOrder =() => {
   let dispatch = useDispatch();
   const {orders} = useSelector((state) => state.orders);

   useEffect (()=> {
    dispatch(fetchOrders())
   }, []);
        
   

  
        return (
           <div>
            <div>
                Order List
                <div>
                    {
                    orders.length > 0 ? ( 
                        <table className='table table-bordered'>
                            <thead>
                                <tr>
                                    <th>Order Id</th>
                                    <th>Created At</th>
                                    <th>Total</th>
                                    <th>Payment Id</th>
                                    <th>User Id</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>{
                                orders.map((odr) => (
                                    <tr>
                                        <td> {odr.id}</td>
                                        <td> {odr.createdAt}</td>
                                        <td> {odr.total}</td>
                                        <td> {odr.paymentId}</td>
                                        <td> {odr.userId}</td>
                                        {/* <td> <button className = "btn btn-warning" to = {{pathname:`/order_items/${odr.id}`}}>View</button></td> */}
                                        </tr>
                                         ))
                                        } </tbody>
                                </table>
                            ) : <div>No order present</div>
                                    }   
                        </div>
                    </div>
                    </div>
                   
                );
            }

                                    
                               
export default ShowOrder