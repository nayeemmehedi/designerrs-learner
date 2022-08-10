import React from "react";
import CustomModal from "../PortfolioMain/common/CustomModal";
import { GrFormClose } from "react-icons/gr";
// test



const commentData = [
  {
    name: "RRR",
    img: "https://media.istockphoto.com/photos/colored-powder-explosion-on-black-background-picture-id1140180560?k=20&m=1140180560&s=612x612&w=0&h=X_400OQDFQGqccORnKt2PHYvTZ3dBLeEnCH_hRiUQrY=",
  },
  {
    name: "KGF 2",
    img: "https://media.istockphoto.com/photos/colored-powder-explosion-on-black-background-picture-id1140180560?k=20&m=1140180560&s=612x612&w=0&h=X_400OQDFQGqccORnKt2PHYvTZ3dBLeEnCH_hRiUQrY=",
  },
  {
    name: "KGF 2",
    img: "https://media.istockphoto.com/photos/colored-powder-explosion-on-black-background-picture-id1140180560?k=20&m=1140180560&s=612x612&w=0&h=X_400OQDFQGqccORnKt2PHYvTZ3dBLeEnCH_hRiUQrY=",
  },
  {
    name: "KGF 2",
    img: "https://media.istockphoto.com/photos/colored-powder-explosion-on-black-background-picture-id1140180560?k=20&m=1140180560&s=612x612&w=0&h=X_400OQDFQGqccORnKt2PHYvTZ3dBLeEnCH_hRiUQrY=",
  },
  {
    name: "KGF 2",
    img: "https://media.istockphoto.com/photos/colored-powder-explosion-on-black-background-picture-id1140180560?k=20&m=1140180560&s=612x612&w=0&h=X_400OQDFQGqccORnKt2PHYvTZ3dBLeEnCH_hRiUQrY=",
  },
];

function ImageModal({modal, togglModal }) {
  return (
    <CustomModal   modal={modal} toggle={togglModal}>
      <div className="p-2">
      <div className="d-flex justify-content-between">
        <h5 className="fw-bold">List of  Learners</h5>{" "}
        <GrFormClose onClick={togglModal} className="cursor" size={30} />
      </div>
      <hr />
      <div>
        {commentData.map((i) => (
         <div className="p-3">
              <div className="d-flex align-items-center">
            <div className="bg-white rounded-circle">
              <img
                className="rounded-circle"
                src={i?.img}
                alt="user"
                style={{
                  width: "30px",
                  height: "30px",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="mx-3">
              <span className="text-secondary fw-bold">{i?.name}</span>
            </div>
          </div>
         </div>
        ))}
      
      </div>
      </div>
    </CustomModal>
  );
}

export default ImageModal;
