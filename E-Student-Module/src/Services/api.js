import axios from 'axios';

// const usersUrl = 'http://localhost:3003/users';
const usersUrl = 'http://localhost:8000';

export const StudentDetail = async (RollNo,formData) => {
  try {
    const response = await axios.post(`${usersUrl}/${RollNo}/StudentDetail`, formData);
    return response;
  } catch (error) {
    console.error('Error fetching users Calling on StudentDetail API:', error);
    throw error; // Re-throw the error so it can be caught by the caller
  }
};

export const StudentAddress = async (RollNo,formData) => {
    try {
      const response = await axios.post(`${usersUrl}/${RollNo}/StudentAddress`, formData);
      return response;
    } catch (error) {
      console.error('Error fetching users Calling on StudentAddress API:', error);
      throw error; // Re-throw the error so it can be caught by the caller
    }
  };
  export const SemesterMarks = async (RollNo,formData) => {
    try {
      const response = await axios.post(`${usersUrl}/${RollNo}/SemesterMarks`, formData);
      return response;
    } catch (error) {
      console.error('Error fetching users Calling on SemesterMarks API:', error);
      throw error; // Re-throw the error so it can be caught by the caller
    }
  };
  export const getsemesterMarks = async (RollNo) => {
    try {
      const response = await axios.get(`${usersUrl}/${RollNo}/getsemesterMarks`);
      return response;
    } catch (error) {
      console.error('Error fetching users Calling on SemesterMarks API:', error);
      throw error; // Re-throw the error so it can be caught by the caller
    }
  };
  export const SubjectDetails = async (RollNo,formData) => {
    try {
      const response = await axios.post(`${usersUrl}/${RollNo}/SubjectDetails`, formData);
      return response;
    } catch (error) {
      console.error('Error fetching users Calling on SemesterMarks API:', error);
      throw error; // Re-throw the error so it can be caught by the caller
    }
  };
  export const SemesterSubject = async (Semester) => {
    try {
      const response = await axios.get(`${usersUrl}/${Semester}/SemesterSubject`);
      return response;
    } catch (error) {
      console.error('Error fetching users Calling on SemesterMarks API:', error);
      throw error; // Re-throw the error so it can be caught by the caller
    }
  };
  export const StudentProfileData = async (RollNo) => {
    try {
      const response = await axios.get(`${usersUrl}/${RollNo}/StudentProfile`);
      return response;
    } catch (error) {
      console.error('Error fetching users Calling on StudentProfileData API:', error);
      throw error; // Re-throw the error so it can be caught by the caller
    }
  };
  export const getStudentAddress = async (RollNo) => {
    try {
      const response = await axios.get(`${usersUrl}/${RollNo}/StuAdd`);
      return response;
    } catch (error) {
      console.error('Error fetching users Calling on getStudentAddress API:', error);
      throw error; // Re-throw the error so it can be caught by the caller
    }
  };
  export const getStudentDocuments = async (RollNo) => {
    try {
      const response = await axios.get(`${usersUrl}/${RollNo}/StudentDocuments`,{
        headers: {
            "Content-Type": "application/json"
        }
    });
      return response;
    } catch (error) {
      console.error('Error fetching users Calling on getStudentDocuments API:', error);
      throw error; // Re-throw the error so it can be caught by the caller
    }
  };
  export const getAttendance = async (Month,Year,Semester,RollNo) => {
    try {
      const response = await axios.get(`${usersUrl}/${RollNo}/${Month}/${Year}/${Semester}/StudentAttendance`);
      return response;
    } catch (error) {
      console.error('Error fetching users Calling on getAttendance API:', error);
      throw error; // Re-throw the error so it can be caught by the caller
    }
  };
  export const StudentDepart = async (RollNo) => {
    try {
      const response = await axios.get(`${usersUrl}/${RollNo}/StudentDepart`);
      return response;
    } catch (error) {
      console.error('Error fetching users Calling on StudentInfo API:', error);
      throw error; // Re-throw the error so it can be caught by the caller
    }
  };
  export const StudentSeme = async (RollNo) => {
    try {
      const response = await axios.get(`${usersUrl}/${RollNo}/StudentSeme`);
      return response;
    } catch (error) {
      console.error('Error fetching users Calling on StudentInfo API:', error);
      throw error; // Re-throw the error so it can be caught by the caller
    }
  };
  export const getTimeTable = async (department,semester) => {
    try {
      const response = await axios.get(`${usersUrl}/${department}/${semester}/StudentTimeTable`);
      return response;
    } catch (error) {
      console.error('Error fetching users Calling on StudentInfo API:', error);
      throw error; // Re-throw the error so it can be caught by the caller
    }
  };
  
  export const StudentAssignment = async (department,semester) => {
    try {
      const response = await axios.get(`${usersUrl}/${department}/${semester}/StudentAssignment`);
      return response;
    } catch (error) {
      console.error('Error fetching users Calling on StudentInfo API:', error);
      throw error; // Re-throw the error so it can be caught by the caller
    }
  };
  
// 
// }