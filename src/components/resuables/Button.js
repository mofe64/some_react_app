import React from 'react';



export const Button = ({ color }) => {
    const buttonStyle = {
    cursor: 'pointer',
    backgroundColor: color,
    color: '#fff',
    border: 0,
    display: 'block',
    fontSize: '16px',
    padding: '15px',
    width: '100%'
}
    return (
        <button style={{...buttonStyle,background: color }}>
            SIGN IN
        </button>
    )
}
Button.defaultProps = {
    color :'black'
}