import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
 import { StudentDepart,StudentSeme ,getTimeTable} from '../Services/api';
const Timetable = () => {
  // State variables
  const { userroll} = useParams();
  const [timetableData, setTimetableData] = useState([]);
//   const [studentRollNo, setStudentRollNo] = useState('');
  const [department, setDepartment] = useState({Branch:''});
  const [semester, setSemester] = useState({CurrentSemester:''});

  // Fetch department and semester based on student roll number
  useEffect(() => {
    fetchStudentInfo();
  }, [userroll]);
  const fetchStudentInfo = async () => {
    try {
      // Fetch student information based on roll number
      const studentDepartment = await StudentDepart(userroll);
      const studentSemester = await StudentSeme(userroll);
      // const studentData = await studentResponse.json();

      // Update department and semester state based on student information
      setDepartment(studentDepartment.data[0].Branch);
      setSemester(studentSemester.data[0].CurrentSemester);
    //   console.log(studentDepartment.data[0].Branch,studentSemester.data[0].CurrentSemester);
     
    } catch (error) {
      console.error('Error fetching student information:', error);
    }
  };

  useEffect(()=>{
    console.log(department,semester);
    console.log()
    fetchTimetable()
},[department,semester])

// Fetch timetable data based on department and semester
  
    const fetchTimetable = async () => {
      try {
        // Fetch timetable data based on department and semester
        const res = await getTimeTable(department,semester);
        setTimetableData(res.data);
      } catch (error) {
        console.error('Error fetching timetable:', error);
      }
    };
  

   
useEffect(()=>{
    console.log(department,semester);
    console.log()
})

  return (
    <div>
      {/* <h2>Timetable for {department} {semester/2!=0?"ODD Semester":"EVEN Semeter"}</h2> */}
      {timetableData.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>TimetableID</th>
              <th>TeacherName</th>
              <th>SubjectName</th>
              <th>DayOfWeek</th>
              <th>PeriodNumber</th>
            </tr>
          </thead>
          <tbody>
            {timetableData.map((item) => (
              <tr key={item.TimetableID}>
                <td>{item.TimetableID}</td>
                <td>{item.TeacherName}</td>
                <td>{item.SubjectName}</td>
                <td>{item.DayOfWeek}</td>
                <td>{item.PeriodNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No timetable data available.</p>
      )}
    </div>
  );
};

export default Timetable;
