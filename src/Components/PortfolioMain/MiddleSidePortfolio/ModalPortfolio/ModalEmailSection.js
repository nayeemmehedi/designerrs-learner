import { useFormik } from "formik";
import { Form } from "reactstrap";
import CustomInputField from "../../common/CustomInputField";
import { EmailSectionSchema } from "../../common/YupValidation";
import { GrFormClose } from "react-icons/gr";
import PortfolioService from "../../../../services/Portfolio.service";
import { useContext, useState } from "react";
import { PortfolioContextMade } from "../PortfolioContext";
import swal from "sweetalert";
import { useDispatch } from "react-redux";
import { getPortfolio } from "../../../../Store/Portfolio/Action";
import { useParams } from "react-router-dom";

const ModalEmailSection = ({ togglModal ,portfolioValue }) => {

  const [PortfolioContext, setPortfolioContex] =
    useContext(PortfolioContextMade);

  console.log(portfolioValue)
  const dispatch = useDispatch();
  const {id} = useParams()
  const initialValues = {
    email: portfolioValue?.email,
    phone: portfolioValue?.phone,
    Location:  portfolioValue?.Location,
  };

  const onSubmit = (values) => {
    PortfolioService.portfolioPost(values).then((v) =>
      swal("Good job!", "Successfully Done!", "success").then((sv) => {
        dispatch(getPortfolio(id));
        togglModal();
      })
    );
  };

  const sendEmail = useFormik({
    enableReinitialize: true,
    initialValues: initialValues,
    validationSchema: EmailSectionSchema,
    onSubmit,
  });


  return (
    <div className="p-3">
      <div className="d-flex justify-content-between">
        <h6 className="fw-bold">Contact Details</h6>{" "}
        <GrFormClose onClick={togglModal} className="cursor" size={30} />
      </div>

      <hr />

      <Form onSubmit={sendEmail.handleSubmit}>
        <div className="mb-3 mt-3">
          <CustomInputField
            name={"email"}
            type={"text"}
            label={"Email"}
            placeholder={""}
            validationType={sendEmail}
          />
        </div>

        <div className="mb-3 mt-3">
          <CustomInputField
            name={"phone"}
            type={"text"}
            label={"Phone"}
            placeholder={""}
            validationType={sendEmail}
          />
        </div>

        <div className="mb-3">
          <CustomInputField
            name={"Location"}
            type={"text"}
            label={"Location"}
            placeholder={""}
            validationType={sendEmail}
            // disabled={curriculam?.length == 0}
          >
            {/* <option defaultValue>Select Location</option>
            {sessions?.map((i, idx) => (
              <option key={idx} value={i.name}>
                {`${i.name}`}
              </option>
            ))} */}
          </CustomInputField>
        </div>

        <div class="d-grid gap-2">
          <button className="btn btn-main2 " type="submit">
            Submit
          </button>
        </div>
      </Form>
    </div>
  );
};

export default ModalEmailSection;
