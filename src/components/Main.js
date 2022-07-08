// import React, { Component } from "react";

// class Main extends Component {
//     constructor() {
//         super();
//         this.state = {
//             order: new Order(),
//             orders: []
//         }
        
//     }
//     componentDidMount() {
//         axios.get('http://localhost:8080/store/order')
//         .then((result) => {
//             alert(JSON.stringify(result))
//             this.setState({orders: result.data})
//         })
//         .catch((error) => {
//             alert(error)
//         })
//     }
//     render() {
//         console.log('render')
//         return(
//             <div>
//                 <h2><span className="badge badge-primary">Order Form</span></h2>
//                 <form>
//                     <div className="form-group">
//                         <input className="form-control" type = "text" id="id"
//                         value = {this.state.order.id}
//                         onChange={(e) => {
//                             this.setState({order: {...this.state.order, id: e.target.value}})
//                         }} />
//                         </div>
//                         <div className="form-group">
//                             <input className="form-control" type='text' id='careatedAt'
//                             value = {this.state.order.careatedAt}
//                             onChange={(e) => this.setState({order: {...this.state.order, careatedAt: e.target.value}})} />
//                     </div>
//                     <div className="form-group">
//                             <input className="form-control" type='text' id='total'
//                             value = {this.state.order.total}
//                             onChange={(e) => this.setState({order: {...this.state.order, total: e.target.value}})} />
//                     </div>
//                     <div className="form-group">
//                             <input className="form-control" type='text' id='paymentId'
//                             value = {this.state.order.paymentId}
//                             onChange={(e) => this.setState({order: {...this.state.order, paymentId: e.target.value}})} />
//                     </div>
//                     <div className="form-group">
//                             <input className="form-control" type='text' id='userId'
//                             value = {this.state.order.userId}
//                             onChange={(e) => this.setState({order: {...this.state.order, userId: e.target.value}})} />
//                     </div>
//                     <button className="btn btn-outline-primary"
//                         onClick={(e) => {
//                             e.preventDefault();
//                             alert(JSON.stringify(this.state.order))
//                             axios.post(`http://localhost:8080/store/order/`, this.state.order)
//                                 .then((result) => {
//                                     alert(result.data)
//                                 })
//                                 .catch((error) => {
//                                     alert(error);
//                                 });
//                             axios.get(`http://localhost:8080/store/order/`)
//                                 .then((result) => {
                                    
//                                     this.setState({ orders: result.data });
//                                 })
//                                 .catch((error) => {
//                                     alert(error);
//                                 });
//                             }}>Add Order</button>

//                 </form>

//                 <div>
//                     {
//                         this.state.orders.length > 0 ? (
//                             <table className="table table-bordered">
//                                 <thead>
//                                     <tr>
//                                         <th>Order Id</th>
//                                         <th>Created At</th>
//                                         <th>Total</th>
//                                         <th>Payment Id</th>
//                                         <th>User Id</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {
//                                         this.state.orders.map((order) =>
//                                         (
//                                             <tr>
//                                                 <td>{order.id}</td>
//                                                 <td>{order.careatedAt}</td>
//                                                 <td>{order.total}</td>
//                                                 <td>{order.paymentId}</td>
//                                                 <td>{order.userId}</td>
//                                                 <td><button className="btn btn-danger"
//                                                     onClick={(e2) => {
//                                                         e2.preventDefault();
//                                                         alert(JSON.stringify(this.state.order))
//                                                         axios.post(`http://localhost:8080/store/order/`, this.state.order)
//                                                             .then((result) => {
//                                                                 alert(result.data)
//                                                             })
//                                                             .catch((error) => {
//                                                                 alert(error);
//                                                             });
//                                                         axios.get(`http://localhost:8080/store/order/`)
//                                                             .then((result) => {
//                                                                 //alert(JSON.stringify(result));
//                                                                 this.setState({ orders: result.data });
//                                                             })
//                                                             .catch((error) => {
//                                                                 alert(error);
//                                                             });
                                                       
//                                                     }}>Delete</button></td>
//                                             </tr>
//                                         )
//                                         )
//                                     }
//                                 </tbody>
//                             </table>
//                         ) : <div>No Order Present</div>
//                     }
//                 </div>
//             </div>
//         );
//     }
// }export default Main