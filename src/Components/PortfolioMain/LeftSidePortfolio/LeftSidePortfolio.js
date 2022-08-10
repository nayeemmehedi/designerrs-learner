// import { Link, Element } from "react-scroll";
// import Style from "../../../Style/course.module.scss";
// import style1 from "../../../Style/portfolio.module.scss";
// import { AiOutlineArrowLeft } from "react-icons/ai";
// import { useSelector, useDispatch } from "react-redux";
// import useDragDrop from "../../CourseMaterial/Middle/Sub/Assignment/useDragDrop";
// import { GrFormClose } from "react-icons/gr";
// import axiosApi from "../../../Helper/api";
// import { useEffect, useState } from "react";
// import { DownloadCloud, FileText } from "react-feather";
// import { getPortfolio } from "../../../Store/Portfolio/Action";
// import ScrollToTop from "../../../Helper/Custom/ScrollToTop";
// // import ScrollToTop from "../../Helper/Custom/ScrollToTop";

// function LeftSidePortfolio() {

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   useEffect(() => {
//     dispatch(getPortfolio());
//   }, []);

//   const { portfolioValue } = useSelector((state) => state.PortfolioReducers);

//   const { user } = useSelector((state) => state.user);
//   const dispatch = useDispatch();

//   const { getInputProps, open, files, handleRemoveAllFiles } = useDragDrop(
//     "image/*",
//     false,
//     false
//   );

//   const renderFilePreview = (file) => {
//     if (file?.type.startsWith("image")) {
//       return (
//         <div style={{ position: "relative" }}>

//           <img
//             className=" "
//             alt={file?.name}
//             src={URL.createObjectURL(file)}
//             height="200"
//             width="200"
//           />
//           <p style={{ position: "absolute", top: 0 }}>
//             <GrFormClose
//               className="cursor"
//               size="30"
//               onClick={handleRemoveAllFiles}
//             />
//           </p>
//         </div>
//       );
//     } else {
//       return <FileText size="28" />;
//     }
//   };

//   const [loading, setLoading] = useState(false);

//   const onSubmit = async () => {};

//   useEffect(() => {
//     if (files.length > 0) {
//       setLoading(true);
//       const id = localStorage.getItem("uid");

//       const formData = new FormData();

//       formData.append("profilePicture", files[0]);

//       console.log("formdata", formData);

//       axiosApi
//         .patch(`/learners/${id}`, formData)
//         .then((res) => {
//           console.log("fileee pataccchhhhhhhhhi", res);
//           dispatch(getPortfolio());
//           setLoading(false);

//         })
//         .catch((err) => {
//           console.log(err);
//           setLoading(false);
//         });
//     }
//   }, [files]);

//   const [modal, setModal] = useState(false);
//   const toggle = () => setModal(!modal);

//   console.log("files", files);

//   return (

//     <div>
//        <ScrollToTop />

//     <div className={Style.stoper_head} >
//       <div className="my-4">
//         <button className={`btn btn-light  ${style1.boderVanis}`}>
//           <AiOutlineArrowLeft></AiOutlineArrowLeft> Back
//         </button>
//       </div>

//       <div className="ps-2">
//         <div>
//           {
//             !loading ?   <div className="my-5 col-md-6">
//             {portfolioValue?.user?.profilePicture?.link ? (
//               <div onClick={open}>

//                 <input {...getInputProps()} />
//                 <img
//                   src={portfolioValue?.user?.profilePicture?.link}

//                   alt="userImage"
//                   style={{height:'200px',width:'200px',objectFit:'cover'}}

//                 />
//               </div>
//             ) : (
//               <div>

//                 <div
//                   className="py-3 border border-danger  fw-bolder"
//                   onClick={open}
//                 >
//                   <div className="text-center">Change Profile Picture</div>
//                 </div>
//               </div>
//             )}
//           </div> : <p className="text-danger">Loading...</p>
//           }

//         </div>

//       { loading && <h4 className="my-4">
//           {user?.fullName?.split(" ")[0] ||
//             user?.email?.match(/^.+(?=@)/)[0] ||
//             "User"}
//         </h4>}
//       </div>

//       <div className={Style.page_steps} >
//         <Link
//           to="about"
//           activeClass={Style.active_one}
//           smooth={true}
//           offset={0}
//           duration={500}
//           delay={100}
//           spy={true}
//         >
//           About
//         </Link>
//         <Link
//           to="skills"
//           activeClass={Style.active_one}
//           smooth={true}
//           offset={0}
//           duration={500}
//           delay={100}
//           spy={true}
//         >
//           Skills
//         </Link>
//         <Link
//           to="education"
//           activeClass={Style.active_one}
//           smooth={true}
//           offset={0}
//           duration={500}
//           delay={100}
//           spy={true}
//         >
//           Education
//         </Link>
//         <Link
//           to="experience"
//           activeClass={Style.active_one}
//           smooth={true}
//           offset={0}
//           duration={500}
//           delay={100}
//           spy={true}
//         >
//           Experience
//         </Link>
//         <Link
//           to="portfolio"
//           activeClass={Style.active_one}
//           smooth={true}
//           offset={0}
//           duration={500}
//           delay={100}
//           spy={true}
//         >
//           Portfolio
//         </Link>
//       </div>
//     </div>
//     </div>
//   );
// }

// export default LeftSidePortfolio;

import { Link, Element } from "react-scroll"
import Style from "../../../Style/course.module.scss"
import style1 from "../../../Style/portfolio.module.scss"
import { AiOutlineArrowLeft } from "react-icons/ai"
import { useSelector, useDispatch } from "react-redux"
import useDragDrop from "../../CourseMaterial/Middle/Sub/Assignment/useDragDrop"
import { GrFormClose } from "react-icons/gr"
import axiosApi from "../../../Helper/api"
import { useEffect, useState } from "react"
import { DownloadCloud, FileText } from "react-feather"
import { getPortfolio } from "../../../Store/Portfolio/Action"
import ScrollToTop from "../../../Helper/Custom/ScrollToTop"
import { useParams } from "react-router-dom"

function LeftSidePortfolio() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const { id } = useParams()
  const { portfolioValue, loading } = useSelector(
    state => state.PortfolioReducers
  )

  const { user } = useSelector(state => state.user)
  const dispatch = useDispatch()

  const { getInputProps, open, files, handleRemoveAllFiles } = useDragDrop(
    "image/*",
    false,
    false
  )

  const renderFilePreview = file => {
    if (file?.type.startsWith("image")) {
      return (
        <div style={{ position: "relative" }}>
          <img
            className=" "
            alt={file?.name}
            src={URL.createObjectURL(file)}
            height="200"
            width="200"
          />
          <p style={{ position: "absolute", top: 0 }}>
            <GrFormClose
              className="cursor"
              size="30"
              onClick={handleRemoveAllFiles}
            />
          </p>
        </div>
      )
    } else {
      return <FileText size="28" />
    }
  }

  const [load, setLoad] = useState(false)
  useEffect(() => {
    if (files.length > 0) {
      setLoad(true)
      const id = localStorage.getItem("uid")

      const formData = new FormData()

      formData.append("profilePicture", files[0])

      axiosApi
        .patch(`/learners/${id}`, formData)
        .then(res => {
          dispatch(getPortfolio(id))
          setLoad(false)
        })
        .catch(err => {
          console.log(err)
          setLoad(false)
        })
    }
  }, [files])

  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)

  return (
    <div className="ms-sm-0 ms-md-0 ms-lg-4">
      <ScrollToTop />

      <div className={Style.stoper_head}>
        <div className="my-2">
          <button className={`btn btn-light  ${style1.boderVanis}`}>
            <AiOutlineArrowLeft></AiOutlineArrowLeft> Back
          </button>
        </div>

        <div className="ps-2">
          <div>
            <div className="my-5">
              {portfolioValue?.user?.profilePicture?.link ? (
                <div onClick={open}>
                  <input {...getInputProps()} />
                  <img
                    src={portfolioValue?.user?.profilePicture?.link}
                    alt="userImage"
                    style={{
                      maxHeight: "250px",
                      maxWidth: "200px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              ) : (
                <div>
                  <div
                    className="py-3 border border-danger fw-bolder justify-content-center d-flex align-items-end"
                    onClick={open}
                    style={{ width: "200px", height: "200px" }}
                  >
                    <div className="text-center">
                      {load ? "Uploading" : "Change Profile Picture"}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {!loading && (
            <h4 className="my-4">
              {user?.fullName?.split(" ")[0] ||
                user?.email?.match(/^.+(?=@)/)[0] ||
                "User"}
            </h4>
          )}
        </div>

        <div className="d-none d-sm-block ">
          <div className={Style.page_steps}>
            <Link
              to="about"
              activeClass={Style.active_one}
              smooth={true}
              offset={0}
              duration={500}
              delay={100}
              spy={true}
            >
              About
            </Link>
            <Link
              to="skills"
              activeClass={Style.active_one}
              smooth={true}
              offset={0}
              duration={500}
              delay={100}
              spy={true}
            >
              Skills
            </Link>
            <Link
              to="education"
              activeClass={Style.active_one}
              smooth={true}
              offset={0}
              duration={500}
              delay={100}
              spy={true}
            >
              Education
            </Link>
            <Link
              to="experience"
              activeClass={Style.active_one}
              smooth={true}
              offset={0}
              duration={500}
              delay={100}
              spy={true}
            >
              Experience
            </Link>
            <Link
              to="portfolio"
              activeClass={Style.active_one}
              smooth={true}
              offset={0}
              duration={500}
              delay={100}
              spy={true}
            >
              Portfolio
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftSidePortfolio
