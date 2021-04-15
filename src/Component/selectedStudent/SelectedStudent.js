import React from 'react';
import EachInfo from '../eachSelectedInfo/EachInfo';

const SelectedStudent = (props) => {
    
    const addedStudent = props.addedStudent
    let nameArray = [];
    let etArray = [];
    let key = 0;
    for (let i = 0; i < addedStudent.length; i++) {
        const singleStudent = addedStudent[i];
        nameArray = [...nameArray,singleStudent.name]
        etArray = [...etArray,singleStudent.et]
        key = singleStudent.et;
    }
    
    return (
        <div>
            <div className="card" style={{ width: '18rem' }}>
                <div className="card-body">
                    <h5 className="card-title">Selected Friends</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Total Selected: {addedStudent.length}</h6>
                    <div className="card-text">
                        <EachInfo key={key} ets={etArray} names = {nameArray}></EachInfo>
                    </div>
                    <button className="card-link btn btn-primary">Copy</button>

                </div>
            </div>
        </div>
    );
};

export default SelectedStudent;