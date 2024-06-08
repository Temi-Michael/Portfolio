import { useFormik } from 'formik'
import React from 'react';
// import * as yup from 'yup'

export default function Contact() {

    const enquiry = ["Website Creation", "Data Analysis", "Code Assist"];

    const initialValues = {
        name: "",
        email: "",
        option: enquiry[0],
        comment: "",
    }

    const onSubmit = values => {
        console.log('Form data', values)
    }

    const validate = values => {
        let errors = {}

        if (!values.name) {
            errors.name = 'Required';
        }

        if (!values.email) {
            errors.email = 'Required';
        } else if (! /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email format'
        }

        if (!values.comment) {
            errors.comment = 'Required';
        } else if (formik.values.comment.length < 15) {
            errors.comment = 'Comment should be at least 5 words'
        }

        // if (!(values.name )|| !(values.email)) {
        //     alert(`Name is ${errors.name} \n Comment is ${errors.comment} ` )
        // }

        return errors
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate,
    })

    return (
        <div className="contactframe" id='contact'>
            <div className="formbody">
                <h2 className='contacthead'>Contact Me</h2>
                <form onSubmit={formik.handleSubmit}>
                    <label htmlFor="name">Name<sup>*</sup></label>
                    <input
                        type="text"
                        id="name"
                        className='input'
                        name="name"
                        value={formik.values.name}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                    />
                    {formik.touched.name && formik.errors.name ? <div className='errormsg'>{formik.errors.name}</div> : null}

                    <label htmlFor="email">Email Address<sup>*</sup></label>
                    <input
                        type="email"
                        id="email"
                        className='input'
                        name="email"
                        value={formik.values.email}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                    />
                    {formik.touched.email && formik.errors.email ? <div className='errormsg'>{formik.errors.email}</div> : null}

                    <label htmlFor="enquiry">Type of Enquiry<sup>*</sup></label>
                    <select value={formik.values.option} onChange={formik.handleChange} name='option' className='input' style={{ color: "white" }}>
                        {enquiry.map((enquiries) => (
                            <option key={enquiries} value={enquiries}>
                                {enquiries}
                            </option>
                        ))}
                    </select>

                    <label htmlFor="comment">Your Message<sup>*</sup></label>
                    <textarea
                        id="comment"
                        className='textarea'
                        name="comment"
                        value={formik.values.comment}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                    />
                    {formik.touched.comment && formik.errors.comment ? <div className='errormsg'>{formik.errors.comment}</div> : null}
                    <button type='submit' className='submitbtn' onClick={formik.handleReset}>Submit</button>
                </form>
            </div>
        </div>
    );
}
