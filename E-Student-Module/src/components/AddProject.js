import axios from 'axios';
import React, { useState } from 'react';

export const AddProject = () => {
    const [formData, setFormData] = useState({
        project: {
            proname: '',
            prodetail: ''
        },
        members: [
            { name: '', rollno: '', branch: '' }
        ]
    });

    const addMember = () => {
        setFormData({
            ...formData,
            members: [...formData.members, { name: '', rollno: '', branch: '' }]
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            project: {
                ...formData.project,
                [name]: value
            }
        });
    }

    const handleInputChange = (index, event) => {
        const newMembers = [...formData.members];
        newMembers[index][event.target.name] = event.target.value;
        setFormData({
            ...formData,
            members: newMembers
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("https://6561c704dcd355c083242eab.mockapi.io/project", formData).then((res) => {
            setFormData(res.data)
        })
        console.log(formData);
        // console.log(formData.project);
    }

    return (
        <form onSubmit={handleSubmit}>

            <h1>Project Info Fill-up Form</h1>

            <label>Project Name</label>

            <input type='text' name='proname' value={formData.project.proname} onChange={handleChange} />

            <label>Project Detail</label>

            <input type='text' name='prodetail' value={formData.project.prodetail} onChange={handleChange} />

            <div>
                {formData.members.map((member, index) => (
                    <div key={index}>

                        <label>Name:</label>

                        <input
                            type="text"
                            name="name"
                            value={member.name}
                            onChange={(e) => handleInputChange(index, e)}
                        />

                        <label>Roll No:</label>

                        <input
                            type="text"
                            name="rollno"
                            value={member.rollno}
                            onChange={(e) => handleInputChange(index, e)}
                        />

                        <label>Branch:</label>

                        <input
                            type="text"
                            name="branch"
                            value={member.branch}
                            onChange={(e) => handleInputChange(index, e)}
                        />
                    </div>

                ))}
            </div>

            <button type="button" onClick={addMember}>Add Member Entry</button>

            <input type='submit' />
        </form>
    );
};
