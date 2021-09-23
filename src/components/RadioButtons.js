import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

function RadioButtons({ label, name, options, ...rest }) {
    return (
        <div className="form-control">
            <label htmlFor={name}>{label}</label>
            <Field id={name} name={name} {...rest}>
                {({ field }) => {
                    return options.map((option) => {
                        return (
                            <div className="radio-option" key={option.value}>
                                <input type="radio" id={option.value} {...field} value={option.value} checked={option.value === field.value} />
                                <label htmlFor={option.value}>{option.key}</label>
                            </div>
                        );
                    });
                }}
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    );
}

export default RadioButtons;
