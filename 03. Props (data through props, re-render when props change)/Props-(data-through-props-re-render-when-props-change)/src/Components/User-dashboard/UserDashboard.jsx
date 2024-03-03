import React from 'react';
import "./style.css";
import User from "../../Images/user.png"

const UserDashboard = (props) => {
const {person} = props;

  return (
    <div className='main-user-imp-container'>
    <div className='main-user-container'>
        <p className='main-heading'>User Dashboard</p>
        <div className='sub-user-container'>
            <img src={User} alt='user' className='todo-list-user'/>
            <p className='user-info'>{person.userName}</p>
            <p className='user-info-name'>{person.name}</p>
            <p className='user-info'>{person.address}</p>
            <p className='user-info'>{person.gender}, {person.age}</p>
            <p className='user-info-profession'>{person.Profession}</p>
        </div>
    </div>        
    </div>

  )
}

export default UserDashboard;