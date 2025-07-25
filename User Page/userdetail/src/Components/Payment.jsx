import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Payment = () => {
    const [form, setForm] = useState({
        name: '',
        cardnumber: '',
        expiry: '',
        cvv: '',
        email: '',
    });
    const navigate = useNavigate();
    const handlechange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        // alert('Payment Successful') For dummy without connection of DB this code is ok 
        // console.log(form);
        // navigate('/ticket',{state:{form}});
        try {
            const res = await axios.post('http://localhost:5000/api/payments/add', form);
            console.log(res.data);
            alert('Payment Successful');
            navigate('/ticket', { state: { form } });
        } catch (error) {
            console.error('Payment Error:', error);
            alert('Payment Failed. Try again.');
        }

    }

    return (
        <div className='payment-container'>
            <h2 className='paymenttop'>Payment Information</h2>
            <form action="" className='paymentform' onSubmit={handleSubmit}>
                <div className="form">
                    <label >Your Full Name :<input type="text" name="name" value={form.name} onChange={handlechange} required /></label>
                </div>
                <div className="form">
                    <label >Card Number :<input type="text" name="cardnumber" value={form.cardnumber} onChange={handlechange} required /></label>
                </div>
                <div className="form">
                    <label >Expiry Date(MM/YY) : <input type="text" name="expiry" value={form.expiry} onChange={handlechange} required /></label>
                </div>
                <div className="form">
                    <label >CVV : <input type="text" name="cvv" value={form.cvv} onChange={handlechange} required /></label>
                </div>
                <div className='form'>
                    <label >Email Address : <input type="email" name="email" value={form.email} onChange={handlechange} required /></label>
                </div>
                <button className='paybtn'>Pay Now</button>
            </form>

        </div>
    )
}

export default Payment