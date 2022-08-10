import React from "react"

const ShowNameImage = ({ imageUrl, value, height, width }) => {
  return (
    <div className="d-flex align-items-center">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="user"
          style={{
            height: height ? height : "30px",
            Width: width ? width : "30px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      ) : (
        <div
          style={{
            width: width ? width : "30px",
            height: height ? height : "30px",
            background: "#C4C4C4",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        ></div>
      )}
      <small className="ms-3">{value}</small>
    </div>
  )
}

export default ShowNameImage
