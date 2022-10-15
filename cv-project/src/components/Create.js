import React, { useState } from "react";
import Object from "./Object";
import "../App.css";

const Create = () => {
  let [fullName, setFullName] = useState(""); 
  let [email, setEmail] = useState(""); 
  let [phone, setPhone] = useState("");
  let [infoArray, setInfoArray] = useState([]);
  
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
      (email = "");
      (phone = "");
  };
  
  return (
     <div>
      <h3>Add Contact Info</h3>
         <form onSubmit={handleSubmit}>
            <input
            onChange={handleFullName}
            name="fullName"
            type="text"
            value={fullName}
            placeholder="Name"
            />
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