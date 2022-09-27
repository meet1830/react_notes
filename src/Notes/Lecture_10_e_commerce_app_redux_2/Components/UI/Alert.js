import React from 'react'

const styles = {
  backgroundColor: '#0c4c37',
  color: '#fff',
  padding: '0.6rem',
  textTransform: 'capitalize',
  textAlign: 'center',
}

function Alert(props) {
  return (
    <div style={styles}>
        {props.alert}
    </div>
  )
}

export default Alert