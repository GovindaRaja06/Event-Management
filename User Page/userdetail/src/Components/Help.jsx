import React, { useState } from 'react'
import axios from 'axios';

const Help = () => {
    const [help, setHelp] = useState({
        name: "",
        email: "",
        query: ""
    });
    const handleChange = (e) => {
        setHelp({
            ...help,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit =async(e) => {
        e.preventDefault();
        if (!help.name || !help.email || !help.query) {
            alert("Fill out all these fields");
            return;
        }

        try {
            const response = await axios.post("https://event-management-server-9kdv.onrender.com/api/help/placequery", help); // adjust port if needed
            console.log("Response:", response.data);
            alert("Your query has been posted");
            setHelp({ name: '', email: '', query: '' });
        } catch (error) {
            console.error("Error submitting query:", error);
            alert(" Failed to submit your query"); 
        }
        // console.log("FormSubmitted:",help);
        // setHelp({name:'',email:'',query:''});
        // alert("Your query has been posted ");

    }; 
    return (
        <div>
            <div className="help">
                <h2 className='help-heading'>Need Help?</h2>
                <p className='form-heading'>Fill the Required Detail And Your Query</p>
                <form className='form-details' onSubmit={handleSubmit} >
                    <input type="text" name='name' placeholder='Enter Your Name' className='inputdetail' value={help.name} onChange={handleChange} />
                    <input type="email" name='email' placeholder='Enter Email' className='inputdetail' value={help.email} onChange={handleChange} />
                    <textarea name="query" placeholder='Enter Your Query' rows={5} cols={50} className='inputdetailtextbox' value={help.query} onChange={handleChange}></textarea>
                    <button className='helpbtn' type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Help