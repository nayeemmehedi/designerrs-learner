import React from 'react';
import { FormFeedback, FormGroup, Input, Label } from 'reactstrap';

const CustomInput = ({
  field,
  form: { touched, errors },
  label,
  id,
  ...props
}) => {
  return (
    <React.Fragment>
      <FormGroup className={''}>
        {label ? <Label htmlFor={id}>{label}</Label> : null}
        <Input
          type="text"
          id={id}
          invalid={touched[field.name] && errors[field.name] ? true : false}
          {...field}
          {...props}
        />
        {touched[field.name] && errors[field.name] ? (
          <FormFeedback type="invalid">{errors[field.name]}</FormFeedback>
        ) : null}
      </FormGroup>
    </React.Fragment>
  );
};

export default CustomInput;