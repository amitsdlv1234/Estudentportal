import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Button,
  FormControl,
  FormGroup,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  styled,
  Box
} from '@mui/material';
import { getAttendance} from '../Services/api.js';
// import { Link } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';

const StyledTable = styled(Table)`
  width: 95%;
  margin:auto;
`;

const THead = styled(TableRow)`
  background: black;
  width: 98vw;
  z-index: 998;
  & > th {
    color: black;
    font-size: 20px;
  }
`;

const TBody = styled(TableRow)`
  margin-top: 100px;
  & > td {
    font-size: 20px;
  }
`;

const Filterbox = styled(FormGroup)`
  display: flex;
  flex-direction: row;
  border: 1px solid black;
  background: rgb(167 77 77);
  margin: 0px 2px;
  padding: 5px;
  position: fixed;
  top: 0;
  width: 99%;
  z-index: 999;
  & > div {
    width: 200px;
    height: 30px;
    margin: auto;
  }
  & > div input {
    width: 200px;
    height: 30px;
  }
`;

function AllUser() {
  const [users, setUsers] = useState([]);
  const { userroll,Year, Month ,Semester} = useParams();

  useEffect(() => {
    getAllUsers();
  }, [Month, Year,Semester]);

  const getAllUsers = async () => {
    try {
        console.log(userroll,Month, Year,Semester)
      let res = await getAttendance(userroll,Month, Year,Semester);
      setUsers(res.data);
      console.log(res.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };
  
  const TableRef = React.createRef();

  const handlePrint = useReactToPrint({
    content: () => TableRef.current,
  });

 useEffect(()=>{
    console.log('Fetched users:', users);
 },[users]);

  return (
    <>
      <Filterbox>
        <Button
          variant="contained"
          style={{ marginLeft: '10px' }}
          onClick={handlePrint}
        >
          Print
        </Button>
      </Filterbox>
      <Box style={{marginTop:"50px"}} ref={TableRef}> <h2 style={{marginLeft:"20%"}}>
        Dr. Ambedkar Institute Of Technology for Handicapped Kanpur
        </h2>
      
        <StyledTable>
          <TableHead>
            <THead>
              <TableCell>Semester</TableCell>
              <TableCell>Month</TableCell>
              <TableCell>AttendPercent</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Attendance</TableCell>
            </THead>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TBody key={user.ID}>
                <TableCell>{user.Semester}</TableCell>
                <TableCell>{user.Month}</TableCell>
                <TableCell>{user.AttendPercent}</TableCell>
                <TableCell>{user.Date}</TableCell>
                <TableCell>{user.Attendance}</TableCell>
              </TBody>
            ))}
          </TableBody>
        </StyledTable>
      </Box>
    </>
  );
}

export default AllUser;
