import React, {useState} from 'react';

const Contact = () => {

    const [formData, setformData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const inputChangeFun = (event) => {
        let {name, value} = event.target;
        setformData((prevData) => {
            return {
                ...prevData,
                [name] : value
            }
        })
    }

    const submitFun = (event) => {
        event.preventDefault();
        alert("Done");
    }

    return(
        <>
        <section>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 text-center mb-5'>
                        <h1>Contact</h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6 mx-auto'>
                        <form onSubmit={submitFun}>
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input type="text" name='name' className="form-control" onChange={inputChangeFun} placeholder="Name"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email address</label>
                                <input type="email" name='email' className="form-control" onChange={inputChangeFun} placeholder="name@example.com"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Phone</label>
                                <input type="number" name='phone' className="form-control" onChange={inputChangeFun} placeholder="Number"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Example textarea</label>
                                <textarea className="form-control" name='message' rows="3" onChange={inputChangeFun} placeholder="Message"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary w-100" >Submit</button> 
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Contact;