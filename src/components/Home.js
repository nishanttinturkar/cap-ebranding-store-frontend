// import React, { useEffect } from "react";
// import { connect } from "react-redux"
// import { fetchOrders } from "../redux/order/orderActions";

// function Home({ ordersData, fetchOrders}) {
//     useEffect(() => {
//         fetchOrders()
//     }, [])

//     return ordersData.loading ? (
//         <h2>Loading</h2>
//     ) : ordersData.error ? (
//         <h2>{ordersData.error}</h2>
//     ) : (
//         <div className="py-4">
//             <table className="table border shadow">
//                 <thead className="thead-dark">
//                     <tr>
//                         <th scpoe = 'col'>Order Id</th>
//                         <th scpoe = 'col'>Created At </th>
//                         <th scpoe = 'col'>Total</th>
//                         <th scpoe = 'col'> Payment Id </th>
//                         <th scpoe = 'col'>User Id </th>
//                     </tr>
//                 </thead>
//             <tbody>
//                 {ordersData.orders.map((order, index) => (
//                     <tr key = {index}>
//                         <td> {order.id}</td>
//                         <td>{order.careatedAt}</td>
//                         <td>{order.total}</td>
//                         <td>{order.paymentId}</td>
//                         <td>{order.userId}</td>
//                         </tr>
//                 ))}
//                 </tbody>
//                 </table>
//         </div>
//     )
// }
// const mapStateToProps = state => {
//     return {
//         ordersData: state.orders
//     }
// }
// const mapDispatchToProps = dispatch => {
//     return {
//         fetchOrders: () => { dispatch(fetchOrders())}
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Home)