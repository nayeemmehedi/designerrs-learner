import * as Yup from "yup";

export const addProblemBriefsSchema = Yup.object().shape({
  title: Yup.string().required("This value is required"),
  domain: Yup.string().required("This value is required"),
});
export const addProblemBriefAboutsSchema = Yup.object().shape({
  statement: Yup.string().required("This value is required"),
  objectives: Yup.string().required("This value is required"),
  potentialTarget: Yup.string().required("This value is required"),
  typeOfDevice: Yup.string().required("This value is required"),
});

export const updateProblemBriefSchema = Yup.object().shape({
  title: Yup.string().required("This value is required"),
  domain: Yup.string().required("This value is required"),
  statement: Yup.string().required("This value is required"),
  objectives: Yup.string().required("This value is required"),
  potentialTarget: Yup.string().required("This value is required"),
  typeOfDevice: Yup.string().required("This value is required"),
});

export const newFinanceSchema = Yup.object().shape({
  unemployed: Yup.string().required("This value is required"),
    name: Yup.string().required("This value is required"),
    phone: Yup.number().required("This value is required"),
    selfEmployed: Yup.string().required("This value is required"),
});


export const sendFinances = Yup.object().shape({
  bankName: Yup.string().required("This value is required"),
  bankState: Yup.string().required("This value is required"),
  bankCity: Yup.string().required("This value is required"),
  bankAddress: Yup.string().required("This value is required"),
  ifscCode: Yup.string().required("This value is required"),
  accNo: Yup.string().required("This value is required"),
  upiId: Yup.string().required("This value is required"),
  panNumber: Yup.string().required("This value is required"),
  aadharNumber: Yup.number().required("This value is required"),

});

export const mentorAboutSchema = Yup.object().shape({
  heading: Yup.string().required("This value is required"),
  body : Yup.string().required("This value is required"),
});




export const multipleQuesSchema = Yup.object({
  linkedin:Yup.string().required('This value is Required'),
    facebook:Yup.string().required('This value is Required'),
    instagram:Yup.string().required('This value is Required'),
 
  opt: Yup.array()
    .of(Yup.object().shape({
      website:Yup.string().required('This value is Required'),
      url:Yup.string().required('This value is Required')

    })),
    // .required('This value is Required'),
 
});

export const EducationSchemas = Yup.object().shape({
  institute: Yup.string("required").required("This value is required"),
  degree: Yup.string("required").required("This value is required"),
  fieldOfStudy: Yup.string("required").required("This value is required"),
  domain: Yup.string("required").required("This value is required"),
});


export const EducationSchemas1 = Yup.object().shape({
  opt: Yup.array()
  .of(Yup.object().shape({
    institute: Yup.string("required").required("This value is required"),
  degree: Yup.string("required").required("This value is required"),
  fieldOfStudy: Yup.string("required").required("This value is required"),
  domain: Yup.string("required").required("This value is required"),

  })),
});




export const WorkExperienceSchemas = Yup.object().shape({
  experience:Yup.number().required("This value is required"),
  designation: Yup.string().required("This value is required"),
  companyName: Yup.string(),
  annualCTC: Yup.number(),
  domain: Yup.string().required("This value is required"),
});

export const workPreferenceSchemas = Yup.object().shape({
  expectedCTC: Yup.number().required("This value is required"),
  primaryLocation:Yup.string().required("This value is required"),
  secondaryLocation:Yup.string().required("This value is required")

  
});


