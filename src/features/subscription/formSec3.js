import React from 'react';
import { useDispatch } from 'react-redux'
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik'
import * as Yup from 'yup'
import TextError from './textError';
const FormSec3 = () => {
    const initialValues = {
        name: '',
        email: '',
        phone: ''
    }
    const onSubmit = (values) => {
        alert(`Name:${values.name}, email: ${values.email},phone: ${values.phone}`)
    }
    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        email: Yup.string().email("Invalid email").required("Required"),

        phone: Yup.string().required("Required")
    })
    return (
        <React.Fragment>
            <div className="form" style={{ width: "330px", transform: "translate(27px)" }}>
                <div className="form_container" style={{ paddingLeft: "25px", transform: "translate(-4px)" }}>
                    <div className="header_form">
                        <h4 id="elm_22_headline">CREATE A FREE ACCOUNT</h4>
                    </div>
                    <Formik className="form1"
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                    >

                        {
                            props => {
                                const { values, errors, touched } = props
                                return (
                                    <Form>
                                        <div className="fiel_container">
                                            <label for="">Name*</label>
                                            <div className="input">
                                                <Field type="text" name="name" placeholder="Enter your name" />
                                                <ErrorMessage name='name' component={TextError} />
                                            </div>
                                        </div>
                                        <div className="fiel_container">
                                            <label for="">Email*</label>
                                            <div className="input">
                                                <Field type="text" name="email" placeholder="Enter your email" />
                                                <ErrorMessage name="email" component={TextError} />
                                            </div>
                                        </div>
                                        <div className="fiel_container">
                                            <label for="">Phone*</label>

                                            <div className="input">
                                                <Field type="text" name="phone" placeholder="Enter your phone" />
                                                <ErrorMessage name='phone' component={TextError} />
                                            </div>
                                        </div>
                                        <div className="fiel_container">
                                            <button type="submit" >GET STARTED</button>
                                        </div>
                                    </Form>
                                )
                            }
                        }
                    </Formik>
                </div>
            </div>
        </React.Fragment >
    )
}
export default FormSec3