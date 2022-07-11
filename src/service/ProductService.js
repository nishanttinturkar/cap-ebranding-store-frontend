import axios from "axios";
class ProductService {
   
    baseUrl= 'http://localhost:8080/store'
    getProductsById(Id) {
        return axios.get(this.baseUrl+`/product/${Id}`)
    }
    getAllProducts() {
        return axios.get(this.baseUrl+'/product')
    }
    addProduct(product) {
        console.log("inside service"+ JSON.stringify(product))
        return axios.post(this.baseUrl +'/product', product)
    }
}
export default ProductService