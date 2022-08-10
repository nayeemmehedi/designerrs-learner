import React from 'react'

const Normal = ({ value }) => {
    return (
        <div className='row p-2' style={{ marginBottom: "100px" }}>
            <h3>{value.icon ? <value.icon /> : null} {value.heading}</h3>
            <p className="col-sm-12 col-md-8 mt-3" dangerouslySetInnerHTML={{ __html: value.text }}></p>
        </div>
    )
}

export default Normal