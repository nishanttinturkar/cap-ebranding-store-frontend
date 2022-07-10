import React, { Component } from 'react'

class CategoryComponents extends Component {

  render() {
    let {name, description, imgUrl} = this.props
    return (
        <div className="col my-4">
        <div className="card">
            <img src={imgUrl} className="card-img-top" alt="Apparel"/>
            <div className="card-body" md-4>
                <h5 className="card-title" >{name}</h5>
                <p className="card-text" >{description}</p>
                <a href="/products" className="btn btn-sm btn-primary">Show products</a>
            </div>
        </div>
    </div>
    )
  }
}

export default CategoryComponents
