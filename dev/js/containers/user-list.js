import React , { Component} from 'react';


import {bindActionCreators} from "redux";
import {connect} from "react-redux";
//importing an action creator but we need to connect to connect
import {SelectUser} from "../actions/index";

class UserList extends Component {
    
    createListItems(){

        return this.props.users.map((user,key)=>{
            return(
            // here we will create our list of user
                <li 
                onClick={()=> this.props.SelectUser(user) } 
                key={key} >{user.first} {user.last} </li>
            )
        });

       
        
    }
    render(){
        console.log('this.props Users', this.props)
        return(
            <ul>
                    {this.createListItems()}           
            </ul>
        )
    }
}

// Returns A State to the container 
// takes a piece of the store from reducer
//and passes as a props
const mapStateToProps = (state, ownProps) => {
    //WILL RETURN DATA TO THE COMPONENTE
    // at ths point it will call allReducers and "cherry pick"
    // only one function that will return an array of users;
    return {
        users: state.users
    }
}
//dispatch - call funciton
function matchDispatchToProps(dispatch){
    return bindActionCreators({SelectUser: SelectUser },dispatch )
}

// we have to "Connect Component" to the Store ! 
export default connect(mapStateToProps,matchDispatchToProps)( UserList);