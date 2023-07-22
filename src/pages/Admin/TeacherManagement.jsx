import { useState } from 'react'


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
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    school: '',
    teachingClass: '',
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
    console.log(formData);
  };

    return (
        <>
            <h1>Management Teachers</h1>
            <AlertDialog open={open} setOpen={setOpen} formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
            <ListTeachers />
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
      <FormControl variant="outlined" style={fieldStyle}>
        <InputLabel>School</InputLabel>
        <Select
          label="School"
          name="school"
          value={formData.school}
          onChange={handleChange}
          required
        >
          <MenuItem value="school1">School 1</MenuItem>
          <MenuItem value="school2">School 2</MenuItem>
          <MenuItem value="school3">School 3</MenuItem>
          {/* Add more schools as needed */}
        </Select>
      </FormControl>
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

const ListTeachers = () => {
    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
      ];
      function createData(
        name,
        calories,
        fat,
        carbs,
      ) {
        return { name, calories, fat, carbs };
      }

    return (
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
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell>{row.calories}</TableCell>
                  <TableCell>{row.fat}</TableCell>
                  <TableCell align="right">
                    <Button variant="contained" color="secondary">Edit</Button>
                    <Button variant='contained' color="error">Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
}

export default TeacherManagement;