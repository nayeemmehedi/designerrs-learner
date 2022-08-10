// import React from "react";
// import moment from "moment";
// import { toCapitalize } from "../../../../../../helpers/capitalize";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { useState } from "react";
// import { getBatch } from "../../../../../../store/batches/actions";
// import Paginate from "../../../../../Common/Paginate";

// export default function Batches() {
//   const [filterOpen, setFilterOpen] = useState(false);
//   const toggleFilter = () => setFilterOpen(!filterOpen);

//   const [open, setOpen] = useState(false);
//   const toggleNotification = () => setOpen(!open);

//   const [modal, setModal] = useState(false);
//   const toggle = () => setModal(!modal);

//   const { batch, error, loading } = useSelector((state) => state.batches);
//   console.log("batch", batch);
//   //Pagination
//   const [page, setPage] = useState({ currentPage: 0, offset: 0 });
//   const pageCount = Math.ceil(batch?.totalPages);
//   const changePage = (e) => {
//     const selectedPage = e.selected;
//     const offset = selectedPage * 10;
//     setPage({ currentPage: selectedPage, offset: offset });
//   };

//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getBatch(page.currentPage, 1000000));
//   }, [page]);

//   const getStyle = (type) => {
//     switch (type) {
//       case "complete":
//         return "activeBtn text-center";
//       case "incomplete":
//         return "inActiveBtn text-center";
//       case "scheduled":
//         return "scheduledBtn text-center";
//       case "not-scheduled":
//         return "inActiveBtn text-center";
//       case "live":
//         return "activeBtn text-center";
//       case "paused":
//         return "inActiveBtn text-center";
//       case "cancelled":
//         return "inActiveBtn text-center";
//       default:
//         return "";
//     }
//   };

//   // if (loading) return <Loading />;
//   if (loading) return <Loading />;

//   return (
//     <div className="course-table table-responsive my-5 mx-2">
//       <p>Batches</p>
//       <table className="table table-striped">
//         <thead className="thead-custom">
//           <tr className="text-secondary border">
//             <th>Batch Code</th>
//             <th>Start Date</th>
//             <th>End Date</th>
//             <th>Location</th>
//             <th>Ops Co-ordinator </th>
//             <th>Upcomming Sessin </th>
//             <th>No perameter </th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {batch?.batches?.map((i) => (
//             <tr key={i._id} className="align-middle">
//               <td>{i?.batchCode}</td>
//               <td>{moment(i?.startDate).format("LL")}</td>
//               <td>{moment(i?.endDate).format("LL")}</td>
//               <td></td>
//               <td>{i?.room?.roomName}</td>
//               <td>{i?.location?.locationName}</td>
//               <td>{i?.operationCo?.fullName}</td>

//               <td>
//                 <p className={getStyle(i?.status)}>
//                   <small>
//                     {i?.status == "not-scheduled"
//                       ? "Not Scheduled"
//                       : toCapitalize(i?.status)}
//                   </small>
//                 </p>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <Paginate pageCount={pageCount} changePage={changePage} />
//     </div>
//   );
// }

import React from "react"

function Batches() {
  return <div>Batches</div>
}

export default Batches
