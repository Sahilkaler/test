import React from 'react';
import './App.css';
// import LoginSignUp from './components/LoginSignUp';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';


import Header from './components/Header';
import Error from './components/Error';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';



function App() {
  return (
<Router>
 <Header />
 <Routes>
 <Route path='/' element={<Home />} />
 <Route path='*' element={<Error />} />
 </Routes>
 </Router>
  );
}

export default App;
