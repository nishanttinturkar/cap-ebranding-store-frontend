import React from 'react'
import Header from './Header'
import apparel from '../images/apparel.jpg'

function CategoryComp() {
    return (
        <div>
            <Header />
            &nbsp;
            <div className="container">
                <h1>Category</h1>
                <div className="row g-0">
                    <div className="col my-4">
                        <div className="card" style={{ width: "12rem" }}>
                            <img src={apparel} className="card-img-top" alt="Apparel"/>
                            <div className="card-body md-4" >
                                <h5 className="card-title" >Apparel</h5>
                                <p className="card-text" >This is the description for apparel.</p>
                                <a href="#" className="btn btn-sm btn-primary">Show products</a>
                            </div>
                        </div>
                    </div>
                    <div className="col my-4">
                        <div className="card" style={{ width: "12rem" }} >
                            <img src="https://th.bing.com/th?q=Business+Stationery&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247" className="card-img-top" alt="Stationery" />
                            <div className="card-body md-4" >
                                <h5 className="card-title" >Stationery</h5>
                                <p className="card-text" >This is the description for stationery.</p>
                                <a href="#" className="btn btn-sm btn-primary">Show products</a>
                            </div>
                        </div>
                    </div>
                    <div className="col my-4">
                        <div className="card" style={{ width: "12rem" }}>
                            <img src="https://m.media-amazon.com/images/I/51JQw1lT0AL._AC_UL480_FMwebp_QL65_.jpg" className="card-img-top" alt="Bags and Drinkware" />
                            <div className="card-body md-4" >
                                <h5 className="card-title" >Bags and Drinkware</h5>
                                <p className="card-text" >This is the description for bags and drinkware.</p>
                                <a href="#" className="btn btn-sm btn-primary">Show products</a>
                            </div>
                        </div>
                    </div>
                    <div className="col my-4">
                        <div className="card" style={{ width: "12rem" }}>
                            <img src="https://th.bing.com/th?q=Electronic+Product+Accessories&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247" className="card-img-top" alt="Electronic Accessories" />
                            <div className="card-body md-4">
                                <h5 className="card-title" >Electronic Accessories</h5>
                                <p className="card-text" >This is the description for electronic accessories.</p>
                                <a href="#" className="btn btn-sm btn-primary">Show products</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryComp
