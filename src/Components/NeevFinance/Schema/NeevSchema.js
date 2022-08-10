import * as Yup from "yup";
export const sendNeevSchema = Yup.object().shape({
    emplyment:Yup.string().required("This value is required"),
    name1: Yup.string().required("This value is required"),
    phone1: Yup.number().required("This value is required"),
    name2: Yup.string().required("This value is required"),
    phone2: Yup.number().required("This value is required"),
   
  });