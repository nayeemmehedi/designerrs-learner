import React, { useCallback, useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";
import {
  acceptStyle,
  activeStyle,
  baseStyle,
  rejectStyle,
} from "./styleHelper";


const useDragDrop = (acceptedFiles, multiple, disable, isMultiple, idx) => {
  const dispatch = useDispatch();

  const [files, setFiles] = useState([]);

  const onDropAccepted = useCallback(
    (acceptedFiles, fileRejections) => {
      //   let totalSize = 0;
      //   const allFiles = [...acceptedFiles, ...asset];
      //   allFiles.forEach((file) => {
      //     totalSize = totalSize + file.size;
      //   });
      if (isMultiple) {
        const oldValue = [];
        oldValue[idx].moduleIcon = acceptedFiles[0];
        // setItems(oldValue);
        
      } else {
        setFiles([
          ...files,
          ...acceptedFiles.map((file) => Object.assign(file)),
        ]);
      }
      //   if (totalSize < maxSize) {
      //     acceptedFiles.map((data) =>
      //       dispatch({
      //         type: ADD_DATA,
      //         payload: { value: data, name: 'assets', new: true },
      //       })
      //     );
      //   } else {
      //     setWith_title(Error: File size is larger than 100mb);
      //   }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  // const singleFile = 1048576;
  const onDrop = useCallback((acceptedFiles, fileRejections) => {
    // console.log("onDrop ~ acceptedFiles", acceptedFiles);
    // fileRejections.forEach((file) => {
    //   file.errors.forEach((err) => {
    //     if (err.code === 'file-too-large') {
    //       setWith_title(Error: File size is larger than 10mb);
    //     }
    //   });
    // });
  }, []);

  const handleRemoveFile = (file, idx) => {
    if (isMultiple) {
      const oldValue = [];
      oldValue[idx].moduleIcon = null;
      // setItems(oldValue);
      
    } else {
      const uploadedFiles = files;
      const filtered = uploadedFiles.filter((i, idx) => i.name !== file.name);
      setFiles([...filtered]);
    }
  };

  const handleRemoveAllFiles = () => {
    setFiles([]);
  };

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    open,
  } = useDropzone({
    multiple: multiple,
    accept: acceptedFiles,
    noClick: true,
    noKeyboard: true,
    onDropAccepted,
    onDrop,
    disabled: disable,
    minSize: 0,
    // maxSize: singleFile,
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );
  return {
    getRootProps,
    getInputProps,
    style,
    open,
    files,
    handleRemoveFile,
    handleRemoveAllFiles,
  };
};

export default useDragDrop;