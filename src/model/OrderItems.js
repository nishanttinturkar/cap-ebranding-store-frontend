class OrderItems {
  id = "";
  quantity = "";
  price = "";
  orderId = "";
  productId = "";
  productName = "";
  productDesc = "";
  imageUrl = "";
  createdAt = "";

  constructor(
    createdAt,
    orderId,
    price,
    productId,
    quantity,
    productName,
    productDesc,
    imageUrl
  ) {
    this.quantity = quantity;
    this.price = price;
    this.orderId = orderId;
    this.productId = productId;
    this.createdAt = createdAt;
    this.productName = productName;
    this.productDesc = productDesc;
    this.imageUrl = imageUrl;
  }
}
export default OrderItems;
