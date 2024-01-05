
import dbConnection from '../database/db.js';
// import path from 'path';


export const StudentDetail = async (req, res) => {
    try {
        const connection = await dbConnection();
        
        // Check if all required parameters are present in the request body
        const requiredParams = [];

        const user = req.body;
        const RollNo = req.body.RollNo;
        console.log(user);
        console.log(RollNo);
        // console.log("forLOop");
        for (const param of requiredParams) {
            if (user[param] === undefined) {
                console.log(`Warning: ${param} is undefined in the user object.`);
                user[param] = null;
            }
        }
        // Insert data into the table
        const [result, fields] = await connection.execute(`
        INSERT INTO RegisterStudent (
            RollNo,
            EnrollmentNo,
            Year,
            Branch ,
            Gender,
            StudentName ,
            Dob, 
            Email_ID,
            StudentID_No ,
            Father_Name ,
            FID_No ,
            Mother_Name , -- Corrected column name here
            MID_No ,
            Student_MNO ,
            Father_MNo ,
            currentyear
        ) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [   RollNo,
                user.EnrollmentNo,
                user.Year,
                user.Branch ,
                user.Gender,
                user.StudentName ,
                user.Dob, 
                user.Email_ID,
                user.StudentID_No ,
                user.Father_Name ,
                user.FID_No ,
                user.Mather_Name ,
                user.MID_No ,
                user.Student_MNO ,
                user.Father_MNo ,
                user.currentyear]);

        // Check if the insertion was successful
        if (result.affectedRows === 1) {
            // User data successfully inserted
            return res.status(200).json({ message: 'User added successfully!' });
        } else {
            // No rows were affected, indicating the insertion failed
            return res.status(500).json({ error: 'Failed to add user.' });
        }

        // Release the connection back to the pool
        connection.release();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
export const StudentAddress = async (req, res) => {
    try {
        const connection = await dbConnection();
        
        // Check if all required parameters are present in the request body
        const requiredParams = [];

        const user = req.body;
        console.log(user);
        const {RollNo} = req.params;
        // console.log("forLOop");
        for (const param of requiredParams) {
            if (user[param] === undefined) {
                console.log(`Warning: ${param} is undefined in the user object.`);
                user[param] = null;
            }
        }
        
        // Insert data into the table
        const [result, fields] = await connection.execute(`
        INSERT INTO StudentAddress (
            RollNo,
            area,
            houseNo,
            block,
            dist,
            state,
            pincode,
            country
        ) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?);
        `,
            [   RollNo,
                user.area,
          user.houseNo,
          user.block,
          user.dist,
           user.state,
           user.pincode,
         user.country]);

        // Check if the insertion was successful
        console.log(RollNo);
        if (result.affectedRows === 1) {
            // User data successfully inserted
            return res.status(200).json({ message: 'Address added successfully!' });
        } else {
            // No rows were affected, indicating the insertion failed
            return res.status(500).json({ error: 'Failed to add Address.' });
        }

        // Release the connection back to the pool
        connection.release();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
export const getsemesterMarks = async (req, res) => {
    try {
        const { RollNo } = req.params;
        console.log(RollNo);
        const connection = await dbConnection();
        const [result, fields] = await connection.execute(`SELECT * FROM SemesterMarks WHERE RollNo=?`, [RollNo]);
        console.log(result);
        // Check if any rows were returned
        if (result.length > 0) {
            // Rows found, return the data
            
            return res.status(200).json({ message: 'Marks retrieved successfully!', result });
        } else {
            // No rows found
            return res.status(404).json({ message: 'No marks found for the specified RollNo.' });
        }

        // Release the connection back to the pool
        connection.release();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


export const SemesterMarks = async (req, res) => {
    try {
        const connection = await dbConnection();
        
        // Check if all required parameters are present in the request body
        const requiredParams = ['I_Sem', 'II_Sem', 'III_Sem', 'IV_Sem', 'V_Sem', 'VI_Sem', 'VII_Sem', 'VIII_Sem'];

        const user = req.body;
        const { RollNo } = req.params;

        // Validate if all required parameters are present in the request body
        for (const param of requiredParams) {
            if (user[param] === undefined) {
                console.log(`Warning: ${param} is undefined in the user object.`);
                user[param] = null;
            }
        }
        
        // Use INSERT ... ON DUPLICATE KEY UPDATE to insert or update data
        const [result, fields] = await connection.execute(`
            INSERT INTO SemesterMarks (
                RollNo,
                I_Sem,
                II_Sem,
                III_Sem,
                IV_Sem,
                V_Sem,
                VI_Sem,
                VII_Sem,
                VIII_Sem
            ) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
            ON DUPLICATE KEY UPDATE
                I_Sem = VALUES(I_Sem),
                II_Sem = VALUES(II_Sem),
                III_Sem = VALUES(III_Sem),
                IV_Sem = VALUES(IV_Sem),
                V_Sem = VALUES(V_Sem),
                VI_Sem = VALUES(VI_Sem),
                VII_Sem = VALUES(VII_Sem), 
                VIII_Sem = VALUES(VIII_Sem);
        `,
            [RollNo, user.I_Sem, user.II_Sem, user.III_Sem, user.IV_Sem, user.V_Sem, user.VI_Sem, user.VII_Sem, user.VIII_Sem]);

        // Check if the insertion or update was successful
        if (result.affectedRows === 1) {
            // User data successfully inserted or updated
            return res.status(200).json({ message: 'Marks added/updated successfully!' });
        } else {
            // No rows were affected, indicating the insertion or update failed
            return res.status(500).json({ error: 'Failed to add/update Marks.' });
        }

        // Release the connection back to the pool
        connection.release();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


export const SubjectDetails = async (req, res) => {
    try {
        const connection = await dbConnection();
        
        // Check if all required parameters are present in the request body
        const requiredParams = [];

        const user = req.body;
        // console.log(user);
        const {RollNo} = req.params;
        // console.log("forLOop");
        for (const param of requiredParams) {
            if (user[param] === undefined) {
                console.log(`Warning: ${param} is undefined in the user object.`);
                user[param] = null;
            }
        }
        
        // Check if the data already exists for the given RollNo and Semester
        const [existingData, _] = await connection.execute(`
            SELECT * FROM SubjectChoose
            WHERE RollNo = ? AND Semester = ?;
        `, [RollNo, user.Semester]);

        // If data already exists, return an error response
        if (existingData.length > 0) {
            // console.log('Subject details already exist for the given RollNo and Semester.')
            return res.status(200).json({ message: 'Subject details already exist for the given RollNo and Semester.' });
        }
        // Insert data into the table
        const [result, fields] = await connection.execute(`
        INSERT INTO SubjectChoose (
            RollNo,
            Semester,
    SubCode_I ,
SubCode_II ,
SubCode_III ,
SubCode_IV ,
SubCode_V ,
SubCode_VI ,
PCode_I ,
PCode_II ,
PCode_III ,
PCode_IV 
        ) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?,?,?,?,?);
        `,
            [   RollNo,
                user.Semester,
                user.SubCode_I ,
               user.SubCode_II ,
               user.SubCode_III ,
               user.SubCode_IV ,
               user.SubCode_V ,
               user.SubCode_VI ,
               user.PCode_I ,
               user.PCode_II ,
               user.PCode_III ,
               user.PCode_IV ]);

        // Check if the insertion was successful
        console.log(RollNo);
        if (result.affectedRows === 1) {
            // User data successfully inserted
            return res.status(200).json({ message: 'Subject added successfully!' });
        } 
        else {
            // No rows were affected, indicating the insertion failed
            return res.status(500).json({ message: 'Subject already added' });
        }

        // Release the connection back to the pool
        connection.release();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const SemesterSubject = async (req, res) => {
    try {
        const connection = await dbConnection();
        
        const {Semester} = req.params;
        console.log(Semester);
        
        // Fetch data using a JOIN operation
    const [rows, fields] = await connection.execute(`
    SELECT
                TheorySubject.Semester,
                TheorySubject.SubCode_I,
                TheorySubject.SubCode_II,
                TheorySubject.SubCode_III,
                TheorySubject.SubCode_IV,
                TheorySubject.SubCode_V,
                TheorySubject.SubCode_VI,
                PracticalSubject.PCode_I,
                PracticalSubject.PCode_II,
                PracticalSubject.PCode_III,
                PracticalSubject.PCode_IV,
                TS1.SubName AS SubName_I,
                TS2.SubName AS SubName_II,
                TS3.SubName AS SubName_III,
                TS4.SubName AS SubName_IV,
                TS5.SubName AS SubName_V,
                TS6.SubName AS SubName_VI,
                PS1.SubName AS SubName_P_I,
                PS2.SubName AS SubName_P_II,
                PS3.SubName AS SubName_P_III,
                PS4.SubName AS SubName_P_IV
            FROM
                TheorySubject
            JOIN
                PracticalSubject ON TheorySubject.Semester = PracticalSubject.Semester
            LEFT JOIN
                TheorySubName AS TS1 ON TheorySubject.SubCode_I = TS1.SubCode
            LEFT JOIN
                TheorySubName AS TS2 ON TheorySubject.SubCode_II = TS2.SubCode
            LEFT JOIN
                TheorySubName AS TS3 ON TheorySubject.SubCode_III = TS3.SubCode
            LEFT JOIN
                TheorySubName AS TS4 ON TheorySubject.SubCode_IV = TS4.SubCode
            LEFT JOIN
                TheorySubName AS TS5 ON TheorySubject.SubCode_V = TS5.SubCode
            LEFT JOIN
                TheorySubName AS TS6 ON TheorySubject.SubCode_VI = TS6.SubCode
            LEFT JOIN
                PracticalSubName AS PS1 ON PracticalSubject.PCode_I = PS1.SubCode
            LEFT JOIN
                PracticalSubName AS PS2 ON PracticalSubject.PCode_II = PS2.SubCode
            LEFT JOIN
                PracticalSubName AS PS3 ON PracticalSubject.PCode_III = PS3.SubCode
            LEFT JOIN
                PracticalSubName AS PS4 ON PracticalSubject.PCode_IV = PS4.SubCode
            WHERE
                TheorySubject.Semester = ?
        `, [Semester]);

  // Close the MySQL connection
  connection.end();

  // Send the fetched data as a JSON response
  console.log(rows);
    return res.status(200).json(rows);
  
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const StudentProfile = async (req, res) => {
    try {
        const connection = await dbConnection();
        
        const {RollNo} = req.params;
        console.log(RollNo);
        
        // Fetch data using a JOIN operation
    const [rows, fields] = await connection.execute(`SELECT * FROM RegisterStudent
    WHERE RollNo = ?;
`, [RollNo])
   
  // Close the MySQL connection
  connection.end();

  // Send the fetched data as a JSON response
    console.log(rows);
    return res.status(200).json(rows);
  
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
export const getStudentAddress = async (req, res) => {
    try {
        const connection = await dbConnection();
        
        const {RollNo} = req.params;
        console.log(RollNo);
        
        // Fetch data using a JOIN operation
    const [rows, fields] = await connection.execute(`SELECT * FROM StudentAddress
    WHERE RollNo = ?;
`, [RollNo])
   
  // Close the MySQL connection
  connection.end();

  // Send the fetched data as a JSON response
    console.log(rows);
    return res.status(200).json(rows);
  
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const getStudentDocuments = async (req, res) => {
    try {
        const connection = await dbConnection();
        
        const {RollNo} = req.params;
        console.log(RollNo);
        
        // Fetch data using a JOIN operation
    const [rows, fields] = await connection.execute(`SELECT * FROM StudentDocuments
    WHERE RollNo = ?;
`, [RollNo])
   
  // Close the MySQL connection
  connection.end();

  // Send the fetched data as a JSON response
    console.log(rows);
    return res.status(200).json(rows);
  
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// export const getStudentAddress = async (req, res) => {
//     try {
//         const connection = await dbConnection();
        
//         const {RollNo} = req.params;
//         console.log(RollNo);
        
//         // Fetch data using a JOIN operation
//     const [rows, fields] = await connection.execute(`SELECT * FROM StudentAddress
//     WHERE RollNo = ?;
// `, [RollNo])
   
//   // Close the MySQL connection
//   connection.end();

//   // Send the fetched data as a JSON response
//     console.log(rows);
//     return res.status(200).json(rows);
  
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// };

export const getStudentAttendance = async (req, res) => {
    try {
        const connection = await dbConnection();
        
        const {RollNo,Month,Year,Semester} = req.params;
        // console.log(RollNo,Month,Year,Semester);
        
        // Fetch data using a JOIN operation
        const [rows, fields] = await connection.execute(`
        SELECT * FROM StudentAttendance
        WHERE RollNo = 2101660100011 AND Semester = 1 AND Month = 'January' AND Year = 2023`);
    
   
  // Close the MySQL connection
  connection.end();

  // Send the fetched data as a JSON response
    // console.log(rows);
    return res.status(200).json(rows);
  
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const getStudentDepart = async (req, res) => {
    try {
        const connection = await dbConnection();
        
        const {RollNo} = req.params;
        // console.log(RollNo);
        
        // Fetch data using a JOIN operation
        const [rows, fields] = await connection.execute(`
        SELECT Branch FROM RegisterStudent
        WHERE RollNo = ?`,[RollNo]);
    
   
  // Close the MySQL connection
  connection.end();

  // Send the fetched data as a JSON response
    console.log(rows);
    return res.status(200).json(rows);
  
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const getStudentSeme = async (req, res) => {
    try {
        const connection = await dbConnection();
        
        const {RollNo} = req.params;
        // console.log(RollNo);
        
        // Fetch data using a JOIN operation
        const [rows, fields] = await connection.execute(`
        SELECT CurrentSemester FROM StudentSemester
        WHERE RollNo = ?`,[RollNo]);
    
   
  // Close the MySQL connection
  connection.end();

  // Send the fetched data as a JSON response
    // console.log(rows);
    return res.status(200).json(rows);
  
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const getStudentTimeTable = async (req, res) => {
    try {
        const connection = await dbConnection();
        
        const {department,semester} = req.params;
        console.log(department,semester);
        
        // Fetch data using a JOIN operation
        const [rows, fields] = await connection.execute(`
        SELECT
     tt.TimeTableID,
    t.Name AS TeacherName,
    s.SubjectName,
    tt.DayOfWeek,
    tt.PeriodNumber,
    b.BranchName,
    s.TeachingSemester
FROM
    Timetable AS tt
JOIN
    Teachers AS t ON tt.TeacherID = t.TeacherID
JOIN
    Subjects AS s ON tt.SubjectID = s.SubjectID
JOIN
    branches AS b ON tt.BranchID = b.BranchID
    WHERE
        BranchName = ?
        AND TeachingSemester = 2;
`,[department]);
    
   
  // Close the MySQL connection
  connection.release();

  // Send the fetched data as a JSON response
    console.log(rows);
    return res.status(200).json(rows);
  
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
export const getStudentAssignment = async (req, res) => {
    try {
        const connection = await dbConnection();
        
        const {department,semester} = req.params;
        console.log(department,semester);
        
        // Fetch data using a JOIN operation
        const [rows, fields] = await connection.execute(`
        SELECT
       
        at.AssignmentId,
        at.Semester,
        at.Department,
        t.Name AS TeacherName,
        s.SubjectName,
        at.DateofSubmit,
        at.FilePath,
        as1.Status
    FROM
        AssignmentTable AS at
    JOIN
        AssignmentStatus AS as1 ON at.AssignmentId = as1.AssignmentId
    JOIN
        Teachers AS t ON at.TeacherId = t.TeacherID
        JOIN
        subjects AS s ON at.SubId = s.SubjectId
    WHERE
        at.Department = ? AND at.Semester=?`,[department,semester] ); 
    

    
   
  // Close the MySQL connection
  connection.release();

  // Send the fetched data as a JSON response
    console.log(rows);
    return res.status(200).json(rows);
  
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};