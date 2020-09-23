import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import * as styled from "./styledSubscription";

const FormSubscription = () => {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
  };
  const onSubmit = (values) => {
    alert(`Name:${values.name}, email: ${values.email},phone: ${values.phone}`);
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),

    phone: Yup.string()
      .min(10, "Too short")
      .max(12, "Too long")
      .required("Required"),
  });
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <React.Fragment>
      <styled.Form>
        <styled.Form_container>
          <div className="header_form">
            <h4 id="elm_22_headline">CREATE A FREE ACCOUNT</h4>
          </div>
          <styled.Form1>
            <form>
              <styled.Field_container>
                <label htmlFor="name">Name*</label>
                <styled.Input>
                  <styled.InputChildren
                    type="text"
                    name="name"
                    values={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Enter your name"
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <styled.Error>{formik.errors.phone}</styled.Error>
                  ) : null}
                </styled.Input>
              </styled.Field_container>
              <styled.Field_container>
                <label htmlFor="email">Email*</label>
                <styled.Input>
                  <styled.InputChildren
                    type="text"
                    name="email"
                    values={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Enter your email"
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <styled.Error>{formik.errors.email}</styled.Error>
                  ) : null}
                </styled.Input>
              </styled.Field_container>
              <styled.Field_container>
                <label htmlFor="phone">Phone*</label>

                <styled.Input>
                  <styled.InputChildren
                    type="text"
                    name="phone"
                    values={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Enter your phone"
                  />
                  {formik.touched.phone && formik.errors.phone ? (
                    <styled.Error>{formik.errors.name}</styled.Error>
                  ) : null}
                </styled.Input>
              </styled.Field_container>
              <styled.Field_container>
                <styled.Button type="submit">GET STARTED</styled.Button>
              </styled.Field_container>
            </form>
          </styled.Form1>
        </styled.Form_container>
      </styled.Form>
    </React.Fragment>
  );
};
export default FormSubscription;
