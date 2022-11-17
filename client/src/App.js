// import { BrowserRouter as Router, Route} from 'react-router-dom'

import Home from './Components/Home/Home'
// import ContactForm from './Components/ContactForm/ContactForm'
// import {ListContacts,CreateContact,UpdateContact,DeleteContact} from './Components/ListContacts/ListContacts'


function App() {

  return (
    <div>
      <Home/>
    </div>
    //    <Router>
    //     <Route path='/'  element={<ContactForm/>}></Route>
    //     {/* <Route path='/contacts'  element={<ListContacts/>}></Route>
    //     <Route path='/add-contact/:id'  element={<CreateContact/>}></Route>
    //     <Route path='/update-contact/:id'  element={<UpdateContact/>}></Route>
    //     <Route path='/delete-contact/:id'  element={<DeleteContact/>}></Route> */}



    // </Router> 

  );
}

export default App;
