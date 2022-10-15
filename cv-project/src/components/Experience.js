import React, { useState } from "react";
import Object from "./Object";
import "../App.css";

const Experience = () => {
    let [posTitle, setPosTitle] = useState("");
    let [companyName, setCompanyName] = useState("");
    let [city, setCity] = useState("");
    let [tasks, setTasks] = useState("");
    let [from, setFrom] = useState("");
    let [to, setTo] = useState("");
    let [xpArray, setXpArray] = useState([]);

    const handlePosTitle = (e) => {
        setPosTitle(posTitle = e.target.value);
    };

    const handleCompanyName = (e) => {
        setCompanyName(companyName = e.target.value);
    };

    const handleCity = (e) => {
        setCity(city = e.target.value);
    };

    const handleTasks = (e) => {
        setTasks(tasks = e.target.value);
    };

    const handleFrom = (e) => {
        setFrom(from = e.target.value);
    };

    const handleTo = (e) => {
        setTo(to = e.target.value);
    };

    const handleEdit = (e) => {
        setPosTitle(posTitle = "");
        setCompanyName(companyName = "");
        setCity(city = "");
        setTasks(tasks = "");
        setFrom(from = "");
        setTo(to = "");
        setXpArray(xpArray = []);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const myArray = [
            `${posTitle}`,
            `${companyName}`,
            `${city}`,
            `${tasks}`,
            `From: ${from}`,
            `To: ${to}`,
        ];
        console.log(myArray);

        setXpArray(xpArray = myArray);
        setPosTitle(posTitle = "");
        setCompanyName(companyName = "");
        setCity(city = "");
        setTasks(tasks = "");
        setFrom(from = "");
        setTo(to = "");
    };

    return (
        <div>
<div className="returnDisplay">
            <h3>Work Experience</h3>
              <Object infoArray={xpArray} />
            </div>
            <h3>Add Work Experience</h3>
            <form onSubmit={handleSubmit}>
                <input 
                onChange={handlePosTitle}
                name="posTitle"
                type="text"
                value={posTitle}
                placeholder="Position Title"
                />
                <input 
                onChange={handleCompanyName}
                name="companyName"
                type="text"
                value={companyName}
                placeholder="Company Name"
                />
                <textarea
                onChange={handleTasks}
                name="tasks"
                value={tasks}
                placeholder="Describe tasks and responsibilities"
                />
                <input 
                onChange={handleCity}
                name="city"
                type="text"
                value={city}
                placeholder="City"
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
   
export default Experience;
