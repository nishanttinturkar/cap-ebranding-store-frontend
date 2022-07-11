 class ShoppingCartItems {
    
    id = '';
    createdAt='';
    modifiedAt='';
    quantity='';
    cartId='';
    productId='';
    
    constructor(createdAt, modifiedAt, quantity, cartId, productId) {
        this.createdAt = createdAt;
        this.modifiedAt = modifiedAt;
        this.quantity = quantity;
        this.cartId = cartId;
        this.productId = productId;
        
        
    }
    
}

export default ShoppingCartItems