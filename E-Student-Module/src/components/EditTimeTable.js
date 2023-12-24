import React, { useState } from 'react';
import './styles/TimeTable.css';
import axios from 'axios';

export const EditTimeTable = () => {
    const [formData, setFormData] = useState({
        year: '',
        branch: '',
        timetable: {},
    });

    const days = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];

    const initialEntries = days.reduce((acc, day) => {
        for (let i = 1; i <= 5; i++) {
            const prefix = `${day}${i}`;
            acc[`subject${prefix}`] = '';
            acc[`subjectcode${prefix}`] = '';
            acc[`teacher${prefix}`] = '';
        }
        return acc;
    }, {});

    const [entries, setEntries] = useState(initialEntries);

    const generateTableRows = () => {
        return days.map(day => (
            <tr key={day}>
                <th>{day}</th>
                {Array.from({ length: 7 }, (_, slot) => (
                    <td key={`${day}${slot}`}>
                        {slot !== 0 && slot !== 4 && (
                            <>
                                <input
                                    placeholder='subject'
                                    name={`subject${day}${slot}`}
                                    value={entries[`subject${day}${slot}`]}
                                    onChange={(e) => handleInputChange(e)}
                                />
                                <br />
                                <input
                                    placeholder='subject code'
                                    name={`subjectcode${day}${slot}`}
                                    value={entries[`subjectcode${day}${slot}`]}
                                    onChange={(e) => handleInputChange(e)}
                                />
                                <br />
                                <input
                                    placeholder='teacher'
                                    name={`teacher${day}${slot}`}
                                    value={entries[`teacher${day}${slot}`]}
                                    onChange={(e) => handleInputChange(e)}
                                />
                            </>
                        )}
                    </td>
                ))}
            </tr>
        ));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEntries(prevEntries => ({
            ...prevEntries,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        const { year, branch } = formData;
        const timetableData = {
            year,
            branch,
            timetable: entries,
        };
        axios.post("https://6561c704dcd355c083242eab.mockapi.io/timetable", timetableData)
            .then(response => {
                console.log("Data submitted successfully:", response.data);
            })
            .catch(error => {
                console.error("Error submitting data:", error);
            });
    };

    return (
        <div>
            <h2>Class Schedule</h2>
            <div>
                <input
                    placeholder='Branch'
                    value={formData.branch}
                    onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                />
                <input
                    placeholder='Year'
                    value={formData.year}
                    onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                />
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Time</th>
                        <th>09:00-10:00</th>
                        <th>10:00-11:00</th>
                        <th>11:00-12:00</th>
                        <th>12:00-01:00</th>
                        <th>01:00-02:00</th>
                        <th>02:00-03:00</th>
                        <th>03:00-04:00</th>
                    </tr>
                </thead>
                <tbody>{generateTableRows()}</tbody>
            </table>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

// default EditTimeTable;
