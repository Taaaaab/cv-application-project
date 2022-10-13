import React, { Component } from "react";
import Object from "./Object";
import "../App.css";

class Education extends Component {
 constructor(props) {
     super(props);
     this.state = {
         uniName: "",
         city: "",
         degree: "",
         subject: "",
         from: "",
         to: "",
         eduArray: [],
     };
     
     this.handleInputChange = this.handleInputChange.bind(this);
     this.handleEdit = this.handleEdit.bind(this);
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
            `${this.state.uniName}`,
            `${this.state.city}`,
            `${this.state.degree}`,
            `${this.state.subject}`,
            `From: ${this.state.from}`,
            `To: ${this.state.to}`,
            ];
        console.log(myArray);
        
        this.setState({
            eduArray: this.state.eduArray.concat(myArray),
            uniName: "",
            city: "",
            degree: "",
            from: "",
            to: "",
        });
    };

    handleEdit = (e) => {
        
        this.setState({
            uniName: "",
            city: "",
            degree: "",
            subject: "",
            from: "",
            to: "",
            eduArray: [],
        });
       }
     
    
    render() {
     const { uniName, city, degree, subject, from, to, eduArray } = this.state;
        
     return (
         <div>
            <div className="returnDisplay">
              <h3 className="title">Education</h3>
              <Object infoArray={eduArray} />
            </div>
            <h3>Add Education Experience</h3>
            <form onSubmit={this.handleSubmit}>
                <input 
                onChange={this.handleInputChange}
                name="uniName"
                type="text"
                value={uniName}
                placeholder="University Name"
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
                name="degree"
                type="text"
                value={degree}
                placeholder="Degree"
                />
                <input 
                onChange={this.handleInputChange}
                name="subject"
                type="text"
                value={subject}
                placeholder="Subject"
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
                <button className="btn" onClick={this.handleEdit}>Edit</button>
            </form>
        </div>
        );
    }
    
}
   
export default Education;
