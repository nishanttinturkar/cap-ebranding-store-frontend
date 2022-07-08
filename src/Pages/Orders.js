import React, { Component } from 'react'
import  headPhone   from '../Images/headPhone.jpg'

export default class Orders extends Component {
  
  

  render() {
    let {name, description, imgUrl, address } = this.props;
    return (
      <div className='container'> 
        {/* <h2>Your Orders</h2>  <br/> */}
        <div className="card p-2">
        <div className="row g-0">
        <div className="col-md-2">
            <img src = { headPhone } width="100" height="100" className="img-fluid rounded-start" alt="..."/>
        </div>
        <div className="col-md-7">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
        </div>
        </div>
        <div className='col-md-3'><br />
            <h5>Ship To</h5>
            <p>{address}</p>
        </div>
        </div>
        </div>
    </div>
    )
  }
}
