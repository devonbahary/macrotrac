import React, { Component } from 'react';

class ButtonRemove extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);

        this.state = {isConfirming: false};
    }

    handleClick(e) {
        e.stopPropagation();
        this.setState({isConfirming: !this.state.isConfirming});
    }

    render() {
        const style = {
          border: 'none',
          width: '80%',
          height: '60%',
          borderRadius: '12px',
          fontSize: '1rem',
          boxShadow: '1px 1px gray',
          transition: 'background 0.5s'
        };

        const className = this.state.isConfirming ? "theme-heading centered" : "bg-light centered";

        return (
          <button type="button" className={className} style={style} onClick={this.handleClick}>
              {this.state.isConfirming ? "Confirm" : "Remove"}
          </button>
        );
    }
}

export default ButtonRemove;
