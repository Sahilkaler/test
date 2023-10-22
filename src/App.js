import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Protected from './components/Protected';
import Home from './components/Home';
import Details from './components/Details';

import Header from './components/Header';
import Login from './components/Login';
import Error from './components/Error';

import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import VotingEnded from './components/VotingEnded';



function App() {
  return (
<Router>
 {/* <Header /> */}
 <Routes>
 {/* <Route path='/' element={<Home />} />
 <Route path='/login' element={<Login />} />
 <Route path='/details' element={<Details />} /> */}
 <Route path='/ended' element={<VotingEnded />} />
 {/* <Route path='*' element={<Error />} /> */}
 </Routes>
 </Router>
  );
}

export default App;
