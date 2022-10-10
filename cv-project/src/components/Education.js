import { useState } from "react";
import "../App.css";

const Education = () => {
    const [uniName, setUniName] = useState('');
    const [city, setCity] = useState('');
    const [degree, setDegree] = useState('');
    const [subject, setSubject] = useState('');
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const inputObj = { uniName, city, degree, subject, from, to}
        console.log(inputObj);
    }

    return (
        <div className="create">
            <h3>Add Education Experience</h3>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                placeholder="University Name"
                required
                value={uniName}
                onChange={(e) => setUniName(e.target.value)}
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
                placeholder="Degree"
                required
                value={degree}
                onChange={(e) => setDegree(e.target.value)}
                />
                <input 
                type="text"
                placeholder="Subject"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
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
            </form>
        </div>
    )
}

export default Education;