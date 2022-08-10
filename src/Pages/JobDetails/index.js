import React, { useEffect } from "react";
import { BiDownload } from "react-icons/bi";
import { BsSignpostSplit } from "react-icons/bs";
import JobCard from "./JobCard";
import { topComp } from "../Jobs";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllJobs, getOnejobs } from "../../Store/jobs/actions";
import SweetAlert from "react-bootstrap-sweetalert";
import Loading from "../../Components/Common/Loading";
import Oppurtunities from "../../Components/Jobs/Oppurtunities";
import JobMainDetails from "./Details";

const JobDetails = () => {
  const dispatch = useDispatch();
  const { key } = useParams();

  useEffect(() => {
    dispatch(getOnejobs(key));
  }, [key]);

  useEffect(() => {
    dispatch(getAllJobs("opportunities"));
  }, []);

  const { opportunities, loading, error, details } = useSelector(
    (state) => state.jobs
  );

  if (loading) return <Loading />;
  return (
    <div className="p-4">
      {error ? (
        <SweetAlert
          title={error || "Something went wrong!"}
          warning
          onConfirm={() => dispatch({ type: "GET_JOB_POST_API_ERROR" })}
          confirmBtnCssClass="bg-blue-400 px-3 py-2"
          btnSize="lg"
        >
          That thing is still around?
        </SweetAlert>
      ) : null}
      <div className="row">
        <div className="col-md-3">
          <Oppurtunities opportunities={opportunities} view={true} />
        </div>

        <div className="col-md-9">
          <div>
            <JobMainDetails details={details} key={key}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
