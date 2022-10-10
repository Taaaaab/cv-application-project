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
        fullName
      });
    };
  
    onSubmitTask = (e) => {
      e.preventDefault();
      console.log(this.in);
      this.setState({
          infoArray: this.state.infoArray.concat(this.state.info),
          info: { 
            fullName: '', 
            email: '', 
            phone: '',
            id: uniqid()
        },
      });
    };

    render() {
        const { info, infoArray } = this.state;

        return (
          <div>
            <form onSubmit={this.onSubmitTask}>
              <input 
              onChange={this.handleChange}
              value={info.fullName}
              placeholder="Name"
              type="text"
              name="fullName" />
              <button type="submit">
                Add Task
              </button>
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