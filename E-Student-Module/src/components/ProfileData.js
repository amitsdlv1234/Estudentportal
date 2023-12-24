import React, { useEffect, useState } from 'react';
import {StudentProfileData,getStudentAddress,getStudentDocuments} from "../Services/api.js"
import { useParams } from 'react-router-dom';
import Nav from './Nav'

export const ProfileData = () => {
    const { userroll, userdob } = useParams();
    const [data, setData] = useState([]);
    const [Address, setAddress] = useState([]);
    const [documents,setDocuments]=useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await StudentProfileData(userroll);
                // console.log(response.data[0]);
                setData(response.data);
                const response1 = await getStudentAddress(userroll);
                // console.log(response1.data[0]);
                setAddress(response1.data[0]);
                const response2 = await getStudentDocuments(userroll);
                // console.log(response2.data);
                setDocuments(response2.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, [userroll]);
    // console.log(value.file_name)
    let filterDocuments;
        documents.forEach((value)=>{if(value.file_name==='photo'){
        filterDocuments=value;
        //    console.log(value);
    }});
    const filteredData = data.filter((item) => String(item.RollNo) === userroll);
   console.log(filterDocuments);
    return (
        <div>
            <Nav />
            <div className='freespace'></div>
            {loading ? (
                <div>Loading...</div>
            ) : filteredData.length > 0 ? (
                filteredData.map((item,key) => (
                    <div key={key}>
                        <h3 className="p_Top">My Profile (मेरी प्रोफाइल)</h3>
                             < div className="p_entry">Photograph (छायाप्रति)
                                       {filterDocuments ? (
                                     <>
                                      <img src={filterDocuments.file_path} alt="Student Photo" />
                                      <span>Student Photo</span>
                                    </>
                                  ) : (
                                    <div >
                                     <div id="p_myFile">Photo not available</div>
                                    </div>
                                   
                                  )}
                                </div>
                        <div className="p_greedo">
                        
                            <div className="p_entry">Roll No.</div>
                            <div className='VP_in' > {item.RollNo}</div>

                            <div className="p_entry">Name (नाम)</div>
                            <div className='VP_in' >{item.StudentName}</div>

                            <div className="p_entry">Father's Name (पिता का नाम)</div>
                            <div className='VP_in' >{item.Father_Name}</div>

                            <div className="p_entry">Gender (लिंग)</div>
                            <div className='VP_in' >{item.Gender}</div>

                            <div className="p_entry">Mobile no.</div>
                            <div className='VP_in' >{item.Student_MNO}</div>

                            <div className="p_entry">DOB (जन्म की तारीख)</div>
                            <div className='VP_in' >{item.Dob}</div>

                            <div className="p_entry">Email Id (ईमेल आईडी)</div>
                            <div className='VP_in'>{item.Email_ID}</div>

                            
                            <div className="p_entry">Enrollment No.:</div>
                            <div className='VP_in'>{item.EnrollmentNo}</div>

                            <div className="p_entry">Admission Session (प्रवेश सत्र)</div>
                            <div className='VP_in'>{item.Year}</div>

                            <div className="p_entry">Admission Semester (प्रवेश सेमेस्टर)</div>
                            <div className='VP_in'>{item.admsem}</div>

                            <div className="p_entry">Course Name (कोर्स का नाम)</div>
                            <div className='VP_in'>B.Tech </div>

                            <div className="p_entry">Branch Name (ब्रांच का नाम)</div>
                            <div className='VP_in' >{item.Branch}</div>

                            <div className="p_entry">Corresponding Address (पत्रव्यवहारी का पता)</div>
                            <div className='VP_in' >Area : {Address.Area} , Block : {Address.Block} , House No. {Address.HouseNo}</div>

                            <div className="p_entry">City/District (शहर/जिला)</div>
                            <div className='VP_in' >{Address.Dist}</div>

                            <div className="p_entry">State (राज्य)</div>
                            <div className='VP_in'>{Address.State}</div>

                            <div className="p_entry">Country (देश)</div>
                            <div className='VP_in'>{Address.Country}</div>

                            <div className="p_entry">Pincode (पिन कोड)</div>
                            <div className='VP_in' >{Address.Pincode}</div>


                        </div>
                    </div>
                ))
            ) : (
                <div>No data available for the selected user.</div>
            )}
        </div>
    );
};