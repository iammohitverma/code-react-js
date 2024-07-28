import { useFormik } from 'formik';
import { signUpSchema } from "./schema"

const initialValues = {
    name: "",
    email: "",
    password: "",
    con_password: "",
}
export const Form = () => {
    // const Formik = useFormik({
    //     initialValues: initialValues,
    //     onSubmit: (values) => {
    //         console.log(values);
    //     }
    // })
    // value={Formik.values.name}

    const { values, errors, handleBlur, touched, handleChange, handleSubmit } = useFormik({ //destructured
        initialValues: initialValues,
        validationSchema: signUpSchema,
        validateOnChange: true,
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            resetForm(); // Call resetForm to reset the form fields
        }
    })
    console.log(errors);
    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-10">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" name='name' className="form-control" id="name" autoComplete='false' value={values.name} onChange={handleChange} onBlur={handleBlur} />
                                    {errors.name && touched.name ? (<p>{errors.name}</p>) : null}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input type="email" name='email' className="form-control" id="email" autoComplete='false' value={values.email} onChange={handleChange} onBlur={handleBlur} />
                                    {errors.email && touched.email ? (<p>{errors.email}</p>) : null}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" name='password' className="form-control" id="password" autoComplete='false' value={values.password} onChange={handleChange} onBlur={handleBlur} />
                                    {errors.password && touched.password ? (<p>{errors.password}</p>) : null}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="con_password" className="form-label">Confirm Password</label>
                                    <input type="con_password" name='con_password' className="form-control" id="con_password" autoComplete='false' value={values.con_password} onChange={handleChange} onBlur={handleBlur} />
                                    {errors.con_password && touched.con_password ? (<p>{errors.con_password}</p>) : null}
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}