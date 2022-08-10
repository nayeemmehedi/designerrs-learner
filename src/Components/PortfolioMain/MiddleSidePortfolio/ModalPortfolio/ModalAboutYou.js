import { useFormik } from "formik"
import { Form } from "reactstrap"
import CustomInputField from "../../common/CustomInputField"
import { AboutYouSchema } from "../../common/YupValidation"
import { GrFormClose } from "react-icons/gr"

import PortfolioService from "../../../../services/Portfolio.service"
import swal from "sweetalert"
import { useDispatch } from "react-redux"
import { getPortfolio } from "../../../../Store/Portfolio/Action"
import { useParams } from "react-router-dom"

const ModalAboutYou = ({ togglModal, portfolioValue }) => {
  const dispatch = useDispatch()

  const initialValues = {
    heading: portfolioValue?.about?.heading,
    body: portfolioValue?.about?.body,
  }
  const { id } = useParams()
  const onSubmit = values => {
    let mainValue = { about: { ...values } }

    PortfolioService.portfolioPost(mainValue).then(v =>
      swal("Good job!", "Successfully Done!", "success").then(sv => {
        dispatch(getPortfolio(id))
        togglModal()
      })
    )
  }

  const sendSchema = useFormik({
    enableReinitialize: true,
    initialValues: initialValues,
    validationSchema: AboutYouSchema,
    onSubmit,
  })

  return (
    <div className="p-3">
      <div className="d-flex justify-content-between">
        <h6 className="fw-bold">About You</h6>{" "}
        <GrFormClose onClick={togglModal} className="cursor" size={30} />
      </div>
      <hr />
      <Form onSubmit={sendSchema.handleSubmit}>
        <div className="mb-3 mt-3 ">
          <CustomInputField
            name={"heading"}
            type={"textarea"}
            label={"Headline"}
            placeholder={""}
            validationType={sendSchema}
            count={"/50"}
          />
        </div>

        <div className=" mt-3">
          <CustomInputField
            name={"body"}
            type={"textarea"}
            label={"Body"}
            placeholder={""}
            validationType={sendSchema}
            count={"/200"}
          />
        </div>

        <div class="d-grid gap-2">
          <button className="btn btn-main2" type="submit">
            Submit
          </button>
        </div>

        <br></br>
      </Form>
    </div>
  )
}

export default ModalAboutYou
