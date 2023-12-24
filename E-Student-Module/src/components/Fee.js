import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './styles/feeview.css';
import Nav from './Nav';
export const Fee = () => {
    const { userroll } = useParams();
    const [feedata, setFeedata] = useState([]);
    useEffect(() => {
        axios.get("https://6538d7e9a543859d1bb208d2.mockapi.io/project-app", feedata).then((res) => {
            setFeedata(res.data)
            console.log(res.data)
        })
    }, [])

    const filterdata = feedata.filter((item) => String(item.froll) === userroll)
    return (
        <>


            {filterdata.length > 0 ? (
                filterdata.map((item, key) => (

                    <div>
                        <Nav />
                        <div className='f_greedo'>

                            <h3 className="f_Top">Fee Details </h3>

                            <div className='f_entry'>Roll no.</div>
                            <div className='f_status'>{item.froll}</div>

                            <div className='f_entry'>Name</div>
                            <div className='f_status'>{item.fsname}</div>

                            <div className='f_entry'>Branch</div>
                            <div className='f_status'>{item.fbranch}</div>

                            <div className='f_entry'>Year</div>
                            <div className='f_status'>{item.fyear}</div>

                            <div className='f_entry'>Fee Status</div>
                            <div className='f_status'>{item.fstatus}</div>

                        </div>
                    </div>



                ))) : null
            }

        </>
    )
};
