import React , { Component} from 'react';
require('../../scss/style.scss');
import UserList from '../containers/user-list';
import UserDetail from '../containers/user-detail';
class App extends Component {
  constructor() {
    super();
    
  }

  render() {
    console.log("this.props",this.props)
    return (
        <div> 
        <h2> UserName List </h2>
        <UserList/>
        <hr/>
        <h2>User Details </h2>
        <UserDetail/>
        </div>
    )
  }

  componentDidMount() {
   
  }
}

export default App;
