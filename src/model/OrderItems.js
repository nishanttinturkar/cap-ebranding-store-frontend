class OrderItems {
    id ='';
    quantity = '';
    price = '';
    orderId= '';
    productId = '';
    createdAt = '';

    constructor(createdAt,orderId, price, productId, quantity) {
        this.quantity = quantity;
        this.price = price;
        this.orderId = orderId;
        this.productId = productId;
        this.createdAt = createdAt
    }
    
}
module.exports={OrderItems}
// export default OrderItems