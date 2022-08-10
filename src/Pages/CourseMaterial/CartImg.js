import React from "react"
import { useState } from "react"
import useDragDrop from "./useDragDrop"
import { useEffect } from "react"
import { AiOutlineVideoCameraAdd } from "react-icons/ai"

const Image4 = ({ handleVideo }) => {
  const {
    getRootProps,
    style,
    getInputProps: PanFrontInput,
    open: PanFontOpen,
    files: PanFont,
    handleRemoveAllFiles: PanFontRemoveAllFiles,
  } = useDragDrop(`.mp4`, `mp4`)

  const [image1, setImage1] = useState({})

  useEffect(() => {
    if (PanFont.length <= 0) return
    setImage1({ file: URL.createObjectURL(PanFont[0]) })
  }, [PanFont])

  const removeImage = value => {
    if (value === 1) return setImage1({})
  }

  useEffect(() => {
    handleVideo(PanFont)
  }, [PanFont])

  return (
    <div className="my-4">
      <div>
        {!image1.file ? (
          <div className="row image-resize-card ">
            <div className="my-3">
              <div
                {...getRootProps({ style })}
                className="text-center bg-white"
              >
                <input {...PanFrontInput()} />
                <div
                  onClick={PanFontOpen}
                  className="d-flex align-items-center justify-content-center flex-column border-r text-center"
                >
                  <AiOutlineVideoCameraAdd
                    style={{ color: "#000" }}
                    size={40}
                  />

                  <h6 className="text-black">Take Feedback Video</h6>
                  <small className="text-secondary">
                    Tell us your experience by taking a video
                    <a href="/" onClick={e => e.preventDefault()}></a>{" "}
                  </small>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <h6
              className="mt-3 cursor"
              onClick={() => {
                PanFontRemoveAllFiles()
                removeImage(1)
              }}
            >
              X <small>Remove</small>
            </h6>
            <div className="p-3 bg-white d-flex align-items-center justify-content-center">
              <AiOutlineVideoCameraAdd style={{ color: "#000" }} size={40} />
              <div className="ms-3 txtColor">{PanFont[0]?.name?.substring(0, 30)}...</div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Image4
