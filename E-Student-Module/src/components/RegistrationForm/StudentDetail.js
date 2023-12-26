import '../styles/profile_each.css';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import '../styles/FormData.css'
import React, { useState } from 'react';
import { StudentDetail } from '../../Services/api';

function MyForm() {
    const {RollNo} = useParams();
    const move = useNavigate();
    const [formData, setFormData] = useState({
        EnrollmentNo:Number,
        Year:Number,
        Branch:String,
        Gender:String,
        StudentName :String,
        Dob:String, 
        Email_ID : Number,
        StudentID_No :Number,
        Father_Name :String,
        Mather_Name :String,
        FID_No :Number,
        MID_No :Number,
        Student_MNO :Number,
        Father_MNo :Number,
        currentyear:Number

    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name,value);
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            const response = await StudentDetail(formData.EnrollmentNo,formData);
            console.log(response.data);
            move(`/${formData.EnrollmentNo}/StudentAddress`);
        } catch (error) {
            console.error('Error submitting form data:', error);
        }
    };
    return (
        <div className="p_greedo">
            <h3 className="p_Top">My Profile (मेरी प्रोफाइल)</h3>
            <h4 className='p_h4'>Personal Information </h4>
            <div></div>
           
            <div className="p_entry">Roll No:</div>
            <input className='p_in' type='tel' name="EnrollmentNo" value={formData.EnrollmentNo} onChange={handleChange} />

            <div className="p_entry">Student Name (नाम)</div>
            <input className='p_in' type='text' name="StudentName" value={formData.StudentName} onChange={handleChange} />

            <div className="p_entry">Father's Name (पिता का नाम)</div>
            <input className='p_in' type='text' name="Father_Name" value={formData.Father_Name} onChange={handleChange} />


            <div className="p_entry">Mather's Name (पिता का नाम)</div>
            <input className='p_in' type='text' name="Mather_Name" value={formData.Mather_Name} onChange={handleChange} />


            <div className="p_entry">Gender (लिंग)</div>
            <input className='p_in' type='text' name="Gender" value={formData.Gender} onChange={handleChange} />


            <div className="p_entry">DOB (जन्म की तारीख)</div>
            <input className='p_in' type="date" name="Dob" value={formData.Dob} onChange={handleChange} />


            <div className="p_entry">Mobile No. (मोबाइल नंबर)</div>
            <input className='p_in' type='tel' name="Student_MNO" value={formData.Student_MNO} onChange={handleChange} />


            <div className="p_entry">Email Id (ईमेल आईडी)</div>
            <input className='p_in' type="email" name="Email_ID" value={formData.Email_ID} onChange={handleChange} />


            <div className="p_entry">Aadhar Number</div>
            <input className='p_in' type="text" name="StudentID_No" value={formData.StudentID_No} onChange={handleChange} />


            <div className="p_entry">Father's Aadhar Number</div>
            <input className='p_in' type="text" name="FID_No" value={formData.FID_No} onChange={handleChange} />

            <div className="p_entry">Father's Mobile No.</div>
            <input className='p_in' type="text" name="Father_MNo" value={formData.Father_MNo} onChange={handleChange} />

            <div className="p_entry">Mother's Aadhar Number</div>
            <input className='p_in' type="text" name="MID_No" value={formData.MID_No} onChange={handleChange} />

            <div className="p_entry">Admission Year (प्रवेश सत्र)</div>
            <input className='p_in' type='year' name="Year" value={formData.Year} onChange={handleChange} />

            <div className="p_entry">Current Year </div>
            <input className='p_in' type='text' name="currentyear" value={formData.currentyear} onChange={handleChange} />

            <div className="p_entry">Branch Name (ब्रांच का नाम)</div>
            <input className='p_in' type="text" name="Branch" value={formData.Branch} onChange={handleChange} />           
            
            <button className='p_in' type="submit" onClick={handleSubmit}>Submit</button>

        </div >
    );

}

export default MyForm;
