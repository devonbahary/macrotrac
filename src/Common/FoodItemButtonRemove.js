import React from 'react';

function FoodItemButtonRemove(props) {
    function handleClick(e) {
        props.confirmRemove(e);
    }

    const style = {
      border: 'none',
      width: '80%',
      height: '60%',
      borderRadius: '12px',
      fontSize: '1rem',
      boxShadow: '1px 1px gray',
      transition: 'background 0.5s'
    };

    const className = props.isConfirmRemove ? "theme-heading centered" : "bg-light centered";

    return (
      <button type="button" className={className} style={style} onClick={handleClick}>
          {props.isConfirmRemove ? "Confirm" : "Remove"}
      </button>
    );

}

export default FoodItemButtonRemove;
