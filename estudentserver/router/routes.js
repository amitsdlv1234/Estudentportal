import express from "express";
import { StudentDetail,StudentAddress, SemesterMarks,SubjectDetails,SemesterSubject,StudentProfile,getStudentAddress,getStudentDocuments,getStudentAttendance,getStudentSeme,getStudentDepart,getStudentTimeTable,getStudentAssignment,getsemesterMarks} from "../controllers/UserController.js";
import fileUploadMiddleware from "../middlewartes/fileUploadMiddleware.js"
import { StudentDocuments } from "../controllers/studentDocuments.js"; 

const router=express.Router();
router.post('/:RollNo/StudentDocuments',fileUploadMiddleware ,StudentDocuments);
router.post('/:RollNo/SubjectDetails', SubjectDetails);
router.get('/:Semester/SemesterSubject', SemesterSubject);
router.get('/:RollNo/StudentProfile', StudentProfile);
router.get('/:RollNo/StuAdd', getStudentAddress);
router.get('/:RollNo/StudentSeme', getStudentSeme);
router.get('/:department/:semester/StudentTimeTable', getStudentTimeTable);
router.get('/:department/:semester/StudentAssignment', getStudentAssignment);
router.get('/:RollNo/StudentDepart', getStudentDepart);
router.get('/:RollNo/StudentDocuments', getStudentDocuments);
router.get('/:RollNo/:Month/:Year/:Semester/StudentAttendance', getStudentAttendance);
router.post('/:RollNo/StudentDetail', StudentDetail);
router.post('/:RollNo/StudentAddress', StudentAddress);
router.post('/:RollNo/SemesterMarks', SemesterMarks);
router.get('/:RollNo/getsemesterMarks', getsemesterMarks);

export default router;
