import React, { Component } from "react";
import Object from "./Object";
import uniqid from "uniqid";
import "../App.css";

class Create extends Component {
    constructor() {
      super();
  
      this.state = {
        fullName: '', 
        email: '', 
        phone: '',
        id: uniqid(),
        infoArray: [],
      };
    }
   
    handleNameChange = (e) => {
      this.setState({
        fullName: e.target.value
      });
    };

    handleEmailChange = (e) => {
        this.setState({
          email: e.target.value
        });
      };

      handlePhoneChange = (e) => {
        this.setState({
          phone: e.target.value
        });
      };
  
  
    handleSubmit = (e) => {
        e.preventDefault();
        const infoArray = [`${this.state.fullName}`, `${this.state.email}`, `${this.state.phone}`]
        console.log(infoArray);
        return this.state.infoArray.concat(infoArray);
    };

    render() {
        const { fullName, email, phone, infoArray } = this.state;

        return (
          <div>
            <form onSubmit={this.handleSubmit}>
              <input 
              type="text"
              value={fullName}
              onChange={this.handleNameChange}
              placeholder="Name"
              name="fullName" />
               <input 
              type="text"
              value={email}
              onChange={this.handleEmailChange}
              placeholder="Email"
              name="email" />
               <input 
              type="text"
              value={phone}
              onChange={this.handlePhoneChange}
              placeholder="Phone"
              name="phone" />
              <button type="submit">Submit</button>
            </form>
            <Object infoArray={infoArray} />
          </div>
        );
    }
}

// const Create = () => {
//     const [fullName, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [phone, setPhone] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const inputObj = { fullName, email, phone}
//         console.log(inputObj);
//         return inputObj;
//     }

//     const handleClick = () => {
//         fetch('')
//     }

//     return (
//         <div className="create">
//             <h3>Add Personal & Contact Information</h3>
//             <form onSubmit={handleSubmit}>
//                 <input 
//                 type="text"
//                 placeholder="Name"
//                 required
//                 value={fullName}
//                 onChange={(e) => setName(e.target.value)}
//                 />
//                 <input 
//                 type="text"
//                 placeholder="Email"
//                 required
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <input 
//                 type="text"
//                 placeholder="Phone Number"
//                 required
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//                 />
//                 <button className="btn" type="submit">Submit</button>
//                 <button className="btn" onSubmit={handleClick}>Edit</button>
//                 <button className="btn" onSubmit={handleClick}>Delete</button>
//                 <p>{ fullName }</p>
//                 <p>{ email }</p>
//                 <p>{ phone }</p>
//             </form>
//         </div>
//     )
// }

export default Create;