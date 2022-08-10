import React, { useState, useEffect } from "react";
import { Input, Label } from "reactstrap";
import { GrFormClose } from "react-icons/gr";
import { FcMakeDecision } from "react-icons/fc";
import { FcInspection } from "react-icons/fc";
import { FcApproval } from "react-icons/fc";

import { useDispatch } from "react-redux";

const FilterValue = [
  {
    name: "Not Reviewed",
    value: "notReviewed",
    number: 1,
    icon: <FcMakeDecision className="ms-2" size={24}></FcMakeDecision>,
  },
  {
    name: "Reviewed",
    value: "reviewed",
    number: 2,
    icon: <FcInspection className="ms-2" size={24}></FcInspection>,
  },
  {
    name: "OverDue",
    value: "overDue",
    number: 4,
    icon: <FcMakeDecision className="ms-2" size={24}></FcMakeDecision>,
  },
  {
    name: "Approved",
    value: "approved",
    number: 5,
    icon: <FcApproval className="ms-2" size={24}></FcApproval>,
  },
];

const FilterBatch = ({ toggleFilter, page }) => {
  const initialValues = {
    notReviewed: null,
    reviewed: null,
    overDue: null,
    approved: null,
  };

  const [filter, setFilter] = useState(initialValues);
  const dispatch = useDispatch();
  const onSubmit = () => {
    console.log(filter);
  };

  const clearFilter = () => {
    setFilter(filter);
  };

  return (
    <div
      className="bgSecondary p-5 shadow-md"
      style={{
        // height: "100%",
        width: "30%",
        position: "absolute",
        top: 0,
        right: 0,
      }}
    >
      <div className="d-flex justify-content-between">
        <h5 className="fw-bold">Filter</h5>{" "}
        <GrFormClose onClick={toggleFilter} className="cursor" size={30} />
      </div>

      <hr></hr>
      <small className="text-secondary">3 Selected</small>

      <div className="mb-5">
        {FilterValue?.map((i) => (
          <div className="mt-5 d-flex">
            <Input
              type="checkbox"
              // value={"active"}
              // checked={filter.slots === "scheduled"}
              name={i.value}
              onChange={(e) => setFilter({ ...filter, [i.value]: i.value })}
            />
            {/* <FcMakeDecision className="ms-2" size={24}></FcMakeDecision> */}
            {i.icon}
            <span className="ms-1" style={{ width: "150px" }}>
              {i.name}
            </span>{" "}
            <span className="ms-5 ps-5">{i.number}</span>
          </div>
        ))}

        {/* <div className="mt-3 d-flex">
          <Input
            type="checkbox"
            // value={"active"}
            // checked={filter.slots === "scheduled"}
            name="notReviewed"
            onChange={(e) =>
              setFilter({ ...filter, notReviewed: "notReviewed" })
            }
          />
          <FcMakeDecision className="ms-2" size={24}></FcMakeDecision>
          <span className="ms-1" style={{ width: "150px" }}>
            Not Reviewed
          </span>{" "}
          <span className="ms-5 ps-5">04</span>
        </div>

        <div className="mt-5 d-flex">
          <Input
            type="checkbox"
            name="status"
            // checked={filter.slots === "cancelled"}
            // value={"inactive"}
            onChange={() => setFilter({ ...filter, reviewed: "reviewed" })}
          />
          <FcInspection className="ms-2" size={24}></FcInspection>
          <span className="ms-1" style={{ width: "150px" }}>
            {" "}
            Reviewed
          </span>{" "}
          <span className="ms-5 ps-5">04</span>
        </div>
        <div className="mt-5 d-flex ">
          <Input
            type="checkbox"
            name="status"
            // checked={filter.slots === "live"}
            // value={"inactive"}
            onChange={() => setFilter({ ...filter, overDue: "overDue" })}
          />
          <FcMakeDecision className="ms-2" size={24}></FcMakeDecision>
          <span className="ms-1" style={{ width: "150px" }}>
            {" "}
            OverDue
          </span>{" "}
          <span className="ms-5 ps-5">04</span>
        </div>
        <div className="mt-5 d-flex">
          <Input
            type="checkbox"
            // value={"active"}
            // checked={filter.slots === "completed"}
            name="status"
            onChange={(e) => setFilter({ ...filter, approved: "approved" })}
          />
          <FcApproval className="ms-2" size={24}></FcApproval>
          <span className="ms-1" style={{ width: "170px" }}>
            {" "}
            Approved
          </span>{" "}
          <span className="ms-4 ps-5">04</span>
        </div> */}
      </div>

      <div className="my-5"></div>

      <p className="btn btn-main2 right mt-3 form-control" onClick={onSubmit}>
        Apply Filter
      </p>
      <br></br>
      <button
        className="btn btn-main right mt-2 form-control"
        onClick={clearFilter}
      >
        Clear Filters
      </button>
    </div>
  );
};

export default FilterBatch;
