import React, {  useState, useEffect } from 'react'
import  {updatecontact}  from '../data/api';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useParams} from 'react-router-dom'

export default function UpdateContact() {

  const [editData, seteditData] = useState({
    name: "",
    phone_number: "",
    email: "",
    note: "",
  })
            // const history = useHistory();
            const {id} = useParams()


      useEffect(()=>{
            const editContactId = async()=>{
              const reqData = await updatecontact(id, editData)
              const res = await reqData.json()
              seteditData(res)
            }
            editContactId()
      },[])


  //   let [newContactForm, setnewContactForm] = useState({
  //     name: "",
  //     phone_number: "",
  //     email: "",
  //     note: "",
  // });
  
  // const handleUpdate = (id) => {
  //   const newContactData = { ...newContactForm }
  //   updatecontact(id,newContactData);
  //   setnewContactForm('')
  // };
  
  // const handleChange = ({ target: { name, value } }) => {
  //   setnewContactForm({ ...newContactForm, [name]: value })
    
  // };
  
  
  
  
      return (
        <div>
          <div>
         
          </div>
  
          <div className='contact-form'>
  
          <h2>Update contact</h2>
          <p></p>
  
          <div className='text-fields'>
  
          <TextField required id="outlined-required" label="Name" name="name" value={editData.name} />
  
          <TextField  required  id="outlined-required"  label="Phone Number" name="phone_number" value={editData.phone_number}/>
  
          <TextField required id="outlined-required" label="Email" name="email" value={editData.email} />
  
          <TextField  id="outlined-multiline-static"label="Note" name="note" multiline rows={4} value={editData.note}/>
            
          </div>
  
          <div className='add-button-container'>
          <Button type='submit'  variant="contained">Save</Button>
         
          </div>
          
          </div>
        </div>
  
      );
  }
