import React from 'react';
const Input = ({name,id='',label,type='text',value,error,onChange}) => {
    id = (id)?id:name
    return ( 
        <div className="mb-1">
            <label htmlFor={id} className="form-label">{label}</label>
            <input type={type} onChange={onChange} name={name} id={id} value={value} className="form-control" />
            {(error)?<div className="alert alert-danger" >{error}</div>:''}
        </div>
     );
}
export default Input;