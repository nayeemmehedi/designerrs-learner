import * as Yup from "yup";

export const addCourseSchema = Yup.object().shape({
  courseName: Yup.string().required("This value is required"),
  courseCode: Yup.string().required("This value is required"),
});

export const addCourseCurriculamSchema = Yup.object().shape({
  version: Yup.string().required("This value is required"),
  sessionDuration: Yup.string().required("This value is required"),
});

export const EmailSectionSchema = Yup.object().shape({
  email: Yup.string().required("This value is required"),
  phone: Yup.number().required("This value is required"),
  Location: Yup.string().required("This value is required"),
});

export const SocialMediaSchema = Yup.object().shape({
  linkedIn: Yup.string(),
  twitter: Yup.string(),
  facebook: Yup.string().required("This value is required"),
  instagram: Yup.string(),
});
export const AboutYouSchema = Yup.object().shape({
  heading: Yup.string()
    .max(50, "Must be exactly 50 digits")
    .required("This value is required"),
  body: Yup.string()
    .max(200, "Must be exactly 200 digits")
    .required("This value is required"),
});

export const EducationSchema = Yup.object().shape({
  institute: Yup.string("required").required("This value is required"),
  degree: Yup.string("required").required("This value is required"),
  fieldOfStudy: Yup.string("required").required("This value is required"),
  domain: Yup.string("required").required("This value is required"),
});

export const CertificationSchema = Yup.object().shape({
  institute: Yup.string().required("This value is required"),
  course: Yup.string().required("This value is required"),
  fieldOfStudy: Yup.string().required("This value is required"),
  domain: Yup.string().required("This value is required"),
});

export const WorkExperienceSchema = Yup.object().shape({
  designation: Yup.string().required("This value is required"),
  companyName: Yup.string(),
  annualCTC: Yup.number(),
  domain: Yup.string().required("This value is required"),
});

export const mentorshipSchema = Yup.object().shape({
  name: Yup.string().required("This value is required"),
  contractNo: Yup.number().required("This value is required"),
  email: Yup.string().required("This value is required"),
  linkdln: Yup.string().required("This value is required"),
});

export const guestSchema = Yup.object().shape({
  yourName: Yup.string().required("This value is required"),
  details: Yup.string().required("This value is required"),
});


