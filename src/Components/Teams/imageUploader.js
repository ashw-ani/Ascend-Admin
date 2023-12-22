import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import style from './Teams.module.css'

const ImageUploader = ({ onImageUpload }) => {
  const [fileSelected, setFileSelected] = useState('Drag or select team icon here');
  const onDrop = useCallback(
    (acceptedFiles) => {
      setFileSelected(acceptedFiles[0].path);
      console.log(acceptedFiles[0].path);
      onImageUpload(acceptedFiles);
    },
    [onImageUpload]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
      <div {...getRootProps()} className={style.dropzone} style={dropzoneStyles}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the team icon here ...</p>
        ) : (
          <p>{fileSelected}</p>
        )}
      </div>
    </>
  );
};

const dropzoneStyles = {
  border: "2px dashed #cccccc",
  borderRadius: "4px",
  padding: "20px",
  textAlign: "center",
  cursor: "pointer",
};

export default ImageUploader;
