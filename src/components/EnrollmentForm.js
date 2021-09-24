import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

function EnrollmentForm() {
    const dropdownOptions = [
        { key: "Select your course", value: "" },
        { key: "React", value: "react" },
        { key: "Vue", value: "vue" },
        { key: "Angular", value: "angular" },
    ];
    const checkboxOptions = [
        { key: "HTML", value: "html" },
        { key: "CSS", value: "css" },
        { key: "Javascript", value: "javascript" },
    ];
    const initialValue = {
        email: "",
        bio: "",
        course: "",
        skills: [],
        courseDay: null,
    };
    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid email address").required("Required"),
        bio: Yup.string().required("Required"),
        course: Yup.string().required("Required"),
        skills: Yup.array().min(1, "Required"),
        courseDay: Yup.string().required("Required").nullable(),
    });
    const onSubmit = (val) => console.log(val);

    return (
        <Formik initialValues={initialValue} validationSchema={validationSchema} onSubmit={onSubmit}>
            {(formik) => {
                return (
                    <Form>
                        <FormikControl control="input" name="email" type="email" label="Email" />
                        <FormikControl control="input" name="bio" label="Bio" />
                        <FormikControl control="select" name="course" label="Course" options={dropdownOptions} />
                        <FormikControl control="checkbox" name="skills" label="Skills" options={checkboxOptions} />
                        <FormikControl control="date" name="courseDay" label="Course day" />
                        <button type="submit" disabled={!formik.isValid}>
                            Submit
                        </button>
                    </Form>
                );
            }}
        </Formik>
    );
}

export default EnrollmentForm;
