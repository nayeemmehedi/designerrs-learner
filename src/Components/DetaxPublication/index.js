import React from 'react'
import LeftDetaxPb from './LeftDetaxPb'
import MiddleDetaxPb from './MiddleDetaxPb'

function Main() {
  return (
    <div className='d-block d-md-flex d-lg-flex d-xl-flex'>
      <div className='col-sm-12 col-md-2 col-lg-2'>
        <LeftDetaxPb></LeftDetaxPb>
      </div>
      <div className='col-sm-12 col-md-8 col-lg-8'>

        <MiddleDetaxPb></MiddleDetaxPb>

      </div>


    </div>

  )
}

export default Main

