import { BrowserRouter as Router,Routes, Route} from 'react-router-dom'

// import Home from './Components/Home/Home'
import Header from './Components/Header/Header';
import ContactForm from './Components/ContactForm/ContactForm'
import ContactList from './Components/ContactList/ContactList'
import UpdateContact from './Components/UpdateContact';
// import DeleteContact from './Components/DeleteContact';


function App() {

  return (
    // <div>
    //   <Home/>
    // </div>
       <Router>
        <Header/>
        <Routes>
        <Route path='/'  element={<ContactList/>}></Route>
        <Route path='/contacts'  element={<ContactList/>}></Route>
        <Route path='/add-contact'  element={<ContactForm/>}></Route>
        <Route path='/update-contact/:id'  element={<UpdateContact/>}></Route>
        {/* <Route path='/delete-contact/:id'  element={<DeleteContact/>}></Route> */}

</Routes>
    </Router> 

  );
}

export default App;
