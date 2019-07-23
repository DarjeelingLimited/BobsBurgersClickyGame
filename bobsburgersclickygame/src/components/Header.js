import React from 'react';
// import './style.css'; if i decide to create a separate file

const style = {
    // color: {
    //   backgroundColor: `rgb(152, 251, 152)`
    // }
  };

    function Header (props) {
        return (
            <div style={style.color} className="container">
                <h1>Let's play!</h1>
                <p>Click on an image to earn points, but don't click on any more than once!</p>
            </div>
        );
    }
    export default Header;