import React , { Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

class UserDetail extends Component {
// here we have to check if there is any props being passed
    render(){
        if(this.props.user){
            return(
                <div>
                    <img src={this.props.user.thumbnail} alt=""/>
                    <h2>
                        {this.props.user.first}  {this.props.user.first}
                    </h2>
                    <h3>Age: {this.props.user.age}</h3>
                    <h3> Description: {this.props.user.description}</h3>
                    
                </div>
            ); 
        }
        else {
            return(
                <pre>Select The User</pre>
            )
        }

    }
}
const mapStateToProps = (state, ownProps) => {
    //WILL RETURN DATA TO THE COMPONENTE
    // at ths point it will call allReducers and "cherry pick"
    // only one function that will return an array of users;
    return {
        user: state.selecteduser
    }
}


export default connect(mapStateToProps)( UserDetail);