import React, {useState} from 'react';
import interviewQuestions from "./Accordion-api.js";
import Accordion from "./Accordion.jsx";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Accordion.css";


const MainAccordion = () => {

    const [quesArray, quesArrayUpdate] = useState(interviewQuestions);

    return (
    <>
        <section className='section'>
            <div className='container'>
            <div className='accordion-wrap'>
                <div className='box'>
                <div className='inner'>
                    <div className='head'>
                    <h1>Accordion in React</h1>
                    </div>
                    <div className="accordions">
                    {/* {
                        quesArray.map((currElem)=>{
                            let {id, ques, ans} = currElem; 
                            return(
                                <Accordion key={id} ques={ques} ans={ans}/>
                            )
                        })
                    } */}
                    {
                        quesArray.map((currElem, index)=>{
                            return(
                                <Accordion key={index} {...currElem}/>
                            )
                        })
                    }
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
    </>
    )
}

export default MainAccordion;