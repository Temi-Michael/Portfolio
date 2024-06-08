import { useFormik } from 'formik'

export default function Contact() {

    const enquiry = ["Website Creation", "Data Analysis", "Code Assist"];

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            option: enquiry[0],
            comment: "",
        }
    })

    console.log('Form values', formik.values)

    return (
        <div className="contactframe">
            <div className="formbody">
                <h2 className='contacthead'>Contact Me</h2>
                <form>
                    <label htmlFor="name">Name<sup>*</sup></label>
                    <input
                        type="text"
                        id="name"
                        className='input'
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                    />

                    <label htmlFor="email">Email Address<sup>*</sup></label>
                    <input
                        type="email"
                        id="email"
                        className='input'
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />

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
                        value={formik.values.comment}
                        name="comment"
                        onChange={formik.handleChange}
                    />
                    <button className='submitbtn'>Submit</button>
                </form>
            </div>
        </div>
    );
}
