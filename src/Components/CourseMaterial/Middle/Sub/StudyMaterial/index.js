import React, { useEffect, useState } from "react"
import ViewPdf from "./ViewPdf"
import { useSelector, useDispatch } from "react-redux"

const StudyMaterial = () => {
  const studyMaterial = useSelector(
    state => state.courseMaterials?.sessionDetails?.session?.studyMaterial
  )

  console.log("112studyMaterial", studyMaterial)

  // const {studyMaterial} = useSelector((state)=> state?.courseMaterials?.sessionDetails?.session)
  // console.log("fahhim",studyMaterial);

  const Files = studyMaterial?.filter(item => item.studyMaterialType === "file")

  console.log("middle", Files)

  return (
    <div className="my-5">
      {Files?.map((item, index) => {
        return (
          <ViewPdf
            file={`https://designerrs.s3.ap-south-1.amazonaws.com/designerrs/${item?.document?.name}`}
          />
        )
      })}
    </div>
  )
}

export default StudyMaterial
