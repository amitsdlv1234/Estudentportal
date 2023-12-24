import axios from 'axios';
import React, { useState } from 'react';
import {useParams} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function MyForm() {
    const move = useNavigate();
    const {RollNo}=useParams();
    const [formData, setFormData] = useState({
        photo: '',
        sign: '',
        adhimg: '',
        marktn: '',
        marktw: '',
    });

    const handleChange = (e) => {
        const { name, files } = e.target;
        setFormData({
            ...formData,
            [name]: files[0], // Assuming you want to handle single files
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataToSend = new FormData();

        Object.keys(formData).forEach((key) => {
            formDataToSend.append(key, formData[key]);
        });

        try {
            const response = await axios.post(`http://localhost:8000/${RollNo}/StudentDocuments`, formDataToSend, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            console.log(response.data);
            move(`/${RollNo}/AcademicSemesterPersent`);
        } catch (error) {
            console.error('Error submitting form data:', error);
        }
    };

    return (
        <div className="p_greedo">
            <h3 className="p_Top">Documents</h3>

            {/* Repeat this block for each file input */}
            <div className="p_entry">
                Photograph (छायाप्रति)
                <input type="file" name="photo" onChange={handleChange} />
                
            </div>

            <div className="p_entry">
                Signature (हस्ताक्षर)
                <input type="file" name="sign" onChange={handleChange} />
                
            </div>

            <div className="p_entry">
                Aadhar image
                <input type="file" name="adhimg" onChange={handleChange} />
               
            </div>

            <div className="p_entry">
                10th Marksheet
                <input type="file" name="marktn" onChange={handleChange} />
                
            </div>

            <div className="p_entry">
                12th Marksheet
                <input type="file" name="marktw" onChange={handleChange} />
                
            </div>
            <button className='p_in' type="submit" onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default MyForm;
