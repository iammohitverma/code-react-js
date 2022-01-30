import React from 'react';
const About = (props) => {
    return(
        <>
            <section>
                <div className='container'>
                    <div className='inner'>
                        <div className='box'>
                            <h2>{props.pageTitle}</h2>
                            <p>This is {props.pageTitle}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;