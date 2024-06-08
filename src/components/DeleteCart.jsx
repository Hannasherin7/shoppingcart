import React from 'react'
import { Nav } from './Nav'

export const DeleteCart = () => {
  return (
    <div>
        <h1><center>DELETE CART</center></h1>
        <Nav></Nav>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">product title</label>
                            <input type="text" className="form-control"></input>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" className="form-label">product id</label>
                        <input type="text" className="form-control"></input>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <br /><br /><br /><button className="btn btn-danger">delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
