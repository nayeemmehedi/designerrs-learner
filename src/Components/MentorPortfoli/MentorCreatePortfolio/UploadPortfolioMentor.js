import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../../Store/user/actions";
import experience from "../../../Assets/Images/png/exp3.svg";
import experience2 from "../../../Assets/Images/png/exp2.png";
import { HiOutlineArrowRight } from "react-icons/hi";
import useDragDrop from "../../CourseMaterial/Middle/Sub/Assignment/useDragDrop";
import { DownloadCloud } from "react-feather";
import { AiFillLinkedin } from "react-icons/ai";
import { CgClose } from "react-icons/cg";
import { getPortfolio } from "../../../Store/Portfolio/Action";
import SweetAlert from "react-bootstrap-sweetalert";
import axiosApi from "../../../Helper/api";
import  SackBar from "../../../Components/Common/SackBar";
import  {useHistory} from "react-router-dom" 

function UploadPortfolioMentor({ active }) {
  const dispatch = useDispatch();
  const history = useHistory()
  const accessToken = localStorage.getItem("accessToken");
  useEffect(() => {
    dispatch(getUser());
  }, [accessToken]);

  const { user } = useSelector((state) => state.user);

  //   file upload system

  const {
    getRootProps,
    style,
    getInputProps: PanFrontInput,
    open: LinkeDinOpen,
    files: LinkeDin,
    handleRemoveAllFiles: LinkeDinRemoveAllFiles,
  } = useDragDrop(`.pdf`);

  const [fileValue, setfileValue] = useState({});
  useEffect(() => {
    if (LinkeDin.length <= 0) return;
    setfileValue({ file: URL.createObjectURL(LinkeDin[0]) });
  }, [LinkeDin]);
  const removeImage = (value) => {
    if (value === 1) return setfileValue({});
  };

  const [load, setLoad] = useState(false);
  const [error, setError] = useState(false);

  //   let newLinkedin ={...LinkeDin}

  const handleSubmit = () => {
    console.log("newLinkedin", LinkeDin);
    setLoad(true);
    const formData = new FormData();
    formData.append("linkedinPDF", LinkeDin[0]);
    axiosApi
      .post(`/learner/portfolio/linkedin`, formData)
      .then((res) => {
        setLoad(false);
        console.log(res);
        dispatch(getPortfolio());
      })
      .catch((err) => {
        setLoad(false);
        setError(true);
      });
  };
  return (
    <div>
      {error ? (
        <SweetAlert
          title={error || "Something went wrong!"}
          warning
          onConfirm={() => setError(false)}
          confirmBtnCssClass="bg-blue-400 px-3 py-2"
          btnSize="lg"
        >
          That thing is still around?
        </SweetAlert>
      ) : null}

      <div>
        <div>
          <h3 className="text-danger mt-3">
            {user?.fullName?.split(" ")[0] ||
              user?.email?.match(/^.+(?=@)/)[0] ||
              "User"}
          </h3>

          <>
            <div>
              <div className="my-4 ">
                <b>Upload your Linkedin CV PDF to create your portfolio.</b>
              </div>
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-4 ">
                  <img
                    src={experience}
                    style={{ width: "auto", height: "110px" }}
                    alt=""
                  />
                  <p className="mt-3 fw-bold" style={{ fontSize: "14px" }}>
                    Click "More" button
                  </p>
                </div>
                <div
                  className="col-sm-12 col-md-12 col-lg-1 d-flex ms-3  "
                  style={{ marginTop: "45px" }}
                >
                  <HiOutlineArrowRight
                    size="40"
                    color="#CD2026"
                  ></HiOutlineArrowRight>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-3 ">
                  <img
                    src={experience2}
                    style={{ width: "auto", height: "110px" }}
                    alt=""
                  />
                  <p className="mt-3 fw-bold" style={{ fontSize: "14px" }}>
                    Choose Save to PDF option to download your Linkdln Resume
                    PDF
                  </p>
                </div>
              </div>
            </div>

            <div className="my-3 w-75 ">
              {!fileValue.file ? (
                <div className="row image-resize-card ">
                  <div className="my-3">
                    <div
                      {...getRootProps({ style })}
                      className="text-center bg-white"
                    >
                      <input {...PanFrontInput()} />
                      <div
                        onClick={LinkeDinOpen}
                        className="d-flex align-items-center justify-content-center flex-column border-r text-center"
                      >
                        <DownloadCloud className="txtColor" size={40} />
                        <h6 className="text-black">Add File</h6>

                        <small className="text-secondary">
                          Linkedin Resume PDF
                          <a
                            href="/"
                            onClick={(e) => e.preventDefault()}
                          ></a>{" "}
                        </small>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bgGray">
                  <div className=" d-flex justify-content-center align-items-center p-5">
                    <div>
                      <div className="d-flex" style={{ color: "#0077B7" }}>
                        {" "}
                        {/* <img src={fileValue.file} alt="thumbnail" className="w-100" /> */}
                        <p>
                          {" "}
                          <AiFillLinkedin size="25" /> {LinkeDin[0]?.name}
                        </p>
                        <h6
                          className=" cursor ms-2 text-danger"
                          style={{ marginTop: "3px" }}
                          onClick={() => {
                            LinkeDinRemoveAllFiles();
                            removeImage(1);
                          }}
                        >
                          <CgClose size="20"></CgClose>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <button className="btn btn-main2" onClick={()=>handleSubmit()}>{load ? "Submitting..." : "Submit."}</button>

             

              <SackBar history={history} title={load ? "Submitting..." : "Submit"}
               onSubmit={handleSubmit}
              ></SackBar>
            </div>

           
           
          </>
        </div>
      </div>
    </div>
  );
}

export default UploadPortfolioMentor;
