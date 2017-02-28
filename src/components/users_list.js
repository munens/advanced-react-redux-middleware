import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../index';

class UsersList extends Component {
  
  componentWillMount(){
    this.props.getUsers();
  }

  renderUser(user){
    return (
      <div className="card card-vlock">
        <h4 className="card-title">{user.name}</h4>
        <p className="card-text">Kakundo Cooperative</p>
        <a className="btn btn-primary" href={user.website}>{user.website}</a>
      </div>
    )
  }
  
  render() {
    return (
      {this.props.user.map(this.renderUser)}
    );
  }
}
function mapStateToProps(state){
  return{
    users: state.users
  }  
    
}
export default connect(mapStateToProps, actions)(UsersList)
