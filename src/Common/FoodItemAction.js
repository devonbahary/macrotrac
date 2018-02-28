import React, { Component } from 'react';
import Button from './Button';
import './FoodItemAction.css';

class FoodItemAction extends Component {
  /*  [props]
      foodItem
      action = function executed when confirmed and clicked again
      requireConfirm = Boolean
      actionIcon = className for icon to perform action
      confirmIcon = className for icon to reach confirmation for action
      actionName = action name for button

  */
    constructor(props) {
        super(props);

        this.handleConfirm = this.handleConfirm.bind(this);

        this.state = {isConfirming: !props.requireConfirm};
    }

    handleConfirm() {
        if (!this.state.isConfirming) {
            this.setState({
                isConfirming: true
            });
        } else {
            this.props.action(this.props.food);
        }
    }

    render() {
        const actionIcon = <div className={this.state.isConfirming ? "FoodItemAction-icon--confirm" : "FoodItemAction-icon"}>
            <span className={this.state.isConfirming ? this.props.actionIcon + " centered txt-theme" : this.props.confirmIcon + " centered"}></span>
        </div>;

        return (
            <div className="FoodItemAction">
                {actionIcon}
                <div className="FoodItemAction-buttonContainer">
                    <Button isActive={this.state.isConfirming} onClick={this.handleConfirm} value={this.state.isConfirming && this.props.requireConfirm ? "Confirm" : this.props.actionName} />
                </div>
            </div>
        );
    }
}

export default FoodItemAction;
