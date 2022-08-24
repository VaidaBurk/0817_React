import './App.css';
import NavBar from './NavBar';
import LoadPage from './pages/LoadPage';
import HomePage from './pages/HomePage';
import React from 'react';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      pageDisplayed: "HomePage"
    }
  }

  openPage = (pageName) => {
    this.setState({pageDispayed: pageName});
  }

  render() {
    return (
      <div>
        <NavBar openPage={this.openPage}></NavBar>
        {this.state.pageDispayed === "HomePage" && <HomePage />}
        {this.state.pageDispayed === "LoadPage" && <LoadPage />}
      </div>
    );
  }

}
export default App;
