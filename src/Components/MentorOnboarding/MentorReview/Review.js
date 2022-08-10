import React, { useState } from "react";
import Image from "../Image";
import NotReviewed from "../../../Assets/Images/icons/notReviewed.svg";
import { MdOutlineArrowBack } from "react-icons/md";
import { CgRing } from "react-icons/cg";
import { GiSettingsKnobs } from "react-icons/gi";
import FilterReview from "./FilterReview";
import Filter from "../../pandingAssignment/Filter";

const commentData = [
  {
    id: 1,
    name: "Raghav Chhanana",
    img: "https://media.istockphoto.com/photos/colored-powder-explosion-on-black-background-picture-id1140180560?k=20&m=1140180560&s=612x612&w=0&h=X_400OQDFQGqccORnKt2PHYvTZ3dBLeEnCH_hRiUQrY=",
    comment:
      "Because of less white space, this region is looking cluttered, also you can try improving the visual hierarchy.",
    createdAt: "Yesterday",
  },
  {
    id: 2,
    name: "Pointer Ghosh",
    img: "https://media.istockphoto.com/photos/colored-powder-explosion-on-black-background-picture-id1140180560?k=20&m=1140180560&s=612x612&w=0&h=X_400OQDFQGqccORnKt2PHYvTZ3dBLeEnCH_hRiUQrY=",
    comment:
      "I didn’t see any change here, it is necessary for your skills that you work on this.",
    createdAt: "Today",
  },
];

function Review() {
  const [filterOpen, setFilterOpen] = useState(false);
  const toggleFilter = () => setFilterOpen(!filterOpen);

  return (
    <div className="my-4">
      <div className="d-flex flex-sm-row flex-column justify-content-between">
        <h5>Review Your Pending Assignemt</h5>
        <span className="txtColor cursor" onClick={toggleFilter}>
          <GiSettingsKnobs /> <span className="ms-2">Filter</span>
        </span>
      </div>

      <div className="p-4 my-3 bgGray">
        <h6>Session 1</h6>
        <h6>Introduction to Ux/Ui design</h6>
        <br />
        <hr />

        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6">
            <div>
              <p>Assignment 1</p>
              <h5 className="text-danger">
                {" "}
                Study Navigation Patterns from differnt Apps
              </h5>
            </div>

            <div className="d-flex px-3 py-3">
              <Image></Image>{" "}
              <small className="mt-3 ms-2"> 10/12 Reviewed</small>
            </div>

            <p className="mt-3">INTRODUCTION</p>
            <ol>
              {commentData.map((v) => (
                <li>
                  <small style={{ fontSize: "13px" }}>{v.comment}</small>
                </li>
              ))}
            </ol>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4"></div>
          <div className="col-sm-12 col-md-12 col-lg-2">
            <div className="d-flex justify-content-between align-items-center">
              <div
                className=" rounded-circle p-1"
                style={{ background: "orange" }}
              >
                <CgRing
                  color="white"
                  className="rounded-circle"
                  alt="user"
                  style={{
                    width: "22px",
                    height: "22px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="mt-2">
                <small className="text-secondary">Status</small>
                <p style={{ fontSize: "13px" }}>Not Reviewed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {filterOpen && (
        <FilterReview toggleFilter={toggleFilter} />
        // <Filter toggleFilter={toggleFilter} />
      )}
    </div>
  );
}

export default Review;
