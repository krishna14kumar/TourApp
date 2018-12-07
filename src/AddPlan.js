import React, { Component } from "react";
import './AddPlans.css';

var tripData = {}
export const tripArray = []
class AddPlan extends Component {
    constructor() {
        super()
        this.state = {
            placeOfVisit: '',
            dateOfVisit: '',
            selectValue: ''
        }

    }

    handleSubmit(e) {
        e.preventDefault();
        console.log("placeOfVisit", this.state.placeOfVisit)
        console.log("dateOfVisit", this.state.dateOfVisit)
        console.log("Type", this.state.selectValue)
        tripData = {
            "Date" : this.state.dateOfVisit,
            "Place" : this.state.placeOfVisit,
            "Type" : this.state.selectValue
        }
        tripArray.push(tripData);
        console.log("obj : ", tripData)
        console.log("array", tripArray)
    }
    handlePlace(e) {
        this.setState({
            placeOfVisit: e.target.value
        })
    }
    handleDate(e) {
        this.setState({
            dateOfVisit: e.target.value
        })
    }
    handleType(e) {
        this.setState({
            selectValue: e.target.value
        })
    }

    render() {
        return (
            <div className="form">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <h3>
                        Add a Trip
                            </h3><br /><br />
                    <label>
                        Date :
                        </label><br />
                    <input className="date" type="date" value={this.state.dateOfVisit} onChange={this.handleDate.bind(this)} required></input><br /><br />
                    <label>
                        Place :
                        </label><br />
                    <input type="text" value={this.state.placeOfVisit} onChange={this.handlePlace.bind(this)} required></input><br /><br />
                    <label>
                        Type :
                        </label>
                    <select value={this.state.selectValue} onChange={this.handleType.bind(this)} required>
                        <option > </option>
                        <option value="Trek">Trek</option>
                        <option value="Tropic">Tropic</option>
                        <option value="Club">Club</option>
                    </select><br /><br />
                    <button type="submit">SUBMIT</button>
                </form>

            </div>

        )
    }
}
export default AddPlan;