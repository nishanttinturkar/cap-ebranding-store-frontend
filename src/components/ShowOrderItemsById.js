import React, { Component, useEffect } from "react";
import { useParams } from "react-router-dom";
import OrderItems from "../model/OrderItems";
import OrderService from "../service/OrderService";


class ShowOrderItemsById extends Component {
    constructor() {
        super();
        
        this.state = {
            orderItem: new OrderItems(),
            orderItems: []
        }
        this.orderItemsService = new OrderService();
    }

    componentDidMount() {
        this.orderItemsService.getOrderItemsbyId()
        .then(result => {
            alert(JSON.stringify(result))
            this.setState({orderItems: result.data})
        })
        .catch(error => {
            alert(error)
        })
    
    }

    render () {
        console.log('Show Order Items render');
        return (
            <div>
                <div>Order Items by Id List</div> 
                <div>
                    {
                        this.state.orderItems.length > 0 ? (
                            <table className="table table-bordered" >
                                <thead>
                                 <tr>
                                        <th>Order Item Id</th>
                                        <th>quantity</th>
                                        <th>Price</th>
                                        <th>Order Id</th>
                                        <th>Product Id</th>
                                        <th>Careated At</th>
                                        <th>Modified At</th>
                                    </tr>
                                </thead>
                                <tbody> 
                                    {
                                        this.state.orderItems.map((odrItem) => (
                                            <tr>
                                                <td>{odrItem.id}</td>
                                                <td>{odrItem.quantity}</td>
                                                <td>{odrItem.price}</td>
                                                <td>{odrItem.orderId}</td>
                                                <td>{odrItem.productId}</td>
                                                <td>{odrItem.careatedAt}</td>
                                                <td>{odrItem.modifiedAt}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        ) : <div>No order items present by this id </div>
                    }
                </div>
            </div>
        )
    }
}
export default ShowOrderItemsById

            
                                
                                
  