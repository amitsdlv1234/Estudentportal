import './styles/profile_each.css';

import axios from 'axios';
import './styles/FormData.css'
import React, { useState } from 'react';

function MyForm() {
    const [formData, setFormData] = useState({
        StudentName: '',
        fname: '',
        mname: '',
        gender: '',
        dob: '',
        mobno: '',
        email: '',
        add: '',
        dist: '',
        state: '',
        country: '',
        pincode: '',
        adhar: '',
        fadhar: '',
        madhar: '',
        photo: '',
        sign: '',
        adhimg: '',
        marktn: '',
        marktw: '',
        rollno: '',
        enrolno: '',
        admssn: '',
        admsem: '',
        cyear: '',
        insname: '',
        coursen: '',
        branchn: '',
        sem: '',
        subcode1: '',
        sub1: '',
        subcode2: '',
        sub2: '',
        sub3: '',
        subcode3: '',
        sub4: '',
        subcode4: '',
        sub5: '',
        subcode5: '',
        subcode6: '',
        sub6: '',
        psubcode1: '',
        psub1: '',
        psubcode2: '',
        psub2: '',
        psub3: '',
        psubcode3: '',
        psub4: '',
        psubcode4: '',
        psub5: '',
        psubcode5: '',
        psubcode6: '',
        psub6: '',

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

        try {
            const response = await axios.post("https://6538d7e9a543859d1bb208d2.mockapi.io/ereport", formData);
            console.log(response.data);

        } catch (error) {
            console.error('Error submitting form data:', error);
        }
    };
    return (
        <div className="p_greedo">
            <h3 className="p_Top">My Profile (मेरी प्रोफाइल)</h3>
            <h4 className='p_h4'>Personal Information </h4>
            <div></div>

            <div className="p_entry">Student Name (नाम)</div>
            <input className='p_in' type='text' name="StudentName" value={formData.StudentName} onChange={handleChange} />

            <div className="p_entry">Father's Name (पिता का नाम)</div>
            <input className='p_in' type='text' name="fname" value={formData.fname} onChange={handleChange} />


            <div className="p_entry">Mother's Name (मां का नाम)</div>
            <input className='p_in' type='text' name="mname" value={formData.mname} onChange={handleChange} />


            <div className="p_entry">Gender (लिंग)</div>
            <input className='p_in' type='text' name="gender" value={formData.gender} onChange={handleChange} />


            <div className="p_entry">DOB (जन्म की तारीख)</div>
            <input className='p_in' type="date" name="dob" value={formData.dob} onChange={handleChange} />


            <div className="p_entry">Mobile No. (मोबाइल नंबर)</div>
            <input className='p_in' type='tel' name="mobno" value={formData.mobno} onChange={handleChange} />


            <div className="p_entry">Email Id (ईमेल आईडी)</div>
            <input className='p_in' type="email" name="email" value={formData.email} onChange={handleChange} />


            <div className="p_entry">Corresponding Address (पत्रव्यवहारी का पता)</div>
            <textarea className='p_in' name="add" value={formData.add} onChange={handleChange} />

            <div className="p_entry">City/District (शहर/जिला)</div>
            <input className='p_in' type="text" name="dist" value={formData.dist} onChange={handleChange} />


            <div className="p_entry">State (राज्य)</div>
            <input className='p_in' type="text" name="state" value={formData.state} onChange={handleChange} />

            <div className="p_entry">Country (देश)</div>
            <input className='p_in' type="text" name="country" value={formData.country} onChange={handleChange} />


            <div className="p_entry">Pincode (पिन कोड)</div>
            <input className='p_in' type="text" name="pincode" value={formData.pincode} onChange={handleChange} />


            <div className="p_entry">Aadhar Number</div>
            <input className='p_in' type="text" name="adhar" value={formData.adhar} onChange={handleChange} />


            <div className="p_entry">Father's Aadhar Number</div>
            <input className='p_in' type="text" name="fadhar" value={formData.fadhar} onChange={handleChange} />

            <div className="p_entry">Mother's Aadhar Number</div>
            <input className='p_in' type="text" name="madhar" value={formData.madhar} onChange={handleChange} />

            <div className="p_entry">Photograph (छायाप्रति)</div>
            <input type="file" id="p_myFile" name="photo" value={formData.photo} onChange={handleChange} />


            <div className="p_entry">Signature (हस्ताक्षर)</div>
            <input type="file" id="p_myFile" name="sign" value={formData.sign} onChange={handleChange} />

            <div className="p_entry">Aadhar image</div>
            <input type="file" id="p_myFile" name="adhimg" value={formData.adhimg} onChange={handleChange} />


            <div className="p_entry">10th Marksheet</div>
            <input type="file" id="p_myFile" name="marktn" value={formData.marktn} onChange={handleChange} />

            <div className="p_entry">12th Marksheet</div>
            <input type="file" id="p_myFile" name="marktw" value={formData.marktw} onChange={handleChange} />

            <h4 className='p_h4'>Academic Section </h4>
            <div></div>

            <div className="p_entry">Roll No.:</div>
            <input className='p_in' type='tel' name="rollno" value={formData.rollno} onChange={handleChange} />


            <div className="p_entry">Enrollment No.:</div>
            <input className='p_in' type='tel' name="enrolno" value={formData.enrolno} onChange={handleChange} />


            <div className="p_entry">Admission Year (प्रवेश सत्र)</div>
            <input className='p_in' type='year' name="admssn" value={formData.admssn} onChange={handleChange} />

            <div className="p_entry">Admission Semester (प्रवेश सेमेस्टर)</div>
            <input className='p_in' type="Number" name="admsem" value={formData.admsem} onChange={handleChange} />

            <div className="p_entry">Current Year </div>
            <input className='p_in' type='text' name="cyear" value={formData.cyear} onChange={handleChange} />

            <div className="p_entry">Institute's Code and Name (संस्थान का कोड और नाम)</div>
            <textarea className='p_in' name="insname" value={formData.insname} onChange={handleChange} />


            <div className="p_entry">Course Name (कोर्स का नाम)</div>
            <input className='p_in' type="text" name="coursen" value={formData.coursen} onChange={handleChange} />

            <div className="p_entry">Branch Name (ब्रांच का नाम)</div>
            <input className='p_in' type="text" name="branchn" value={formData.branchn} onChange={handleChange} />


            <div className="p_entry">Semester (सेमेस्टर)</div>
            <input className='p_in' type="text" name="sem" value={formData.sem} onChange={handleChange} />

            <h4 className='p_h4'>Semester Details:- </h4>
            <div></div>

            <div className='p_subject'>
                <h3>Theory Subject:-</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Subject Code</th>
                            <th className='P_subname'>Subject Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='P_tdc'>
                                <input className='P_tds' type='text' name="subcode1" value={formData.subcode1} onChange={handleChange} /></td>
                            <td className='p_td'>
                                <input className='p_tdi' type="text" name="sub1" value={formData.sub1} onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td className='P_tdc'>
                                <input className='P_tds' type="text" name="subcode2" value={formData.subcode2} onChange={handleChange} /></td>
                            <td className='p_td'>
                                <input className='p_tdi' type="text" name="sub2" value={formData.sub2} onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td className='P_tdc'>
                                <input className='P_tds' type="text" name="subcode3" value={formData.subcode3} onChange={handleChange} /></td>
                            <td className='p_td'>
                                <input className='p_tdi' type="text" name="sub3" value={formData.sub3} onChange={handleChange} /></td>
                        </tr>
                        <tr>

                            <td className='P_tdc'>
                                <input className='P_tds' type="text" name="subcode4" value={formData.subcode4} onChange={handleChange} /></td>
                            <td className='p_td'>
                                <input className='p_tdi' type="text" name="sub4" value={formData.sub4} onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td className='P_tdc'> <input
                                className='P_tds' type="text" name="subcode5" value={formData.subcode5} onChange={handleChange} /></td>
                            <td className='p_td'>
                                <input
                                    className='p_tdi' type="text" name="sub5" value={formData.sub5} onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td className='P_tdc'>
                                <input
                                    className='P_tds' type="text" name="subcode6" value={formData.subcode6} onChange={handleChange} /></td>
                            <td className='p_td'>
                                <input className='p_tdi' type="text" name="sub6" value={formData.sub6} onChange={handleChange} /></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className='p_subject'>
                <h3>Practical Subject:-</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Subject Code</th>
                            <th className='P_subname'>Subject Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='P_tdc'>
                                <input className='P_tds' type="text" name="psubcode1" value={formData.psubcode1} onChange={handleChange} /></td>

                            <td className='p_td'>
                                <input className='p_tdi' type="text" name="psub1" value={formData.psub1} onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td className='P_tdc'>
                                <input className='P_tds' type="text" name="psubcode2" value={formData.psubcode2} onChange={handleChange} /></td>
                            <td className='p_td'>
                                <input className='p_tdi' type="text" name="psub2" value={formData.psub2} onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td className='P_tdc'>
                                <input className='P_tds' type="text" name="psubcode3" value={formData.psubcode3} onChange={handleChange} /></td>
                            <td className='p_td'>
                                <input className='p_tdi' type="text" name="psub3" value={formData.psub3} onChange={handleChange} /></td>
                        </tr>

                        <tr>
                            <td className='P_tdc'>
                                <input className='P_tds' type="text" name="psubcode4" value={formData.psubcode4} onChange={handleChange} /></td>
                            <td className='p_td'>
                                <input className='p_tdi' type="text" name="psub4" value={formData.psub4} onChange={handleChange} /></td>
                        </tr>

                        <tr>
                            <td className='P_tdc'>
                                <input className='P_tds' type="text" name="psubcode5" value={formData.psubcode5} onChange={handleChange} />
                            </td>
                            <td className='p_td'>
                                <input className='p_tdi' type="text" name="psub5" value={formData.psub5} onChange={handleChange} />
                            </td>
                        </tr>

                        <tr>
                            <td className='P_tdc'>
                                <input className='P_tds' type="text" name="psubcode6" value={formData.psubcode6} onChange={handleChange} /></td>
                            <td className='p_td'>
                                <input className='p_tdi' type="text" name="psub6" value={formData.psub6} onChange={handleChange} /></td>
                        </tr>

                    </tbody>
                </table>
            </div>

            <button className='p_in' type="submit" onClick={handleSubmit}>Submit</button>

        </div >
    );

}

export default MyForm;
