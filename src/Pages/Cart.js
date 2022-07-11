import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { fetchShoppingCartItem,  getCartItemById, getTotalPayment } from "../redux/shoppingCartItem/shoppingCartItemActions";
import {fetchShoppingCart} from "../redux/shoppingCart/shoppingCartAction"
import ShoppingCartItems from '../model/ShoppingCartItems'


const Cart = () => {

    let dispatch = useDispatch();
    let navigate = useNavigate();
    const { shoppingCartItems } = useSelector((state) => state.shoppingCartItems);
    const { totalPayment } = useSelector((state) => state.shoppingCartItems);
    const { shoppingCarts } = useSelector((state) => state.shoppingCarts);
    console.log("Shopping Carts", shoppingCarts)
    const cartObj = shoppingCarts.filter(cart=>cart.userId == 157)
    const cartId = cartObj[0]
    console.log("cart Obj", cartObj)
    console.log("totalPay", totalPayment)



    // useEffect(() => {
    //     // dispatch(getCartItemById())

    //     // dispatch(fetchShoppingCart())
        
    //   }, []);

      useEffect(() => {
         dispatch(getCartItemById(185))
      }, []);

      var total =0;
      for (var i=0; i<shoppingCartItems.length; i++ ){
        total += shoppingCartItems[i].quantity*shoppingCartItems[i].productPrice 
      }

     

      const handleSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem("total", total);
        navigate('/payment')
      }
      
   
      console.log("total: ", total)

      console.log(shoppingCartItems)

    return (
        <div className="container">
            <div className="row m-5">
                <div className=" col-8">
                    <h2>Shopping Cart</h2>
                    <hr style={{ color: 'black', height: '1px',}}/>
                    {    
                    shoppingCartItems.map(item => { return (
                        <div>
                    <div className="card p-2">
                        <div className=" row">
                            <div className="col-3">
                                <div className="card-image-container ">
                                    <img src = {item.imageUrl} className="img-fluid rounded-start card-image"  alt="..."/>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card-body display-card">
                                    <h5 className="card-title">{item.productName}</h5>
                                    <p className="card-text"> {'\u20B9'} {item.productPrice}</p>
                                    <p className="card-text">Quantity: {item.quantity}</p>
                                <div>
                                <button className=" action-button" > button</button>
                                </div>

                            </div> 

                            </div>
                        </div>
                    </div> <br />
                    </div> 
                    
                )})} 
                </div>
                <div className=" col-4 summary">
                
                    <div className="card d-flex"> 
                        <h2>Summary</h2>
                        <hr style={{ color: 'black', height: '1px',}}/>
                        <h2>Total: {total}</h2>
                        <hr style={{ color: 'black', height: '1px',}}/>
                        <button  className=" action-button" onClick={handleSubmit}> Checkout</button>
                    
                    </div>
                    
                </div>
                
            </div>
            
        </div>
    )
}
export default Cart