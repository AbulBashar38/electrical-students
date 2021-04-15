import React from 'react';

const EachInfo = (props) => {
    const names = props.names;
    const ets = props.ets
    return (
        <div className="row">
            <div className="col-md-8">
            {names.map(name=><p>Name: {name}</p>)}
            </div>
            <div className="col-md-4">
                {ets.map(et=><p>E.T: {et}</p>)}
            </div>
        </div>
    );
};

export default EachInfo;