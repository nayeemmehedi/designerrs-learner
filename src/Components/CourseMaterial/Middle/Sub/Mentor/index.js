import React from "react";
import ViewPdf from "./ViewPdf";
import { useSelector } from "react-redux";

const StudyMaterial = () => {
  const studyMaterial = useSelector(
    (state) => state.courseMaterials?.sessionDetails?.session?.studyMaterial
  );

  const Files = studyMaterial?.filter(
    (item) => item.studyMaterialType === "file"
  );

  return (
    <div className="my-5">
      {Files?.map((item, index) => {
        return (
          <ViewPdf
            file={`https://designerrs.s3.ap-south-1.amazonaws.com/designerrs/${item.document.name}`}
          />
        );
      })}
    </div>
  );
};

export default StudyMaterial;
