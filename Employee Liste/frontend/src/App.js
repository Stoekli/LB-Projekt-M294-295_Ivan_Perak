import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';

function App() {
  return (
    <div>
      <HeaderComponent />
      <div className="container">
    

        <Routes>
          <Route path='/'>
            <Route index element={<ListEmployeeComponent />} />
            <Route path="employees" element={<ListEmployeeComponent />} />
            <Route path="add-employee/:id" element={<CreateEmployeeComponent/>} />
            <Route path="view-employee/:id" element={<ViewEmployeeComponent />} />
            <Route path="/update-employee/:id" component={<UpdateEmployeeComponent />} />

          </Route>
        </Routes>
      </div>
      <FooterComponent />

    </div>

  );
}

export default App;
