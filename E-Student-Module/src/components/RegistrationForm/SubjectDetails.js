import '../styles/profile_each.css';
import { useNavigate } from 'react-router-dom';
import {SubjectDetails,SemesterSubject} from '../../Services/api';
import { useParams } from 'react-router-dom';
import '../styles/FormData.css'
import React, { useState } from 'react';

function MyForm() {
    const move = useNavigate();
    const {RollNo}=useParams();
    const [semester , setSemester]=useState("");
    const [formData, setFormData] = useState({ Semester: "",
        SubCode_I: '',
        SubCode_II: '',
        SubCode_III: '',
        SubCode_IV: '',
        SubCode_V: '',
        SubCode_VI: '',
        PCode_I: '',
        PCode_II: '',
        PCode_III: '',
        PCode_IV: '',
        SubName_I: '',
        SubName_II: '',
        SubName_III: '',
        SubName_IV: '',
        SubName_V: '',
        SubName_VI: '',
        SubName_P_I: '',
        SubName_P_II: '',
        SubName_P_III: '',
        SubName_P_IV: ''
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSemesterSubject = async (e) => {
        e.preventDefault();

        try {
            const response = await SemesterSubject(semester);
            // console.log(response.data[0]);
            setFormData(response.data[0]);
            console.log(formData);

        } catch (error) {
            console.error('Error submitting form data:', error);
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await SubjectDetails(RollNo, formData);
            // console.log(response.data.message);
            alert(response.data.message);
            setFormData({Semester: "",
            SubCode_I: '',
            SubCode_II: '',
            SubCode_III: '',
            SubCode_IV: '',
            SubCode_V: '',
            SubCode_VI: '',
            PCode_I: '',
            PCode_II: '',
            PCode_III: '',
            PCode_IV: '',
            SubName_I: '',
            SubName_II: '',
            SubName_III: '',
            SubName_IV: '',
            SubName_V: '',
            SubName_VI: '',
            SubName_P_I: '',
            SubName_P_II: '',
            SubName_P_III: '',
            SubName_P_IV: ''})
            move(`/home/${RollNo}`);
        } catch (error) {
            console.error('Error submitting form data:', error);
        }
    };
    return (
                 <><div style={{margin:"2% 20%"}}>semester
                 <input  type='text' name="Semester" value={semester} onChange={(e)=>{setSemester(e.target.value)}} />
                 <button type="submit" onClick={handleSemesterSubject}>Search</button></div>

        <div className="p_greedo">
            <h3 className="p_Top">Subject Details (------)</h3>
            <div className='p_subject'>
                <h3>Theory Subject:-</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Subject Code</th>
                            <th>Subject Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='P_tdc'>
                                <input className='P_tds' type='text' name="SubCode_I" value={formData.SubCode_I} onChange={handleChange} /></td>
                                <td className='P_tdc'>
                                <input className='P_tds' type='text' name="SubName_I" value={formData.SubName_I}/></td>
                            
                        </tr>
                        <tr>
                            <td className='P_tdc'>
                                <input className='P_tds' type="text" name="SubCode_II" value={formData.SubCode_II} onChange={handleChange} /></td>
                                <td className='P_tdc'>
                                <input className='P_tds' type='text' name="SubName_II" value={formData.SubName_II}/></td>
                        </tr>
                        <tr>
                            <td className='P_tdc'>
                                <input className='P_tds' type="text" name="SubCode_III" value={formData.SubCode_III} onChange={handleChange} /></td>
                                <td className='P_tdc'>
                                <input className='P_tds' type='text' name="SubName_III" value={formData.SubName_III}/></td>
                        </tr>
                        <tr>

                            <td className='P_tdc'>
                                <input className='P_tds' type="text" name="SubCode_IV" value={formData.SubCode_IV} onChange={handleChange} /></td>
                                <td className='P_tdc'>
                                <input className='P_tds' type='text' name="SubName_IV" value={formData.SubName_IV}/></td>
                        </tr>
                        <tr>
                            <td className='P_tdc'> <input
                                className='P_tds' type="text" name="sSubCode_V" value={formData.SubCode_V} onChange={handleChange} /></td>
                              <td className='P_tdc'>
                                <input className='P_tds' type='text' name="SubName_V" value={formData.SubName_V}/></td>
                        </tr>
                        <tr>
                            <td className='P_tdc'>
                                <input
                                    className='P_tds' type="text" name="sSubCode_VI" value={formData.SubCode_VI} onChange={handleChange} /></td>
                            <td className='P_tdc'>
                                <input className='P_tds' type='text' name="SubName_VI" value={formData.SubName_VI}/></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className='p_subject'>
                <h3>Practical Subject:-</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Practical Code</th>
                            <th>Practical Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='P_tdc'>
                                <input className='P_tds' type="text" name="PCode_I" value={formData.PCode_I} onChange={handleChange} /></td>
                                <td className='P_tdc'>
                                <input className='P_tds' type="text" name="SubName_P_I" value={formData.SubName_P_I}/></td>
                                

                        </tr>
                        <tr>
                            <td className='P_tdc'>
                                <input className='P_tds' type="text" name="PCode_II" value={formData.PCode_II} onChange={handleChange} /></td>
                                <td className='P_tdc'>
                                <input className='P_tds' type="text" name="SubName_P_II" value={formData.SubName_P_II}/></td>
                        </tr>
                        <tr>
                            <td className='P_tdc'>
                                <input className='P_tds' type="text" name="PCode_III" value={formData.PCode_III} onChange={handleChange} /></td>
                                <td className='P_tdc'>
                                <input className='P_tds' type="text" name="SubName_P_III" value={formData.SubName_P_III}/></td>
                        </tr>

                        <tr>
                            <td className='P_tdc'>
                                <input className='P_tds' type="text" name="PCode_IV" value={formData.PCode_IV} onChange={handleChange} /></td>
                                <td className='P_tdc'>
                                <input className='P_tds' type="text" name="SubName_P_IV" value={formData.SubName_P_IV}/></td>
                        </tr>

                    </tbody>
                </table>
            </div>

            <button className='p_in' type="submit" onClick={handleSubmit}>Submit</button>

        </div >
        </>
    );

}

export default MyForm;
