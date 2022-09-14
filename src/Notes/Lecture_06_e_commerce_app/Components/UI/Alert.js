import React from 'react'
// importing this in header

import './Alert.css'

function Alert(props) {
  return (
    <div className='alert'>
        {props.alert}
    </div>
  )
}

export default Alert