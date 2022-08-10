import React, { useState } from "react"
import { TiSocialTwitter } from "react-icons/ti"
import { TiSocialLinkedin } from "react-icons/ti"
import { TiSocialFacebookCircular } from "react-icons/ti"
import { TiSocialInstagram } from "react-icons/ti"
import { MdOutlineContentCopy } from "react-icons/md"
import CustomModal from "../../common/CustomModal"
import { GrFormClose } from "react-icons/gr"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import {
  FacebookShareButton,
  InstapaperShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share"
function ShareModal({ modal, togglModal }) {
  const [clipboard, setClipboard] = useState("")

  const history = useHistory()
  console.log(history?.location)

  const { portfolioValue } = useSelector(state => state.PortfolioReducers)

  return (
    <div>
      <CustomModal modal={modal} toggle={togglModal}>
        <div className="p-4" style={{ backgroundColor: "#FAFAFA" }}>
          <div className="d-flex justify-content-between">
            <h5 className="fw-bold">Share Portfolio</h5>{" "}
            <GrFormClose onClick={togglModal} className="cursor" size={30} />
          </div>

          <hr />

          <div className="d-flex">
            <p className="mt-1" style={{ backgroundColor: "#FAFAFA" }}>
              {clipboard}
            </p>

            <div className="ms-2">
              <CopyToClipboard
                text={`www.designers.com${history?.location?.pathname}`}
              >
                <div className="d-flex">
                  <small className="fw-bold">
                    www.designers.com{history?.location?.pathname}
                  </small>
                  <span className="avatarShare  d-flex justify-content-center align-items-center bgGray iconColor cursor">
                    <MdOutlineContentCopy size="20" />
                  </span>
                </div>
              </CopyToClipboard>
            </div>
          </div>

          <hr />
          <div className="row">
            <h5 className="text-dark mt-4 my-4">Share your Portfolio</h5>
            <div className="col-2">
              <LinkedinShareButton
                title={`www.designers.com${history?.location?.pathname}`}
                summary={`www.designers.com${history?.location?.pathname}`}
              >
                <span className="avatarIcon  d-flex justify-content-center align-items-center bgGray iconColor cursor">
                  <TiSocialLinkedin size="25" />
                </span>
              </LinkedinShareButton>
            </div>
            <div className="col-2">
              <TwitterShareButton
                body="Hey, this is my portfolio in designerrs"
                url={`www.designers.com${history?.location?.pathname}`}
              >
                <span className="avatarIcon  d-flex justify-content-center align-items-center bgGray iconColor cursor">
                  <TiSocialTwitter size="25" />
                </span>
              </TwitterShareButton>
            </div>
            <div className="col-2">
              <FacebookShareButton
                url={`www.designers.com${history?.location?.pathname}`}
                description={`www.designers.com${history?.location?.pathname}`}
              >
                <span className="avatarIcon  d-flex justify-content-center align-items-center bgGray iconColor cursor">
                  <TiSocialFacebookCircular size="25" />
                </span>
              </FacebookShareButton>
            </div>
            <div className="col-2">
              <InstapaperShareButton
                title={`www.designers.com${history?.location?.pathname}`}
                url={`www.designers.com${history?.location?.pathname}`}
                description={`www.designers.com${history?.location?.pathname}`}
              >
                <span className="avatarIcon d-flex justify-content-center align-items-center bgGray iconColor cursor">
                  <TiSocialInstagram size="25" />
                </span>
              </InstapaperShareButton>
            </div>
          </div>
        </div>
      </CustomModal>
    </div>
  )
}

export default ShareModal
