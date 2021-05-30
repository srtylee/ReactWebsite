import { useState } from 'react';
import NavBar from './MyComponent/navbar';
import './css/nav.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import { Layout } from 'antd';
import Service from './services/service';


const {Header, Content } = Layout;
function App ()  {
  return (
    <>
      <Header>
        <BrowserRouter>
          <NavBar/>
          <switch>
            <Route exact path='/service' component={Service} />
          </switch>
        </BrowserRouter>
      </Header>
    </>  
  );
}

export default App;
