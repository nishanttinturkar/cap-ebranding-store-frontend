import React, { useEffect } from 'react';
import OrderService from '../Service/OrderService';
import Order from '../Model/Order'
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from '../redux/product/productAction';



    const ShowProduct =() => {
   let dispatch = useDispatch();
   const {products} = useSelector((state) => state.products);

   useEffect (()=> {
    dispatch(fetchProducts())
   }, []);
        
   

  
        return (
           <div>
            <div>
                Product List
                <div>
                    {
                    products.length > 0 ? ( 
                        <table className='table table-bordered'>
                            <thead>
                                <tr>
                                    <th>Product Id</th>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Price</th>
                                    <th>Vendor Id</th>
                                    <th>Category Id</th>
                                    <th>Image Url</th>
                                    <th>Created At</th>
                                    <th>Modified At</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>{
                                products.map((pdr) => (
                                    <tr>
                                        <td> {pdr.id}</td>
                                        <td> {pdr.name}</td>
                                        <td> {pdr.description}</td>
                                        <td> {pdr.price}</td>
                                        <td> {pdr.vendorId}</td>
                                        <td> {pdr.categoryId}</td>
                                        <td> {pdr.imgUrl}</td>
                                        <td> {pdr.createdAt}</td>
                                        <td> {pdr.modifiedAt}</td>
                                        {/* <td> <button className = "btn btn-warning" to = {{pathname:`/order_items/${pdr.id}`}}>View</button></td> */}
                                        </tr>
                                         ))
                                        } </tbody>
                                </table>
                            ) : <div>No product present</div>
                                    }   
                        </div>
                    </div>
                    </div>
                   
                );
            }

                                    
                               
export default ShowProduct