class Order {
    id ='';
    createdAt = '';
    total = '';
    paymentId = '';
    userId = '';
    address = '';

    constructor(createdAt, total, paymentId, userId, address) {
        this.createdAt = createdAt;
        this.total=total;
        this.paymentId = paymentId;
        this.userId = userId;
        this.address = address;
    }
    
}
export default Order