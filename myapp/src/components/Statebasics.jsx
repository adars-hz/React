import { Typography, TextField, Button } from '@mui/material';
import React, { useState } from 'react';

const Statebasics = () => {
  const [fname, setFname] = useState("");  // State to store the name entered
  const [submit, setSubmit] = useState(""); // State to store the submitted name

  // Function to handle changes in the input field
  const handleInput = (e) => {
    setFname(e.target.value); // Update 'fname' state with the input value
  };

  // Function to handle the submission when the Submit button is clicked
  const submitHandler = () => {
    setSubmit(fname); // Set the 'submit' state to the value of 'fname'
  };

  // Function to handle key press events (specifically "Enter")
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setSubmit(fname);  // Set 'submit' state when Enter is pressed
    }
  };

  return (
    <div>
      {/* Display the welcome message */}
      <Typography variant='h6'>Welcome {submit}</Typography>
      <br /><br />

      {/* TextField for entering the name */}
      <TextField
        variant='outlined'
        label="Enter your Name"
        value={fname}  // Controlled input field, so it displays 'fname'
        onChange={handleInput}  // Update 'fname' when the user types
        onKeyDown={handleKeyPress}  // Listen for Enter key press
      />
      <br /><br />
      <Button variant='contained' onClick={submitHandler}>Submit</Button>
    </div>
  );
};

export default Statebasics;



// import { Typography,TextField, Button } from '@mui/material'
// import React, { useState } from 'react'

// const Statebasics = () => {
//     var [fname, setfname] = useState("")
//     var [submit,setsubmit]=useState("")
//     const handleinput = (e) => {
//         setfname(e.target.value)
//     }
//         const submithandler = () => {
//             setsubmit(fname)
            
//     }  
//   return (
//     <div>
//           <Typography variant='h6'> Welcome {submit} </Typography>
//           <br /><br />
//           <TextField variant='outlined' label="Enter your Name" onChange={handleinput}>Enter Your Name</TextField><br /><br />
//           <Button variant='contained' onClick={submithandler}>Submit</Button>
//     </div>
//   )
// }

//     export default Statebasics;
