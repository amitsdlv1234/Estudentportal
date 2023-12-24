import '../styles/profile_each.css';
import '../styles/FormData.css'
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { StudentAddress } from '../../Services/api';
import { useNavigate } from 'react-router-dom';

function MyForm() {
    const move = useNavigate();
    const {RollNo}=useParams();
    const [formData, setFormData] = useState({
        area: String,
        houseNo:Number,
        block:String,
        dist:String,
        state:String,
        pincode:Number,
        country:String,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
       console.log(formData, RollNo)
        try {
            const response = await StudentAddress(RollNo, formData);
            console.log(response.data);
            move(`/${RollNo}/StudentDocuments`);
        } catch (error) {
            console.error('Error submitting form data:', error);
        }
    };
    return (
        <div className="p_greedo">
            <h3 className="p_Top">Student Address (मेरी प्रोफाइल)</h3>
            <div className="p_entry">Corresponding Address (पत्रव्यवहारी का पता)</div>

            <textarea className='p_in' name="area" value={formData.area} onChange={handleChange} />
            <div className="p_entry">House No.</div>
            <textarea className='p_in' name="houseNo" value={formData.houseNo} onChange={handleChange} />

            <div className="p_entry">Block (शहर)</div>
            <input className='p_in' type="text" name="block" value={formData.block} onChange={handleChange} />

            <div className="p_entry">City/District (शहर/जिला)</div>
            <input className='p_in' type="text" name="dist" value={formData.dist} onChange={handleChange} />


            <div className="p_entry">State (राज्य)</div>
            <input className='p_in' type="text" name="state" value={formData.state} onChange={handleChange} />

            <div className="p_entry">Country (देश)</div>
            <input className='p_in' type="text" name="country" value={formData.country} onChange={handleChange} />


            <div className="p_entry">Pincode (पिन कोड)</div>
            <input className='p_in' type="text" name="pincode" value={formData.pincode} onChange={handleChange} />

            <button className='p_in' type="submit" onClick={handleSubmit}>Submit</button>

        </div >
    );

}

export default MyForm;
