import React, { Component } from "react";
import './ListOfPlans.css';
import { tripArray } from './AddPlan.js'

class ListOfPlans extends Component {

    render() {
        return (
            <div>
                <center>
                    <div className="container">
                        <div className="tableWrap">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h3 className="tableHeading">
                                        All Trips
                                    </h3>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 board">
                                    <table className="tripTable">
                                        <thead>
                                            <tr >
                                                <th>Date</th>
                                                <th>Place</th>
                                                <th>Type</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {tripArray.map((trip) => (
                                                <tr>
                                                    <td >
                                                        {trip.Date}
                                                    </td>
                                                    <td>
                                                        {trip.Place}
                                                    </td>
                                                    <td>
                                                        {trip.Type}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </center>

            </div>
        )
    }
}
export default ListOfPlans;