import React from "react";

export default function CustomInput({
    parentClass,
    inputClass,
    isLabel,
    labelName,
    labelClass,
    inputName,
    inputId,
    inputType,
    ref,
    placeholder,
    style,
    max,
    disabled,
    isMandatory,
    autoComplete,
    login
}) {
    return (
        <React.Fragment>
            <div className={parentClass}>
                {isLabel ? (
                    <label htmlFor={inputId} className={labelClass}>
                        {labelName}
                        {isMandatory ? (
                            <p
                                className="password_error ms-1"
                                style={{ cursor: "help" }}
                                data-title="Mandatory Field, Can't Be Empty"
                            >
                                *
                            </p>
                        ) : null}
                    </label>
                ) : null}
                <input
                    type={inputType}
                    id={inputId}
                    name={inputName}
                    className={inputClass}
                    ref={ref}
                    placeholder={placeholder}
                    style={style}
                    autoComplete={autoComplete}
                    maxLength={max}
                    {...login.getFieldProps(inputName)}
                    disabled={disabled ? true : false}
                />
                {login.touched[inputName] && login.errors[inputName] ? (
                    <div className="invalid_form my-2">{login.errors[inputName]}</div>
                ) : null}
            </div>
        </React.Fragment>
    );
}
