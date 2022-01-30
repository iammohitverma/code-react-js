import React from 'react';
import ServiceCard from "../Components/ServiceCard";
import ServicesData from "../Components/ServicesData";

const Services = () => {

    
    return(
        <>
        <section>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 text-center mb-5'>
                        <h1>Services</h1>
                    </div>
                </div>
                <div className='row gy-3'>
                    {
                        ServicesData.map((currElem, index)=>{
                            return(
                                <ServiceCard key={index} cardTitle={currElem.CardTitle} cardImage={currElem.CardImage}/>  
                            )
                        })
                    }
                </div>
            </div>
        </section>
        </>
    )
}
export default Services;