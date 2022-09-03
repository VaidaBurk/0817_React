import './App.css';
import NavBar from './NavBar';
import LoadPage from './pages/LoadPage';
import HomePage from './pages/HomePage';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage';

class App extends React.Component {

  constructor() {
    super();
    this.state = { 
      user: JSON.parse(sessionStorage.getItem("user"))
    }
  }

  render() {
    if (this.state.user === null) {
      return <LoginPage></LoginPage>
    }
    else {
      return (
        <div>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<NavBar></NavBar>}>
                <Route index element={<HomePage></HomePage>}></Route>
                <Route path='loadPage' element={<LoadPage></LoadPage>}></Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
      );
    }
  }

}
export default App;
