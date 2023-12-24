import axios from 'axios';
import React, { useState } from 'react';

export const FeeAdd = () => {
    const [feedetail, setFeedetail] = useState({
        froll: '',
        fsname: '',
        fbranch: '',
        fyear: '',
        fstatus: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFeedetail({
            ...feedetail,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("https://6538d7e9a543859d1bb208d2.mockapi.io/project-app", feedetail)
            .then((res) => {
                setFeedetail(res.data);
                console.log(res.data);
            })
            .catch((error) => {
                console.error("Error while submitting data:", error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type='number' name='froll' value={feedetail.froll} placeholder='Roll no.' onChange={handleChange} />
            <input type='text' name='fsname' value={feedetail.fsname} placeholder='Name' onChange={handleChange} />
            <input type='text' name='fbranch' value={feedetail.fbranch} placeholder='Branch' onChange={handleChange} />
            <input type='text' name='fyear' value={feedetail.fyear} placeholder='Year' onChange={handleChange} />
            <input type='text' name='fstatus' value={feedetail.fstatus} placeholder='Fee Status' onChange={handleChange} />
            <input type='submit' />
        </form>
    );
};
