import React, { useState } from 'react';
import axios from 'axios';


export const Attendanceadd = () => {
    const [attendanceData, setAttendanceData] = useState({
        date: '',
        year: '',
        branch: '',
        className: '',
        teacher: '',
        classTiming: '',
        students: [],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAttendanceData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleCheckboxChange = (studentId) => {
        setAttendanceData((prevData) => ({
            ...prevData,
            students: prevData.students.map((student) =>
                student.id === studentId
                    ? { ...student, isPresent: !student.isPresent }
                    : student
            ),
        }));
    };
    const handleAddStudent = () => {
        setAttendanceData((prevData) => ({
            ...prevData,
            students: [
                ...prevData.students,
                {
                    id: prevData.students.length + 1,
                    name: '',
                    rollNo: '',
                    isPresent: false,
                },
            ],
        }));
    };

    const handleStudentChange = (studentId, field, value) => {
        setAttendanceData((prevData) => ({
            ...prevData,
            students: prevData.students.map((student) =>
                student.id === studentId ? { ...student, [field]: value } : student
            ),
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("https://6578746ef08799dc804559c9.mockapi.io/Attendance", attendanceData).then((res) => {
            setAttendanceData(res.data)
        })

        console.log('Attendance Data:', attendanceData);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Date:
                    <input
                        type="date"
                        name="date"
                        value={attendanceData.date}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Year:
                    <input
                        type="text"
                        name="year"
                        value={attendanceData.year}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Branch:
                    <input
                        type="text"
                        name="branch"
                        value={attendanceData.branch}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Class:
                    <input
                        type="text"
                        name="className"
                        value={attendanceData.className}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Teacher:
                    <input
                        type="text"
                        name="teacher"
                        value={attendanceData.teacher}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Class Timing:
                    <input
                        type="text"
                        name="classTiming"
                        value={attendanceData.classTiming}
                        onChange={handleChange}
                    />
                </label>
                <br />

                {attendanceData.students.length > 0 && (
                    <table>
                        <thead>
                            <tr>
                                <th colSpan="4">Attendance for {attendanceData.date}</th>
                            </tr>
                            <tr>
                                <th>Student ID</th>
                                <th>Student Name</th>
                                <th>Roll No</th>
                                <th>Attendance</th>
                            </tr>
                        </thead>
                        <tbody>
                            {attendanceData.students.map((student) => (
                                <tr key={student.rollNo}>
                                    <td>{student.id}</td>
                                    <td>
                                        <input
                                            type="text"
                                            value={student.name}
                                            onChange={(e) =>
                                                handleStudentChange(
                                                    student.id,
                                                    'name',
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            value={student.rollNo}
                                            onChange={(e) =>
                                                handleStudentChange(
                                                    student.id,
                                                    'rollNo',
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            checked={student.isPresent}
                                            onChange={() =>
                                                handleCheckboxChange(student.id)
                                            }
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}

                <button type="button" onClick={handleAddStudent}>
                    Add Student
                </button>

                <button type="submit">Submit Attendance</button>
            </form>
        </div>
    );
};