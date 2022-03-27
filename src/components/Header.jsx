import React from 'react'

function Header({ text, bgColor, color }) {
    const headerStyle = {
        backgroundColor: bgColor,
        color: color
    }
  return (
    <header style={headerStyle}>
        <div className='container'>
            <h1> {text} </h1>
        </div>
    </header>
  )
}

Header.defaultProps = {
    text: 'Feedback UI',
    bgColor: 'rgba(0,0,0,0.4)',
    color: '#ff6a95'
};

export default Header;