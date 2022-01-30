import React from 'react';
const NoPage = (props) => {
    return(
        <>
            <section>
                <div className='container'>
                    <div className='inner'>
                        <div className='box'>
                            <h2>{props.pagetitle}</h2>
                            <p>This is  {props.pagetitle}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NoPage;