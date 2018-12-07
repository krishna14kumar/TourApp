import React, { Component } from "react";
import './Home.css'
import { tripArray } from './AddPlan.js'
var count = 0

class Home extends Component {
    renderSecondRowBlock(value, icon) {
        return (
            <div>
                <div className="col-lg-4 second-row-wrap">
                    <div className="secondRowCount">
                        {value}
                        <i className={icon}></i>
                    </div>
                </div>
            </div>
        )
    }
    render() {
        var tropic_count = 0
        var trek_count = 0
        var club_count = 0
        console.log("trip---->", tripArray)
        console.log("trip---->", tripArray.length)
        count = tripArray.length
        tripArray.forEach(trip => {
            var key = trip.Type;
            console.log("key", key)
            if (key === "Trek") {
                console.log("check", trip)
                trek_count += 1
            }
            else if (key === "Tropic") {
                console.log("check", trip)
                tropic_count += 1
            }
            else {
                console.log("check", trip)
                club_count += 1
            }
        });

        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 firstRowWrap">
                        {count}
                        <span>trips</span>
                    </div>
                </div>

                <div className="row">
                    <div className="row2-wrap">
                        {this.renderSecondRowBlock(tropic_count, "fa fa-sun-o secondRowIcon")}
                        {this.renderSecondRowBlock(trek_count, "fa fa-cloud secondRowIcon")}
                        {this.renderSecondRowBlock(club_count, "fa fa-glass secondRowIcon")}
                    </div>
                </div>
            </div>

        );
    }
}
export default Home;