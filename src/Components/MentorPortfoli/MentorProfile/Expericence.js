import React from "react"
import { Form } from "reactstrap"
import CustomInputField from "../../Common/CustomInputField"
import * as Yup from "yup"
import { useFormik } from "formik"
import { useDispatch, useSelector } from "react-redux"
import { updateMentorPortfolio } from "../../../Store/Mentor/actions"

export const addProblemBriefsSchema = Yup.object().shape({
  ExperienceContext: Yup.string().required("This value is required"),
})

function Expericence() {
  const dispatch = useDispatch()
  const { mentorData } = useSelector(state => state.OnBoardingMentor)

//  console.log(mentorData)

  const initialValues = {
    ExperienceContext: mentorData?.ExperienceContext,
  }

  const onSubmit = values => {
    console.log("values", values)
    dispatch(updateMentorPortfolio(values))
  }

  const sendFinancesSchema = useFormik({
    enableReinitialize: true,
    initialValues: initialValues,
    validationSchema: addProblemBriefsSchema,
    onSubmit,
  })

  return (
    <div className="py-5 w-75">
      <p className="fs-6  "></p>

      <div className="w-75">
        <Form onSubmit={sendFinancesSchema.handleSubmit}>
          <CustomInputField
            name={"ExperienceContext"}
            type={"textarea"}
            rows="4"
            cols="50"
            placeholder={
              "Please tell us how do you feel about mentoring learners at Designerrrs"
            }
            label={"Tell us about your experience @ Designerrs"}
            validationType={sendFinancesSchema}
          />

          <button className="btn btn-main2" type="submit">
            Submit
          </button>
        </Form>
      </div>
    </div>
  )
}

export default Expericence
