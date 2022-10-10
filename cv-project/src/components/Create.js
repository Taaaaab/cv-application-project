import { useState } from "react";
import "../App.css";

const Create = () => {
    const [fullName, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const inputObj = { fullName, email, phone}
        console.log(inputObj);
    }

    return (
        <div className="create">
            <h3>Add Personal & Contact Information</h3>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                placeholder="Name"
                required
                value={fullName}
                onChange={(e) => setName(e.target.value)}
                />
                <input 
                type="text"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                type="text"
                placeholder="Phone Number"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                />
                <button className="btn" type="submit">Submit</button>
                <p>{ fullName }</p>
                <p>{ email }</p>
                <p>{ phone }</p>
            </form>
        </div>
    )
}

export default Create;