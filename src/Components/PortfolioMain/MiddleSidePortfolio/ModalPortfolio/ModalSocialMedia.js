import { useFormik } from "formik"
import { Form } from "reactstrap"
import CustomInputField from "../../common/CustomInputField"
import { SocialMediaSchema } from "../../common/YupValidation"
import { GrFormClose } from "react-icons/gr"
import { useContext, useState } from "react"
import PortfolioService from "../../../../services/Portfolio.service"
import swal from "sweetalert"
import { PortfolioContextMade } from "../PortfolioContext"
import { useDispatch, useSelector } from "react-redux"
import { getPortfolio } from "../../../../Store/Portfolio/Action"
import { useParams } from "react-router-dom"

const ModalSocialMedia = ({ togglModal, portfolioValue }) => {
  const [dateError, setDateError] = useState(false)
  const [sweet, setSweet] = useState(false)

  console.log(portfolioValue)

  const dispatch = useDispatch()

  const initialValues = {
    linkedin: portfolioValue?.socialMedia?.[0]?.url,
    twitter: portfolioValue?.socialMedia?.[1]?.url,
    facebook: portfolioValue?.socialMedia?.[2]?.url,
    instagram: portfolioValue?.socialMedia?.[3]?.url,
  }

  const { id } = useParams()
  const onSubmit = values => {
    console.log(values)
    if (Object.keys(values).length > 1) {
      setDateError(false)

      let value = {
        socialMedia: [
          {
            website: "linkedin",
            url: values.linkedin,
          },
          {
            website: "facebook",
            url: values.facebook,
          },
          {
            website: "instagram",
            url: values.instagram,
          },
          {
            website: "twitter",
            url: values.twitter,
          },
        ],
      }

      console.log(value)

      PortfolioService.portfolioPost(value).then(v =>
        swal("Good job!", "Successfully Done!", "success").then(sv => {
          dispatch(getPortfolio(id))
          togglModal()
        })
      )
    } else {
      setDateError(true)
    }
  }

  const sendSchema = useFormik({
    enableReinitialize: true,
    initialValues: initialValues,
    validationSchema: SocialMediaSchema,
    onSubmit,
  })

  if (sweet) {
    togglModal()
  }

  return (
    <div className="p-3">
      <div className="d-flex justify-content-between">
        <h6 className="fw-bold">Social Media Profile</h6>{" "}
        <GrFormClose onClick={togglModal} className="cursor" size={30} />
      </div>
      <hr />
      <Form onSubmit={sendSchema.handleSubmit}>
        <div className="mb-3 mt-3">
          <CustomInputField
            name={"linkedin"}
            type={"text"}
            label={"Linkedln Profile Link"}
            placeholder={""}
            validationType={sendSchema}
          />
        </div>

        <div className="mb-3 mt-3">
          <CustomInputField
            name={"twitter"}
            type={"text"}
            label={"Twitter Profile Link"}
            placeholder={""}
            validationType={sendSchema}
          />
        </div>

        <div className="mb-3 mt-3">
          <CustomInputField
            name={"facebook"}
            type={"text"}
            label={"Facebook Profile Link"}
            placeholder={""}
            validationType={sendSchema}
          />
        </div>

        <div className="mb-3 mt-3">
          <CustomInputField
            name={"instagram"}
            type={"text"}
            label={"Instagram Profile Link"}
            placeholder={""}
            validationType={sendSchema}
            defaultValue={portfolioValue?.socialMedia?.instagram}
          />
        </div>

        <div class="d-grid gap-2">
          <button className="btn btn-main2 " type="submit">
            Submit
          </button>
        </div>
      </Form>
    </div>
  )
}

export default ModalSocialMedia
