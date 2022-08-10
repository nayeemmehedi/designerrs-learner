import React, { useState } from "react"
import ModalAboutYou from "../MiddleSidePortfolio/ModalPortfolio/ModalAboutYou"
import ModalEmailSection from "../MiddleSidePortfolio/ModalPortfolio/ModalEmailSection"
import ModalSkills from "../MiddleSidePortfolio/ModalPortfolio/ModalSkills"
import ModalSocialMedia from "../MiddleSidePortfolio/ModalPortfolio/ModalSocialMedia"
import ModalTools from "../MiddleSidePortfolio/ModalPortfolio/ModalTools"
import ModalEducation from "../MiddleSidePortfolio/ModalPortfolio/ModalEducation"
import ModalCertification from "../MiddleSidePortfolio/ModalPortfolio/ModalCertification"
import ModalWorkExperience from "../MiddleSidePortfolio/ModalPortfolio/ModalWorkExperience"
import CustomModal from "./CustomModal"
import ModalEducationChild from "../MiddleSidePortfolio/ModalPortfolio/ModalEducationChild"
import ModalCertificationsChild from "../MiddleSidePortfolio/ModalPortfolio/ModalCertificationChild"
import ModalWorkExperienceChild from "../MiddleSidePortfolio/ModalPortfolio/ModalWorkEchild"

const ModalSections = ({ keyvalue, id, togglModal, modal, portfolioValue }) => {
  console.log("common r vtr modal section", portfolioValue)

  const FindModal = keyvalue => {
    switch (keyvalue) {
      case "emailSection":
        return (
          <ModalEmailSection
            togglModal={togglModal}
            portfolioValue={portfolioValue}
          ></ModalEmailSection>
        )
      case "socialMedia":
        return (
          <ModalSocialMedia
            togglModal={togglModal}
            portfolioValue={portfolioValue}
          ></ModalSocialMedia>
        )

      case "aboutYou":
        return (
          <ModalAboutYou
            togglModal={togglModal}
            portfolioValue={portfolioValue}
          ></ModalAboutYou>
        )

      case "skills":
        return (
          <ModalSkills
            togglModal={togglModal}
            portfolioValue={portfolioValue}
          ></ModalSkills>
        )

      case "tools":
        return (
          <ModalTools
            togglModal={togglModal}
            portfolioValue={portfolioValue}
          ></ModalTools>
        )

      case "educations":
        return (
          <ModalEducation
            togglModal={togglModal}
            portfolioValue={portfolioValue}
          ></ModalEducation>
        )

      case "educationsChild":
        return (
          <ModalEducationChild
            togglModal={togglModal}
            id={id}
            portfolioValue={portfolioValue}
          ></ModalEducationChild>
        )

      case "certifications":
        return (
          <ModalCertification
            togglModal={togglModal}
            portfolioValue={portfolioValue}
          ></ModalCertification>
        )
      case "certificationsChild":
        return (
          <ModalCertificationsChild
            togglModal={togglModal}
            id={id}
            portfolioValue={portfolioValue}
          ></ModalCertificationsChild>
        )

      case "workExperience":
        return (
          <ModalWorkExperience
            togglModal={togglModal}
            portfolioValue={portfolioValue}
          ></ModalWorkExperience>
        )
      case "workExperienceChild":
        return (
          <ModalWorkExperienceChild
            togglModal={togglModal}
            id={id}
            portfolioValue={portfolioValue}
          ></ModalWorkExperienceChild>
        )

      default:
        ;<></>
    }
  }

  return (
    <div>
      <CustomModal modal={modal} toggle={togglModal}>
        {FindModal(keyvalue)}
      </CustomModal>
    </div>
  )
}

export default ModalSections
