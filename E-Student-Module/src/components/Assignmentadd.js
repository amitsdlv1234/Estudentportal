import axios from 'axios'
import React, { useState } from 'react'

export const Assignmentadd = () => {
    const [assign, setAssign] = useState({
        tname: '',
        branch: '',
        year: '',
        sub: '',
        unit: '',
        adate: '',
        sdate: '',
        status: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setAssign({
            ...assign,
            [name]: value
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("https://6578746ef08799dc804559c9.mockapi.io/assignmentt", assign).then((res) => {
            setAssign(res.data)
        })
        console.log(assign)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Assignment Form</h1>

            <p>Assigned by</p>

            <input type='text' name='tname' value={assign.tname} placeholder="Teacher's Name" onChange={handleChange} />
            <br />

            <input type='text' name='branch' value={assign.branch} placeholder='Branch' onChange={handleChange} />

            <input type='text' name='year' value={assign.year} placeholder='Year' onChange={handleChange} />
            <br />

            <input type='text' name='sub' value={assign.sub} placeholder='Subject' onChange={handleChange} />

            <input type='text' name='unit' value={assign.unit} placeholder='Unit Name' onChange={handleChange} />

            <p>Assigned Date</p>

            <input type='date' name='adate' value={assign.adate} onChange={handleChange} />

            <p>Submission Date</p>

            <input type='date' name='sdate' value={assign.sdate} onChange={handleChange} />
            <br />

            <input type='text' name='status' value={assign.status} placeholder='Status' onChange={handleChange} />

            <input type='submit' />
        </form>
    )
}
