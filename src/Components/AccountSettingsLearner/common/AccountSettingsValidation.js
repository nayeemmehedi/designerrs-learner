import * as Yup from "yup";
const phoneRegExp =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
const fullNameRegExp =
  /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;

export const validate = Yup.object({
  fullName: Yup.string()
    .min(5, "Too Short!")
    .max(30, "Too Long!")
    .matches(fullNameRegExp, "Name format incorrect")
    .required("FullName Required"),
  // dateOfBirth: Yup.date(),
  email: Yup.string().email("Email Invalid...").required("Email Required"),
  phoneNumber: Yup.string()
    .matches(phoneRegExp, "Phone Number is not valid")
    .required("PhoneNumber Required"),
  whatsappNumber: Yup.string()
    .matches(phoneRegExp, "Whatsapp Number  is not valid")
    .required("Whatsapp Number Required"),
  emergencyContactNumber: Yup.string()
    .matches(phoneRegExp, "Emergency Contact Number is not valid")
    .required("Emergency Contact Number Required"),
  houseNumber: Yup.string().required("House Number Required"),
  streetName: Yup.string().required("Street Name Required"),
  area: Yup.string().required("Area Required"),
  landmark: Yup.string(),
  zipCode: Yup.number().required("Zip Code Required"),
  city: Yup.string().required("City Required"),
  state: Yup.string().required("State Required"),
});
