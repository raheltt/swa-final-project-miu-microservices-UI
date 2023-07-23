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

const BASE_URL = "http://localhost:8083/teacher"

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


const TeacherManagement = () => {
  const [open, setOpen] = useState(false);
  const[teacherAdded, setTeacherAdded] = useState(0);
  const [teachers, setTeachers] = useState([]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    schoolId: '',
    email: '',
    phoneNumber: "",
    year: 0,
    group: ""
  });

  useEffect(() => {
    axios.get(BASE_URL).then(res => {
      console.log(res)
      setTeachers(res.data);

    })
  }, [])

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
      contact: {
        email: formData.email,
        phoneNumber: formData.phoneNumber
      },
      teachingClass: {
        year: formData.year,
        group: formData.group
      }
    }

    console.log(data);
    axios.post(BASE_URL, data).then(res => {
      // console.log("suceess full update")
      // setTeacherAdded(teacherAdded + 1)
      setTeachers([...teachers, data])
    }).catch(error => {
      console.log("error adding teacher")
    })

    // delete

  };

  const handleDelete = (teacherId) => {
    axios.delete(`${BASE_URL}/${teacherId}`).then(res => {
      console.log("Teacher deleted")
      setTeachers(teachers.filter(teacher => teacher.teacherId !== teacherId))
    }).catch(error => {
      console.log("teacher not deleted")
      console.log(error)
    })
  }

    return (
        <>
            <h1>Management Teachers</h1>
            <AlertDialog open={open} setOpen={setOpen} formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
            <ListTeachers teachers={teachers} setTeachers={setTeachers} handleDelete={handleDelete} />
        </>
    )
}

const AlertDialog = ({open, setOpen, formData, handleChange, handleSubmit}) => {  
    return (
      <div>
        <Button variant="outlined" onClick={() => setOpen(true)}>
          Add Teacher
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
            <AddTeacherForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit}/>
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

const AddTeacherForm = ({formData, handleChange, handleSubmit}) => {
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
        label="Email"
        variant="outlined"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <TextField
        style={fieldStyle}
        label="PhoneNumber"
        variant="outlined"
        type="text"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        required
      />
      <TextField
        style={fieldStyle}
        label="SchoolId"
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
        label="Teaching Class"
        variant="outlined"
        name="teachingClass"
        value={formData.teachingClass}
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

const ListTeachers = ({teachers, setTeachers, handleDelete}) => {
  const[update, setUpdate] = useState(false)
  // const [teachers, setTeachers] = useState([]);
  
  

  

    return (
      teachers &&
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>First Name</TableCell>
                <TableCell>LastName</TableCell>
                <TableCell>Contact</TableCell>
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
                  <TableCell>{teacher.contact.email}</TableCell>
                  {/* <TableCell>{row.fat}</TableCell> */}
                  <TableCell align="right">
                    {/* <Button variant="contained" color="secondary">Edit</Button> */}
                    <Button variant='contained' color="error" onClick={() => handleDelete(teacher.teacherId)}>Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
}

export default TeacherManagement;