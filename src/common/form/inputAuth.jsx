import React from 'react';
import IF from '../operator/IF';
export default props => (
    <IF test={!props.hide}>
        <div className="form-group has-feedback">
            <input {...props.input}
                className='form-control'
                placeholder={props.placeholder}
                readOnly={props.readOnly}
                type={props.type} />
            <span className={`glyphicon glyphicon-${props.icon} form-control-feedback`}></span>
        </div>
    </IF>
)