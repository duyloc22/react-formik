import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

function RegistrationForm() {
    const MOCOptions = [
        { key: "email", value: "emailMOC" },
        { key: "phone", value: "phoneMOC" },
    ];
    const initialValue = {
        email: "",
        password: "",
        confirmPassword: "",
        modeOfContact: "",
        phone: "",
    };
    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid email format").required("Required"),
        password: Yup.string().required("Required"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords must match")
            .required("Required"),
        modeOfContact: Yup.string().required("Required"),
        phone: Yup.string().when("modeOfContact", {
            is: "phoneMOC",
            then: Yup.string().required("Required"),
        }),
    });
    const onSubmit = (val) => console.log(val);

    return (
        <Formik initialValues={initialValue} validationSchema={validationSchema} onSubmit={onSubmit}>
            {(formik) => {
                return (
                    <Form>
                        <FormikControl control="input" type="email" label="Email" name="email" />
                        <FormikControl control="input" type="password" label="Password" name="password" />
                        <FormikControl control="input" type="password" label="Confirm password" name="confirmPassword" />
                        <FormikControl control="radio" label="Mode of contact" name="modeOfContact" options={MOCOptions} />
                        <FormikControl control="input" label="Phone number" name="phone" />
                        <button type="submit" disabled={!formik.isValid}>
                            Submit
                        </button>
                    </Form>
                );
            }}
        </Formik>
    );
}

export default RegistrationForm;
