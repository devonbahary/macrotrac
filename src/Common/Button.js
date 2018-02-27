import React from 'react';

function Button(props) {

    const style = {
      border: 'none',
      width: '80%',
      height: '60%',
      borderRadius: '12px',
      fontSize: '1rem',
      boxShadow: '1px 1px gray',
      transition: 'background 0.5s',
      outline: 'none'
    };

    const className = props.isActive ? "theme-heading centered" : "bg-light centered";

    return (
        <button type={props.isSubmit ? "submit" : "button"} className={className} style={style} onClick={props.onClick}>
            {props.value}
        </button>
    );

}

export default Button;
