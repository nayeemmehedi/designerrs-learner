import React, { useContext, useEffect, useState } from "react";
import { Input, Label } from "reactstrap";
import { GrFormClose } from "react-icons/gr";
import { AiFillCloseCircle } from "react-icons/ai";
import PortfolioService from "../../../../services/Portfolio.service";
import { PortfolioContextMade } from "../PortfolioContext";
import swal from "sweetalert";
import { useDispatch, useSelector } from "react-redux";
import { getPortfolio } from "../../../../Store/Portfolio/Action";
import { useParams } from "react-router-dom";



function ModalTools({ togglModal, portfolioValue  }) {
  const { global } = useSelector(state => state.PortfolioReducers)

  const [roleData, setRoleData] = useState([])

  console.log(portfolioValue)
  
    useEffect(() => {
      setRoleData(portfolioValue.skills)
    }, [portfolioValue])
    console.log("global", roleData)

  const [dateError, setDateError] = useState(false);

  const dispatch = useDispatch();

  const handleRole = (id) => {
    const check = roleData?.every((item) => {
      return item !== id;
    });
    if (!check) return;
    const info = global?.learnerTools?.find((i) => i == id);
    let uniqValue = [...new Set([...roleData, info])];

    setRoleData(uniqValue);
  };

  const removeRole = (id) => {
    setRoleData(roleData.filter((i) => i != id));
  };
  const { id } = useParams()
  const handleSubmit = () => {
    if (roleData.length > 0) {
      setDateError(false);

      if (portfolioValue && portfolioValue?.tools?.length > 0) {
        let value = { tools: [...roleData] };
        let uniq = [...new Set(value.tools)];

        let newValue = { tools: uniq };

        PortfolioService.portfolioPost(newValue).then((v) =>
          swal("Good job!", "Successfully Done!", "success").then((sv) => {
            dispatch(getPortfolio(id));
            togglModal();
          })
        );
      } else {
        let value = { tools: [...roleData] };
        let uniq = [...new Set(value.tools)];

        let newValue = { tools: uniq };

        PortfolioService.portfolioPost(newValue).then((v) =>
          swal("Good job!", "Successfully Done!", "success").then((sv) => {
            dispatch(getPortfolio());
            togglModal();
          })
        );
      }
    } else {
      setDateError(true);
    }
  };

  return (
    <div className="p-3">
      <div className="d-flex justify-content-between mb-3">
        <h6 className="fw-bold">Tools</h6>{" "}
        <GrFormClose onClick={togglModal} className="cursor" size={30} />
      </div>
      <hr />
      <div className="mb-4">
        <Label>
          <small className="">Select Tools</small>
        </Label>
        <Input
          name="role"
          type="select"
          onChange={(e) => handleRole(e.target.value)}
        >
          <option defaultValue>Select Toles</option>
          {global?.learnerTools?.map((i, idx) => (
            <option key={idx} value={i}>
              {i}
            </option>
          ))}
        </Input>
      </div>
      <span className="mb-5">
        {roleData?.map((i, idx) => (
          <span className="border p-1 m-1" key={idx}>
            {i}
            <span className="cursor mx-1" onClick={() => removeRole(i)}>
              <AiFillCloseCircle />
            </span>
          </span>
        ))}
      </span>

      <div className="d-grid gap-2">
        <button
          // className="btn btn-main2 mt-4"
          className={`btn btn-main2 ${roleData.length > 0 && "mt-4"} `}
          type="submit"
          onClick={handleSubmit}
        >
          Button
        </button>
      </div>
    </div>
  );
}

export default ModalTools;
