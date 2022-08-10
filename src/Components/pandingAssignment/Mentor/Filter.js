import React, { useEffect, useState } from "react";
import { Input, Label } from "reactstrap";
import { GrFormClose } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import check from "../../../Assets/Images/icons/check.svg";
import checkBord from "../../../Assets/Images/icons/checkBord.svg";
import info from "../../../Assets/Images/icons/info.svg";
import reload from "../../../Assets/Images/icons/reload.svg";
import warning from "../../../Assets/Images/icons/warning.svg";	



const demoData = [
    {
        text  : "Overdue",
        icon : warning,
        // number : "01"
    },

    {
        text  : "Reiterate",
        icon : reload,
        // number : "02"
    },
    {
        text  : "Not Submitted",
        icon : info,
        // number : "04"
    },
    {
        text  : "Submitted",
        icon : checkBord,
        // number : "02"
    },
    {
        text  : "Approved",
        icon : check,
        // number : "02"
    }
]

const FilterPromotion = ({ toggleFilter }) => {

const [checkValue,setCheckValue] = useState([])

 
  const initialValues = {
    navigation: "",
    type: "",
    status: "",
  };

  const [application, setApplication] = useState([]);



  const [filter, setFilter] = useState(initialValues);

  const dispatch = useDispatch();

  const onSubmit = () => {
   console.log("out")
    
  };

  const handleChangle = (e) => {
   const {checked} = e.target
   if(checked && !checkValue.includes(e.target.value)){
    setCheckValue([...checkValue,e.target.value])
   }else if(!checked && checkValue.includes(e.target.value)){

    setCheckValue(checkValue.filter(item => item !== e.target.value))
   }
 
  };

  console.log("data", checkValue);

  const clearFilter = () => {
    setFilter(initialValues);
   
  };


  console.log("check" , initialValues);

  return (
    <div
      className="p-4 shadow-md pandingFilterSection"
      style={{
        height: "100%",
        width: "20%",
        position: "fixed",
        top: 0,
        right: 0,
        overflowY: "auto",
        zIndex: "999",
        backgroundColor : "white",
        boxShadow : "5px 7px 10px black"
      }}
      
    >
      <div className="filterTop">
        <h5 className="fw-bold">Filter</h5>
        <GrFormClose onClick={toggleFilter} className="cursor" size={30} />
      </div>

     
      

      <hr></hr>
      <small className="text-secondary my-4" style={{color : "#616161"}}>{checkValue.length} Selected </small>

      <div className="mb-5">
       {demoData.map((item,index) => {
           return ( <div className="mt-2">
      <div className="filterBody">
      
           <Input
             type="checkbox"
             value={item.text}
             name="status"
             onChange={(e) => handleChangle(e)}
           />
         
         <img className="mx-2 mt-1 m" style={{width : "15px", height : "17px"}} src={item.icon} alt={item.text}/>
           <p className="ms-1" style={{fontSize : "16px"}}>{item.text}</p>
           
         
           </div>
          
         </div>)
       })}
           
         
      </div>

      <button className="btn btn-main2 right form-control mt-5" onClick={onSubmit}>
        Apply Filter
      </button>
      <br></br>
      
    </div>
  );
};

export default FilterPromotion;
