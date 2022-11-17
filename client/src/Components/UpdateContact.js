import React, {  useState } from 'react'
import  {updatecontact}  from '../data/api';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function UpdateContact() {
    let [newContactForm, setnewContactForm] = useState({
      name: "",
      phone_number: "",
      email: "",
      note: "",
  });
  
  const handleUpdate = () => {
    const newContactData = { ...newContactForm }
    updatecontact(newContactData);
    setnewContactForm('')
  };
  
  const handleChange = ({ target: { name, value } }) => {
    setnewContactForm({ ...newContactForm, [name]: value })
    
  };
  
  
  
  
      return (
        <div>
          <div>
         
          </div>
  
          <div className='contact-form'>
  
          <h2>Update contact</h2>
          <p></p>
  
          <div className='text-fields'>
  
          <TextField required id="outlined-required" label="Name" name="name" onChange={handleChange}/>
  
          <TextField  required  id="outlined-required"  label="Phone Number" name="phone_number" onChange={handleChange}/>
  
          <TextField required id="outlined-required" label="Email" name="email" onChange={handleChange}/>
  
          <TextField  id="outlined-multiline-static"label="Note" name="note" multiline rows={4} onChange={handleChange}/>
            
          </div>
  
          <div className='add-button-container'>
          <Button type='submit' onClick={()=>handleUpdate()} variant="contained">Save</Button>
         
          </div>
          
          </div>
        </div>
  
      );
  }
