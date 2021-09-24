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
            key: "Option 1",
            value: "Value 1",
        },
        {
            key: "Option 2",
            value: "Value 2",
        },
        {
            key: "Option 3",
            value: "Value 3",
        },
    ];
    const radioValues = [
        {
            key: "Option 1",
            value: "Radio 1",
        },
        {
            key: "Option 2",
            value: "Radio 2",
        },
        {
            key: "Option 3",
            value: "Radio 3",
        },
    ];
    const checkboxValues = [
        {
            key: "Option 1",
            value: "Checkbox 1",
        },
        {
            key: "Option 2",
            value: "Checkbox 2",
        },
        {
            key: "Option 3",
            value: "Checkbox 3",
        },
    ];
    const initialValues = {
        email: "",
        description: "",
        selectOption: "",
        radioOption: "",
        checkboxOption: [],
    };
    const validationSchema = Yup.object({
        email: Yup.string().required("Required"),
        description: Yup.string().required("Required"),
        selectOption: Yup.string().required("Required"),
        radioOption: Yup.string().required("Required"),
        checkboxOption: Yup.array().min(1, "Required"),
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
                    <FormikControl control="checkbox" label="Radio Topic" name="checkboxOption" options={checkboxValues} />
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    );
}

export default FormikContainer;
