import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
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
        <BrowserRouter>
          <AuthProvider>
            <Header />
            {/* <Routes>
              <Route path="/login" component={Login} />
              <PrivateRoute path="/PoForm" component={PoForm} />
              <PrivateRoute path="/PrForm" component={PrForm} />
              <PrivateRoute path="/about" component={About} />
              <PrivateRoute path="/Inbox" component={Inbox} />
              <Route path="/*" component={PageNotFound} />
            </Routes> */}

            <Routes>  
              <Route path="/Login" element={<Login />} />
              <Route  path='/' element={<PrivateRoute />}> 
                <Route path="/PrForm" element={<PrForm />} />
                <Route path="/PoForm" element={<PoForm />} /> 
                <Route path="/About" element={<About />} />
                <Route path="/Inbox" element={<Inbox />} />
              </Route>

              {/* <Route path="/PrForm" element={<PrivateRoute Component={PrForm} />} />
              <Route path="/PoForm" element={<PrivateRoute Component={PoForm} />} />
              <Route path="/About" element={<PrivateRoute Component={About} />} /> */}
              <Route path="*" element={<PageNotFound />} />
            </Routes>
        


            
          </AuthProvider>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;

//login should not be autoprovider

// Switch：用來包Route與Redirect，
// 只會render第一個與網址匹配的<Route>的component
