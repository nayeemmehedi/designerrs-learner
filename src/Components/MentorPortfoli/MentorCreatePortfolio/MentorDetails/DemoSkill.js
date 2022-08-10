import React, { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import cross from "../../../../Assets/Images/mentors/cross.svg";

function DemoSkill({value, setValue}) {
  const [form, setForm] = useState("");
  const [btnVanis, setbtnVanis] = useState(false);

//   const [value, setValue] = useState([]);

  const valueDelete = (id) => {
    let newArray = value.filter((v, idx) => idx !== id);
    setValue(newArray);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (form.length > 0) {
      setValue([...value, form]);
    }
    setbtnVanis(!btnVanis);
  };
  console.log("valuee",value)

  

  return (
    <div>
      <div className="child-skills row">
        {value?.map((value, idx) => (
          <div className=" col-md-4  ">
            <div className=" d-flex word-break  justify-content-around bg-danger text-light mx-2 py-1 ">
              <p className=" gg">{value}</p>
              <span className="cursor " onClick={() => valueDelete(idx)}>
                <img
                  src={cross}
                  style={{ height: "12px", width: "12px" }}
                  alt=""
                />
              </span>
            </div>
          </div>
        ))}

        <div className=" col-4">
          {btnVanis ? (
            <form onSubmit={onSubmit}>
              <div className="d-flex">
                <input
                  type="text"
                  name="box"
                  onChange={(e) => setForm(e.target.value)}
                  className="w-50"
                />

                <input type="submit" className="btn btn-main" />
              </div>
            </form>
          ) : (
            <div>
              <button
                onClick={() => setbtnVanis(!btnVanis)}
                className="btn btn-main"
              >
                {" "}
                <IoMdAdd style={{ color: "red !important" }}></IoMdAdd> Add
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DemoSkill;
