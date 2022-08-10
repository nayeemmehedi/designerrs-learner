import React from "react";
import { useState } from "react";
import useDragDrop from "./useDragDrop";
import { useEffect } from "react";
import { BsFileEarmarkArrowUp } from "react-icons/bs";
import { SiFigma } from "react-icons/si";

const Image4 = ({ handleFigmaImg }) => {
  const {
    getRootProps,
    style,
    getInputProps: PanFrontInput,
    open: PanFontOpen,
    files: PanFont,
    handleRemoveAllFiles: PanFontRemoveAllFiles,
  } = useDragDrop(`.fig`);

  const [image1, setImage1] = useState({});
  console.log(image1)

  useEffect(() => {
    if (PanFont.length <= 0) return;
    setImage1({ file: URL.createObjectURL(PanFont[0]) });
  }, [PanFont]);

  const removeImage = (value) => {
    if (value === 1) return setImage1({});
  };

  console.log("mainfieimage", PanFont);
  useEffect(() => {
    handleFigmaImg(PanFont);
  }, [PanFont]);

  return (
    <div className="my-4">
      {/* <p className="text-secondary">Branch Images *</p> */}

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
                  <BsFileEarmarkArrowUp className="txtColor" size={40} />

                  <h6 className="text-black">Upload Activity File</h6>
                  <small className="text-secondary">
                    Upload .fig file of your activity file.
                    <a href="/" onClick={(e) => e.preventDefault()}></a>{" "}
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
                PanFontRemoveAllFiles();
                removeImage(1);
              }}
            >
              X <small>Remove</small>
            </h6>
            <div>
              <SiFigma className="txtColor" size={40} />
              <br></br>
              <span className="fw-bold mt-2">{PanFont?.[0].name}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Image4;
