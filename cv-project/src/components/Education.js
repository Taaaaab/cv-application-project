import React, { useState } from "react";
import Object from "./Object";
import "../App.css";

const Education = () => {
    let [uniName, setUniName] = useState("");
    let [city, setCity] = useState("");
    let [degree, setDegree] = useState("");
    let [subject, setSubject] = useState("");
    let [from, setFrom] = useState("");
    let [to, setTo] = useState("");
    let [eduArray, setEduArray] = useState([]);

    const handleUniName = (e) => {
        setUniName(uniName = e.target.value);
    };

    const handleCity = (e) => {
        setCity(city = e.target.value);
    };

    const handleDegree = (e) => {
        setDegree(degree = e.target.value);
    };

    const handleSubject = (e) => {
        setSubject(subject = e.target.value);
    };

    const handleFrom = (e) => {
        setFrom(from = e.target.value);
    };

    const handleTo = (e) => {
        setTo(to = e.target.value);
    };

    const handleEdit = (e) => {
        setUniName(uniName = "");
        setCity(city = "");
        setDegree(degree = "");
        setSubject(subject = "");
        setFrom(from = "");
        setTo(to = "");
        setEduArray(eduArray = []);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const myArray = [
            `${uniName}`,
            `${city}`,
            `${degree}`,
            `${subject}`,
            `From: ${from}`,
            `To: ${to}`,
        ];
        console.log(myArray);

        setEduArray(eduArray = myArray);
        setUniName(uniName = "");
        setCity(city = "");
        setDegree(degree = "");
        setSubject(subject = "");
        setFrom(from = "");
        setTo(to = "");
    };

    return (
<div>
            <div className="returnDisplay">
              <h3 className="title">Education</h3>
              <Object infoArray={eduArray} />
            </div>
            <h3>Add Education Experience</h3>
            <form onSubmit={handleSubmit}>
                <input 
                onChange={handleUniName}
                name="uniName"
                type="text"
                value={uniName}
                placeholder="University Name"
                />
                <input 
                onChange={handleCity}
                name="city"
                type="text"
                value={city}
                placeholder="City"
                />
                <input 
                onChange={handleDegree}
                name="degree"
                type="text"
                value={degree}
                placeholder="Degree"
                />
                <input 
                onChange={handleSubject}
                name="subject"
                type="text"
                value={subject}
                placeholder="Subject"
                />
                <input 
                onChange={handleFrom}
                name="from"
                type="text"
                value={from}
                placeholder="From"
                />
                <input 
                onChange={handleTo}
                name="to"
                type="text"
                value={to}
                placeholder="To"
                />
                <button className="btn" type="submit">Submit</button>
                <button className="btn" onClick={handleEdit}>Edit</button>
            </form>
        </div>
    )
}
        
export default Education;
