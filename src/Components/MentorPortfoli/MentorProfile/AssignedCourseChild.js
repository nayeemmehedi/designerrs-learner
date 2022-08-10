import React from "react";
import { useState } from "react";

const value = [
  {
    name: "hello word",
    date: "2 march 33",
    tk: 50,
  },
  {
    name: "hello word",
    date: "2 march 33",
    tk: 50,
  },
  {
    name: "hello word",
    date: "2 march 33",
    tk: 50,
  },
];

function AssignedCourseChild() {
  const [tds10, setTds10] = useState(10);

  const a = value?.reduce((r, c) => r + parseFloat(c.tk), 0) | 0;
  //   console.log(a)
  let tdsValue = ((a * tds10) / 100) | 0;
  let total = (a - tdsValue) | 0;

  return (
    <div>
      <div>
        <div className="row">
          {value?.map((i, idx) => (
            <div className="col-12">
              <div className="d-flex justify-content-between">
                <div>
                  <p>{i.name}</p>
                  <p>{i.date}</p>
                </div>
                <div className="d-flex align-items-center">${i.tk}</div>
              </div>
            </div>
          ))}
          <div className="d-flex justify-content-between">
            <div>TDS(10%)</div>
            <div>-$ {tdsValue}</div>
          </div>
          <div className="d-flex justify-content-between">
            <div>Total</div>
            <div>$ {total}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssignedCourseChild;
