import React, {useState} from "react";

const Accordion = ({ques, ans}) => {

    const [ansToggle, ansToggleUpdate] = useState(false);

    const toggleAccordion = () => {
        ansToggleUpdate(!ansToggle);
    }
    
    return(
        <>
        {           
            <div className="accordion">
                <div className="accordion-btn">
                    <h2>{ques}</h2>
                    <i onClick={toggleAccordion}>{ansToggle ? "-" : "+"}</i>
                </div>
                {
                    ansToggle && 
                    <div className="content">
                        <p>{ans}</p>
                    </div>
                }
            </div>
        }
        </>
    )
}

export default Accordion;