import React, {useEffect} from 'react'
import ProductService from '../Service/ProductService'
import OrderService from '../Service/OrderService'

const OrderComp = () =>  {

    const productService = new ProductService(); 
    const orderService = new OrderService();

    useEffect(() => { 
        orderService.getOrderItemsbyId()
    .then(result => {
      alert(JSON.stringify(result))
      setState({orderItems:result.data})
      console.log(result.data)
    })
    .catch(error => {
      alert(error)
    })
    }, []);

    const getProduct = Id =>{
        this.productService.getProductsById(Id)
     .then(result => {
          alert(JSON.stringify(result))
         this.setState({products:result.data})
         console.log(result.data)
     })
     .catch(error => {
         alert(error)
     })
   }

   
      
     
 
  return (
    <div className='container'>
        <div><h2> Your Orders</h2></div>
        {/* {
         <div>
          <Orders  name='Sony WH-1000XM4' description = 'Sony WH-1000XM4 Industry Leading Noise Cancellation Bluetooth Wireless Over Ear Headphones with Mic, 30 Hrs Battery, Multi Point, Aux, App Support for Mobile Phone, Hi-Res Audio, Fast Pair (Black)'  address = '52 Dr V B Gandhi Marg, Mumbai,Maharashtra, India. 400001 '/>
        </div> 
        } */}
       { 
        this.state.orderItems.map((element) => {
         this.getProduct(element.productId)
        console.log(this.state.orderItems.length)
         return <div>
            
            <Orders  name={orderItems.name} />
            
            </div>
        })}
  
        </div>
  )
}
export default OrderComp
