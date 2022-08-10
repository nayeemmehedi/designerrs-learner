import React, { useState } from "react";
import { Input } from "reactstrap";
import { GrFormClose } from "react-icons/gr";

function ModalFilter({ toggle, toggle3 }) {
  const filterRole = [
    { key: "admin", name: "Admin" },
    { key: "learner", name: "Learner" },
  ];

  const filterAdmin = [
    { key: "operationsCo", name: "Operations Co-Ordinator" },

    { key: "businessExecutive", name: "Business Executive" },
    { key: "hrManager", name: "HR Manager" },

    { key: "hrInter", name: "HR Intern" },

    { key: "uxDesigner", name: "UX/UI Designer" },

    { key: "operationsInter", name: "Operations Inter" },

    { key: "contentWriter", name: "Content Writer" },

    { key: "productManager", name: "Product Manager" },
  ];

  const initialValues = {
    admin: "",
    learner: "",
    operationsCo: "",
    businessExecutive: "",
    hrManager: "",
    hrInter: "",
    uxDesigner: "",
    operationsInter: "",
    contentWriter: "",
    productManager: "",
  };
  const [filter, setFilter] = useState(initialValues);

  return (
    <div className="p-3">
      <div className="d-flex justify-content-between mb-3 mt-2">
        <h4 className="fw-bold">Feedback : Viswamitra Patil</h4>{" "}
        <GrFormClose onClick={ toggle } className="cursor" size={30} />
      </div>

      <hr />
      <hr />

      <span>By Role Catagory</span>
      {filterRole?.map((v) => (
        <div className="mt-3">
          <Input
            className="text-danger"
            type="checkbox"
            value={"active"}
            checked={filter.type === v.key}
            name={v.key}
            onChange={(e) => setFilter({ ...filter, type: v.key })}
          />
          <span className="ms-1">{v.name}</span>
        </div>
      ))}
      <div>
        <hr />
      </div>

      <span>By Admin Role</span>

      {filterAdmin?.map((v) => (
        <div className="mt-3">
          <Input
            className="border border-danger"
            type="checkbox"
            value={"active"}
            // checked={filter.type === v.key}
            name="status"
            onChange={(e) => setFilter({ ...filter, type: v.key })}
          />
          <span className="ms-1">{v.name}</span>
        </div>
      ))}
    </div>
  );
}

export default ModalFilter;
