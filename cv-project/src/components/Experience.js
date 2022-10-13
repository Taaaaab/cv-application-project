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
         tasks: "",
         from: "",
         to: "",
         xpArray: [],
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
            `${this.state.posTitle}`,
            `${this.state.companyName}`,
            `${this.state.city}`,
            `${this.state.tasks}`,
            `From: ${this.state.from}`,
            `To: ${this.state.to}`,
            ];
        console.log(myArray);
        
        this.setState({
            xpArray: this.state.xpArray.concat(myArray),
            posTitle: "",
            companyName: "",
            city: "",
            tasks: "",
            from: "",
            to: "",
        });
    };
 
  handleEdit = (e) => {
        
     this.setState({
          xpArray: [],
          posTitle: "",
          companyName: "",
          city: "",
          tasks: "",
          from: "",
          to: "",
     });
    }
    
    render() {
     const { posTitle, companyName, city, tasks, from, to, xpArray } = this.state;
        
     return (
         <div>
            <div className="returnDisplay">
            <h3>Work Experience</h3>
              <Object infoArray={xpArray} />
            </div>
            <h3>Add Work Experience</h3>
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
                <textarea
                onChange={this.handleInputChange}
                name="tasks"
                value={tasks}
                placeholder="Describe tasks and responsibilities"
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
                <button className="btn" onClick={this.handleEdit}>Edit</button>
            </form>
        </div>
        );
    }
    
}
   
export default Experience;
