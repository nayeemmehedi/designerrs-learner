import * as Yup from "yup";
export const sendPersonalSchema = Yup.object().shape({
  companyName: Yup.string().required("This value is required"),
  gstNumber: Yup.number().required("This value is required"),
  buildingNumber: Yup.number().required("This value is required"),
  StreetName: Yup.string().required("This value is required"),
  area: Yup.string().required("This value is required"),
  zipCode: Yup.number().required("This value is required"),
  city: Yup.string().required("This value is required"),
  state: Yup.string().required("This value is required"),
  landmark: Yup.number(),
});

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const PersonalSchema = Yup.object().shape({
  name: Yup.string().required("This value is required"),
  email: Yup.string()
    .email("Enter a valid email")
    .required("This value is required"),
  phoneNo: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("This value is required"),
});
