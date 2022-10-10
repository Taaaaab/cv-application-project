import { useState } from "react";
import "../App.css";

const Experience = () => {
    const [posTitle, setPosTitle] = useState('');
    const [companyName, setName] = useState('');
    const [city, setCity] = useState('');
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const inputObj = { posTitle, companyName, city, from, to}
        console.log(inputObj);
    }

    return (
        <div className="create">
            <h3>Add Work Experience</h3>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                placeholder="Position Title"
                required
                value={posTitle}
                onChange={(e) => setPosTitle(e.target.value)}
                />
                <input 
                type="text"
                placeholder="Company"
                required
                value={companyName}
                onChange={(e) => setName(e.target.value)}
                />
                <input 
                type="text"
                placeholder="City"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
                />
                <input 
                type="text"
                placeholder="From"
                required
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                />
                <input 
                type="text"
                placeholder="To"
                required
                value={to}
                onChange={(e) => setTo(e.target.value)}
                />
                <button className="btn" type="submit">Submit</button>
                <p>{ posTitle }</p>
                <p>{ companyName }</p>
                <p>{ city }</p>
                <p>{ from }</p>
                <p>{ to }</p>
            </form>
        </div>
    )
}

export default Experience;