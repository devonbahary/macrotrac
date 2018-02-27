import React, { Component } from 'react';
import Modal from '../Common/Modal';
import MacronutrientGraph from '../Common/MacronutrientGraph';
import Button from '../Common/Button';
import './AddFood.css';

class AddFood extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleExit = this.handleExit.bind(this);

        this.servingUnits = [
          'gram (g)',
          'ounce (oz)',
          'pound (lb)',
          'teaspoon (tsp)',
          'tablespoon (Tbsp)',
          'cup (c)',
          'pint (p)',
          'quart (q)',
          'gallon (gal)',
        ];

        this.state = {
            name: '',
            servingSize: '1',
            servingUnit: this.servingUnits[0],
            carbs: '',
            prot: '',
            fat: ''
        };
    }

    handleChange(e) {
        const eventName = e.target.name;
        const eventVal = e.target.value;

        switch(eventName) {
            case 'name':
            case 'servingUnit':
                this.setState({[eventName]: eventVal});
                break;
            case 'servingSize':
                if (Number(eventVal) > 0 && Number(eventVal) < 100) {
                    this.setState({[eventName]: eventVal});
                }
                break;
            case 'carbs':
            case 'prot':
            case 'fat':
                if (Number(eventVal) >= 0 && Number(eventVal) < 1000) {
                    this.setState({[eventName]: eventVal});
                }
                break;
            default:
                break;
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.addFood(this.state);
        this.handleExit();
    }

    handleExit() {
        this.setState({
            name: '',
            servingSize: '1',
            servingUnit: this.servingUnits[0],
            carbs: '',
            prot: '',
            fat: ''
        });
        this.props.onExit();
    }

    render() {
        const servingUnits = (this.state.name.length > 0 ? this.servingUnits.concat(this.state.name) : this.servingUnits);
        const servingUnitElements = servingUnits.map((servingUnit, index) =>
            <option key={index} value={servingUnit}>{servingUnit}</option>
        );

        return (
            <form className="AddFood" onSubmit={this.handleSubmit}>
                <Modal heading="Add Food" isOpen={this.props.isOpen} onExit={this.handleExit}>
                    <div className="AddFood-entry">
                        <input name="name" type="text" placeholder="name" value={this.state.name} onChange={this.handleChange} required />
                    </div>
                    <div className="AddFood-entryWithLabel">
                        <div className="AddFood-entryLabel">
                            Serving Size
                        </div>
                        <input name="servingSize" type="number" value={this.state.servingSize} onChange={this.handleChange} required />
                    </div>
                    <div className="AddFood-entryWithLabel">
                        <div className="AddFood-entryLabel">
                            Serving Unit
                        </div>
                        <select name="servingUnit" value={this.state.servingUnit} onChange={this.handleChange} required >
                            {servingUnitElements}
                        </select>
                    </div>
                    <div className="AddFood-entryWithLabel">
                        <div className="AddFood-entryLabel">
                            Carbs
                        </div>
                        <input name="carbs" type="number" value={this.state.carbs} onChange={this.handleChange} required />
                    </div>
                    <div className="AddFood-entryWithLabel">
                        <div className="AddFood-entryLabel">
                            Prot
                        </div>
                        <input name="prot" type="number" value={this.state.prot} onChange={this.handleChange} required />
                    </div>
                    <div className="AddFood-entryWithLabel">
                        <div className="AddFood-entryLabel">
                            Fat
                        </div>
                        <input name="fat" type="number" value={this.state.fat} onChange={this.handleChange} required />
                    </div>
                    <div className="AddFood-graph">
                        <MacronutrientGraph food={this.state} />
                    </div>
                    <div className="AddFood-entrySubmit">
                        <Button isSubmit={true} isActive={true} value={"Add Food"} onClick={null} />
                    </div>
                </Modal>
            </form>
        );
    }
}

export default AddFood;
