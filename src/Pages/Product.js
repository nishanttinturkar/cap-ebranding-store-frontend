import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts} from '../redux/product/productAction';


function Product () {
    const {products} = useSelector((state) => state.products);
    let dispatch = useDispatch();
    console.log("products", products )


    useEffect (()=> {
        dispatch(fetchProducts())
    }, []);

return (
    <div className="container">
        <div className='row m-4'>
            
                { 
                products.filter((prod) => prod.categoryId == 160).map(product => { return (
                    <div className="col-3">
                    <div className="card p-2">
                        <img
                            src={product.imgUrl}
                            width="200"
                            height="200"
                            className="card-img-top"
                            alt="..."
                            />
                            <div className="card-body" md-6>
                                <h5 className="card-title">{product.name.slice(0, 15)}</h5>
                                <p className="card-text">{product.description.slice(0, 30)}...</p>
                                <b className='left'>
                                {"\u20B9"}
                                {product.price}
                                </b>
                              <button className ='btn btn-outline-primary m-2 right'>View</button>
                            </div>
                    </div><br/>
                    </div>
                )})} 
            </div>
        
    </div>
  );
}
export default Product