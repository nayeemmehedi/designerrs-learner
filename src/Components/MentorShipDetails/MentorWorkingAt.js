import React from "react";
import microsoft from "../../Assets/Images/png/microsoft.png";
import adobe from "../../Assets/Images/png/adobe.png";

let working = [microsoft, adobe, microsoft];
function MentorWorkingAt() {
  return (
    <div className="my-4">
      <h5 className="text-center my-4">Mentors working at</h5>

      <div className="row">
        {working.map((v) => (
          <div className="col-2">
            <img
              style={{ maxWidth: "176px", maxHeight: "77px" }}
              src={v}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MentorWorkingAt;
