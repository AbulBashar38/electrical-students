import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './StudentsArea.css'
const StudentsArea = (props) => {
    const { et, name, college_id, mobile, email, img } = props.student;
    const addFriends = props.addFriends;
    return (
        <div>
            
            <div className="card manage-card d-flex flex-row">
                <div>
                <img src={img} className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                    <h5 className="card-title">Name:{name}</h5>
                    <div className="card-text">
                        <h6>College Id: {college_id}</h6>
                        <h6>E.T: {et}</h6>
                        <h6>Mobile: {mobile}</h6>
                        <h6>E-mail: {email}</h6>
                    </div>
                    <button className="btn btn-primary" onClick={()=>addFriends(props.student)}><FontAwesomeIcon icon={faPlus} /> Add student</button>
                </div>
            </div>
        </div>

    );
};

export default StudentsArea;