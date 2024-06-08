import React, { useEffect, useState } from 'react'
import { Nav } from './Nav'
import axios from 'axios'

export const ViewAll = () => {
    const [data, changeData] = useState([])
    const fetchDara=()=>{
        axios.get("https://fakestoreapi.com/products").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>{fetchDara()},[])
    return (
        <div>
            <h1><center>VIEW ALL DETAILS</center></h1>
            <Nav></Nav>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {data.map(
                                (value, index) => {
                                    return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                        <div class="card">
                                            <img src={value.image}></img>
                                            <div class="card-body">
                                                <p class="card-text">id:{value.id}</p>
                                                <p class="card-text">title:{value.title}</p>
                                                <p class="card-text">price:{value.price}</p>
                                                
                                                

                                            </div>
                                        </div>
                                    </div>

                                }
                            )

                            }
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
