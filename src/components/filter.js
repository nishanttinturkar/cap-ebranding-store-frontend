import React, { Component } from 'react'
import OrderService from '../Service/OrderService'
import ProductService from '../Service/ProductService'
import Orders from '../Pages/Orders'
import OrderItems from '../Model/OrderItems'
import Order from '../Model/Order'
import Product from '../Model/Product'



export default class filter extends Component {
  
  constructor() {
    super();
    console.log("Hello I am a constructor")
    this.state = {
        order: new Order(),
    //   product: new Product(),
    //   orderItem: new OrderItems(),
    //   products: [],
    //   orderItems:[],
        orders: []
    }
    // this.productService = new ProductService(); 
    this.orderService = new OrderService();
  }

  componentDidMount() {

    this.orderService.getAllOrders()
    .then(odrResult => {
        alert(JSON.stringify(odrResult))
        this.setState({orders:odrResult.data})
        console.log(odrResult.data)
    })
    .catch(odrError => {
        alert(odrError)
    })
 
    // this.OrderService.getOrderItemsbyId()
    // .then(result1 => {
    //   alert(JSON.stringify(result1))
    //   this.setState({orderItems:result1.data})
    //   console.log(result1.data)
    // })
    // .catch(error1 => {
    //   alert(error1)
    // })
}

//   getProduct(userId) {
//        this.productService.getProductsByUserId(userId)
//     .then(result => {
//          alert(JSON.stringify(result))
//         this.setState({products:result.data})
//         console.log(result.data)
//     })
//     .catch(error => {
//         alert(error)
//     })
//   }

  render() {
    let {title, description } = this.props;
    return (
      <div className='container'>
        <div><h2> Your Orders</h2></div>
        {
         <div>
          <Orders  name='Sony WH-1000XM4' description = 'Sony WH-1000XM4 Industry Leading Noise Cancellation Bluetooth Wireless Over Ear Headphones with Mic, 30 Hrs Battery, Multi Point, Aux, App Support for Mobile Phone, Hi-Res Audio, Fast Pair (Black)'  address = '52 Dr V B Gandhi Marg, Mumbai,Maharashtra, India. 400001 '/>
        </div> 
        }
       { 
        this.state.orderItems.map((element) => {
            const filtered = element.filter()
         this.getProduct(element.productId)
         return <div>
            
            <Orders  name={this.state.products.name} />
            </div>
        })}
       
        
        </div>
    )
  }
}
