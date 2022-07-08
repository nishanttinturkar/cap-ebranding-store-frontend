import React, { Component } from 'react'
import OrderService from '../Service/OrderService'
import productService from '../Service/ProductService'
import Orders from '../Pages/Orders'
import OrderItems from '../Model/OrderItems'
import Order from '../Model/Order'
import Product from '../Model/Product'



export default class OrderComponent extends Component {
  
  constructor() {
    super();
    console.log("Hello I am a constructor")
    this.state = {
      product: new Product(),
      orderItem: new OrderItems(),
      products: [],
      orderItems:[]
    }
    this.productService = new productService(); 
    this.OrderService = new OrderService();
  }

  componentDidMount() {
    this.OrderService.getOrderItemsbyId()
    .then(result => {
      alert(JSON.stringify(result))
      this.setState({orderItems:result.data})
      console.log(result.data)
    })
    .catch(error => {
      alert(error)
    })

}

  getProduct(Id) {
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

  getProductData() {
    let products= []
    for (let i = 0; i < this.state.orderItems.length; i++) {
      productService.getProductsById(i)
    }
  }
  

  render() {
    let {title, description } = this.props;
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
            
            <Orders  name={this.state.orderItems.name} />
            
            </div>
        })}
  
        </div>
    )
  }

}
