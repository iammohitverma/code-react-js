import React from 'react';
import {NavLink} from "react-router-dom";
const CommonBanner = (props) => {
    return(
        <>
            <section className='banner'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='inner'>
                                <h1>Welcome to {props.pageTitle} Page</h1>
                                <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC</p>
                                <NavLink to={props.btnLink} className="btn btn-lg btn-primary">Click me</NavLink>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <figure>
                                <img src={props.bannerImg} alt="Banner Image"/>
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default CommonBanner;