import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Nav from './Nav';
import './styles/selectattendance.css'

const StudentAttendance = () => {
  const [Semester, setSemester] = useState('');
  const [Month, setMonth] = useState('');
  const [Year, setYear] = useState('');
  const { userroll } = useParams();
  const move = useNavigate();

  const semesters = ['1', '2', '3', '4', '5', '6', '7', '8'];

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const searchData = () => {
    console.log(Semester, Month, Year, userroll);
    move(`/viewattend/${userroll}/${Semester}/${Month}/${Year}`);
    // Add logic for handling the search data here
  };

  return (
    <><div>
      <Nav />
    </div>
      <div className='selection'>

        <div className='s-sem'>
          <div><label className='lab'>Semester:</label></div>
          <div className='attp'><select className='i-pp'
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
        </div>
        </div>
        <div className='s-sem'>
        <div>  <label className='lab'>Month:</label></div>
        <div className='attp'>  <select className='i-pp'
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
        </div>
        </div>
        <div className='s-sem'>
         <div> <label className='lab'>Year:</label></div>
         <div className='attp'> <input
            className='appp'
            type='text'
            name='Year'
            onChange={(e) => setYear(e.target.value)}
            value={Year}
          />
        </div>
        </div>
        <div >
          <button className='btnn' type='submit' onClick={() => searchData()}>
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default StudentAttendance;
