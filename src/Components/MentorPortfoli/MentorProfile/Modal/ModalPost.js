import React from "react";
import { GrFormClose } from "react-icons/gr";
import { TiMessages } from "react-icons/ti";

function ModalPost({ toggle }) {
  return (
    <div className="p-3">
      <div className="d-flex justify-content-between">
        <h6 className="fw-bold">Feedback: Viswamitra </h6>{" "}
        <GrFormClose onClick={toggle} className="cursor" size={30} />
      </div>
      <hr />

      <div className="py-1">
        <div className="d-flex ">
          <div class="avatar">
            <img
              className="iconSize avatar"
              src="https://idsb.tmgrup.com.tr/ly/uploads/images/2020/11/05/70015.jpg"
              alt=""
            />
          </div>

          <div className="ps-3 mt-2">
            <small>Sankar</small>
            <p>Web Developer</p>
          </div>
        </div>
        <b className="mb-1">Your Feedback</b>
        <textarea rows="6" cols="55"></textarea>

        <div class="d-grid gap-2 mt-1">
          <button className="btn btn-main2">
            {" "}
            <TiMessages></TiMessages> Post Feedback
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalPost;
