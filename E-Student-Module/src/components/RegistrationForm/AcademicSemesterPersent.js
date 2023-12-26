import '../styles/profile_each.css';
import '../styles/FormData.css'
import React, { useState} from 'react';
import { useParams } from 'react-router-dom';
import { SemesterMarks} from '../../Services/api';
import { useNavigate } from 'react-router-dom';

function MyForm() {
    const move = useNavigate();
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

    // useEffect(()=>{
    //  getMarks(RollNo);
    // },[RollNo])
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    //  const getMarks=async()=>{
    //     try {
    //         const res=await getsemesterMarks(RollNo);
    //         if (isMounted) {
    //             setFormData(res.data.result);
    //         }    
    //     } catch (error) {
    //         console.error('Error getting form data:', error);
    //     }
    //  }
    const handleSubmit = async (e) => {
        e.preventDefault();
       console.log(formData, RollNo)
        try {
            const response = await SemesterMarks(RollNo, formData);
                 alert(response.data.message)
                 move(`/${RollNo}/SubjectDetails`);
        } catch (error) {
            console.error('Error submitting form data:', error);
        }
    };
    // useEffect(() => {
    //     console.log(formData);
    // }, [RollNo]);

    // // Use a ref to track whether the component is mounted
    // const isMounted = useRef(true);

    // useEffect(() => {
    //     // Set isMounted to false when the component is unmounted
    //     return () => {
    //         isMounted.current = false;
    //     };
    // }, []);

    return (
        <div className="p_greedo">
            <h3 className="p_Top">Semester Details (------)</h3>
            
            <div className="p_entry">I_Sem</div>
            <textarea className='p_in' name="I_Sem" placeholder='Qualifying Percent' value={formData.I_Sem} onChange={handleChange} />
            <div className="p_entry">II_Sem</div>
            <textarea className='p_in' name="II_Sem" value={formData.II_Sem} placeholder='Qualifying Percent' onChange={handleChange} />

            <div className="p_entry">II_Sem</div>
            <input className='p_in' type="text" name="II_Sem"  placeholder='Qualifying Percent' value={formData.II_Sem} onChange={handleChange} />

            <div className="p_entry">III_Sem</div>
            <input className='p_in' type="text" name="III_Sem" placeholder='Qualifying Percent' value={formData.III_Sem} onChange={handleChange} />


            <div className="p_entry">IV_Sem</div>
            <input className='p_in' type="text" name="IV_Sem"placeholder='Qualifying Percent'  value={formData.IV_Sem} onChange={handleChange} />

            <div className="p_entry">V_Sem</div>
            <input className='p_in' type="text" name="V_Sem"placeholder='Qualifying Percent'  value={formData.V_Sem} onChange={handleChange} />


            <div className="p_entry">VI_Sem</div>
            <input className='p_in' type="text" name="VI_Sem" placeholder='Qualifying Percent' value={formData.VI_Sem} onChange={handleChange} />

            <div className="p_entry">VII_Sem</div>
            <input className='p_in' type="text" name="VII_Sem" placeholder='Qualifying Percent' value={formData.VII_Sem} onChange={handleChange} />
            <div className="p_entry">VIII_Sem</div>
            <input className='p_in' type="text" name="VIII_Sem"placeholder='Qualifying Percent'  value={formData.VIII_Sem} onChange={handleChange} />

            <button className='p_in' type="submit" onClick={handleSubmit}>Submit</button>

        </div >
    );

}

export default MyForm;
