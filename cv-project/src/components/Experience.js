import React, { Component } from "react";
import Object from "./Object";
import "../App.css";

class Experience extends Component {
 constructor(props) {
     super(props);
     this.state = {
         posTitle: "",
         companyName: "",
         city: "",
         from: "",
         to: "",
         xpArray: [],
     };
     
     this.handleInputChange = this.handleInputChange.bind(this);
 }
    
    handleInputChange(e) {
     const target = e.target;
     const value = target.value;
     const name = target.name;
        
     this.setState({
        [name]: value, 
     });
    }
    
    handleSubmit = (e) => {
     e.preventDefault();
        const myArray = [
            `${this.state.posTitle}`,
            `${this.state.companyName}`,
            `${this.state.city}`,
            `${this.state.from}`,
            `${this.state.to}`,
            ];
        console.log(myArray);
        
        this.setState({
            xpArray: this.state.xpArray.concat(myArray),
            posTitle: "",
            companyName: "",
            city: "",
            from: "",
            to: "",
        });
    };
    
    render() {
     const { posTitle, companyName, city, from, to, xpArray } = this.state;
        
     return (
         <div>
            <div className="returnDisplay">
              <Object infoArray={xpArray} />
            </div>
            <h3>Add Education Experience</h3>
            <form onSubmit={this.handleSubmit}>
                <input 
                onChange={this.handleInputChange}
                name="posTitle"
                type="text"
                value={posTitle}
                placeholder="Position Title"
                />
                <input 
                onChange={this.handleInputChange}
                name="companyName"
                type="text"
                value={companyName}
                placeholder="Company Name"
                />
                <input 
                onChange={this.handleInputChange}
                name="city"
                type="text"
                value={city}
                placeholder="City"
                />
                <input 
                onChange={this.handleInputChange}
                name="from"
                type="text"
                value={from}
                placeholder="From"
                />
                <input 
                onChange={this.handleInputChange}
                name="to"
                type="text"
                value={to}
                placeholder="To"
                />
                <button className="btn" type="submit">Submit</button>
            </form>
        </div>
        );
    }
    
}
   
export default Experience;
