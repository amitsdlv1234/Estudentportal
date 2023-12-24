import '../styles/profile_each.css';
import '../styles/FormData.css'
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { SemesterMarks } from '../../Services/api';


function MyForm() {

    const {RollNo}=useParams();
    const [formData, setFormData] = useState({
        I_Sem: null,
        II_Sem:null,
        III_Sem:null,
        IV_Sem:null,
        V_Sem:null,
        VI_Sem:null,
        VII_Sem:null,
        VIII_Sem:null
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
            const response = await SemesterMarks(RollNo, formData);
            console.log(response.data);

        } catch (error) {
            console.error('Error submitting form data:', error);
        }
    };
    return (
        <div className="p_greedo">
            <h3 className="p_Top">Semester Details (------)</h3>
            <div className="p_entry">I_Sem</div>
            <textarea className='p_in' name="I_Sem" value={formData.I_Sem} onChange={handleChange} />
            <div className="p_entry">II_Sem</div>
            <textarea className='p_in' name="II_Sem" value={formData.II_Sem} onChange={handleChange} />

            <div className="p_entry">II_Sem</div>
            <input className='p_in' type="text" name="II_Sem" value={formData.II_Sem} onChange={handleChange} />

            <div className="p_entry">III_Sem</div>
            <input className='p_in' type="text" name="III_Sem" value={formData.III_Sem} onChange={handleChange} />


            <div className="p_entry">IV_Sem</div>
            <input className='p_in' type="text" name="IV_Sem" value={formData.IV_Sem} onChange={handleChange} />

            <div className="p_entry">V_Sem</div>
            <input className='p_in' type="text" name="V_Sem" value={formData.V_Sem} onChange={handleChange} />


            <div className="p_entry">VI_Sem</div>
            <input className='p_in' type="text" name="VI_Sem" value={formData.VI_Sem} onChange={handleChange} />

            <div className="p_entry">VII_Sem</div>
            <input className='p_in' type="text" name="VII_Sem" value={formData.VII_Sem} onChange={handleChange} />
            <div className="p_entry">VIII_Sem</div>
            <input className='p_in' type="text" name="VIII_Sem" value={formData.VIII_Sem} onChange={handleChange} />

            <button className='p_in' type="submit" onClick={handleSubmit}>Submit</button>

        </div >
    );

}

export default MyForm;
