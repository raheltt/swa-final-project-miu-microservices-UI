import axios from 'axios';
import { useEffect, useState } from 'react'


import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import {
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Button,
    
} from '@mui/material';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// const BASE_URL = "http://localhost:8084/student"
const BASE_URL = "http://localhost:3004/student"

const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '400px',
    margin: '0 auto',
    padding: '16px',
    border: '1px solid #3f51b5',
    borderRadius: '4px',
};

const fieldStyle = {
marginBottom: '16px',
width: '100%',
};

const submitButtonStyle = {
marginTop: '16px',
};


const StudentManagement = () => {
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    studentNumber: '',
    schoolId: 0,
    year: 0,
    group: '',
    score: 0,
    avatarId: 0,
    rewardId: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to the server or perform validation
    const data = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      schoolId: formData.schoolId,
      studentNumber: formData.studentNumber,
      studentClass: {
        year: formData.year,
        group: formData.group
      },

      score: formData.score,
      avatarId: formData.avatarId,
      rewardId: formData.reqardId
    }

    console.log(data);
    axios.post(BASE_URL, data).then(res => {
      console.log("suceess full update")
    }).catch(error => {
      console.log("error adding student")
    })

    // delete

  };
  const handleDelete = (id) => {
    axios.delete(`${BASE_URL}/${id}`).then(res => {
      console.log("deleted")
    }).catch(error => console.log(error))
  }

    return (
        <>
            <h1>Management Student</h1>
            <AlertDialog open={open} setOpen={setOpen} formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
            <ListStudent />
        </>
    )
}

const AlertDialog = ({open, setOpen, formData, handleChange, handleSubmit}) => {  
    return (
      <div>
        <Button variant="outlined" onClick={() => setOpen(true)}>
          Add Student
        </Button>
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            Add Teacher
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
            <AddStudentForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit}/>
            </DialogContentText>
          </DialogContent>
          {/* <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button onClick={handleClose} autoFocus>
              Agree
            </Button>
          </DialogActions> */}
        </Dialog>
      </div>
    );
}

const AddStudentForm = ({formData, handleChange, handleSubmit}) => {
    return (<>
    <form style={formStyle} onSubmit={handleSubmit}>
      <TextField
        style={fieldStyle}
        label="First Name"
        variant="outlined"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        required
      />
      <TextField
        style={fieldStyle}
        label="Last Name"
        variant="outlined"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        required
      />
      <TextField
        style={fieldStyle}
        label="Student Number"
        variant="outlined"
        type="text"
        name="studentNumber"
        value={formData.studentNumber}
        onChange={handleChange}
        required
      />
      <TextField
        style={fieldStyle}
        label="School Id"
        variant="outlined"
        type="number"
        name="schoolId"
        value={formData.schoolId}
        onChange={handleChange}
        required
      />
      <TextField
        style={fieldStyle}
        label="year"
        variant="outlined"
        type="number"
        name="year"
        value={formData.year}
        onChange={handleChange}
        required
      />

    <TextField
        style={fieldStyle}
        label="Group"
        variant="outlined"
        type="text"
        name="group"
        value={formData.group}
        onChange={handleChange}
        required
      />
      
      <TextField
        style={fieldStyle}
        label="Score"
        variant="outlined"
        name="score"
        value={formData.score}
        onChange={handleChange}
        required
      />

    <TextField
        style={fieldStyle}
        label="avatarId"
        variant="outlined"
        name="avatarId"
        value={formData.avatarId}
        onChange={handleChange}
        required
      />

    <TextField
        style={fieldStyle}
        label="rewardId"
        variant="outlined"
        name="rewardId"
        value={formData.rewardId}
        onChange={handleChange}
        required
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        style={submitButtonStyle}
      >
        Submit
      </Button>
    </form>
    </>)
}

const ListStudent = () => {
  const[update, setUpdate] = useState(false)
  const [teachers, setTeachers] = useState([]);
  
  const handleDelete = (teacherId) => {
    axios.delete(`${BASE_URL}/${teacherId}`).then(res => {
      console.log("Teacher deleted")
      setUpdate(!update)
    }).catch(error => {
      console.log("teacher not deleted")
      console.log(error)
    })
  }

  useEffect(() => {
    axios.get(BASE_URL).then(res => {
      console.log(res)
      setTeachers(res.data);

    })
  }, [update])

    return (
      teachers &&
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>First Name</TableCell>
                <TableCell>LastName</TableCell>
                <TableCell>Score</TableCell>
                <TableCell align="right">Action</TableCell>
                
              </TableRow>
            </TableHead>
            <TableBody>
              {teachers.map((teacher) => (
                <TableRow
                  key={teacher.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {teacher.firstName}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {teacher.lastName}
                  </TableCell>
                  <TableCell>{teacher.score}</TableCell>
                  {/* <TableCell>{row.fat}</TableCell> */}
                  <TableCell align="right">
                    {/* <Button variant="contained" color="secondary">Edit</Button> */}
                    <Button variant='contained' color="error" onClick={() => handleDelete(teacher.id)}>Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
}

export default StudentManagement;