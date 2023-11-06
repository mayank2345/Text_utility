import React from 'react'

function Alert(props) {
    
    const capitalize = (givenText) => { 
        let result = givenText.charAt(0).toUpperCase() + givenText.slice(1);
        return result
    }

  return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show float-end`} 
        style={{
            position: 'absolute',
            zIndex: 3,
            textAlign: 'center',
            right: 0
        }} 
        role="alert">
            <strong>{capitalize(props.alert.type)}</strong>: {props.alert.message}
           
        </div>

  )
}

export default Alert

// if props.alert not null then remaining thing will evaluate else it won't