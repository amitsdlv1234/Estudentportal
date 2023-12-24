import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';


const StudentAttendance = () => {
  const [Semester, setSemester] = useState('');
  const [Month, setMonth] = useState('');
  const [Year, setYear] = useState('');
  const { userroll} = useParams();
  const move = useNavigate();

  const semesters = ['1', '2', '3', '4', '5', '6', '7', '8'];

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const searchData = () => {
    console.log(Semester, Month, Year,userroll);
    move(`/viewattend/${userroll}/${Semester}/${Month}/${Year}`);
    // Add logic for handling the search data here
  };

  return (
    <div>
      <label>Semester</label>
      <select
        name='Semester'
        onChange={(e) => setSemester(e.target.value)}
        value={Semester}
      >
        <option value=''>Select Semester</option>
        {semesters.map((sem) => (
          <option key={sem} value={sem}>
            {sem}
          </option>
        ))}
      </select>
      <label>Month</label>
      <select
        name='Month'
        onChange={(e) => setMonth(e.target.value)}
        value={Month}
      >
        <option value=''>Select Month</option>
        {months.map((month) => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}
      </select>
      <label>Year</label>
      <input
        type='text'
        name='Year'
        onChange={(e) => setYear(e.target.value)}
        value={Year}
      />
      <button type='submit' onClick={() => searchData()}>
        Search
      </button>
    </div>
  );
};

export default StudentAttendance;
