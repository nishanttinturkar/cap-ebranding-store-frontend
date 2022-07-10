import React, { useEffect } from 'react'
import Header from './Header';
import { useDispatch, useSelector } from "react-redux";
import CategoryComponents from './CategoryComponents'
import { fetchCategory } from '../redux/category/categoryActions';

const CategoryItems = () => {
    let dispatch = useDispatch();
    const { categories } = useSelector((state) => state.categories);

    useEffect(() => {
        dispatch(fetchCategory());
    }, []);

    return (
        <div>
            <Header />
            {categories.length > 0 ? (
                <div className="container">
                    <h2>Category</h2>
                    <div className="row">
                        {categories.map((cat) => {
                            return <div className="col-md-3">
                                <CategoryComponents name={cat.name} description={cat.description} imgUrl={cat.imgUrl} />
                            </div>
                        })}
                    </div>
                </div>
            ) : (
                <div>No Category Found</div>
            )}
        </div>
    )
}

export default CategoryItems

