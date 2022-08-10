import React from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai';
const ArrowComp = ({ value }) => {
    return (
        <div className='row p-2' style={{ marginBottom: "100px" }}>
            <h3>{value.icon ? <value.icon /> : null} {value.heading}</h3>
            <div className="row mt-3">
                <div className="col-sm-12 col-md-8 ">
                    {value.points.map((el, index) => (
                        <div style={{ margin: "10px 0px" }}>
                            <AiOutlineArrowLeft style={{ color: "red", marginRight: "10px" }} />
                            {el}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ArrowComp