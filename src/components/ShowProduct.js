import React, { useEffect } from 'react';
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts, getProductById } from '../redux/product/productAction';



    const ShowProduct =() => {
        const navigate = useNavigate();
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
                                        <td>   
                                            <button className='btn btn-warning' onClick={(e) => {e.preventDefault(); navigate("/product/view/"+pdr.id)}}>
                                                View product
                                            </button>
                                        </td>
                                        </tr>
                                         ))
                                        } </tbody>
                                </table>

                                // <button className = "btn btn-warning" 
                                // onClick={(e) => {
                                //     e.preventDefault()
                                //     alert("inside get product by id")
                                //     dispatch(getProductById(164) )
                                //     alert(JSON.stringify(products))

                                // }}
                                // >View product</button>
                                
                            ) : <div>No product present</div>
                                    }   
                        </div>
                    </div>
                    </div>
                
                   
                );
            }

                                    
                               
export default ShowProduct