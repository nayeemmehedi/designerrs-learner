import React from "react";
import { useState } from "react";
import useDragDrop from "./useDragDrop";
import { useEffect } from "react";
import {BsCardImage} from 'react-icons/bs'	

const Image4 = ({handleAssignmentImg }) => {
  const {
    getRootProps,
    style,
    getInputProps: PanFrontInput,
    open: PanFontOpen,
    files: PanFont,
    handleRemoveAllFiles: PanFontRemoveAllFiles,
  } = useDragDrop(`.png`);

 
  const [image1, setImage1] = useState({});
  

  useEffect(() => {
    if (PanFont.length <= 0) return;
    setImage1({ file: URL.createObjectURL(PanFont[0]) });
  }, [PanFont]);

 

  const removeImage = (value) => {
    if (value === 1) return setImage1({});
    
  };

  console.log("mainfieimage", PanFont);
  useEffect(()=>{
    handleAssignmentImg(PanFont)
  },[PanFont])

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
                    <BsCardImage className="txtColor" size={40} />
                    
                    <h6 className="text-black">Upload Assignment Canvas</h6>
                    <small className="text-secondary">
                    Upload your Assignment canvas in 3x and in PNG format.
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
              <div style={{width : "300px", height : "300px"}}>
              
                <img src={image1.file} alt="thumbnail" className="w-100" />
              </div>
            </>
          )}
        </div>

       
      </div>

  );
};

export default Image4;
