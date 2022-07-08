import React, { useEffect } from "react";
import {useSelector, useDispatch } from "react-redux";
import { fetchOrderItems } from "../redux/orderItems/orderItemAction";


const ShowOrderItems = () => {
    let dispatch = useDispatch();
    const {orderItems} = useSelector((state) => state.orderItems);

    useEffect (() => {
        dispatch(fetchOrderItems())
    }, [])

        return (
            <div>
                <div>Order Items List</div> 
                <div>
                    {
                        orderItems.length > 0 ? (
                            <table className="table table-bordered" >
                                <thead>
                                 <tr>
                                        <th>Order Item Id</th>
                                        <th>quantity</th>
                                        <th>Price</th>
                                        <th>Order Id</th>
                                        <th>Product Id</th>
                                        <th>Created At</th>
                                        <th>Modified At</th>
                                    </tr>
                                </thead>
                                <tbody> 
                                    {
                                        orderItems.map((odrItem) => (
                                            <tr>
                                                <td>{odrItem.id}</td>
                                                <td>{odrItem.quantity}</td>
                                                <td>{odrItem.price}</td>
                                                <td>{odrItem.orderId}</td>
                                                <td>{odrItem.productId}</td>
                                                <td>{odrItem.createdAt}</td>
                                                <td>{odrItem.modifiedAt}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        ) : <div>No order items present </div>
                    }
                </div>
            </div>
        )
    }

export default ShowOrderItems

            
                                
                                
  