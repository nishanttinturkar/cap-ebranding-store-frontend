import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header';

const Categories = () => {

    let navigate = useNavigate();
    return (
        <div className="container">
            <div>
                <Header/>
                <h2>Manage Category</h2>
                {/* <div className="card" style={{width:"50%" , height: "30%"}}> */}
                <div className="row my-3">
                    <div className="col-3">
                        <button className="btn btn-outline-primary" onClick={() => navigate(`/categories/add-category`)}>
                            Add Category
                        </button>
                        </div>
                        <div className="col-3">
                        <button className="btn btn-outline-warning" onClick={() => navigate(`/categories/edit-categories`)}>
                            Edit Category
                        </button>
                    </div>
                {/* </div> */}
                </div>
                
            </div>
        </div>
    )
}

export default Categories
