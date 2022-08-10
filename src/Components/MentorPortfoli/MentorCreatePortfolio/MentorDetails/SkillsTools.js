import React, { useState } from "react";
import axiosApi from "../../../../Helper/api";
import CommonSkillTool from "./CommonSkillTool";

function SkillsTools() {

  const [Skill, setSkill] = useState([]);
  const [Tool, setTool] = useState([]);

  const [response, setResponse] = useState({
    success: false,
    error: false,
    addFirst: false,
  });
  const [btnLoading, setbtnLoading] = useState(false);

  const SubmitValue = () => {
    

    if (Skill.length > 0 && Tool.length > 0) {
      let value = {
        skills: Skill,
        tools: Tool,
      };
      setbtnLoading(true);

      axiosApi
        .post(`learner/portfolio`, value)
        .then((res) => {
          console.log("res",res)
          setbtnLoading(false);

          setSkill([])
          setTool([])

          setResponse({
            success: true,
            error: false,
            addFirst: false,
          });
        })
        .catch((err) => {
          setbtnLoading(false);

          setResponse({
            success: false,
            error: true,
            addFirst: false,
          });
        });
    } else {
      setResponse({
        success: false,
        error: false,
        addFirst: true,
      });

      // response.btnLoading = false;
      // response.error = true;
      // response.success = false;
    }
  };

  if (
    response.addFirst ||
    response.success ||
    response.error ||
    response.addFirst
  ) {
    setTimeout(() => {
      setResponse({
        success: false,
        error: false,
        addFirst: false,
      });
    }, 4000);
  }


  return (
    <div className="my-4 w-75">
      <h3 className="my-4 text-secondary">Skills and Tools</h3>
      <p>Skills shown in your portfolio</p>

      <div className=" mb-5">
        <CommonSkillTool value={Skill} setValue={setSkill}></CommonSkillTool>
      </div>

      <p>Tools shown in your portfolio</p>

      <div className=" mt-3">
        <CommonSkillTool value={Tool} setValue={setTool}></CommonSkillTool>
      </div>
      <button className="btn btn-main2 mt-3" onClick={SubmitValue}>
        {btnLoading ? "Submitting..." : "Submit"}
      </button>

      <div>
        {response.addFirst && (
          <p className="text-danger mt-3"> Add Your Skills and Tools First.</p>
        )}

        {response.error && (
          <p className="text-danger mt-3"> Something Error Happens..</p>
        )}

        {response.success && (
          <p className="text-success mt-3"> Successfully Completed..</p>
        )}
      </div>
    </div>
  );
}

export default SkillsTools;

