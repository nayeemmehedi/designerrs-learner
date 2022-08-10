import React, { useState } from "react";
import { Input } from "reactstrap";
import { GrFormClose } from "react-icons/gr";
import { useDispatch } from "react-redux";
import courseBox from "../../../Assets/Images/png/course_box.png";
import greenTick from "../../../Assets/Images/png/greenTick.png";
import clock from "../../../Assets/Images/png/clock.png";
import completeTick from "../../../Assets/Images/png/completeTick.png";
import pending from "../../../Assets/Images/png/pending.png";
import overdue from "../../../Assets/Images/png/overdue.png";

const data = [
  { id: 1, name: "Upcoming", icon: courseBox },
  { id: 2, name: "Conducted", icon: greenTick },
  { id: 3, name: "In Review", icon: clock },
  { id: 3, name: "Completed", icon: completeTick },
  { id: 3, name: "Pending", icon: pending },
  { id: 3, name: "Overdue", icon: overdue },
];

const CourseFilter = ({ toggleFilter }) => {
  const initialValues = {
    type: [],
  };

  const [filter, setFilter] = useState(initialValues);

  const dispatch = useDispatch();
  const onSubmit = () => {
    // dispatch(getAllRole(page, 10, false, filter));
  };

  const clearFilter = () => {
    setFilter({
      type: [],
    });
  };

  const handleRoleCategory = (e) => {
    const { name, checked } = e.target;
    if (checked) {
      setFilter({
        ...filter,
        type: [...filter.type, name],
      });
    } else {
      setFilter({
        ...filter,
        type: filter?.type?.filter((i) => i !== name),
      });
    }
  };
  return (
    <div
      className="shadow-md"
      style={{
        height: "100%",
        maxWidth: "25%",
        position: "fixed",
        top: 0,
        left: 0,
        overflowY: "auto",
        backgroundColor: "#E5E5E5",
      }}
    >
      <div className="p-5">
        <div className="d-flex justify-content-between">
          <h5 className="fw-bold">Filter</h5>{" "}
          <GrFormClose onClick={toggleFilter} className="cursor" size={30} />
        </div>

        <hr></hr>

        <small className="text-secondary">
          {filter?.type?.length} Selected
        </small>
        {data?.map((i, idx) => (
          <>
            <div className="mt-3">
              <Input
                type="checkbox"
                name={i?.name}
                value={i?.name}
                checked={filter?.type?.find((t) => t == i.name)}
                onChange={(e) => handleRoleCategory(e)}
              />
              <span className="ms-2">
                <img src={i?.icon} alt="filterImg" style={{ width: "20px" }} />
                <span className="ms-2">{i?.name}</span>
              </span>
            </div>
          </>
        ))}
      </div>

      <div className="d-flex align-self-baseline p-3">
        <button className="btn btn-main2 mt-3 form-control" onClick={onSubmit}>
          Apply Filter
        </button>
      </div>
    </div>
  );
};

export default CourseFilter;
