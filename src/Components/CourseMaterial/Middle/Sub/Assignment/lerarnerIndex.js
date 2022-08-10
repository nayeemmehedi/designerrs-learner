import React, { useEffect, useState } from "react";
import LearnerAssignment from "./SubmitLearnerAssignment";
import ReviewAssignment from "./ReviewAssignment";
import { useDispatch, useSelector } from "react-redux";
import Paginate from "../../../../Common/Paginate";
import CustomModal from "../../../../Common/CustomModal";
import { FaTimes } from "react-icons/fa";
import {
  getAssignment,
  getComment,
} from "../../../../../Store/courseMaterial/actions";
import { useParams } from "react-router-dom";
import Loading from "../../../../Common/Loading";

const LerarnerIndex = () => {
  const { submittedAssigments, sLoad } = useSelector(
    (state) => state.courseMaterials
  );

  const [showAssignment, setShowAssignment] = useState(
    submittedAssigments?.status ? true : false
  );

  useEffect(() => {
    setShowAssignment(submittedAssigments?.status ? true : false);
  }, [submittedAssigments]);

  const [assignmentIdx, setAssignmentIdx] = useState(0);

  const assignmentArray = useSelector(
    (state) => state.courseMaterials?.sessionDetails?.session?.assignments
  );

  const [page, setPage] = useState({ currentPage: 0, offset: 0 });

  const pageCount = Math.ceil(assignmentArray?.length);
  const changePage = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * 10;
    // console.log(selectedPage, offset);
    setPage({ currentPage: selectedPage, offset: offset });
    dispatch({ type: "FLUSH_ASSIGNMENT" });
    setAssignmentIdx(selectedPage);
  };

  const [ModalOpen, setModalOpen] = useState(false);
  const togglModal = () => setModalOpen(!ModalOpen);

  const { courseId } = useParams();
  const dispatch = useDispatch();
  const sessionData = useSelector(
    (state) => state.courseMaterials?.sessionDetails
  );

  console.log("submittedAssigments", submittedAssigments);

  useEffect(() => {
    dispatch(
      getAssignment(
        courseId,
        sessionData?._id,
        assignmentArray?.[assignmentIdx]?._id
      )
    );
  }, [assignmentArray, assignmentIdx]);
  useEffect(() => {
    dispatch(getComment(submittedAssigments?.id));
  }, [submittedAssigments]);

  
  return (
    <>
      <div className="bg-white p-4 my-3">
        <div className="row d-flex justify-content-between">
          <div className="col-md-8">
            <small className="fw-bold">
              Study Navigation Patterns from different apps
            </small>
            <br></br>
            <small
              className="txtColor cursor"
              onClick={togglModal}
              style={{ cursor: "pointer" }}
            >
              See Details {`->`}
            </small>
          </div>

          <div className="col-md-4">
            <Paginate
              style={{ width: "100%" }}
              pageCount={pageCount}
              changePage={changePage}
            />
          </div>

          {submittedAssigments?._id && (
            <div>
              <button
                className="btn-main2-sm"
                onClick={() => setShowAssignment(false)}
              >
                Resubmit
              </button>
            </div>
          )}
        </div>
      </div>
      {showAssignment ? (
        <ReviewAssignment
          setAssignmentIdx={setAssignmentIdx}
          assignmentIdx={assignmentIdx}
          page={page}
          setPage={setPage}
          pageCount={pageCount}
          changePage={changePage}
          assignment={submittedAssigments}
        ></ReviewAssignment>
      ) : (
        <LearnerAssignment
          showAssignment={showAssignment}
          setAssignmentIdx={setAssignmentIdx}
          assignmentIdx={assignmentIdx}
          page={page}
          setPage={setPage}
          togglModal={togglModal}
          assignmentArray={assignmentArray}
          ModalOpen={ModalOpen}
          pageCount={pageCount}
          changePage={changePage}
          submittedAssigments={submittedAssigments}
        ></LearnerAssignment>
      )}

      <CustomModal toggle={togglModal} modal={ModalOpen}>
        <div className="p-4">
          <div className="d-flex justify-content-between">
            <h5 style={{ color: "#616161" }}>Assignment Details</h5>
            <FaTimes
              onClick={togglModal}
              style={{ cursor: "pointer", width: "40px" }}
            ></FaTimes>
          </div>
          <hr></hr>

          <div className="pb-3">
            <h6>{assignmentArray?.[assignmentIdx]?.assignmentTitle}</h6>
            <div style={{ color: "#616161" }}>
              <p>INSTRUCTIONS</p>
              <ol>
                <li>
                  {assignmentArray?.[assignmentIdx]?.assignmentInstructions}
                </li>
              </ol>
            </div>
          </div>
        </div>
      </CustomModal>
    </>
  );
};

export default LerarnerIndex;
