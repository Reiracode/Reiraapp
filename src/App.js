import React from 'react';
import { Routes, Route, BrowserRouter ,HashRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/index.scss';
import About from './Components/about/About';
import Inbox from './Components/mailbox/Inbox';
 
import Login from './Components/main/Login';
import PoForm from './Components/PoForm';
import PrForm from './Components/PrForm';
import PrivateRoute from './PrivateRoute';

import { AuthProvider } from './Context';


import Header from './Header';
import  PageNotFound  from './Components/PageNotFound';

const App = () => {
  return (
    <div className="App">
      <div className="page">
        {/* <BrowserRouter> */}
        <HashRouter>
          <AuthProvider>
            <Header />
            <Routes>  
              <Route path="/" element={<Login />} />
              <Route  path='/' element={<PrivateRoute />}> 
                <Route path="/PrForm" element={<PrForm />} />
                <Route path="/PoForm" element={<PoForm />} /> 
                <Route path="/About" element={<About />} />
                <Route path="/Inbox" element={<Inbox />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </AuthProvider>
        </HashRouter> 

        {/* <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/project" element={<Project />}></Route>
        <Route path="/contact" element={<Contact />}></Route> */}
        {/* </BrowserRouter> */}

        {/* <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />}>
              <Route index element={<Login />} />
              <Route path='/PrForm' element={<PrForm />} />
              <Route path='/PoForm' element={<PoForm />} />
            </Route>
          </Routes>
        </BrowserRouter> */}
      </div>
    </div>
  );
};

export default App;

//login should not be autoprovider

// Switch：用來包Route與Redirect，
// 只會render第一個與網址匹配的<Route>的component
