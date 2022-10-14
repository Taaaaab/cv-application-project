import React, { Component, useState, useEffect } from "react";
import Object from "./Object";
import "../App.css";

const Create = () => {
  const [fullName, setFullName] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [phone, setPhone] = useState("");
  const [infoArray, setInfoArray] = useState([]);
  
  const handleFullName = (e) => {
    setFullName(fullName = e.target.value);
  };
  
  const handleEmail = (e) => {
    setEmail(email = e.target.value);
  };
  
  const handlePhone = (e) => {
    setPhone(phone = e.target.value);
  };
  
  const handleEdit = (e) => {
    setFullName(fullName = "");
    setEmail(email = "");
    setPhone(phone = "");
    setInfoArray(infoArray = []);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const myArray = [
      `${fullName}`,
      `${email}`,
      `${phone}`,
    ];
    console.log(myArray);
    
      setInfoArray(infoArray = [myArray]);
      setFullName(fullName = "");
      setEmail:(email = "");
      setPhone:(phone = "");
  };
  
  return (
     <div>
      <div>{fullName}</div>
      <div>{email}</div>
      <div>{phone}</div>
      <h3>Add Contact Info</h3>
         <form onSubmit={handleSubmit}>
            <input
            onChange={handleFullName}
            name="fullName"
            type="text"
            value={fullName}
            placeholder="Name"
            />
//            <button onClick={handleFullName}>Submit Name</button>
            <input
            onChange={handleEmail}
            name="email"
            type="text"
            value={email}
            placeholder="Email"
            />
            <input
            onChange={handlePhone}
            name="phone"
            type="text"
            value={phone}
            placeholder="Phone"
            />
            <button type="submit" className="btn">Submit</button>
            <button onClick={handleEdit} className="btn">Edit</button>
          </form>
          <div className="returnDisplay">
            <h3 class="title">Contact Information</h3>
            <div className="returnArray">
              <Object infoArray={infoArray} />
            </div>
          </div>
     </div>
    );
};

export default Create;

// class Create extends Component {
//  constructor(props) {
//    super(props);
//    this.state = {
//      fullName: "",
//      email: "",
//      phone: "",
//      infoArray: [],
//    };

//    this.handleInputChange = this.handleInputChange.bind(this);
//    this.handleEdit = this.handleEdit.bind(this);
//  }

//  handleInputChange(e) {
//    const target = e.target;
//    const value = target.value;
//    const name = target.name;

//    this.setState({
//      [name]: value,
//    });
//  }
//  handleSubmit = (e) => {
//    e.preventDefault();
//    const myArray = [
//      `${this.state.fullName}`,
//      `${this.state.email}`,
//      `${this.state.phone}`,
//    ];
//    console.log(myArray);

//    this.setState({
//      infoArray: this.state.infoArray.concat(myArray),
//      fullName: "",
//      email: "",
//      phone: "",

//    });
//  };
  
//    handleEdit = (e) => {
   
//    this.setState({
//      infoArray: [],
//      fullName: "",
//      email: "",
//      phone: "",

//    });
//  };

//  render() {
//    const { fullName, email, phone, infoArray } = this.state;

//    return (
//      <div>
//        <h3>Add Contact Info</h3>
//        <form onSubmit={this.handleSubmit}>
//          <input
//            onChange={this.handleInputChange}
//            name="fullName"
//            type="text"
//            value={fullName}
//            placeholder="Name"
//          />
//          <input
//            onChange={this.handleInputChange}
//            name="email"
//            type="text"
//            value={email}
//            placeholder="Email"
//          />
//          <input
//            onChange={this.handleInputChange}
//            name="phone"
//            type="text"
//            value={phone}
//            placeholder="Phone"
//          />
//          <button type="submit" className="btn">Submit</button>
//          <button onClick={this.handleEdit} className="btn">Edit</button>
//        </form>
//        <div className="returnDisplay">
//          <h3 class="title">Contact Information</h3>
//          <div className="returnArray">
//          <Object infoArray={infoArray} />
//          </div>
//        </div>
//      </div>
//    );
//  }
// }

// export default Create;
