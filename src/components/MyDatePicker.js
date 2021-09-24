import React from "react";
import DatePicker from "react-datepicker";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

import "react-datepicker/dist/react-datepicker.css";

function MyDatePicker({ label, name, ...rest }) {
    return (
        <div className="form-control">
            <label htmlFor="name">{label}</label>
            <Field name={name}>
                {({ form, field }) => {
                    const { setFieldValue } = form;
                    const { value } = field;
                    return <DatePicker id={name} {...rest} {...field} selected={value} onChange={(val) => setFieldValue(name, val)} />;
                }}
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    );
}

export default MyDatePicker;
