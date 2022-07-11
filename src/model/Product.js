class Product {
    id=''
    name='';
    description='';
    price='';
    vendorId='';
    imgUrl='';
    careatedAt = '';
    modifiedAt = '';
    categoryId = '';

    constructor(name, description, price, vendorId, imgUrl) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.vendorId = vendorId;
        this.imgUrl =imgUrl;

        
        
    }
    
}
module.exports = {Product}

// export default Product