import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

function FormikContainer() {
    const optionsValues = [
        {
            key: "Select an options",
            value: "",
        },
        {
            key: "Options 1",
            value: "Value 1",
        },
        {
            key: "Options 2",
            value: "Value 2",
        },
        {
            key: "Options 3",
            value: "Value 3",
        },
    ];
    const radioValues = [
        {
            key: "Options 1",
            value: "Radio 1",
        },
        {
            key: "Options 2",
            value: "Radio 2",
        },
        {
            key: "Options 3",
            value: "Radio 3",
        },
    ];
    const initialValues = {
        email: "",
        description: "",
        selectOption: "",
        radioOption: "",
    };
    const validationSchema = Yup.object({
        email: Yup.string().required("Required"),
        description: Yup.string().required("Required"),
        selectOption: Yup.string().required("Required"),
        radioOption: Yup.string().required("Required"),
    });
    const onSubmit = (values) => console.log("Form data ", values);
    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {(formik) => (
                <Form>
                    <FormikControl control="input" type="email" label="Email" name="email" />
                    <FormikControl control="textarea" type="text" label="Description" name="description" />
                    <FormikControl control="select" label="Select Topic" name="selectOption" options={optionsValues} />
                    <FormikControl control="radio" label="Radio Topic" name="radioOption" options={radioValues} />
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    );
}

export default FormikContainer;
