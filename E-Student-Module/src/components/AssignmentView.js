import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { StudentDepart,StudentSeme ,StudentAssignment} from '../Services/api';

const StudentData = () => {
  const [studentData, setStudentData] = useState(null);
  const { userroll} = useParams();
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
      // console.log(studentDepartment.data,studentSemester.data);
     
    } catch (error) {
      console.error('Error fetching student information:', error);
    }
  };
  useEffect(() => {
    // Assuming you have an API endpoint to fetch student data by RollNo
    const fetchStudentData = async () => {
      try {
        const res = await StudentAssignment(department,semester);
        // const data = await response.json();
        setStudentData(res.data);
        console.log(res.data);
      } catch (error) {
        console.error('Error fetching student data:', error);
      }
    };

    fetchStudentData();
  }, [department,semester]);
// 
    useEffect(()=>{
      console.log(department,semester);
  })

  return (
    <div>
      {studentData ? (
        <table>
          <thead>
            <tr>
              <th>AssignmentId</th>
              <th>TeacherName</th>
              <th>SubjectName</th>
              <th>DateofSubmit</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {studentData.map((assignment) => (
              <tr key={assignment.AssignmentId}>
                <td>{assignment.AssignmentId}</td>
                <td>{assignment.TeacherName}</td>
                <td>{assignment.SubjectName}</td>
                <td>{assignment.DateofSubmit}</td>
                <td>{assignment.Status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading student data...</p>
      )}
    </div>
  );
};

export default StudentData;
