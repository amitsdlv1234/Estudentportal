import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyForm from './components/FormData';
import { Sign } from './components/Sign';
import { Home } from './components/Home';
import { ProfileData } from './components/ProfileData';
import { GetTable } from './components/GetTable';
import TimeTable  from './components/TimeTable';
import { EditTimeTable } from './components/EditTimeTable';
import { Fee } from './components/Fee';
import { FeeAdd } from './components/FeeAdd';
import ProjectForm from './components/ProjectDetail';
import { AddProject } from './components/AddProject';
import  AssignmentView  from './components/AssignmentView';
import { Assignmentadd } from './components/Assignmentadd';
import AttendanceView from './components/AttendanceView';
import { Attendanceadd } from './components/Attendanceadd';
import StudentDetail from './components/RegistrationForm/StudentDetail';
import StudentAddress from "./components/RegistrationForm/StudentAddress"
import AcademicSemesterPersent from "./components/RegistrationForm/AcademicSemesterPersent";
import SubjectDetails from "./components/RegistrationForm/SubjectDetails"
import StudentDocuments from "./components/RegistrationForm/StudentDocuments"
import StudentAttendance from './components/StudentAttendance';

// import AppContext from './components/AppContext';


function App() {
  const client = new QueryClient()
  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <BrowserRouter>
          <Routes>
            <Route />
            <Route path='/form' element={<MyForm />}></Route>
            <Route path='/StudentDetail' element={<StudentDetail/>}></Route>
            <Route path='/:RollNo/StudentDocuments' element={<StudentDocuments/>}></Route>
            <Route path='/:RollNo/StudentAddress' element={<StudentAddress/>}></Route>
            <Route path='/:RollNo/AcademicSemesterPersent' element={<AcademicSemesterPersent/>}></Route>
            <Route path='/:RollNo/SubjectDetails' element={<SubjectDetails/>}></Route>
            <Route path='/' element={<Sign />}></Route>
            <Route path='/home/:userroll' element={<Home />}></Route>
            <Route path="/profiledata/:userroll" element={<ProfileData />} />
            <Route path='/profiletable' element={<GetTable />}></Route>
            <Route path='/viewtimetable/:userroll' element={<TimeTable />}></Route>
            <Route path='/edittimetable' element={<EditTimeTable />}></Route>
            <Route path='/addproject' element={<AddProject />}></Route>
            <Route path='/Viewproject/:userroll' element={<ProjectForm />}></Route>
            <Route path='/viewassign/:userroll' element={<AssignmentView />}></Route>
            <Route path='/addassignment' element={<Assignmentadd />}></Route>
            <Route path='/viewattend/:userroll/:Semester/:Month/:Year' element={<AttendanceView />}></Route>
            <Route path='/studentAttendance/:userroll' element={<StudentAttendance/>}></Route>
            <Route path='/addattend' element={<Attendanceadd />}></Route>
            <Route path='/viewfee/:userroll' element={<Fee />}></Route>
            <Route path='/addfee' element={<FeeAdd />}></Route>
      
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>

    </div >

  );
}

export default App;
