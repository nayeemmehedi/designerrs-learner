import React, { useState } from "react";
import { GrFormClose } from "react-icons/gr";
import { TiMessages } from "react-icons/ti";
import { Input } from "reactstrap";
import CustomModal from "../../../../../../Common/CustomModal";
import ModalFilter from "./ModalFilter";
import ModalPost from "./ModalPost";
import {GiSettingsKnobs}  from  "react-icons/gi";

function ModalReview({ toggle, mentorReview }) {
  //   const [modal2, setModal2] = useState(false);
  //   const click2 = () => setModal2(!modal2);

  const [modal2, setModal2] = useState(false);
  const toggle2 = () => {
    setModal2(!modal2);
  };
  const initialValues = {
    navigation: "",
    type: "",
    status: "",
  };
  const [modal3, setModal3] = useState(false);
  const toggle3 = () => {
    setModal3(!modal3);
    
  };
  const [filter, setFilter] = useState(initialValues);
 

console.log("toggle",toggle2)
  return (
    <div>
    {!modal3 && <div>
     {!modal2 ? (
        <div className="p-3">
          <div className="d-flex justify-content-between">
            <h6 className="fw-bold">Feedback: Viswamitra </h6>{" "}
            <GrFormClose onClick={toggle} className="cursor" size={30} />
          </div>
          <hr />

          <div>
            <div className="pb-3 pt-2 ">
              <div className="d-flex justify-content-between">
                <p className="fs-6 mt-2">16 Reviews</p>

                <div>
                  <button className="btn btn-main ">
                    <span className="font12 cursor"   onClick={()=>setModal3(!modal3)}>  <GiSettingsKnobs /> Filter</span>
                  </button>

                  <button className="btn btn-main ms-2 ">
                    <span className="font12 cursor" onClick={toggle2}>
                      {" "}
                      + Post Feedback
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            {mentorReview?.slice(0, 2)?.map((v) => (
              <div className="py-1">
                <div className="d-flex ">
                  <div class="avatar">
                    <img className="iconSize avatar" src={v.image} alt="" />
                  </div>

                  <div className="ps-3 mt-2">
                    <small className="fw-bold">{v.name}</small>
                    <p>{v.status}</p>
                  </div>
                </div>
                <p className="fs12 fst-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                  ut expedita quaerat veritatis quis voluptate excepturi
                  eligendi doloremque, repellat possimus.
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <ModalPost toggle={toggle2} />
      )}
     </div>}
      {/* <CustomModal modal={modal2} toggle={toggle2}>
        <ModalPost toggle={toggle2}></ModalPost>
      </CustomModal> */}

      {modal3 && (
       <ModalFilter toggle={toggle3} ></ModalFilter>
      )}
    </div>
  );
}

export default ModalReview;
